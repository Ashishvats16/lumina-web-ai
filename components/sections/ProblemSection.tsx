"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, FolderX, Layers, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const problems = [
  {
    icon: FolderX,
    title: "UNUSED",
    subtitle: "Hours of content sit unused",
    description: "Webinars, trainings, and recordings gather dust in drives, completely unedited.",
    color: "bg-[#FF69B4]", // Pink
    textColor: "text-black",
  },
  {
    icon: Clock,
    title: "SLOW",
    subtitle: "Editing takes forever",
    description: "Teams spend days cutting clips, writing hooks, and manually adding subtitles.",
    color: "bg-[#FAEF5D]", // Yellow
    textColor: "text-black",
  },
  {
    icon: Layers,
    title: "COMPLEX",
    subtitle: "Every platform is different",
    description: "Each channel needs unique formats, caption styles, and video lengths.",
    color: "bg-[#FF6B6B]", // Coral/Red
    textColor: "text-black",
  },
  {
    icon: Search,
    title: "LOST",
    subtitle: "Knowledge gets lost",
    description: "Important information buried in video can't be searched or quickly revisited.",
    color: "bg-[#6FEDD6]", // Mint/Teal
    textColor: "text-black",
  },
]

export function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight
      const viewportHeight = window.innerHeight

      // Calculate scroll progress through this section
      const scrolledIntoSection = -rect.top + viewportHeight * 0.3
      const totalScrollableDistance = sectionHeight - viewportHeight * 0.5

      if (scrolledIntoSection < 0) {
        setActiveIndex(0)
        return
      }

      if (scrolledIntoSection > totalScrollableDistance) {
        setActiveIndex(3)
        return
      }

      const progress = scrolledIntoSection / totalScrollableDistance
      // Each card gets 25% of the scroll distance
      const cardIndex = Math.min(Math.floor(progress * 4), 3)
      setActiveIndex(cardIndex)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[300vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-[#f8f8f8]">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Bold text content */}
            <div className="space-y-8">
              <div>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.05] uppercase"
                  style={{ fontStyle: "italic" }}
                >
                  VIDEO IS YOUR
                  <br />
                  BEST CONTENT.
                  <br />
                  IT'S ALSO YOUR
                  <br />
                  MOST UNDERUSED.
                </h2>
              </div>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.15)] transition-all duration-300 bg-white border-0"
              >
                See the Solution
              </Button>
            </div>

            <div className="relative h-[480px] flex items-center justify-center">
              {/* Card stack container */}
              <div className="relative w-full max-w-[420px] h-[420px]">
                {problems.map((problem, index) => {
                  // Cards are stacked - index 0 is at back, index 3 is at front initially
                  // As we scroll, each card slides away to reveal the one behind
                  const reverseIndex = problems.length - 1 - index
                  const isRevealed = reverseIndex <= activeIndex

                  // Calculate horizontal offset for stacking effect (visible edges)
                  // Cards at back have more offset to show their edges
                  const stackOffset = (problems.length - 1 - index) * 12

                  // When a card is "active" or past, it slides out to the left
                  const slideOut = reverseIndex < activeIndex ? -120 : 0

                  // Z-index: revealed cards go to back, unrevealed stay on top
                  const zIndex =
                    reverseIndex < activeIndex
                      ? reverseIndex // Slid out cards go behind
                      : problems.length + (problems.length - reverseIndex) // Unrevealed cards stay on top

                  return (
                    <div
                      key={index}
                      className={`absolute top-0 rounded-[28px] w-full h-full transition-all duration-700 ease-out ${problem.color} ${problem.textColor}`}
                      style={{
                        right: `${stackOffset}px`,
                        transform: `translateX(${slideOut}%)`,
                        zIndex,
                        opacity: reverseIndex < activeIndex ? 0 : 1,
                      }}
                    >
                      {/* Card content */}
                      <div className="h-full flex flex-col p-8 md:p-10">
                        <div className="flex-1">
                          <h3 className="text-3xl md:text-4xl font-black mb-3 uppercase tracking-tight">
                            {problem.title}
                          </h3>
                          <p className="text-base md:text-lg opacity-80 leading-relaxed max-w-[280px]">
                            {problem.description}
                          </p>
                        </div>

                        {/* 3D-style icon at bottom */}
                        <div className="flex justify-end items-end mt-auto">
                          <div
                            className="w-32 h-32 md:w-40 md:h-40 rounded-3xl flex items-center justify-center"
                            style={{
                              background: `linear-gradient(145deg, ${problem.color === "bg-[#6FEDD6]" ? "#5dd4bf" : problem.color === "bg-[#FF6B6B]" ? "#e85555" : problem.color === "bg-[#FAEF5D]" ? "#e8dc4a" : "#e855a0"}, ${problem.color === "bg-[#6FEDD6]" ? "#8ffae8" : problem.color === "bg-[#FF6B6B]" ? "#ff8585" : problem.color === "bg-[#FAEF5D]" ? "#fff580" : "#ff85c8"})`,
                              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                            }}
                          >
                            <problem.icon className="h-16 w-16 md:h-20 md:w-20 opacity-60" strokeWidth={2.5} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
