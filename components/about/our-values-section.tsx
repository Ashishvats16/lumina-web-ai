import { Sparkles, Heart, Globe, Zap } from "lucide-react"

const values = [
  {
    icon: Sparkles,
    title: "Creator-first",
    description: "The tool should feel like a superpower, not extra work.",
  },
  {
    icon: Heart,
    title: "Brand-respecting",
    description: "AI should amplify your voice, not overwrite it.",
  },
  {
    icon: Globe,
    title: "Global by design",
    description: "Content should travel across languages and markets.",
  },
  {
    icon: Zap,
    title: "Practical AI",
    description: "No hype. Real workflows, real time saved.",
  },
]

export function OurValuesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
          <p className="text-muted-foreground text-lg">Simple principles that guide everything we build.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-14 h-14 rounded-full bg-blue-100/80 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-[#3B82F6]" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
