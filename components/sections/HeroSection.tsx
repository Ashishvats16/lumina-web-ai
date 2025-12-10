"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, Play } from "lucide-react";
import { COLORS } from "@/constants";
import img1 from "../../public/assets/icons/card 1.svg";
import img2 from "../../public/assets/icons/card 2.svg";
import img3 from "../../public/assets/icons/card 3.svg";
import Image from "next/image";

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
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div
        className={`w-36 sm:w-40 md:w-48 lg:w-56 h-56 sm:h-64 md:h-72 lg:h-80 rounded-2xl md:rounded-3xl p-0.5`}
      >
        <Image
          src={imageUrl}
          alt={platform}
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
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
      className="relative w-full bg-gradient-to-b from-blue-50 to-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden "
    >
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-48 pointer-events-none">
 
        <div
  className="absolute inset-0 hidden lg:block sm:block"
  style={{
    background: `radial-gradient(ellipse 80% 100% at 50% 100%, rgba(59, 131, 246, 0.7) 0%, rgba(59, 131, 246, 0.34) 40%, transparent 70%)`,
    backdropFilter: 'blur(210.6px)',
  }}
></div>

      </div>

      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1.5 my-4 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
          <span>AI-Powered Video Intelligence</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[60%_38%] gap-8 lg:gap-12 items-center">
          <div
            className={`transition-all order-2 lg:order-1 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
<div className="mb-6 sm:mb-8 text-center lg:text-left">
  <span
    className="font-poppins font-bold text-4xl sm:text-5xl lg:text-[48px] leading-[65px] lg:leading-[70px] tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r"
    style={{
      backgroundImage: `linear-gradient(to right, ${COLORS.gradient.heroText.from}, ${COLORS.gradient.heroText.to})`,
    }}
  >
    Turn long videos into campaigns & summaries in minutes.
  </span>
</div>



            <p className=" font-inter font-normal text-[18px] leading-[27px] tracking-[0.08em] text-gray-600 min-w-fit sm:min-w-fit lg:min-w-[80%] max-w-md mx-auto lg:mx-0 mb-8 sm:mb-10 text-center lg:text-left">
              LuminaCore AI transforms webinars, trainings, podcasts, and events into ready-to-publish clips, captions, summaries, and multilingual subtitles - so your team ships more content with less effort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">

                Get early access
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-900 text-base font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch 2 min demo
              </button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 order-1 lg:order-2  ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="flex items-end justify-center lg:justify-end gap-2 sm:gap-3 md:gap-4 lg:gap-6 -space-x-12 sm:-space-x-16 md:-space-x-20 lg:-space-x-28 perspective">
              <VideoCard
                platform="YouTube Shorts"
                gradient="from-orange-400 via-orange-500 to-orange-600"
                delay={0}
                caption="Perfectly cut vertical clip"
                rotation="-12"
                imageUrl={img1}
              />
              <VideoCard
                platform="TikTok"
                gradient="from-pink-400 via-pink-500 to-purple-600"
                delay={150}
                caption="Short ready"
                rotation="0"
                imageUrl={img2}
              />
              <VideoCard
                platform="Instagram Reels"
                gradient="from-purple-500 via-purple-600 to-purple-700"
                delay={300}
                caption="& tuned for alignment"
                rotation="10"
                imageUrl={img3}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
