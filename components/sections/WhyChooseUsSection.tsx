import { Info, Zap, ArrowRight } from 'lucide-react';

export default function WhyChooseSection() {
  const features = [
    {
      id: 1,
      icon: Info,
      title: 'Understands context, not just timestamps',
      description: 'Finds moments where the story, emotion, and message land - not random cuts.',
    },
    {
      id: 2,
      icon: Info,
      title: 'On-brand by default',
      description: 'Remembers your tone, keywords, and style so campaigns feel consistent.',
    },
    {
      id: 3,
      icon: Zap,
      title: 'Multilingual ready',
      description: 'Generates subtitles and copy in multiple languages to reach global audiences.',
    },
    {
      id: 4,
      icon: Zap,
      title: 'Built for scale',
      description: 'Process 1 video or 100 - LuminaCore was designed for high-volume workflows.',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why teams choose LuminaCore
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            More than a clipper tool. A <span className="font-semibold">video content brain</span>.
          </p>
        </div>

{/* Features Grid */}
<div className="flex flex-col items-center md:grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20">
  {features.map((feature) => {
    const IconComponent = feature.icon;
    return (
      <div
        key={feature.id}
        className="flex gap-4 sm:gap-5 md:gap-6 rounded-[24px] p-8 backdrop-blur-[24px] w-full max-w-[468px]"
        style={{
          height: '154px',
          opacity: 1,
          transform: 'rotate(0deg)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0px 4px 30px -4px rgba(153, 128, 102, 0.15)',
        }}
      >
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg">
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
            {feature.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    );
  })}
</div>



        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-3.5 md:py-4 px-6 sm:px-8 md:px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg">
            Get early access
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}