'use client';

import { useEffect, useRef, useState } from 'react';
import { Sparkles, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 sm:mb-8">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Video Intelligence</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
              Your Videos.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Now Smarter
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
              Upload once — LuminaCore AI generates campaigns, summaries, and
              insights that make every second of your video searchable,
              shareable, and monetizable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-6 text-base font-medium shadow-xl shadow-blue-600/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/30 hover:scale-105"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Transform My Content
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-8 py-6 text-base font-medium border-2 hover:bg-gray-50 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                See how it works
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative flex items-center justify-end">
              <div className="flex items-end justify-center gap-2 sm:gap-3 lg:gap-4 perspective-1000">
                <VideoCard
                  platform="YouTube Shorts"
                  color="from-orange-400 to-orange-600"
                  delay={0}
                  caption="Perfectly cut vertical clip"
                  rotation="-12"
                />
                <VideoCard
                  platform="TikTok"
                  color="from-purple-400 to-purple-600"
                  delay={200}
                  caption="short ready"
                  rotation="0"
                />
                <VideoCard
                  platform="Instagram Reels"
                  color="from-pink-400 to-purple-600"
                  delay={400}
                  caption="d & filmed for dpement"
                  rotation="12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface VideoCardProps {
  platform: string;
  color: string;
  delay: number;
  caption: string;
  rotation: string;
}

function VideoCard({ platform, color, delay, caption, rotation }: VideoCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`relative transform transition-all duration-1000 hover:scale-105 hover:rotate-0 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div
        className={`w-40 sm:w-48 lg:w-52 h-72 sm:h-80 lg:h-96 rounded-3xl bg-gradient-to-br ${color} p-1.5 shadow-2xl`}
      >
        <div className="w-full h-full rounded-3xl relative overflow-hidden flex flex-col">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />

          <div className="relative flex-1 flex items-center justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white/10 backdrop-blur-sm rounded-2xl" />
          </div>

          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4">
            <div className="text-xs sm:text-sm font-semibold text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full inline-block">
              {platform}
            </div>
          </div>

          <div className="relative mt-auto pb-4 sm:pb-5 px-3 sm:px-4 bg-gradient-to-t from-black/60 to-transparent pt-8">
            <p className="text-xs sm:text-sm text-white font-medium leading-tight">
              {caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
