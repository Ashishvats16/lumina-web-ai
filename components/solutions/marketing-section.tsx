"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Megaphone, Zap, Globe, Users, Clock, TrendingUp, Gift, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Megaphone,
    text: "Turn launch events and customer stories into ongoing campaigns",
  },
  {
    icon: Globe,
    text: "Produce platform-specific content without a large editing team",
  },
  {
    icon: Users,
    text: "Maintain brand consistency across markets and regions",
  },
  {
    icon: Zap,
    text: "Save editors and marketers from manual clipping and rewriting",
  },
]

const valueProps = [
  { icon: Clock, text: "Reduce campaign prep time from weeks to days" },
  { icon: TrendingUp, text: "Scale content output without scaling headcount" },
  { icon: Gift, text: "Give clients more value from every shoot or webinar" },
]

export function MarketingSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9fafb] via-[#f0fdf4]/20 to-[#f9fafb]" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Card */}
              <div className="absolute inset-8 bg-white/80 backdrop-blur-xl border border-[#e5e7eb] shadow-xl rounded-3xl p-8 flex flex-col justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center mb-6">
                  <Megaphone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#111827] mb-2">Marketing Team</h3>
                <p className="text-[#6b7280]">Ship campaigns faster with AI-powered content</p>

                {/* Value Props Mini Cards */}
                <div className="mt-6 space-y-3">
                  {valueProps.map((prop, index) => (
                    <motion.div
                      key={prop.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#f0fdf4]"
                    >
                      <prop.icon className="w-5 h-5 text-[#10b981] shrink-0" />
                      <span className="text-sm text-[#374151]">{prop.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-[#e5e7eb] shadow-md"
              >
                <TrendingUp className="w-4 h-4 text-[#10b981]" />
                <span className="text-sm font-medium text-[#374151]">Agency Ready</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0fdf4] border border-[#10b981]/20 text-sm font-medium text-[#10b981] mb-6">
              <Megaphone className="w-4 h-4" />
              Solution 2
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] mb-4 text-balance">
              Marketing Teams & Agencies
            </h2>

            <p className="text-xl text-[#6b7280] mb-8 leading-relaxed">Ship campaigns faster. Reuse content smarter.</p>

            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-[#e5e7eb] hover:bg-[#f0fdf4]/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f0fdf4] flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-[#10b981]" />
                  </div>
                  <p className="text-[#374151] font-medium pt-2">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-[#10b981] text-white hover:bg-[#059669] gap-2 group shadow-lg shadow-[#10b981]/25"
            >
              See Marketing Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
