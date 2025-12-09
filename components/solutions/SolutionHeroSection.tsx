"use client"

import { motion } from "framer-motion"
import { Users, Clock, Video } from "lucide-react"

export function SolutionsHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[#eff6ff] via-[#f9fafb] to-[#f3f4f6]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2563eb]/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eff6ff] border border-[#3b82f6]/20 text-sm font-medium text-[#3b82f6]">
            <Users className="w-4 h-4" />
            Solutions for Every Team
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#111827] mb-6 text-balance"
        >
          Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-[#6b7280] max-w-3xl mx-auto mb-12 text-balance leading-relaxed"
        >
          Different teams. Same problem: too much video, not enough time.
        </motion.p>

        {/* Floating Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-8"
        >
          {[
            { icon: Video, label: "Creators" },
            { icon: Users, label: "Teams" },
            { icon: Clock, label: "Trainers" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#e5e7eb] shadow-sm flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <item.icon className="w-7 h-7 text-[#3b82f6] group-hover:text-[#2563eb] transition-colors duration-300" />
              </div>
              <span className="text-sm font-medium text-[#6b7280]">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
