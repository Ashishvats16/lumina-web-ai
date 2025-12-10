interface UploadLoaderProps {
  progress?: number;
}

export default function UploadLoader({ progress = 60 }: UploadLoaderProps) {
  return (
    <div className="mb-8 border-2 border-dashed border-gray-300 bg-white rounded-lg p-8 md:p-12">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-6">
          <div className="w-12 h-12 mx-auto">
            <svg
              className="animate-spin text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        </div>

        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Uploading Your Video...
        </h3>

        <div className="w-full md:w-96">
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-blue-600 transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600">{progress}%</p>
        </div>
      </div>
    </div>
  );
}
