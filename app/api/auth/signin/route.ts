import { NextResponse } from 'next/server';
import { createSession, verifyPassword } from '@/lib/auth';
import type { SignInFormData } from '@/types/auth';

// Mock user database (replace with real database)
const MOCK_USERS = [
  {
    id: '1',
    email: 'demo@example.com',
    password: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', // 'password'
    name: 'Demo User',
  },
];

export async function POST(request: Request) {
  try {
    const body: SignInFormData = await request.json();
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find user (replace with database query)
    const user = MOCK_USERS.find((u) => u.email === email);

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await verifyPassword(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Create session
    await createSession(user.id, user.email, user.name);

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error('Sign in error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred during sign in' },
      { status: 500 }
    );
  }
}