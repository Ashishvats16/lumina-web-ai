"use client";

import Image from "next/image";
import { Play, Smile, Clapperboard, Zap, Star } from "lucide-react";
import vidImg from "@/public/assets/icons/demo1.jpg";
import leftimg from "@/public/assets/icons/snapchat video.svg";
import centerleft from "@/public/assets/icons/tik tok video.svg";
import centerImg from "@/public/assets/icons/twitterSh.svg";
import centerright from "@/public/assets/icons/youtube shorts video.svg";
import rightimg from "@/public/assets/icons/Frame 33.svg";

import twitterIcon from "@/public/assets/icons/X icon.svg";
import reelicon from "@/public/assets/icons/instagram reel icon.svg";

import ytIcon from "@/public/assets/icons/youtube shorts icon.svg";
import snapicon from "@/public/assets/icons/snapchat icon (1).svg";
import tiktokIcon from "@/public/assets/icons/tik tok icon.svg";


export default function HeroCTA() {
  return (
    <div className="relative w-full bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-32 sm:py-8 lg:py-32">
      <div className="w-full max-w-6xl mx-auto">
        <div className="relative">
          <div className="mb-2 sm:mb-2 left-[40%] absolute -top-10 z-10">
            <div className="inline-block relative">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-4 sm:border-6 border-white">
                <Image
                  src={vidImg}
                  alt="Hero content"
                  className="w-32 sm:w-40 lg:w-48 h-20 sm:h-24 lg:h-28 object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-red-600 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-lg flex items-center gap-1 shadow-lg">
                <Play className="w-3 h-3 sm:w-4 sm:h-4 fill-white" />
                1h20m
              </div>
            </div>
          </div>
          <div className="bg-[#DDDDDF33] rounded-[2rem] sm:rounded-[2.5rem] shadow-[1px_2px_4px_4px_rgba(0,0,0,0.05),_0px_-2px_2px_0px_rgba(0,0,0,0.1)_inset] backdrop-blur-[10px] px-2 sm:px-4 lg:px-6">
            <div className="flex flex-col items-center justify-center relative z-10 top-20 sm:top-48 lg:top-40">
              {/* Heading */}
              <div className="text-center mb-2 sm:mb-4">
                {/* Heading 1 */}
                <h1
                  className="
    font-inter font-semibold text-black mb-2 text-center
    text-4xl sm:text-5xl lg:text-[48px] 
    leading-tight sm:leading-tight lg:leading-[48px]
    tracking-normal sm:tracking-normal lg:tracking-[0.21rem]
  "
                >
                  Early access pricing
                </h1>

                {/* Heading 2 */}
                <h2
                  className="
    font-inter font-semibold text-center mb-6 sm:mb-8
    bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent
    text-4xl sm:text-5xl lg:text-[48px]
    leading-tight sm:leading-tight lg:leading-[48px]
    tracking-normal sm:tracking-normal lg:tracking-[0.21rem]
  "
                >
                  {/* video content work smarter */}
                </h2>

                {/* Paragraph */}
             <p
  className="
    font-inter font-normal text-[18px] text-gray-600 text-center
    leading-[2rem] tracking-[0.07em] max-w-2xl mx-auto
  "
>
  We’re currently onboarding early users with founder-friendly pricing and close product support.
  <br className="block sm:block" />
  Flexible plans for individual creators and small teams.
  <br className="block sm:block" />
  Custom options for agencies and enterprises
</p>

              </div>

              {/* CTA Button */}
              <button className="px-8 sm:px-10 lg:px-12 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-400 text-white text-base sm:text-lg font-semibold rounded-2xl hover:from-blue-600 hover:to-blue-500 transition-all shadow-lg hover:shadow-xl">
               Talk to us about pricing
              </button>
            </div>

            {/* Floating Cards */}
            <div className="relative h-[16rem] sm:h-[28rem] lg:h-[32rem] mt-8 sm:mt-12 lg:mt-16 flex items-center justify-center">
              {/* Card container */}
              <div className="relative w-full max-w-5xl flex justify-between items-center px-0 lg:px-2 h-full sm:px-0 sm:min-w-3xl ">
                {/* Left card */}
                <div className="relative animate-pulse bottom-8 sm:bottom-8 lg:bottom-12">
                  <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white w-16 sm:w-28 lg:w-36 h-24 sm:h-40 lg:h-52 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 ">
                    <Image
                      src={leftimg}
                      alt="snapchat-card-left"
                      width={300}
                      height={400}
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
              <div className="absolute sm:-top-8 lg:-top-8 -top-10 left-1/2 -translate-x-1/2 rounded-full
                p-2">
  <Image
    src={snapicon}
    alt="IG reel badge"
    width={48}        // Intrinsic size (crisper on all screens)
    height={48}
    className="w-16 h-16 sm:w-12 sm:h-12 md:w-14 md:h-14"
  />
</div>
                </div>

                {/* Center-left card */}
                <div className="relative -bottom-6 sm:-bottom-16  lg:-bottom-16 ">
                  <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white w-16 sm:w-28 lg:w-36 h-24 sm:h-40 lg:h-52 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
                    <Image
                      src={centerleft}
                      alt="tiktok-card-center-left"
                      width={300}
                      height={400}
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                <div className="absolute sm:-top-8 lg:-top-8 -top-10 left-1/2 -translate-x-1/2 rounded-full
                p-2">
  <Image
    src={tiktokIcon}
    alt="IG reel badge"
    width={48}        // Intrinsic size (crisper on all screens)
    height={48}
    className="w-16 h-16 sm:w-12 sm:h-12 md:w-14 md:h-14"
  />
</div>
                </div>

                {/* Center card */}
                <div className="relative -bottom-20 sm:-bottom-36 lg:-bottom-40  ">
                  <div className=" rounded-3xl overflow-hidden shadow-xl border-4 sm:border-6 border-white w-16 sm:w-32 lg:w-40 h-28 sm:h-48 lg:h-60  ">
                    <Image
                      src={centerImg}
                      alt="Content card center"
                      width={400}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute sm:-top-8 lg:-top-8 -top-10 left-1/2 -translate-x-1/2 rounded-full
                p-2">
  <Image
    src={twitterIcon}
    alt="IG reel badge"
    width={48}        // Intrinsic size (crisper on all screens)
    height={48}
    className="w-16 h-16 sm:w-12 sm:h-12 md:w-14 md:h-14"
  />
</div>
                </div>

                {/* Center-right card */}
                <div className="relative -bottom-6 sm:-bottom-12 lg:-bottom-12 ">
                  <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white w-16 sm:w-28 lg:w-36 h-24 sm:h-40 lg:h-52 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 ">
                    <Image
                      src={centerright}
                      alt="Content card center-right"
                      width={300}
                      height={400}
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
           <div className="absolute sm:-top-8 lg:-top-8 -top-10 left-1/2 -translate-x-1/2 rounded-full
                p-2">
  <Image
    src={ytIcon}
    alt="IG reel badge"
    width={48}        // Intrinsic size (crisper on all screens)
    height={48}
    className="w-16 h-16 sm:w-12 sm:h-12 md:w-14 md:h-14"
  />
</div>

                </div>

                {/* Right card */}
               <div className="relative animate-pulse bottom-8 sm:bottom-8 lg:bottom-12">
  <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white w-16 sm:w-28 lg:w-36 h-24 sm:h-40 lg:h-52 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 ">
    <Image
      src={rightimg}
      alt="Content card right"
      width={300}
      height={400}
      className="w-full h-full object-cover opacity-90"
    />
  </div>

<div className="absolute sm:-top-8 lg:-top-8 -top-10 left-1/2 -translate-x-1/2 rounded-full
                p-2">
  <Image
    src={reelicon}
    alt="IG reel badge"
    width={48}        // Intrinsic size (crisper on all screens)
    height={48}
    className="w-16 h-16 sm:w-12 sm:h-12 md:w-14 md:h-14"
  />
</div>

</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
