import LoadingSpinner from "./LoadingSpinner";

interface GeneratingClipsProps {
  progress: number;
  onCancel: () => void;
}

export default function GeneratingClips({ progress, onCancel }: GeneratingClipsProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6">
      <LoadingSpinner />

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-8">Generating clips</h2>

      <div className="w-full max-w-md">
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-center text-gray-600 text-sm mt-3">{progress}%</p>
      </div>

      <button
        onClick={onCancel}
        className="mt-12 w-full max-w-md bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        Cancel Generating
      </button>
    </div>
  );
}
