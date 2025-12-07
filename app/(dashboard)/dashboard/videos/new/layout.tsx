"use client";
import { authOptions } from "@/lib/auth.client";
import { ChevronLeft } from "lucide-react";
import { getServerSession } from "next-auth";
import { useRouter, useSearchParams } from "next/navigation";
type Step = 'upload' | 'configure' | 'results';

export default function NewVideoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
//   const session = await getServerSession(authOptions);
  const searchParams = useSearchParams();
  const router = useRouter();
  const step = (searchParams.get('step') as Step) || 'upload';

  function onBack() {
    router.back();
  }
  return (
    <div className="min-h-screen bg-white w-full">
      {step !== 'results' && <div className=" max-w-9xl mx-auto px-6 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 font-medium transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to All Videos
        </button>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Uploads</h1>
        <p className="text-gray-600">
          Manage your video uploads and processing jobs
        </p>
      </div>}
      {children}
    </div>
  );
}
