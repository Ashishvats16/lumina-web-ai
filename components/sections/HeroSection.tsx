"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COLORS } from "@/constants";
import logo1 from "../../public/assets/icons/card 1.svg";
import logo2 from "../../public/assets/icons/card 2.svg";
import logo3 from "../../public/assets/icons/card 3.svg";
import Image from "next/image";

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
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2  rounded-full text-sm font-medium mb-6 sm:mb-8">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Video Intelligence</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-[140%] tracking-[8%] font-poppins font-medium">
              Your Videos.
              <br />
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r`}
                style={{
                  backgroundImage: `linear-gradient(to right, ${COLORS.gradient.heroText.from}, ${COLORS.gradient.heroText.to})`,
                }}
              >
                Now Smarter
              </span>
            </h1>
            <p className="font-inter font-normal text-lg leading-[120%] tracking-[0.08em] text-gray-600 mb-8 sm:mb-10 max-w-2xl">
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
                ? "opacity-0100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative flex items-center justify-end">
              <div className="flex items-end justify-center perspective-1000 space-x-[-60px] sm:space-x-[-80px]">
                <VideoCard
                  platform="YouTube Shorts"
                  color="from-orange-400 to-orange-600"
                  delay={0}
                  caption="Perfectly cut vertical clip"
                  rotation="-10"
                  ZIdxVal="5"
                />
                <VideoCard
                  platform="TikTok"
                  color="from-purple-400 to-purple-600"
                  delay={200}
                  caption="short ready"
                  rotation="0"
                  ZIdxVal="4"
                />
                <VideoCard
                  platform="Instagram Reels"
                  color="from-pink-400 to-purple-600"
                  delay={400}
                  caption="d & filmed for dpement"
                  rotation="8"
                  ZIdxVal="3"
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
  ZIdxVal: string;
}

// function VideoCard({
//   platform,
//   color,
//   delay,
//   caption,
//   rotation,
//   ZIdxVal,
// }: VideoCardProps) {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), delay);
//     return () => clearTimeout(timer);
//   }, [delay]);

//   return (
//     <div
//       className={`relative transform transition-all duration-1000 hover:scale-105 hover:rotate-0 ${
//         isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
//       }`}
//       style={{
//         transform: `rotate(${rotation}deg)`,
//         transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
//         zIndex: ZIdxVal,
//       }}
//     >
//       <div
//         className={`w-48 sm:w-56 h-80 sm:h-96 rounded-3xl bg-gradient-to-br ${color} p-1 shadow-2xl`}
//       >
//                 <Image src={logo1} alt="Logo" fill className="object-contain" />


       
//       </div>
//     </div>
//   );
// }


function VideoCard({
  platform,
  color,
  delay,
  caption,
  rotation,
  ZIdxVal,
}: VideoCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Select the logo based on platform (optional)
  const logoMap: Record<string, any> = {
    "YouTube Shorts": logo1,
    TikTok: logo2,
    "Instagram Reels": logo3,
  };
  const logoSrc = logoMap[platform];

  return (
    <div
      className={`relative transform transition-all duration-1000 hover:scale-105 hover:rotate-0 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
      style={{
        // transform: `rotate(${rotation}deg)`,
        // transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        zIndex: ZIdxVal,
      }}
    >
      <div
        className={`w-68  sm:w-64 h-80 sm:h-96 rounded-3xl  p-1 relative`}
      >
        {/* Image fills the entire card */}
        <Image
          src={logoSrc}
          alt={`${platform} Logo`}
          fill
          className="object-cover rounded-3xl"
        />

        {/* Overlay content */}
        <div className="absolute top-4 left-4 right-4">
          {/* <div className="text-xs font-semibold text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
            {platform}
          </div> */}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          {/* <p className="text-xs text-white font-medium leading-relaxed">
            {caption}
          </p> */}
        </div>
      </div>
    </div>
  );
}
