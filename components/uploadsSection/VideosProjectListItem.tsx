import { Folder, Check } from 'lucide-react';

interface VideoProjectListItemProps {
  id: number;
  title: string;
  status: 'Complete' | 'Processing';
  videos: number;
  clips: number;
  timestamp: string;
  onClick: () => void;
  onSeeMore: (e: React.MouseEvent) => void;
}

export default function VideoProjectListItem({
  title,
  status,
  videos,
  clips,
  timestamp,
  onClick,
  onSeeMore,
}: VideoProjectListItemProps) {
  const statusColor = status === 'Complete' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700';

  return (
    <div
      onClick={onClick}
      className="bg-white border-b border-gray-200 px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
    >
      <div className="flex items-center gap-4">

        <div className="flex-shrink-0">
          <Folder className="w-6 h-6 text-gray-400" />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
            <span>Videos: {videos}</span>
            <span>Clips: {clips}</span>
            <span>{timestamp}</span>
            <button
              onClick={onSeeMore}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              see more...
            </button>
          </div>
        </div>

        <div className="flex-shrink-0">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 ${statusColor}`}>
            {status === 'Complete' && <Check className="w-3 h-3" />}
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}
