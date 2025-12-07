import { Check } from 'lucide-react';

interface UploadCompleteProps {
  onDismiss?: () => void;
}

export default function UploadComplete({ onDismiss }: UploadCompleteProps) {
  return (
    <div className="mb-8 border-2 border-dashed border-gray-300 bg-white rounded-lg p-8 md:p-12">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gray-900 flex items-center justify-center">
          <Check className="w-8 h-8 text-gray-900" />
        </div>

        <h3 className="text-lg font-medium text-gray-900 mb-1">
          Upload Completed
        </h3>

        <p className="text-sm text-gray-600 mb-6">
          Redirecting to video details...
        </p>

        <div className="w-full md:w-96 bg-blue-600 text-white rounded-lg p-4">
          <p className="font-medium mb-1">Upload completed!</p>
          <p className="text-sm">Your video is being processed</p>
        </div>
      </div>
    </div>
  );
}
