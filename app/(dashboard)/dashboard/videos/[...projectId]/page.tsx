"use client";

import VideoDetailPage from "@/components/uploadsSection/VideoDetailsPage";

export default function UploadPage() {
  const videoId = 3;

  return (
    <>
      <VideoDetailPage
        videoId={videoId}
        onComplete={() => null}
        onBack={() => null}
      />
    </>
  );
}
