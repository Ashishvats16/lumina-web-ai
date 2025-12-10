import { Download, Share2, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';

interface VideoCardProps {
  title: string;
  duration: string;
  caption: string;
  durationTag?: string;
}

export default function VideoCard({ title, duration, caption, durationTag = 'Draft' }: VideoCardProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const handleDownload = () => {
    alert(`Downloading: ${title}`);
    setShowMoreMenu(false);
  };

  const handleShare = () => {
    setShowShareMenu(!showShareMenu);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors">
      <div className="w-full h-40 bg-blue-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-blue-400 mb-2">
            <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-gray-900 text-base mb-3">{title}</h3>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">Duration: {duration}</span>
            <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-md">
              {durationTag}
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-5 line-clamp-2">{caption}</p>

        <div className="flex items-center justify-between gap-2">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium text-sm flex-1 justify-center"
          >
            <Download className="w-4 h-4" />
            Download
          </button>

          <div className="relative">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium text-sm flex-1 justify-center"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>

            {showShareMenu && (
              <div className="absolute bottom-full right-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-40">
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200 transition-colors">
                  Copy Link
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200 transition-colors">
                  Email
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  More Options
                </button>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <MoreHorizontal className="w-5 h-5" />
            </button>

            {showMoreMenu && (
              <div className="absolute bottom-full right-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-48">
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200 transition-colors">
                  Edit Details
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200 transition-colors">
                  Duplicate
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
