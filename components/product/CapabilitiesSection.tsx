"use client"

import { Package, Palette, Globe, Building } from "lucide-react"

const capabilities = [
  {
    icon: Package,
    title: "Campaign kits from a single source",
    description: "One long video becomes a full content pack: clips, copy, subtitles, and summaries.",
  },
  {
    icon: Palette,
    title: "Brand-consistent outputs",
    description: "Teach LuminaCore your brand once — it reuses tone, key phrases, and style.",
  },
  {
    icon: Globe,
    title: "Ready for global audiences",
    description: "Subtitles and text outputs in multiple languages to support international campaigns.",
  },
  {
    icon: Building,
    title: "Built for teams, not hobby projects",
    description: "Handles recurring content, multiple shows/series, and repeat workflows.",
  },
]

export function CapabilitiesSection() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-secondary-foreground mb-4">
            Key Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Built for Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade features designed for professional content teams
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group relative card-premium rounded-3xl p-8 border border-border overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <capability.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{capability.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
