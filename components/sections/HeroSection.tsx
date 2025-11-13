'use client';

import { useEffect, useRef, useState } from 'react';
import { Sparkles, Play } from 'lucide-react';
import { COLORS } from '@/constants';

interface VideoCardProps {
  platform: string;
  gradient: string;
  delay: number;
  caption: string;
  rotation: string;
  imageUrl: string;
}

function VideoCard({
  platform,
  gradient,
  delay,
  caption,
  rotation,
  imageUrl,
}: VideoCardProps) {
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
      }}
    >
      <div className={`w-36 sm:w-40 md:w-48 lg:w-56 h-56 sm:h-64 md:h-72 lg:h-80 rounded-2xl md:rounded-3xl p-0.5 bg-gradient-to-br ${gradient} shadow-2xl`}>
        <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden bg-white flex flex-col">
          <img
            src={imageUrl}
            alt={platform}
            className="w-full h-32 sm:h-36 md:h-44 lg:h-48 object-cover"
          />
          <div className="flex-1 p-2.5 sm:p-3 md:p-4 flex flex-col justify-between">
            <p className="text-xs sm:text-xs md:text-sm font-semibold text-gray-900">{platform}</p>
            <p className="text-xs text-gray-500 leading-tight text-left">{caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-blue-50 to-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
         <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              {/* <Sparkles className="w-4 h-4 flex-shrink-0" /> */}
              <span>AI-Powered Video Intelligence</span>
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            className={`transition-all duration-1000 order-2 lg:order-1 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              <span>AI-Powered Video Intelligence</span>
            </div> */}

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight sm:text-center lg:text-left">
              Your Videos.
            </h1>
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight sm:text-center lg:text-left">
            <span
                className={`text-transparent bg-clip-text bg-gradient-to-r`}
                style={{
                  backgroundImage: `linear-gradient(to right, ${COLORS.gradient.heroText.from}, ${COLORS.gradient.heroText.to})`,
                }}
              >
                Now Smarter
              </span>
            </div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0 mb-8 sm:mb-10">
              Upload once — LuminaCore AI generates campaigns, summaries, and
              insights that make every second of your video searchable,
              shareable, and monetizable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                {/* <Sparkles className="w-5 h-5" /> */}
                {/* Imag  */}
                
                Upload Videos
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-900 text-base font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                See how it works
              </button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 order-1 lg:order-2 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="flex items-end justify-center lg:justify-end gap-2 sm:gap-3 md:gap-4 lg:gap-6 -space-x-12 sm:-space-x-16 md:-space-x-20 lg:-space-x-28 perspective">
              <VideoCard
                platform="YouTube Shorts"
                gradient="from-orange-400 via-orange-500 to-orange-600"
                delay={0}
                caption="Perfectly cut vertical clip"
                rotation="-12"
                imageUrl="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
              />
              <VideoCard
                platform="TikTok"
                gradient="from-pink-400 via-pink-500 to-purple-600"
                delay={150}
                caption="Short ready"
                rotation="0"
                imageUrl="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
              />
              <VideoCard
                platform="Instagram Reels"
                gradient="from-purple-500 via-purple-600 to-purple-700"
                delay={300}
                caption="& tuned for alignment"
                rotation="10"
                imageUrl="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
