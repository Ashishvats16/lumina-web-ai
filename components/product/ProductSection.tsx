"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Sparkles, Clock, Zap } from "lucide-react"
import Image from "next/image"

import instaReel from '../../public/assets/icons/instagram-reel-vertical-video-fashion-content-crea.jpg'
import shortClip from '../../public/assets/icons/youtube-shorts-vertical-video-trending-podcast-cli.jpg'
import tiktokClip from '../../public/assets/icons/tiktok-vertical-video-creative-entertainment-dance.jpg'
import summaryDoc from '../../public/assets/icons/document-text-summary-notes-executive-brief.jpg'
import mainVideo from '../../public/assets/icons/professional-business-keynote-presentation-speaker.jpg'
import searchInsight from '../../public/assets/icons/search-magnifying-glass-data-analytics-insights.jpg'
import campaign from '../../public/assets/icons/social-media-marketing-campaign-multi-platform-con.jpg'
import chapters from '../../public/assets/icons/video-chapters-timeline-segments-bookmark-sections.jpg'
import storyClip from '../../public/assets/icons/instagram-story-vertical-video-highlights-moments.jpg'

export function ProductHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center overflow-visible pt-24 pb-16 px-4 lg:px-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EEF4FF] via-white to-[#F0F7FF]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#3B82F6]/5 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Column */}
        <div className="flex-1 space-y-6 lg:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20">
            <Sparkles className="h-4 w-4 text-[#3B82F6]" />
            <span className="text-sm font-medium text-[#3B82F6]">AI-Powered Video Intelligence</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[1.1] text-foreground">
            Transform hours of video into <span className="text-[#3B82F6]">powerful content</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-md lg:max-w-lg leading-relaxed">
            Upload once, get everything. LuminaCore AI turns your long-form videos into campaigns, clips, summaries,
            and searchable insights — automatically.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#3B82F6] text-white hover:bg-[#2563EB] gap-2 px-6 sm:px-8 h-12 sm:h-14 text-base shadow-lg shadow-[#3B82F6]/25"
            >
              Get Early Access
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 px-6 sm:px-8 h-12 sm:h-14 text-base bg-white border-gray-200 hover:bg-gray-50"
            >
              <Play className="h-5 w-5 text-[#3B82F6]" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 pt-4 text-sm sm:text-base">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-foreground">2hrs</span>
              <span className="text-muted-foreground">Max video length</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-foreground">10+</span>
              <span className="text-muted-foreground">Output formats</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-foreground">90%</span>
              <span className="text-muted-foreground">Time saved</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-4 lg:gap-6">
          {/* Top Row Clips */}
          <div className="flex justify-center gap-3 flex-wrap lg:flex-nowrap">
            {[instaReel, shortClip, tiktokClip].map((clip, i) => (
              <div
                key={i}
                className={`w-20 sm:w-24 h-28 sm:h-32 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white transform hover:scale-105 transition-all duration-300 animate-float ${
                  i === 0 ? '-rotate-3' : i === 2 ? 'rotate-3' : ''
                }`}
              >
                <div className="relative h-full">
                  <Image src={clip} alt={`Clip ${i}`} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-wide">
                      {i === 0 ? 'Reel' : i === 1 ? 'Short' : 'TikTok'}
                    </span>
                    <div className="text-[7px] sm:text-[8px] text-white/80">
                      {i === 0 ? '0:32' : i === 1 ? '0:58' : '0:45'}
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/90 flex items-center justify-center">
                    <Play className={`w-2.5 h-2.5 ${i === 0 ? 'text-purple-600' : i === 1 ? 'text-red-600' : 'text-black'}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Row */}
          <div className="flex flex-col lg:flex-row gap-3">
            {/* Left Card */}
            <div className="w-28 sm:w-32 flex-shrink-0 rounded-xl overflow-hidden shadow-xl border-2 border-white bg-white transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-float ">
              <div className="relative h-20">
                <Image src={summaryDoc} alt="Summary" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/90 to-emerald-600/20" />
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wide">Summary</span>
                </div>
              </div>
              <div className="p-2 bg-white">
                <div className="text-[9px] font-medium text-gray-800 line-clamp-2">Executive Brief</div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex-1 h-1 bg-emerald-100 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-emerald-500 rounded-full" />
                  </div>
                  <span className="text-[8px] text-emerald-600 font-medium">60s</span>
                </div>
              </div>
            </div>

            {/* Main Video */}
            <div className="flex-1 relative bg-white rounded-2xl shadow-2xl shadow-black/15 border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[10px] text-gray-500 ml-2 font-medium">Source Video</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-medium">
                  <Clock className="w-3 h-3" />
                  <span>2:14:32</span>
                </div>
              </div>

              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                <Image src={mainVideo} alt="Main video" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-sm text-white text-xs font-semibold">
                  2:14:32
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#3B82F6] text-white text-[10px] font-semibold">
                  <Zap className="w-3 h-3" />
                  AI Processing
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="w-28 sm:w-32 flex-shrink-0 rounded-xl overflow-hidden shadow-xl border-2 border-white bg-white transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-float">
              <div className="relative h-20">
                <Image src={searchInsight} alt="Search" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/90 to-[#3B82F6]/20" />
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wide">Search</span>
                </div>
              </div>
              <div className="p-2 bg-white">
                <div className="text-[9px] font-medium text-gray-800">47 Key Moments</div>
                <div className="mt-1 px-1.5 py-1 rounded bg-gray-100 text-[8px] text-gray-500 truncate">
                  "product launch..."
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-center gap-3 flex-wrap lg:flex-nowrap mt-3">
            {[campaign, chapters, storyClip].map((item, i) => (
              <div
                key={i}
                className={`w-24 sm:w-32 h-28 sm:h-32 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white transform hover:scale-105 transition-all duration-300 animate-float ${
                  i === 0 ? '-rotate-2' : i === 1 ? '' : 'rotate-2'
                }`}
              >
                <div className="relative h-full">
                  <Image src={item} alt={`Card ${i}`} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-wide">
                      {i === 0 ? 'Campaign' : i === 1 ? 'Chapters' : 'Story'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
