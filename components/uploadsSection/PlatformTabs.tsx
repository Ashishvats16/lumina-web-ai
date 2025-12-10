import { useState } from 'react';
import VideoCard from './VideoCard';
// import VideoCard from './VideoCard';

type Platform = 'instagram' | 'tiktok' | 'youtube' | 'facebook';

interface ContentData {
  type: string;
  items: Array<{
    title: string;
    duration: string;
    caption: string;
  }>;
}

interface PlatformContent {
  [key: string]: ContentData;
}

const platformContent: { [key in Platform]: PlatformContent } = {
  instagram: {
    'Instagram Reel': {
      type: 'Instagram Reel',
      items: [
        {
          title: 'Q4 Product Reel',
          duration: '36s',
          caption: 'Ready to take your business to the next level with AI? 🚀',
        },
        {
          title: 'Q4 Product Reel',
          duration: '36s',
          caption: 'AI is the end answer all and yet an AI is 5 min short 🚀',
        },
      ],
    },
    'Instagram Stories': {
      type: 'Instagram Stories',
      items: [
        {
          title: 'Q4 Product Reel',
          duration: '25s',
          caption: 'Ready to take your business to the next level with AI? 🚀',
        },
        {
          title: 'Q4 Product Reel',
          duration: '25s',
          caption: 'AI is the end answer all and yet an AI is 5 min short 🚀',
        },
      ],
    },
  },
  tiktok: {
    'TikTok Videos': {
      type: 'TikTok Videos',
      items: [
        {
          title: 'Q4 Product Reel',
          duration: '60s',
          caption: 'Ready to take your business to the next level with AI? 🚀',
        },
        {
          title: 'Q4 Product Reel',
          duration: '60s',
          caption: 'AI is the end answer all and yet an AI is 5 min short 🚀',
        },
      ],
    },
  },
  youtube: {
    'YouTube Shorts': {
      type: 'YouTube Shorts',
      items: [
        {
          title: 'Q4 Product Reel',
          duration: '60s',
          caption: 'Ready to take your business to the next level with AI? 🚀',
        },
        {
          title: 'Q4 Product Reel',
          duration: '60s',
          caption: 'AI is the end answer all and yet an AI is 5 min short 🚀',
        },
      ],
    },
    'Full Videos': {
      type: 'Full Videos',
      items: [
        {
          title: 'Q4 Product Reel',
          duration: '10m',
          caption: 'Ready to take your business to the next level with AI? 🚀',
        },
        {
          title: 'Q4 Product Reel',
          duration: '10m',
          caption: 'AI is the end answer all and yet an AI is 5 min short 🚀',
        },
      ],
    },
  },
  facebook: {
    'Facebook Videos': {
      type: 'Facebook Videos',
      items: [
        {
          title: 'Q4 Product Reel',
          duration: '45s',
          caption: 'Ready to take your business to the next level with AI? 🚀',
        },
        {
          title: 'Q4 Product Reel',
          duration: '45s',
          caption: 'AI is the end answer all and yet an AI is 5 min short 🚀',
        },
      ],
    },
  },
};

export default function PlatformTabs() {
  const [activePlatform, setActivePlatform] = useState<Platform>('instagram');

  const platforms: { key: Platform; label: string }[] = [
    { key: 'instagram', label: 'Instagram' },
    { key: 'tiktok', label: 'Tik Tok' },
    { key: 'youtube', label: 'YouTube' },
    { key: 'facebook', label: 'Facebook' },
  ];

  return (
    <div>
      <div className="flex gap-6 mb-8 border-b border-gray-200">
        {platforms.map((platform) => (
          <button
            key={platform.key}
            onClick={() => setActivePlatform(platform.key)}
            className={`pb-3 font-medium text-sm transition-colors ${
              activePlatform === platform.key
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {platform.label}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {Object.entries(platformContent[activePlatform]).map(([_, content]) => (
          <div key={content.type}>
            <h3 className="text-lg font-bold text-gray-900 mb-5">{content.type}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.items.map((item, index) => (
                <VideoCard
                  key={index}
                  title={item.title}
                  duration={item.duration}
                  caption={item.caption}
                  durationTag={index === 0 ? 'Draft' : 'Draft'}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
