'use client';
import { useState, useRef } from 'react';
import { Upload, TrendingUp, FileUp } from 'lucide-react';

interface RecentUpload {
  id: string;
  title: string;
  fileSize: string;
  uploader: string;
  uploadedAt: string;
  status: 'Processing Complete' | 'Processing' | 'Failed';
  videosGenerated: string;
  progress: number;
}

interface UsageStats {
  label: string;
  current: number;
  limit: number;
  unit: string;
  percentage: number;
}

const mockRecentUploads: RecentUpload[] = [
  {
    id: '1',
    title: 'Product Feature Highlight',
    fileSize: '2.4 GB',
    uploader: 'Sarah Chen',
    uploadedAt: '12 min ago',
    status: 'Processing Complete',
    videosGenerated: 'Analyzing segments',
    progress: 80,
  },
  {
    id: '2',
    title: 'Customer_Testimonial_v2.mp4',
    fileSize: '1.8 GB',
    uploader: 'Mike Johnson',
    uploadedAt: '1 hour ago',
    status: 'Processing Complete',
    videosGenerated: '8 videos generated (2 platforms × 2 languages)',
    progress: 100,
  },
  {
    id: '3',
    title: 'Team_All_Hands_Nov.mp4',
    fileSize: '3.2 GB',
    uploader: 'Alex Kim',
    uploadedAt: '3 hour ago',
    status: 'Processing Complete',
    videosGenerated: '8 videos generated (2 platforms × 2 languages)',
    progress: 100,
  },
];

const usageStats: UsageStats[] = [
  {
    label: 'Videos Processed',
    current: 1247,
    limit: 5000,
    unit: 'videos',
    percentage: 25,
  },
  {
    label: 'Storage',
    current: 2.4,
    limit: 10,
    unit: 'TB',
    percentage: 24,
  },
  {
    label: 'API Calls',
    current: 12458,
    limit: 50000,
    unit: 'calls',
    percentage: 25,
  },
];

export default function Overview() {
  const [recentUploads, setRecentUploads] = useState<RecentUpload[]>(mockRecentUploads);
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('video/')) {
      alert('Please select a video file');
      return;
    }

    const sizeInMB = file.size / (1024 * 1024);
    if (sizeInMB > 100000) {
      alert('File size must be less than 100GB');
      return;
    }

    const sizeDisplay = sizeInMB > 1024 ? `${(sizeInMB / 1024).toFixed(1)} GB` : `${sizeInMB.toFixed(1)} MB`;

    setUploadedFile({
      name: file.name,
      size: sizeDisplay,
    });

    const newUpload: RecentUpload = {
      id: Math.random().toString(36).substr(2, 9),
      title: file.name.replace(/\.[^/.]+$/, ''),
      fileSize: sizeDisplay,
      uploader: 'You',
      uploadedAt: 'just now',
      status: 'Processing',
      videosGenerated: 'Processing...',
      progress: 10,
    };

    setRecentUploads((prev) => [newUpload, ...prev.slice(0, 2)]);

    setTimeout(() => {
      setRecentUploads((prev) =>
        prev.map((upload) =>
          upload.id === newUpload.id
            ? {
                ...upload,
                progress: 100,
                status: 'Processing Complete',
                videosGenerated: '8 videos generated (2 platforms × 2 languages)',
              }
            : upload
        )
      );
    }, 3000);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelect(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-white w-full">
      <div className="max-w-9xl mx-auto px-6 py-8">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Overview
          </h1>
          <p className="text-gray-600">
            Welcome back! Here's what's happening with your content.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Recent Uploads ( Last 7 days )
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentUploads.map((upload) => (
              <div
                key={upload.id}
                className="bg-white border border-gray-300 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-32 bg-gradient-to-br from-blue-200 to-blue-100" />

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {upload.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3">
                    {upload.fileSize} · Uploaded by {upload.uploader} · {upload.uploadedAt}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs font-medium text-blue-600 mb-2">
                      {upload.videosGenerated}
                    </p>

                    <div className="flex gap-2 items-center mb-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 transition-all duration-500 rounded-full"
                          style={{ width: `${upload.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-600">
                        {upload.progress}%
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        upload.status === 'Processing Complete'
                          ? 'bg-green-100 text-green-700'
                          : upload.status === 'Processing'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {upload.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Current Usage</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usageStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="text-blue-600 font-semibold hover:underline cursor-pointer">
                        {stat.label}
                      </span>
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.current.toLocaleString()} / {stat.limit.toLocaleString()} {stat.unit}
                    </p>
                  </div>
                  <TrendingUp className="w-6 h-6 text-gray-400" />
                </div>

                <div className="mb-4">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all duration-500"
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>
                </div>

                <p className="text-sm text-gray-600">
                  {stat.percentage}% used
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                dragActive
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 bg-white hover:bg-gray-50'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleFileInputChange}
                className="hidden"
              />

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-lg border-2 border-gray-400 flex items-center justify-center mb-3">
                  <FileUp className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Upload New Video
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-1">
                  Drag & Drop Video Files
                </p>
                <p className="text-xs text-gray-500 mb-1">
                  or click to browse from your computer
                </p>
                <p className="text-xs text-gray-400">
                  Supports MP4, MOV, AVI • Max 100GB per file
                </p>
              </div>

              {uploadedFile && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-green-600 font-medium">
                    ✓ {uploadedFile.name}
                  </p>
                  <p className="text-xs text-gray-500">{uploadedFile.size}</p>
                </div>
              )}
            </div>

            <div className="bg-white border border-gray-300 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                View Documentation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                This video covers the major product announcements for 2024,
                highlighting three key features: AI-powered automation,
                enhanced collaboration tools, and advanced analytics...
              </p>
            </div>

            <div className="bg-white border border-gray-300 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                View Guides
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                This video covers the major product announcements for 2024,
                highlighting three key features: AI-powered automation,
                enhanced collaboration tools, and advanced analytics...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
