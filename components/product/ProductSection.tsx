"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Sparkles, Clock, Zap } from "lucide-react"
import instaReel from '../../public/assets/icons/instagram-reel-vertical-video-fashion-content-crea.jpg'
import shortClip from '../../public/assets/icons/youtube-shorts-vertical-video-trending-podcast-cli.jpg'
import Image from "next/image"
export function ProductHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EEF4FF] via-white to-[#F0F7FF]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#3B82F6]/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20">
              <Sparkles className="h-4 w-4 text-[#3B82F6]" />
              <span className="text-sm font-medium text-[#3B82F6]">AI-Powered Video Intelligence</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Transform hours of video into <span className="text-[#3B82F6]">powerful content</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Upload once, get everything. LuminaCore AI turns your long-form videos into campaigns, clips, summaries,
              and searchable insights — automatically.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#3B82F6] text-white hover:bg-[#2563EB] gap-2 px-8 h-14 text-base shadow-lg shadow-[#3B82F6]/25"
              >
                Get Early Access
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 px-8 h-14 text-base bg-white border-gray-200 hover:bg-gray-50"
              >
                <Play className="h-5 w-5 text-[#3B82F6]" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-foreground">2hrs</div>
                <div className="text-sm text-muted-foreground">Max video length</div>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Output formats</div>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <div className="text-2xl font-bold text-foreground">90%</div>
                <div className="text-sm text-muted-foreground">Time saved</div>
              </div>
            </div>
          </div>

          {/* Right Column - Video Frame with Surrounding Cards */}
          <div className="relative lg:pl-4">
            <div className="relative">
              {/* Top Row Cards */}
              <div className="flex justify-center gap-3 mb-3">
                {/* Clip Card 1 */}
                <div
                  className="w-24 h-32 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-float"
                  style={{ animationDelay: "0s" }}
                >
                  <div className="relative h-full">
                    <Image 
                        src={instaReel}
                        alt="Instagram Reel Clip"
                        className="w-full h-full object-cover"
                        width={100}
                        height={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="text-[10px] font-bold text-white uppercase tracking-wide">Reel</span>
                      <div className="text-[8px] text-white/80">0:32</div>
                    </div>
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-2.5 h-2.5 text-purple-600 ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Clip Card 2 */}
                <div
                  className="w-24 h-32 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white hover:scale-105 transition-all duration-300 animate-float"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="relative h-full">
                    {/* <img src="/youtube-shorts-vertical-video-trending-podcast-cli.jpg" alt="Short clip" className="w-full h-full object-cover" /> */}
                         <Image 
                        src={shortClip}
                        alt="Short Clip"
                        className="w-full h-full object-cover"
                        width={100}
                        height={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="text-[10px] font-bold text-white uppercase tracking-wide">Short</span>
                      <div className="text-[8px] text-white/80">0:58</div>
                    </div>
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-2.5 h-2.5 text-red-600 ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Clip Card 3 */}
                <div
                  className="w-24 h-32 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-float"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="relative h-full">
                    <img src="../../../../../../assets/icons/tiktok-vertical-video-creative-entertainment-dance.jpg" alt="TikTok clip" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="text-[10px] font-bold text-white uppercase tracking-wide">TikTok</span>
                      <div className="text-[8px] text-white/80">0:45</div>
                    </div>
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-2.5 h-2.5 text-black ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Row - Left Card + Main Video + Right Card */}
              <div className="flex items-center gap-3">
                {/* Left Side Card - Summaries */}
                <div
                  className="w-28 flex-shrink-0 rounded-xl overflow-hidden shadow-xl border-2 border-white bg-white transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-float"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="relative">
                    <img src="../../../../../../assets/icons/document-text-summary-notes-executive-brief.jpg" alt="Summary document" className="w-full h-20 object-cover" />
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

                {/* Main Video Frame */}
                <div className="flex-1 relative bg-white rounded-2xl shadow-2xl shadow-black/15 border border-gray-100 overflow-hidden">
                  {/* Video Header Bar */}
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

                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                    <img
                      src="../../../../../../assets/icons/professional-business-keynote-presentation-speaker.jpg"
                      alt="Long-form video content"
                      className="w-full h-full object-cover"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-[#3B82F6] ml-1" fill="#3B82F6" />
                      </div>
                    </div>
                    {/* Duration Badge */}
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-sm text-white text-xs font-semibold">
                      2:14:32
                    </div>
                    {/* Processing Indicator */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#3B82F6] text-white text-[10px] font-semibold">
                      <Zap className="w-3 h-3" />
                      AI Processing
                    </div>
                  </div>
                </div>

                {/* Right Side Card - Searchable Insights */}
                <div
                  className="w-28 flex-shrink-0 rounded-xl overflow-hidden shadow-xl border-2 border-white bg-white transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-float"
                  style={{ animationDelay: "0.8s" }}
                >
                  <div className="relative">
                    <img
                      src="../../../../../../assets/icons/search-magnifying-glass-data-analytics-insights.jpg"
                      alt="Searchable insights"
                      className="w-full h-20 object-cover"
                    />
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

              {/* Bottom Row Cards */}
              <div className="flex justify-center gap-3 mt-3">
                {/* Campaign Card */}
                <div
                  className="w-32 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="relative h-20">
                    <img src="../../../../../../assets/icons/social-media-marketing-campaign-multi-platform-con.jpg" alt="Campaign" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-600/90 to-violet-600/20" />
                    <div className="absolute bottom-2 left-2">
                      <span className="text-[10px] font-bold text-white uppercase tracking-wide">Campaign</span>
                    </div>
                  </div>
                  <div className="p-2 bg-white">
                    <div className="text-[9px] font-medium text-gray-800">12 clips ready</div>
                    <div className="flex gap-1 mt-1">
                      <span className="px-1.5 py-0.5 text-[7px] font-semibold rounded bg-purple-100 text-purple-600">
                        Reel
                      </span>
                      <span className="px-1.5 py-0.5 text-[7px] font-semibold rounded bg-red-100 text-red-600">
                        Short
                      </span>
                      <span className="px-1.5 py-0.5 text-[7px] font-semibold rounded bg-gray-100 text-gray-600">
                        TikTok
                      </span>
                    </div>
                  </div>
                </div>

                {/* Chapters Card */}
                <div
                  className="w-36 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white hover:scale-105 transition-all duration-300 animate-float"
                  style={{ animationDelay: "1.2s" }}
                >
                  <div className="relative h-20">
                    <img src="../../../../../../assets/icons/video-chapters-timeline-segments-bookmark-sections.jpg" alt="Chapters" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-600/90 to-orange-600/20" />
                    <div className="absolute bottom-2 left-2">
                      <span className="text-[10px] font-bold text-white uppercase tracking-wide">Chapters</span>
                    </div>
                  </div>
                  <div className="p-2 bg-white">
                    <div className="text-[9px] font-medium text-gray-800">8 Sections</div>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 h-1.5 rounded-full bg-orange-400"
                          style={{ opacity: 0.4 + i * 0.08 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Story Card */}
                <div
                  className="w-24 h-32 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-float"
                  style={{ animationDelay: "1.4s" }}
                >
                  <div className="relative h-full">
                    <img src="../../../../../../assets/icons/instagram-story-vertical-video-highlights-moments.jpg" alt="Story clip" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-600/80 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="text-[10px] font-bold text-white uppercase tracking-wide">Story</span>
                      <div className="text-[8px] text-white/80">0:15</div>
                    </div>
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-2.5 h-2.5 text-pink-600 ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
