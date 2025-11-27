# LuminaCore AI - UI/Frontend Integration Guide

**Last Updated:** November 27, 2025  
**Version:** 2.0  
**For:** UI Contractor (Vercel Deployment)  
**Backend:** Spring Boot + AWS + Auth0

---

## Table of Contents

1. [Design Questions & Answers](#design-questions--answers)
2. [Technical Integration Questions](#technical-integration-questions)
4. [API Documentation](#api-documentation)


---

## Design Questions & Answers

### Q1. Video Upload Flow - Platform Selection

**✅ Answer: YES - Platform selection is REQUIRED and must happen BEFORE upload**

#### How It Works:

1. **User Interface Requirements:**
   - **Multi-select dropdown** for platforms
   - **Multi-select dropdown** for languages
   - **Optional dropdown** for video type

2. **Platform → Content Type Mapping:**

| Platform  | Generated Content Types | Description |
|-----------|------------------------|-------------|
| Instagram | `STORY` + `REEL` | Stories (15-60s) + Reels (15-90s) |
| TikTok | `HOOK` + `CLIPS` + `REEL` | Hooks (2-15s) + Clips (20-45s) + Reels (15-90s) |
| YouTube | `SHORTS` + `SUMMARY` | Short vertical videos + Long summary |
| Facebook | `STORY` + `REEL` | Similar to Instagram |

3. **Default Selection:**
   - Platforms: `Instagram`  (pre-selected)
   - Languages: `English` (pre-selected)
   - Video Type: `PRESENTATION` (select - GAME, PRESENTATION, NEWS, INTERVIEW)

#### UI Flow:

```
┌─────────────────────────────────────┐
│  Upload Video                       │
├─────────────────────────────────────┤
│  📁 Select Video File               │
│  [ Choose File ]                    │
│                                     │
│  🎯 Select Platforms (Required)     │
│  ☑ Instagram (Reels + Stories)     │
│  ☑ TikTok (Hooks + Clips + Reels)  │
│  ☐ YouTube (Shorts + Summary)      │
│  ☐ Facebook (Stories + Reels)      │
│                                     │
│  🌍 Select Languages (Required)     │
│  ☑ English                          │
│  ☑ Hindi                            │
│  ☐ Spanish                          │
│  ☐ French                           │
│  ☐ German                           │
│  ☐ ... (30+ total)                 │
│                                     │
│  📊 Video Type (required or default)           │
│  [ Presentation ▼ ]                 │
│    - Presentation (default)        │
│    - News/Interview                │
│    - Tutorial                      │
│    - Documentary                   │
│                                     │
│  📝 Preview:                        │
│  "Will generate 4 content types    │
│   in 2 languages = 8 videos"       │
│                                     │
│  [ Upload & Process ]               │
└─────────────────────────────────────┘
```

---

### Q2. Brand Kit Selection

**❌ Answer: NOT IMPLEMENTED - Skip for MVP (Phase 1)**

#### Current State:
- Brand kit customization is **NOT** in the current backend API
- All videos use default branding (logo overlay, colors from system config)
- Single brand per user account

#### Future Implementation (Phase 2 - Q2 2026):
When we add multi-brand support for agencies/creators managing multiple brands:

```javascript
// Future API structure
{
  "brandKitId": "uuid-of-brand-kit",  // Optional
  "platforms": ["INSTAGRAM", "TIKTOK"],
  "languages": ["ENGLISH"]
}
```

#### Recommendation:
- ⏸️ **Skip brand kit toggle for now**
- 📝 Add to Phase 2 roadmap
- 🎨 Use single default brand kit from user settings

---

### Q3. Color Palette & Typography

**✅ Answer: Use Inter font consistently across entire platform**

#### Typography Recommendations: ( I'll leave it to you as you are UI expert )

```css
/* Primary Font Stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             sans-serif;

/* Font Weights */
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Font Sizes */
--text-xs: 12px;    /* Captions, labels */
--text-sm: 14px;    /* Body small, secondary text */
--text-base: 16px;  /* Body text */
--text-lg: 18px;    /* Large body */
--text-xl: 20px;    /* Small headings */
--text-2xl: 24px;   /* Subheadings */
--text-3xl: 30px;   /* Section headings */
--text-4xl: 36px;   /* Page headings */
--text-5xl: 48px;   /* Hero title */

/* Line Heights */
--leading-tight: 1.2;   /* Headings */
--leading-normal: 1.5;  /* Body text */
--leading-relaxed: 1.75; /* Long-form content */
```

#### Color Palette:

```css
/* Primary Colors */
--primary-50: #eff6ff;
--primary-500: #3b82f6;  /* Main brand blue */
--primary-600: #2563eb;
--primary-700: #1d4ed8;

/* Success */
--success-500: #10b981;  /* Green for completed states */

/* Warning */
--warning-500: #f59e0b;  /* Amber for processing states */

/* Danger */
--danger-500: #ef4444;   /* Red for errors */

/* Neutral/Gray */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;

/* Backgrounds */
--bg-primary: #ffffff;
--bg-secondary: #f9fafb;
--bg-tertiary: #f3f4f6;
```

#### Monospace Font (for code, API keys, IDs):
```css
font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', monospace;
```

---

### Q4. Landing Page Content Review

Will send the content by this weekend. 

### Q5. Dashboard Content & Structure

#### Sidebar Navigation:

```markdown
┌─────────────────────────┐
│  👤 Vikas Sinsinwar     │  ← User profile dropdown
├─────────────────────────┤
│  📊 Overview            │  ← Landing page
│  🎬 Videos              │  ← All uploads
│  📦 Campaigns           │  ← (Phase 2)
│  🎨 Brand Kits          │  ← (Phase 2)
│  📖 Documentation       │  ← API docs
│  ⚙️ Settings            │  ← Account settings
│  💳 Billing             │  ← Subscription
└─────────────────────────┘
```

#### Overview Page (Dashboard Landing):

```markdown
# Overview

## Recent Uploads (Last 7 days)
┌──────────────────────────────────────────────────────────┐
│  📹 Google Cloud Next 24 Keynote                        │
│  ⏱️ Uploaded 2 hours ago                                 │
│  ✅ Processing Complete                                  │
│  📦 8 videos generated (2 platforms × 2 languages × 2)  │
│  [ View Details ]                                        │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│  📹 Trump UN Speech                                      │
│  ⏱️ Uploaded 5 hours ago                                 │
│  🔄 Processing... (75% complete)                         │
│  📊 Analyzing segments                                   │
│  [ View Status ]                                         │
└──────────────────────────────────────────────────────────┘

## Usage This Month
┌─────────────────────────────────────────────────────────┐
│  Videos Processed: 12 / 50                              │
│  ████████░░░░░░░░░░░░░░░░░░░░ 24%                       │
│                                                          │
│  Storage Used: 45 GB / 500 GB                           │
│  █████░░░░░░░░░░░░░░░░░░░░░░░░ 9%                       │
│                                                          │
│  API Calls: 342 / 10,000                                │
│  ██░░░░░░░░░░░░░░░░░░░░░░░░░░ 3%                        │
└─────────────────────────────────────────────────────────┘

## Quick Actions
[ 📤 Upload New Video ]  [ 📖 View Documentation ]  [ 💡 View Guides ]
```

#### Videos Page (All Uploads):

```markdown
# All Videos

## Filters
[All Statuses ▼]  [All Platforms ▼]  [Last 30 days ▼]  [🔍 Search]

## Video List (Table View)

| Video | Status | Platforms | Created | Actions |
|-------|--------|-----------|---------|---------|
| 📹 Google Cloud Next 24 | ✅ Complete | IG, TT | 2h ago | [View] |
| 📹 Trump UN Speech | 🔄 Processing | IG, TT | 5h ago | [View] |
| 📹 Product Demo Q4 | ✅ Complete | IG, TT, YT | 2d ago | [View] |
```

#### Video Detail Page (After clicking a video):

```markdown
# Google Cloud Next 24 Opening Keynote

## Status & Info
┌─────────────────────────────────────────────────────────┐
│  Status: ✅ Processing Complete                         │
│  Duration: 47 minutes                                   │
│  Uploaded: Nov 27, 2025 at 10:30 AM                    │
│  Video ID: df45ceef-167e-4324-9e56-e63a912ee779        │
│  Type: Presentation                                     │
└─────────────────────────────────────────────────────────┘

## Generated Content

### Instagram (2 content types × 2 languages = 4 videos)

#### Reels
┌────────────────────────────────────────────────────────┐
│  🇬🇧 English Reel                                      │
│  ⏱️ Duration: 36s                                       │
│  📝 Caption: "Ready to take your business to the next  │
│              level with AI? 🚀"                        │
│  [ ▶️ Preview ]  [ ⬇️ Download ]  [ 📋 Copy Link ]    │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│  🇮🇳 Hindi Reel                                        │
│  ⏱️ Duration: 36s                                       │
│  📝 Caption: "AI के साथ अपने व्यवसाय को अगले स्तर पर  │
│              ले जाने के लिए तैयार? 🚀"                │
│  [ ▶️ Preview ]  [ ⬇️ Download ]  [ 📋 Copy Link ]    │
└────────────────────────────────────────────────────────┘

#### Stories
┌────────────────────────────────────────────────────────┐
│  🇬🇧 English Story                                     │
│  ⏱️ Duration: 25s                                       │
│  📝 Caption: "Discover how language models are..."     │
│  [ ▶️ Preview ]  [ ⬇️ Download ]  [ 📋 Copy Link ]    │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│  🇮🇳 Hindi Story                                       │
│  ⏱️ Duration: 25s                                       │
│  📝 Caption: "भाषा मॉडल कैसे क्रांति ला रहे हैं..."    │
│  [ ▶️ Preview ]  [ ⬇️ Download ]  [ 📋 Copy Link ]    │
└────────────────────────────────────────────────────────┘

### TikTok (3 content types × 2 languages = 6 videos)

#### Hooks
[Similar layout for Hooks]

#### Clips
[Similar layout for Clips]

#### Reels
[Similar layout for Reels]

## Marketing Copy (Expandable Sections)

### Instagram Reel - English
┌────────────────────────────────────────────────────────┐
│  📝 Hooks (AI-Generated, pick one):                    │
│  1. "Ready to take your business to the next level?"  │
│  2. "Discover the future of AI innovation! 🚀"        │
│  3. "Unlock your business potential with AI! 💡"      │
│                                                         │
│  📝 Caption:                                            │
│  "We're leading the AI revolution with cutting-edge   │
│   language models and tech! 💪✨"                      │
│                                                         │
│  📝 Call-to-Action:                                     │
│  "Tap to learn how our groundbreaking advancements    │
│   can transform your business!"                        │
│                                                         │
│  🏷️ Hashtags:                                          │
│  #AI #Innovation #TechLeadership #CloudNext           │
└────────────────────────────────────────────────────────┘

## Actions
[ 🗑️ Delete Video ]  [ 🔄 Regenerate ]  [ 📊 View Analytics ]
```

#### Settings Page:

```markdown

```

---

### Q6. Contact Page Content

```markdown
# Get in Touch

## Subtitle
"Questions about LuminaCore? We're here to help."

## Contact Information
┌─────────────────────────────────────────────────────────┐
│  📧 General Inquiries                                   │
│     hi@luminacore.ai                                  │
│                                                         │ │
│                                                       │
│  💼 Sales                                               │
│     sales@luminacore.ai                                │
│     Schedule a demo: calendly.com/luminacore           │
└─────────────────────────────────────────────────────────┘

## Contact Form
┌─────────────────────────────────────────────────────────┐
│  Name *                                                 │
│  [________________]                                     │
│                                                         │
│  Email *                                                │
│  [________________]                                     │
│                                                         │
│  Company (optional)                                     │
│  [________________]                                     │
│                                                         │
│  Subject *                                              │
│  [ Select... ▼ ]                                        │
│    - General Inquiry                                    │
│    - Technical Support                                  │
│    - Sales/Demo Request                                 │
│    - Partnership Opportunity                            │
│    - Other                                              │
│                                                         │
│  Message *                                              │
│  [________________________________]                     │
│  [________________________________]                     │
│  [________________________________]                     │
│                                                         │
│  [ Send Message ]                                       │
└─────────────────────────────────────────────────────────┘

## Office Location (if applicable)
San Francisco, CA
```

---

### Q7. Additional Tabs & Content Changes

#### Tabs to Add:

1. **📖 Documentation** (Public)
   - Getting Started Guide
   - API Reference (Swagger UI)
   - Video Tutorials
   - Best Practices

2. **🎓 Guides** (Public)
   - Platform-Specific Optimization
   - Multi-Language Strategy
   - Content Marketing Tips
   - Use Case Examples

3. **📊 Changelog** (Public)
   - Product Updates
   - New Features
   - Bug Fixes
   - API Changes


5. **💡 Use Cases** (Public)
   - Marketing Agencies
   - E-Learning Platforms
   - Content Creators
   - Enterprise Training

#### Content Changes Needed:

WIll add teh details 

---

## Technical Integration Questions

### 1. Server-Side Rendering (SSR) Requirements

**✅ Pages that NEED SSR (for SEO & Performance):**

| Page | Reason | Implementation |
|------|--------|----------------|
| `/` (Landing) | SEO critical, public-facing | SSR + Static |
| `/pricing` | SEO critical, public-facing | SSR + Static |
| `/features` | SEO critical, public-facing | SSR + Static |
| `/guides/*` | SEO critical, blog-like content | SSR + ISR |
| `/documentation` | SEO for API docs | SSR + Static |
| `/contact` | SEO + Contact form | SSR |

**❌ Pages that DON'T need SSR (Client-Side Only):**

| Page | Reason |
|------|--------|
| `/dashboard/*` | Requires auth, no SEO needed |
| `/videos/:id` | Private content, authenticated |
| `/settings` | Private, user-specific data |
| `/upload` | Interactive, real-time updates |





---

### 2. API Documentation (Swagger/Postman)

**Base URLs:**
- **Test:** TBD
- **Production:** TBD

#### Core Endpoints:

##### Video Upload Flow (Modern - Presigned URLs)

**Step 1: Get Presigned URL**
```http
POST /api/v1/videos/presigned-url
Content-Type: application/json
Authorization: Bearer {access_token}

Request Body:
{
  "fileName": "my-video.mp4",
  "fileSize": 853000000,
  "platforms": ["INSTAGRAM", "TIKTOK"],
  "languages": ["ENGLISH", "HINDI"]
}

Response (200 OK):
{
  "videoId": "df45ceef-167e-4324-9e56-e63a912ee779",
  "uploadUrl": "https://s3.amazonaws.com/luminacore-videos/users/{userId}/{videoId}/raw/original.mp4?X-Amz-...",
  "expiresIn": 3600
}
```

**Step 2: Upload to S3 (Client-Side)**
```http
PUT {uploadUrl}
Content-Type: video/mp4
Body: <video-file-binary>

Response (200 OK):
(No body - S3 returns empty 200)
```

**Step 3: Trigger Processing**
```http
POST /api/v1/videos/{videoId}/process
Content-Type: application/json
Authorization: Bearer {access_token}

Request Body:
{
  "platforms": ["INSTAGRAM", "TIKTOK"],
  "languages": ["ENGLISH", "HINDI"],
  "videoType": "PRESENTATION"  // Optional
}

Response (200 OK):
{
  "videoId": "df45ceef-167e-4324-9e56-e63a912ee779",
  "status": "PROCESSING",
  "message": "Video processing started",
  "estimatedTime": "15-20 minutes"
}
```

##### Video Status & Management

**Get Video Status**
```http
GET /api/v1/videos/{videoId}/status
Authorization: Bearer {access_token}

Response (200 OK):
{
  "videoId": "df45ceef-167e-4324-9e56-e63a912ee779",
  "status": "PROCESSING",  // UPLOADING, UPLOADED, PROCESSING, COMPLETED, FAILED
  "progress": 75,  // 0-100
  "currentStage": "Generating content",  // Human-readable
  "platforms": ["INSTAGRAM", "TIKTOK"],
  "languages": ["ENGLISH", "HINDI"],
  "createdAt": "2025-11-27T10:30:00Z",
  "updatedAt": "2025-11-27T10:45:00Z"
}
```

**Get Video Dashboard (All Generated Content)**
```http
GET /api/v1/videos/{videoId}/dashboard
Authorization: Bearer {access_token}

Response (200 OK):
{
  "videoId": "df45ceef-167e-4324-9e56-e63a912ee779",
  "status": "COMPLETED",
  "originalVideo": {
    "duration": 2820,  // seconds
    "fileName": "google-cloud-next-24.mp4",
    "uploadedAt": "2025-11-27T10:30:00Z"
  },
  "platforms": {
    "INSTAGRAM": {
      "REEL": {
        "english": {
          "downloadUrl": "https://s3.../reel_001.mp4?presigned=...",
          "duration": 36,
          "marketingCopy": {
            "hooks": ["Hook 1", "Hook 2", "Hook 3"],
            "caption": "We're leading the AI revolution...",
            "cta": "Tap to learn more!"
          }
        },
        "hindi": {
          "downloadUrl": "https://s3.../reel_001_hi.mp4?presigned=...",
          "duration": 36,
          "marketingCopy": { ... }
        }
      },
      "STORY": {
        "english": { ... },
        "hindi": { ... }
      }
    },
    "TIKTOK": {
      "HOOK": { ... },
      "CLIPS": { ... },
      "REEL": { ... }
    }
  }
}
```

**Get Single Content Download URL**
```http
GET /api/v1/videos/{videoId}/download/{platform}/{contentType}/{language}
Authorization: Bearer {access_token}

Example: GET /api/v1/videos/df45ceef.../download/INSTAGRAM/REEL/ENGLISH

Response (200 OK):
{
  "downloadUrl": "https://s3.amazonaws.com/.../reel_001.mp4?X-Amz-...",
  "expiresIn": 3600,
  "fileName": "instagram_reel_001_english.mp4",
  "fileSize": 15728640,  // bytes
  "duration": 36  // seconds
}
```



#### Error Responses:

```json
// 400 Bad Request
{
  "error": "Invalid platform selection",
  "code": 400,
  "timestamp": "2025-11-27T10:30:00Z",
  "details": "Platform 'SNAPCHAT' is not supported"
}

// 401 Unauthorized
{
  "error": "Authentication required",
  "code": 401,
  "timestamp": "2025-11-27T10:30:00Z"
}

// 404 Not Found
{
  "error": "Video not found",
  "code": 404,
  "timestamp": "2025-11-27T10:30:00Z",
  "videoId": "invalid-uuid"
}

// 500 Internal Server Error
{
  "error": "Internal server error",
  "code": 500,
  "timestamp": "2025-11-27T10:30:00Z",
  "message": "An unexpected error occurred. Please contact support."
}
```

---

### 3. Authentication (Auth0 Integration)

**Provider:** Auth0  
**Authentication Method:** JWT Bearer Tokens

#### Auth0 Configuration:

TBD

#### Social Login Configuration:

**Supported Social Logins:**
- ✅ **Google Login** (Primary)
- ✅ **Email/Password** (Primary)
- ⏸️ LinkedIn, Twitter (Phase 2)

**2-Factor Authentication:** ❌ Not implemented (Phase 2)





#### Token Management:



#### User Roles & Permissions:

TBD 



---

### 4. Vercel ↔ AWS Backend Connection


#### S3 Direct Upload (Frontend → S3):

**YES - Frontend uploads directly to S3 using presigned URLs**

```javascript
// Step 1: Get presigned URL from backend
const { uploadUrl, videoId } = await getPresignedUrl();

// Step 2: Upload directly to S3 (bypasses backend)
const uploadResponse = await fetch(uploadUrl, {
  method: 'PUT',
  body: videoFile,
  headers: {
    'Content-Type': 'video/mp4',
    // NO Authorization header - presigned URL contains auth
  }
});

// Step 3: Notify backend to start processing
await triggerProcessing(videoId);
```

**Benefits:**
- ✅ Faster uploads (direct to S3)
- ✅ No backend load for large files
- ✅ Better user experience
- ✅ Supports resumable uploads

---

### 5. Session & Token Management

TBD 

### 6. Video Upload Method (S3)

**Recommended: Multipart Upload with Resumable Support**

#### For Small Files (<100 MB):



#### For Large Files (>100 MB) - Multipart + Resumable:



**Upload Configuration:**
```javascript
Chunk Size:       5 MB (minimum for S3 multipart)
Parallel Chunks:  4 concurrent uploads
Retry Strategy:   Exponential backoff (3 retries)
Timeout:          60 seconds per chunk
```

---

### 7. Real-Time Updates ()


#### Phase 1 (Current): Polling

```javascript
// Poll for status every 5 seconds
async function pollVideoStatus(videoId) {
  const interval = setInterval(async () => {
    const { status, progress } = await fetch(
      `/api/v1/videos/${videoId}/status`
    ).then(r => r.json());
    
    // Update UI
    updateProgressBar(progress);
    updateStatusMessage(status);
    
    if (status === 'COMPLETED' || status === 'FAILED') {
      clearInterval(interval);
      
      if (status === 'COMPLETED') {
        // Redirect to video detail page
        router.push(`/dashboard/videos/${videoId}`);
      }
    }
  }, 5000); // Poll every 5 seconds
}
```



---

## Backend Architecture Overview

### High-Level Architecture:

```
┌─────────────────────────────────────────────────────────────┐
│                     FRONTEND (Vercel)                       │
│                    Next.js 14 + React                       │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      │ HTTPS + Auth0 JWT
                      ↓
┌─────────────────────────────────────────────────────────────┐
│                   API GATEWAY (AWS)                         │
│                   CORS + Rate Limiting                      │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ↓
┌─────────────────────────────────────────────────────────────┐
│              SPRING BOOT BACKEND (AWS ECS)                  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  REST Controllers                                   │    │
│  │                │   │
│  └─────────────┬───────────────────────────────────────┘    │
│                ↓                                            │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Service Layer (Business Logic)                     │    │
│  │                   │   │
│  └─────────────┬───────────────────────────────────────┘   │
│                ↓                                           │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Algorithm Layer (AI Analysis)                      │   │
│  │  -                         │   │
│  └─────────────┬───────────────────────────────────────┘   │
│                ↓                                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Platform Intelligence                              │   │
│  │                                    │   │
│  └─────────────┬───────────────────────────────────────┘   │
│                ↓                                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Storage & Data Layer                               │   │
│  │               │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ↓
┌─────────────────────────────────────────────────────────────┐
│                    EXTERNAL SERVICES                        │
│                                                             │
│                     │
└─────────────────────────────────────────────────────────────┘
```






---

## API Versioning & Naming Conventions

### URL Structure:

```
https://api.luminacore.ai/api/v1/{resource}/{action}

Base:       /api/v1
Resource:   /videos, /users, /campaigns
Action:     /upload, /process, /status, /download
```

### Version Strategy:

```
Current:  /api/v1 (Production)
Future:   /api/v2 (Breaking changes)
Legacy:   /api/v0 (Deprecated, backward compatibility)

Breaking changes require new version
Non-breaking changes stay in same version
```

### Response Format:

```json
// Success (200 OK)
{
  "data": { ... },
  "meta": {
    "timestamp": "2025-11-27T10:30:00Z",
    "version": "1.0"
  }
}

// Error (4xx, 5xx)
{
  "error": "Resource not found",
  "code": 404,
  "timestamp": "2025-11-27T10:30:00Z",
  "details": "Video with ID xyz not found"
}
```

---


