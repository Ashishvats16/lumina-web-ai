# Authentication Setup

**Last Updated:** 2025-12-07  
**Status:** Production-ready

---

## Current Authentication Architecture

### Overview

**Hybrid Authentication System:**
- ✅ **Auth0** - OAuth provider (supports Google, GitHub, etc. through Auth0 dashboard)
- ✅ **Native** - Username/password (direct backend authentication)

**Both methods work together:**
- Users can login with Auth0 (including Google OAuth) OR username/password
- Same database, same user table
- Same JWT token format
- Backend validates tokens from both sources
- **All endpoints require valid authentication** (production-ready)

---

## How Authentication Works

### 1. Auth0 Flow (OAuth - Google, GitHub, etc.)

**Frontend handles OAuth:**
1. User clicks "Login with Google" on frontend
2. Frontend redirects to Auth0 (Auth0 handles Google OAuth)
3. User authenticates with Google via Auth0
4. Auth0 returns JWT token (RS256) to frontend
5. Frontend sends JWT token to backend in `Authorization: Bearer <token>` header
6. **Backend validates token** using Auth0's public keys (JWKS)
7. Backend creates/updates user in database (if new user)
8. User is authenticated

**Backend's role:**
- ✅ Validates JWT tokens from Auth0 (RS256 with JWKS)
- ✅ Creates/updates user records in database
- ✅ Maps Auth0 user ID to our internal user ID
- ✅ Does NOT handle OAuth redirects (that's frontend + Auth0)

**Key Point:** Backend does NOT handle Google OAuth directly. Auth0 is the OAuth provider, and Google is configured as a social connection in Auth0 dashboard.

### 2. Native Flow (Email/Password)

**Backend handles everything:**
1. User registers: `POST /api/v1/auth/register`
2. Backend creates user, sends verification email
3. User verifies email: `POST /api/v1/auth/email/verify`
4. User logs in: `POST /api/v1/auth/login`
5. Backend validates credentials, returns JWT token (HMAC256)
6. Frontend uses token in `Authorization: Bearer <token>` header

**Backend's role:**
- ✅ Handles registration
- ✅ Handles email verification
- ✅ Handles login
- ✅ Generates JWT tokens (HMAC256)
- ✅ Validates passwords

---

## Available Backend Endpoints

### Public Endpoints (No Auth Required)

```
POST   /api/v1/auth/register
       Body: { username, email, name, password }
       Response: { message, userId, email }

POST   /api/v1/auth/login
       Body: { username, password }
       Response: { token, tokenType, expiresIn, user }

POST   /api/v1/auth/email/verify
       Body: { token }
       Response: { message, userId, email }

POST   /api/v1/auth/email/resend
       Body: { email }
       Response: { message }

POST   /api/v1/auth/password/reset-request
       Body: { email }
       Response: { message }

POST   /api/v1/auth/password/reset
       Body: { token, password }
       Response: { message }
```

### Protected Endpoints (Auth Required)

**All video processing endpoints require valid JWT token:**

```
POST   /api/v1/videos/{videoId}/process        - Process video
POST   /api/v1/auth/password/change            - Change password
... and all other video endpoints
```

**Authentication:**
- Send JWT token in `Authorization: Bearer <token>` header
- Token can be from Auth0 (RS256) or Native (HMAC256)

---


## Configuration Parameters for UI Team

### Auth0 Configuration Values

**For Testing/Development:**
```javascript
{
  domain: 'dev-xa282alq6vyh5lyn.us.auth0.com',
  clientId: '9G3nSd9WtzB6yedcPw6yg4M3KecqfJrw',
  audience: 'https://api-test.luminacore.ai'  // ⚠️ REQUIRED
}
```

**For Production:**
```javascript
{
  domain: 'dev-xa282alq6vyh5lyn.us.auth0.com',  // TBD - will be updated for prod
  clientId: '9G3nSd9WtzB6yedcPw6yg4M3KecqfJrw',  // TBD - will be updated for prod
  audience: 'https://api.luminacore.ai'  // ⚠️ REQUIRED
}
```

### Backend API URLs

- **UI Test Environment:** `https://api-test.luminacore.ai`
- **UI Production Environment:** `https://api.luminacore.ai`

### Auth0 Dashboard Configuration

#### Test Environment (Current Setup)

**Allowed Callback URLs:**
```
https://test.luminacore.ai/callback,http://localhost:3000/callback,http://localhost:3000
```

**Allowed Logout URLs:**
```
https://test.luminacore.ai,http://localhost:3000
```

**Allowed Web Origins (CORS):**
```
https://test.luminacore.ai,http://localhost:3000
```

#### Production Environment (TBD)

**Allowed Callback URLs:**
```
https://www.luminacore.ai/callback,https://luminacore.ai/callback
```

**Allowed Logout URLs:**
```
https://www.luminacore.ai,https://luminacore.ai
```

**Allowed Web Origins (CORS):**
```
https://www.luminacore.ai,https://luminacore.ai
```

**Note:** 
- ✅ Test environment Auth0 is configured
- ⏳ Production Auth0 app will be created separately
- ✅ Google Social Connection is already configured

### Implementation Notes

1. **Install Auth0 SDK:** 
2. **Configure Auth0 with the values above**
3. **Always include `audience` parameter** when getting tokens (required for backend API)
4. **Send JWT token to backend** in `Authorization: Bearer <token>` header
5. **Backend automatically validates tokens and creates/updates users** - no additional API calls needed

### Option 2: Native Email/Password

**Frontend Implementation:**
1. Registration:
   ```javascript
   POST /api/v1/auth/register
   {
     username: "john_doe",
     email: "john@example.com",
     name: "John Doe",
     password: "SecurePass123!@#"
   }
   ```

2. Email Verification:
   ```javascript
   POST /api/v1/auth/email/verify
   {
     token: "abc-123-xyz" // from email link
   }
   ```

3. Login:
   ```javascript
   POST /api/v1/auth/login
   {
     username: "john_doe",
     password: "SecurePass123!@#"
   }
   // Returns: { token, tokenType, expiresIn, user }
   ```

4. Use token in subsequent requests:
   ```javascript
   Authorization: Bearer <token>
   ```

---

## Database Schema

### Users Table

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY,                    -- Our internal user ID
    auth0_id VARCHAR(255) UNIQUE,           -- Auth0 user ID (NULL for native users)
    username VARCHAR(255) UNIQUE,            -- Username (NULL for Auth0 users)
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255),             -- NULL for Auth0 users
    email_verified BOOLEAN DEFAULT FALSE,
    auth_provider VARCHAR(50) NOT NULL,     -- 'AUTH0' or 'NATIVE'
    subscription_tier VARCHAR(50),
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    last_login TIMESTAMP
);
```

**Key Points:**
- `auth0_id` is set for Auth0 users (from Auth0 JWT)
- `username` and `password_hash` are set for native users
- `auth_provider` indicates which method was used
- Both types share the same table and can be linked (hybrid users)

---

## Summary

### What Backend Provides

✅ **Native Authentication Endpoints:**
- Registration, login, email verification, password reset
- All at `/api/v1/auth/*`

✅ **Auth0 Token Validation:**
- Automatically validates Auth0 JWT tokens (RS256 with JWKS)
- Automatically creates/updates users from Auth0 tokens
- No special endpoints needed (just send token in header)

### What Frontend Needs to Do

**For Google OAuth:**
1. Integrate Auth0 SDK
2. Configure Google as social connection in Auth0 dashboard
3. Handle OAuth redirect flow
4. Send Auth0 JWT token to backend in `Authorization` header

**For Email/Password:**
1. Call backend registration/login endpoints
2. Handle email verification flow
3. Store and send JWT token in `Authorization` header

### What Backend Does NOT Do

❌ Backend does NOT handle Google OAuth redirects (that's frontend + Auth0)  
❌ Backend does NOT have Google OAuth endpoints (Auth0 handles that)  
❌ Backend does NOT use Google user IDs directly (uses Auth0 user IDs, maps to our UUIDs)

### Security

✅ **Production-ready:** All endpoints require valid authentication  
✅ **No bypass mechanisms:** All requests must include valid JWT token  
✅ **Token verification:** Auth0 tokens verified with RS256/JWKS, Native tokens with HMAC256

---

## Backend Configuration (Already Done)

✅ **Backend is already configured:**
- Auth0 domain, client ID, client secret configured
- Google OAuth configured in Auth0 dashboard
- API endpoints ready
- Token validation working (RS256 with JWKS)

**No backend setup needed from UI team.**

---

## Testing

### Test Native Endpoints

```bash
# Register
curl -X POST http://localhost:8080/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "name": "Test User",
    "password": "TestPass123!@#"
  }'

# Login
curl -X POST http://localhost:8080/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "password": "TestPass123!@#"
  }'
```

### Test Auth0 Flow

1. Get JWT token from Auth0 (via frontend SDK)
2. Send to backend:
```bash
curl -X GET http://localhost:8080/api/v1/videos \
  -H "Authorization: Bearer <auth0-jwt-token>"
```

---

**Document Version:** 2.0  
**Last Updated:** 2025-12-07  
**Status:** Production-ready
