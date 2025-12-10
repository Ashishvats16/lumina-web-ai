// import { cookies } from 'next/headers';
// import { SignJWT, jwtVerify } from 'jose';

// const JWT_SECRET = new TextEncoder().encode(
//   process.env.JWT_SECRET || 'your-secret-key-change-in-production'
// );

// export interface SessionData {
//   userId: string;
//   email: string;
//   name: string;
//   expiresAt: Date;
// }

// // Create a session token
// export async function createSession(userId: string, email: string, name: string) {
//   const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
  
//   const token = await new SignJWT({ userId, email, name })
//     .setProtectedHeader({ alg: 'HS256' })
//     .setExpirationTime('7d')
//     .setIssuedAt()
//     .sign(JWT_SECRET);

//   (await cookies()).set('session', token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'lax',
//     expires: expiresAt,
//     path: '/',
//   });

//   return token;
// }

// // Verify session token
// export async function verifySession(token: string): Promise<SessionData | null> {
//   try {
//     const verified = await jwtVerify(token, JWT_SECRET);
//     const payload = verified.payload as any;
    
//     return {
//       userId: payload.userId,
//       email: payload.email,
//       name: payload.name,
//       expiresAt: new Date((payload.exp || 0) * 1000),
//     };
//   } catch (error) {
//     return null;
//   }
// }

// // Get current session
// export async function getSession(): Promise<SessionData | null> {
//   const token = (await cookies()).get('session')?.value;
//   if (!token) return null;
  
//   return verifySession(token);
// }

// // Delete session
// export async function deleteSession() {
//   (await cookies()).delete('session');
// }

// // Hash password (in production, use bcrypt)
// export async function hashPassword(password: string): Promise<string> {
//   // For demo purposes - in production use bcrypt or argon2
//   const encoder = new TextEncoder();
//   const data = encoder.encode(password);
//   const hash = await crypto.subtle.digest('SHA-256', data);
//   return Array.from(new Uint8Array(hash))
//     .map(b => b.toString(16).padStart(2, '0'))
//     .join('');
// }

// // Verify password
// export async function verifyPassword(
//   password: string,
//   hashedPassword: string
// ): Promise<boolean> {
//   const hash = await hashPassword(password);
//   return hash === hashedPassword;
// }

