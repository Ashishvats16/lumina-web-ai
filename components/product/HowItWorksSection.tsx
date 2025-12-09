"use client"

import { Button } from "@/components/ui/button"
import { Upload, Cpu, Download, Play, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload your video",
    description: "Webinar, Zoom recording, training, podcast, town hall — drop in the file or link.",
    color: "primary",
  },
  {
    number: "02",
    icon: Cpu,
    title: "LuminaCore analyzes the content",
    description:
      "Under the hood, our engine listens, watches, and scores every moment for narrative strength, clarity, and relevance.",
    color: "accent",
  },
  {
    number: "03",
    icon: Download,
    title: "Review, edit lightly, and export",
    description:
      "You get clips, summaries, captions, and subtitles. Make quick tweaks if needed, then download or send to your channels.",
    color: "primary",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-secondary-foreground mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your video content
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Step Card */}
                <div className="card-premium rounded-3xl p-8 border border-border text-center relative z-10 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-background border border-border">
                    <span className="text-sm font-bold text-gradient">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div
                    className={cn(
                      "w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
                      step.color === "primary" ? "bg-primary/10" : "bg-accent/10",
                    )}
                  >
                    <step.icon className={cn("h-8 w-8", step.color === "primary" ? "text-primary" : "text-accent")} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow (between steps) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-6 lg:-right-8 -translate-y-1/2 z-20">
                    <ArrowRight className="h-5 w-5 text-muted-foreground/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="gap-2 px-8 h-14 text-base bg-transparent border-border hover:bg-secondary/50"
          >
            <Play className="h-5 w-5" />
            Watch Product Walkthrough
          </Button>
        </div>
      </div>
    </section>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
