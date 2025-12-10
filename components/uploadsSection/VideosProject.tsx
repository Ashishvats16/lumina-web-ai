import { Folder } from 'lucide-react';

interface VideoProjectProps {
  id: number;
  title: string;
  status: 'Complete' | 'Processing';
  platforms: string[];
  clips: number;
  timestamp: string;
  onClick: () => void;
  onSeeMore: (e: React.MouseEvent) => void;
}

export default function VideoProject({
  title,
  status,
  platforms,
  clips,
  timestamp,
  onClick,
  onSeeMore,
}: VideoProjectProps) {
  const statusColor = status === 'Complete' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700';
  const statusIcon = status === 'Complete' ? '●' : '◐';

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer"
    >
      <div className="flex justify-center mb-4">
        <Folder className="w-10 h-10 text-gray-400" />
      </div>

      <h3 className="font-semibold text-gray-900 text-center mb-3">{title}</h3>

      <div className="flex justify-center mb-4">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 ${statusColor}`}>
          <span className="text-xs">{statusIcon}</span>
          {status}
        </span>
      </div>

      <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
        <div className="flex justify-between text-sm">
          <span className="text-gray-700">Videos</span>
          <span className="text-gray-700">Clips</span>
        </div>
        <div className="flex justify-between text-xs text-gray-600">
          <div className="flex gap-2">
            {platforms.map((platform) => (
              <span key={platform}>{platform}</span>
            ))}
          </div>
          <span>{clips}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500 flex items-center gap-1">
          <span className="w-4 h-4 flex items-center justify-center">🕐</span>
          {timestamp}
        </span>
        <button
          onClick={onSeeMore}
          className="text-blue-600 hover:text-blue-700 text-xs font-medium"
        >
          see more...
        </button>
      </div>
    </div>
  );
}
