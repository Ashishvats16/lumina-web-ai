export function OurStorySection() {
  return (
    <section className="relative pt-32 pb-8 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(147, 197, 253, 0.15) 30%, rgba(255,255,255,0) 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex justify-center mb-12">
          <span className="inline-flex items-center px-5 py-2 rounded-full border border-blue-200 bg-white text-sm font-medium text-[#3B82F6]">
            Our Story
          </span>
        </div>

        {/* Main Card */}
        <div className="mx-auto max-w-4xl">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 md:p-14 shadow-sm border border-blue-100/50">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-blue-100/80 to-blue-50/60 p-4 shadow-inner flex items-center justify-center">
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-[#3B82F6] flex items-center justify-center shadow-lg">
                      <span className="text-4xl md:text-5xl font-bold text-white tracking-wide">V.S</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                  Built by someone who lived this problem <span className="text-[#3B82F6]">inside Netflix.</span>
                </h2>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    LuminaCore AI was founded by <span className="font-semibold text-foreground">Vikas Sinsinwar</span>,
                    a technologist with 19+ years of experience building large-scale systems — including over seven
                    years at Netflix working on global content workflows.
                  </p>
                  <p>
                    At Netflix, Vikas saw firsthand how powerful video can be — and how much work it takes to make it
                    usable across regions, languages, and platforms. LuminaCore AI is the result: a platform that makes
                    video easier to reuse, understand, and scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
