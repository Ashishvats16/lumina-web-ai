'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession, signIn } from 'next-auth/react';
import { handleSignIn } from '@/lib/auth.client';
// import { handleSignIn } from '@/lib/auth';


export function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
    const { data: session } = useSession();
    console.log("Session signup", session);
    
const handleGoogleSignUp = async () => {
  try {
    setGoogleLoading(true);
    const result = await signIn('google', { 
      callbackUrl: '/dashboard',
      redirect: true 
    });
  } catch (error) {
    console.error('Google sign in error:', error);
  } finally {
    setGoogleLoading(false);
  }
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log('Sign up with:', { firstName, lastName, email, password });
    } catch (error) {
      console.error('Sign up error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-2xl font-semibold text-center mb-8 text-[#1F2937]">
        Sign up
      </h1>

      <button
        onClick={handleGoogleSignUp}
        className="w-full py-3.5 px-4 border-2 border-[#E5E7EB] rounded-full bg-white hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 mb-6"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M19.8055 10.2292C19.8055 9.55156 19.7501 8.86719 19.6325 8.19531H10.2002V12.0492H15.6014C15.3773 13.2911 14.6395 14.3898 13.5682 15.0875V17.5867H16.8187C18.7121 15.8453 19.8055 13.2719 19.8055 10.2292Z"
            fill="#4285F4"
          />
          <path
            d="M10.2002 20.0008C12.9524 20.0008 15.2722 19.1039 16.8187 17.5867L13.5682 15.0875C12.6688 15.6972 11.5254 16.0431 10.2002 16.0431C7.54358 16.0431 5.28696 14.2828 4.49221 11.9297H1.1377V14.4922C2.71733 17.6133 6.3103 20.0008 10.2002 20.0008Z"
            fill="#34A853"
          />
          <path
            d="M4.49221 11.9297C4.06752 10.6878 4.06752 9.31406 4.49221 8.07219V5.50969H1.1377C-0.379234 8.51781 -0.379234 12.4844 1.1377 15.4925L4.49221 11.9297Z"
            fill="#FBBC04"
          />
          <path
            d="M10.2002 3.95781C11.6009 3.9325 12.9519 4.47187 13.9605 5.43906L16.8463 2.60156C15.1815 1.03906 12.9524 0.171875 10.2002 0.199219C6.3103 0.199219 2.71733 2.58672 1.1377 5.50969L4.49221 8.07219C5.28696 5.71875 7.54358 3.95781 10.2002 3.95781Z"
            fill="#EA4335"
          />
        </svg>
        <span className="text-[#1F2937] font-medium">Sign up with Google</span>
      </button>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-[#E5E7EB]"></div>
        <span className="text-[#9CA3AF] text-sm">OR</span>
        <div className="flex-1 h-px bg-[#E5E7EB]"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm text-[#6B7280] mb-2">
              First name
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#4F90F2] focus:border-transparent transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm text-[#6B7280] mb-2">
              Last name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#4F90F2] focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-[#6B7280] mb-2">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#4F90F2] focus:border-transparent transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm text-[#6B7280] mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#4F90F2] focus:border-transparent transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm text-[#6B7280] mb-2">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#4F90F2] focus:border-transparent transition-all"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 bg-[#4F90F2] text-white rounded-full font-medium hover:bg-[#3A7BD5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Signing up...' : 'Sign up'}
        </button>
      </form>
       <p className="text-center text-sm text-[#6B7280] mb-4 mt-2">
        Already have an account?{' '}
        <Link href="/signin" className="text-[#1F2937] underline hover:text-[#4F90F2]">
          Log in
        </Link>
      </p>

      <p className="text-center text-sm text-[#6B7280] mt-2">
        View{' '}
        <Link href="/terms" className="text-[#1F2937] underline hover:text-[#4F90F2]">
          T&C
        </Link>{' '}
        and{' '}
        <Link href="/privacy" className="text-[#1F2937] underline hover:text-[#4F90F2]">
          privacy policy
        </Link>
      </p>
    </div>
  );
}
