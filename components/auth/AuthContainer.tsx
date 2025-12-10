'use client';

import { ReactNode } from 'react';

interface AuthContainerProps {
  children: ReactNode;
}

export function AuthContainer({ children }: AuthContainerProps) {
  return (
    <div className=" w-full bg-[#E5E7EB] flex items-center justify-center p-4 min-h-screen">
      <div className="w-full max-w-[660px] bg-white rounded-2xl border-2 border-[#4F90F2] shadow-lg p-8 sm:p-12 relative">
        {children}
      </div>
    </div>
  );
}
