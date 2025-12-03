'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function AuthToggle() {
  const pathname = usePathname();
  const isSignUp = pathname === '/signup';

  return (
    <div className="flex rounded-lg overflow-hidden mb-8">
      <Link
        href="/signup"
        className={`flex-1 py-3.5 text-center font-medium transition-colors ${
          isSignUp
            ? 'bg-[#4F90F2] text-white'
            : 'bg-[#C4C4C4] text-white hover:bg-[#B0B0B0]'
        }`}
      >
        Sign up
      </Link>
      <Link
        href="/signin"
        className={`flex-1 py-3.5 text-center font-medium transition-colors ${
          !isSignUp
            ? 'bg-[#4F90F2] text-white'
            : 'bg-[#C4C4C4] text-white hover:bg-[#B0B0B0]'
        }`}
      >
        Log in
      </Link>
    </div>
  );
}
