"use client"

// import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, Megaphone, Video } from "lucide-react"

const audiences = [
  {
    icon: Video,
    emoji: "🎥",
    title: "Creators & Solo Founders",
    description: "Turn every video into a week of content. Stop spending hours editing - focus on creating.",
    color: "primary",
  },
  {
    icon: Megaphone,
    emoji: "📣",
    title: "Marketing Teams & Agencies",
    description: "Launch campaigns faster, keep feeds full. Scale content production without scaling headcount.",
    color: "accent",
  },
  {
    icon: GraduationCap,
    emoji: "🧑‍🏫",
    title: "Training, Education & CS",
    description: "Summarize sessions and resurface answers instantly. Make knowledge accessible.",
    color: "primary",
  },
]

export function AudienceSection() {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          {/* <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Who It's For</p> */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            Who It's For
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Designed for teams who <span className="text-gradient">live on video</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="card-premium rounded-3xl border border-border p-8 text-center group">
              <div className="mb-6 mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary text-4xl">
                {audience.emoji}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{audience.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
{/* 
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="h-14 px-8 text-base font-semibold gap-2 border-border hover:bg-secondary/50 group bg-transparent"
          >
            See Use Cases
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div> */}
         <div className="flex justify-center mt-8">
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-3.5 md:py-4 px-6 sm:px-8 md:px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
            See use cases
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
