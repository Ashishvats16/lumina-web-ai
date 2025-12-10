import { FileVideo, X } from 'lucide-react';

interface VideoAttachedProps {
  fileName: string;
  fileSize: string;
  onUpload: () => void;
  onClear: () => void;
  isLoading?: boolean;
}

export default function VideoAttached({
  fileName,
  fileSize,
  onUpload,
  onClear,
  isLoading = false,
}: VideoAttachedProps) {
  return (
    <div className="mb-8 border-2 border-dashed border-gray-300 bg-white rounded-lg p-8 md:p-12">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 mb-4 border-2 border-gray-900 rounded-lg flex items-center justify-center">
          <FileVideo className="w-8 h-8 text-gray-900" />
        </div>

        <h3 className="text-lg font-medium text-gray-900 mb-1">
          {fileName}
        </h3>

        <p className="text-sm text-gray-600 mb-6">
          {fileSize}
        </p>

        <button
          onClick={onUpload}
          disabled={isLoading}
          className="w-full md:w-96 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-2"
        >
          {isLoading ? 'Uploading...' : 'Upload Video'}
        </button>

        <button
          onClick={onClear}
          disabled={isLoading}
          className="text-gray-600 hover:text-gray-700 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
