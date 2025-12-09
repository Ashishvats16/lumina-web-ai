"use client"
import {
  Smartphone,
  Sparkles,
  ListChecks,
  BookOpen,
  Play,
  FileText,
  Zap,
  ArrowRight,
  CheckCircle2,
  Scissors,
  Layout,
  MessageSquareQuote,
  Megaphone,
  Palette,
  Clock,
  Target,
  Bookmark,
  Search,
  Globe,
} from "lucide-react"

const campaignFeatures = [
  {
    title: "Smart clip detection",
    description: "Finds impactful moments, not just time-based cuts.",
    icon: Scissors,
  },
  {
    title: "Platform-aware formats",
    description: "Suggestions for Reels, Shorts, TikTok-style clips, and stories.",
    icon: Layout,
  },
  {
    title: "Hook & caption generator",
    description: "Creates scroll-stopping openers and captions in your brand voice.",
    icon: MessageSquareQuote,
  },
  {
    title: "CTA & description ideas",
    description: "Suggests CTAs and supporting copy for posts, emails, and landing pages.",
    icon: Megaphone,
  },
  {
    title: "Branded outputs",
    description: "Consistent style across assets so it looks like your brand, not a template.",
    icon: Palette,
  },
]

const summarizationFeatures = [
  {
    title: "Short summaries of long sessions",
    description: "60–120 second read for a 60–90 minute video.",
    icon: Clock,
  },
  {
    title: "Key points & takeaways",
    description: "Bullet summaries for quick review.",
    icon: Target,
  },
  {
    title: "Chaptering & highlights",
    description: '"What happened when" across the timeline.',
    icon: Bookmark,
  },
  {
    title: "Searchable insights",
    description: "Find moments by topic, question, or speaker.",
    icon: Search,
  },
  {
    title: "Multilingual support",
    description: "Summaries and key points in multiple languages.",
    icon: Globe,
  },
]

// Campaign Engine Visualization Component
function CampaignVisualization() {
  return (
    <div className="relative w-full h-full min-h-[520px] rounded-3xl bg-gradient-to-br from-[#3B82F6]/10 via-[#3B82F6]/5 to-transparent p-6 border border-[#3B82F6]/20 overflow-hidden">
      {/* Main video source */}
      <div className="absolute top-6 left-6 w-56 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-3 py-1.5 flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <span className="text-[9px] text-gray-400">YouTube long video</span>
        </div>
        <div className="aspect-video relative overflow-hidden">
          <img
            src="../../../../../../assets/icons/woman-hosting-podcast-interview-pink-purple-studio.jpg"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Play className="w-4 h-4 text-[#3B82F6] fill-[#3B82F6] ml-0.5" />
            </div>
          </div>
          <div className="absolute bottom-2 left-2 bg-black/80 text-white text-[9px] px-1.5 py-0.5 rounded font-medium">
            45:32
          </div>
        </div>
      </div>

      {/* Upload progress card */}
      <div className="absolute top-6 right-6 w-40 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="w-4 h-4 text-[#3B82F6]" />
          <span className="text-[10px] font-semibold text-gray-800">Long video</span>
        </div>
        <p className="text-[9px] text-gray-500 mb-1.5">Video0012345.mp4</p>
        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full" />
        </div>
        <div className="flex items-center gap-1 mt-1.5">
          <CheckCircle2 className="w-3 h-3 text-green-500" />
          <span className="text-[9px] text-green-600 font-medium">Upload Complete</span>
        </div>
      </div>

      {/* Output clips grid */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-end justify-center">
        {/* Reel card */}
        <div className="relative w-28 h-44 rounded-2xl overflow-hidden shadow-2xl transform -rotate-12 -mr-6 hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-300 cursor-pointer z-10">
          <img
            src="../../../../../../assets/icons/instagram-reel-vertical-video-fashion-lifestyle.jpg"
            alt="Reel thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-violet-600/90 via-violet-500/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white py-2 text-center">
            <span className="text-xs font-bold text-gray-800">Reel</span>
          </div>
        </div>
        {/* Short card */}
        <div className="relative w-28 h-44 rounded-2xl overflow-hidden shadow-2xl transform -rotate-4 -mr-6 hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-300 cursor-pointer z-11">
          <img
            src="../../../../../../assets/icons/youtube-shorts-vertical-video-trending-content.jpg"
            alt="Short thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-600/90 via-rose-500/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white py-2 text-center">
            <span className="text-xs font-bold text-gray-800">Short</span>
          </div>
        </div>
        {/* TikTok card */}
        <div className="relative w-28 h-44 rounded-2xl overflow-hidden shadow-2xl transform rotate-4 -mr-6 hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-300 cursor-pointer z-12">
          <img
            src="../../../../../../assets/icons/tiktok-vertical-video-creative-dance-entertainment.jpg"
            alt="TikTok thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-600/90 via-orange-500/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white py-2 text-center">
            <span className="text-xs font-bold text-gray-800">TikTok</span>
          </div>
        </div>
        {/* Story card */}
        <div className="relative w-28 h-44 rounded-2xl overflow-hidden shadow-2xl transform rotate-12 hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-300 cursor-pointer z-13">
          <img
            src="../../../../../../assets/icons/instagram-story-vertical-video-highlights-moments.jpg"
            alt="Story thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-600/90 via-teal-500/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white py-2 text-center">
            <span className="text-xs font-bold text-gray-800">Story</span>
          </div>
        </div>
      </div>

      {/* Connecting arrows/flow */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 520">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
          </marker>
        </defs>
        <path
          d="M 200 160 Q 280 200, 260 300"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeDasharray="8 6"
          fill="none"
          markerEnd="url(#arrowhead)"
          opacity="0.6"
        />
      </svg>
    </div>
  )
}

// Summarization Engine Visualization Component
function SummarizationVisualization() {
  return (
    <div className="relative w-full h-full min-h-[500px] rounded-3xl bg-gradient-to-br from-[#3B82F6]/10 via-[#3B82F6]/5 to-transparent p-8 border border-[#3B82F6]/20 overflow-hidden">
      {/* Video player */}
      <div className="absolute top-8 left-8 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-3 py-2 flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <span className="text-[10px] text-gray-400">YouTube long video</span>
        </div>
        <div className="aspect-video relative overflow-hidden">
          <img
            src="../../../../../../assets/icons/business-webinar-presentation-conference-meeting-p.jpg"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Play className="w-5 h-5 text-[#3B82F6] fill-[#3B82F6] ml-0.5" />
            </div>
          </div>
          <div className="absolute bottom-2 left-2 flex items-center gap-2">
            <div className="bg-red-600 text-white text-[9px] px-1.5 py-0.5 rounded flex items-center gap-1 font-medium">
              <Play className="w-2 h-2 fill-white" />
              1h20m
            </div>
          </div>
        </div>
      </div>

      {/* Summaries panel */}
      <div className="absolute top-16 right-6 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-100">
          <h4 className="text-xs font-bold text-gray-800">Summaries</h4>
          <p className="text-[9px] text-gray-500">AI-powered intelligent summaries</p>
        </div>
        <div className="p-4 space-y-3">
          <div className="space-y-2">
            <div className="text-[9px] font-medium text-gray-600">Product_Launch_2024.mp4</div>
            <div className="flex gap-1">
              <span className="px-2 py-0.5 bg-[#3B82F6]/10 text-[#3B82F6] text-[8px] rounded-full">Smart Summary</span>
              <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[8px] rounded-full">Chronological</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-[9px] text-gray-500">Summary Length</div>
            <div className="w-full h-1 bg-gray-100 rounded-full">
              <div className="h-full w-1/3 bg-[#3B82F6] rounded-full" />
            </div>
          </div>
          <div className="pt-2 border-t border-gray-100 space-y-1">
            <p className="text-[8px] text-gray-600 leading-relaxed">
              This video provides a comprehensive overview of the Q4 2024 product launch, introducing three major
              features designed to...
            </p>
            <p className="text-[8px] text-gray-600 leading-relaxed">
              The presentation covers market analysis, competitive positioning, and a detailed roadmap for enterprise
              clients...
            </p>
          </div>
        </div>
      </div>

      {/* Key points card */}
      <div className="absolute bottom-8 left-8 w-64 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <ListChecks className="w-4 h-4 text-[#3B82F6]" />
          <span className="text-xs font-semibold text-gray-800">Key Takeaways</span>
        </div>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-1.5" />
            <span className="text-[10px] text-gray-600">3 new features launched for Q4</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-1.5" />
            <span className="text-[10px] text-gray-600">Enterprise tier pricing updates</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-1.5" />
            <span className="text-[10px] text-gray-600">Roadmap targets 40% efficiency gain</span>
          </li>
        </ul>
      </div>

      {/* Chapters timeline */}
      <div className="absolute bottom-8 right-8 w-44 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-3 h-3 text-[#3B82F6]" />
          <span className="text-[10px] font-semibold text-gray-800">Chapters</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-[9px]">
            <span className="text-[#3B82F6] font-medium">00:00</span>
            <span className="text-gray-600">Introduction</span>
          </div>
          <div className="flex items-center gap-2 text-[9px]">
            <span className="text-[#3B82F6] font-medium">12:34</span>
            <span className="text-gray-600">Product Demo</span>
          </div>
          <div className="flex items-center gap-2 text-[9px]">
            <span className="text-[#3B82F6] font-medium">45:00</span>
            <span className="text-gray-600">Q&A Session</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function EnginesSection() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3B82F6]/5 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#3B82F6]/10 text-sm font-medium text-[#3B82F6] mb-4 border border-[#3B82F6]/20">
            Core Technology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Two Engines, One Workflow
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful AI engines working together to maximize the value of every video.
          </p>
        </div>

        {/* Campaign Engine Section */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Content */}
            <div>
              <span className="inline-block px-5 py-2 rounded-full bg-[#3B82F6]/10 text-sm font-semibold text-[#3B82F6] mb-6 border border-[#3B82F6]/20">
                Campaign Engine
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                Turn a single video into a multi-platform campaign.
              </h3>

              {/* Features List */}
              <div className="space-y-5 mb-10">
                {campaignFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#3B82F6] flex items-center justify-center shadow-lg shadow-[#3B82F6]/25">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-0.5">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Use Cases */}
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 border border-border">
                <span className="text-sm font-semibold text-foreground mb-4 block">Use it to:</span>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                    Launch campaigns from webinars and live streams
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                    Repurpose podcasts and interviews
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                    Feed your social channels with a pipeline of content
                  </li>
                </ul>
              </div>
            </div>

            {/* Right - Visualization */}
            <div className="lg:sticky lg:top-24">
              <CampaignVisualization />
            </div>
          </div>
        </div>

        {/* Summarization Engine Section - Reversed Layout */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Visualization */}
            <div className="order-2 lg:order-1 lg:sticky lg:top-24">
              <SummarizationVisualization />
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-5 py-2 rounded-full bg-[#3B82F6]/10 text-sm font-semibold text-[#3B82F6] mb-6 border border-[#3B82F6]/20">
                Summarization Engine
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                Make video as searchable and usable as a document.
              </h3>

              {/* Features List */}
              <div className="space-y-5 mb-10">
                {summarizationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#3B82F6] flex items-center justify-center shadow-lg shadow-[#3B82F6]/25">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-0.5">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Use Cases */}
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 border border-border">
                <span className="text-sm font-semibold text-foreground mb-4 block">Use it to:</span>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                    Recap trainings and all-hands meetings
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                    Help teams catch up fast
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                    Turn expert recordings into knowledge assets
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
