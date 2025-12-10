'use client';
import { useState, useRef, useEffect } from 'react';
import { FileVideo } from 'lucide-react';
import VideoAttached from './VideoAttached';
import UploadLoader from './UploadLoader';
import UploadComplete from './UploadComplete';
import { useRouter } from 'next/navigation';



type UploadState = 'idle' | 'attached' | 'uploading' | 'complete';

interface VideoUploadFlowProps {
  onUploadSuccess?: (fileName: string) => void;
  onUploadError?: (error: string) => void;
onComplete?: (videoData?: any) => void
}

export default function UploadsJobs({ onUploadSuccess,onUploadError, onComplete }: VideoUploadFlowProps) {
  const [uploadState, setUploadState] = useState<UploadState>('idle');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const router = useRouter();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('video/')) {
      onUploadError?.('Please select a valid video file');
      return;
    }

    const maxSize = 10 * 1024 * 1024 * 1024;
    if (file.size > maxSize) {
      onUploadError?.('File size must be less than 10GB');
      return;
    }

    setSelectedFile(file);
    setUploadState('attached');
  };

  const handleClear = () => {
    setSelectedFile(null);
    setUploadState('idle');
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploadState('uploading');
    setUploadProgress(0);

    try {
      await simulateUpload();

      onUploadSuccess?.(selectedFile.name);
      setUploadState('complete');

      setTimeout(() => {
        handleClear();
        setUploadState('idle');
        // router.push('/dashboard/videos/process')
        onComplete?.();
        
      }, 3000);
    } catch (error) {
      onUploadError?.(error instanceof Error ? error.message : 'Upload failed');
      setUploadState('attached');
    }
  };

  const simulateUpload = () => {
    return new Promise<void>((resolve) => {
      const intervals: NodeJS.Timeout[] = [];

      const progressPoints = [10, 25, 40, 55, 70, 85, 95];
      progressPoints.forEach((targetProgress, index) => {
        const delay = (index + 1) * 200;
        intervals.push(
          setTimeout(() => {
            setUploadProgress(targetProgress);
          }, delay)
        );
      });

      intervals.push(
        setTimeout(() => {
          setUploadProgress(100);
          resolve();
        }, progressPoints.length * 200 + 300)
      );

      return () => {
        intervals.forEach(clearTimeout);
      };
    });
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  if (uploadState === 'attached' && selectedFile) {
    return (
      <VideoAttached
        fileName={selectedFile.name}
        fileSize={formatFileSize(selectedFile.size)}
        onUpload={handleUpload}
        onClear={handleClear}
        // isLoading={uploadState === 'uploading'}
      />
    );
  }

  if (uploadState === 'uploading') {
    return <UploadLoader progress={uploadProgress} />;
  }

  if (uploadState === 'complete') {
    return <UploadComplete onDismiss={handleClear} />;
  }

  return (
    <div
      className={`mb-8 border-2 border-dashed rounded-lg p-12 md:p-16 transition-colors ${
        isDragging ? 'border-blue-400 bg-blue-50' : 'border-gray-300 bg-white'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 mb-4 border-2 border-gray-900 rounded-lg flex items-center justify-center">
          <FileVideo className="w-8 h-8 text-gray-900" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Drag & Drop Video Files
        </h2>
        <p className="text-gray-600 mb-1">
          or{' '}
          <button
            onClick={handleBrowseClick}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            click to browse
          </button>{' '}
          from your computer
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Supports MP4, MOV, AVI • Max 10GB per file
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept="video/mp4,video/quicktime,video/x-msvideo"
          multiple
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
    </div>
  );
}
