// app/videos/new/page.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import UploadsJobs from "@/components/uploadsSection/UploadSection";
import SelectClipsConfiguration from "@/components/uploadsSection/SelectClipConfig";
import VideoDetailPage from "@/components/uploadsSection/VideoDetailsPage";

type Step = "upload" | "configure" | "results";

function NewVideoContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const step = (searchParams.get("step") as Step) || "upload";

  const navigateToStep = (nextStep: Step, data?: any) => {
    // Store data in localStorage or context if needed between steps
    if (data) {
      sessionStorage.setItem(`video-workflow-${step}`, JSON.stringify(data));
    }
    router.push(`/dashboard/videos/new?step=${nextStep}`);
  };
  console.log("STATE>>>", step);

  return (
    <div className="w-full">
      {/* Progress Indicator */}
      {/* <div className="mb-8">
        <StepIndicator currentStep={step} />
        <p>Step Indicator</p>
      </div> */}

      {/* Step Content */}
      {step === "upload" && (
        // <UploadStep
        //   onComplete={(videoData) => navigateToStep('configure', videoData)}
        // />
        <UploadsJobs
          onComplete={(videoData) => navigateToStep("configure", videoData)}
        />
      )}

      {step === "configure" && (
        // <ConfigureStep
        //   onComplete={(config) => navigateToStep('results', config)}
        //   onBack={() => navigateToStep('upload')}
        // />
        <SelectClipsConfiguration
          onComplete={(config:any) => navigateToStep("results", config)}
          onBack={() => navigateToStep("upload")}
        />
      )}

      {step === "results" && (
        // <ResultsStep
        //   onBack={() => navigateToStep('configure')}
        //   onComplete={() => router.push('/videos')}
        // />
        <VideoDetailPage
        videoId={234}
          onBack={() => navigateToStep("configure")}
          onComplete={() => router.push("/videos")}
        />
      )}
    </div>
  );
}

export default function NewVideoPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewVideoContent />
    </Suspense>
  );
}
