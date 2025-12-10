import { ChevronLeft, Zap } from 'lucide-react';
import PlatformTabs from './PlatformTabs';
// import PlatformTabs from '../components/PlatformTabs';

interface VideoDetailProps {
  videoId: number;
  onBack: () => void;
  onComplete: () => void;
}

const projectData: { [key: number]: { name: string; description: string } } = {
  1: {
    name: 'Q4 Product Launch',
    description:
      'LuminaCore AI analyzed comprehensive product launch video and generated 10 platform-ready clips in 2 languages for maximum reach and engagement across all social channels.',
  },
  2: {
    name: 'Customer Success Stories',
    description:
      'Powerful customer testimonials and success stories analyzed and optimized into engaging clips perfect for social media marketing and client demonstrations.',
  },
  3: {
    name: 'Internal Training Series',
    description:
      'Training content segmented into focused, easy-to-digest clips for employee onboarding and continuous learning programs.',
  },
};

export default function VideoDetail({ videoId, onComplete, onBack }: VideoDetailProps) {
  const project = projectData[videoId] || projectData[1];
//   function onBack() {
//     window.history.back();
//   }
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-9xl mx-auto px-6 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 font-medium transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to All Videos
        </button>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-gray-900">{project.name}</h1>
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-md">
              AI-Gen
            </span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            <Zap className="w-4 h-4" />
            Regenerate
          </button>
        </div>

        <div className="bg-white rounded-xl border border-gray-300 overflow-hidden mb-8">
          <div className="aspect-video bg-blue-100 flex items-center justify-center">
            <svg className="w-16 h-16 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>

          <div className="p-6 space-y-4">
            <p className="text-sm text-gray-600">{project.description}</p>

            <div className="flex items-center justify-between py-4 border-t border-b border-gray-200">
              <div>
                <p className="text-sm text-gray-600 mb-1">Duration: 47 minutes</p>
                <p className="text-xs text-gray-500">Video ID: d85ccaaf-167e-4324-be58-e83d7241779</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">Uploaded: Nov 27, 2025 at 10:30 AM</p>
                <p className="text-xs text-gray-500">Type: Presentation</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                Processing Complete
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <PlatformTabs />
        </div>
      </div>
    </div>
  );
}
