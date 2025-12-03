'use client';

import { useEffect, useRef, useState } from 'react';
import { Megaphone, TrendingUp, FileText } from 'lucide-react';
import mic from "../../public/assets/icons/mic.jpg";
import insight from "../../public/assets/icons/insight.jpg";
import summarizationIcon from "../../public/assets/icons/summarization.jpg";

import micIcon from "../../public/assets/icons/micIcon.png";
import insightIcon from "../../public/assets/icons/insight-icon.png";
import summarizationic from "../../public/assets/icons/summs.png";
import Image from 'next/image';

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Turn complexity into clarity
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            LuminaCore's AI tools help you create, analyze, and share content
            faster than ever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <FeatureCard
            icon={micIcon}
            title="Campaign Engine"
            description="Automates campaign creation from video libraries."
            color="bg-gradient-to-br from-yellow-300 to-yellow-500"
            image= {"../../public/assets/icons/mic.jpg"}
            delay={0}
            isVisible={isVisible}
            src={mic}
          />
          <FeatureCard
            icon={insightIcon}
            title="Video Insights"
            description="Delivers instant analytics and trend detection."
            color="bg-gradient-to-br from-blue-400 to-blue-600"
            image="/assets/analytics.png"
            delay={200}
            isVisible={isVisible}
            src={insight}
          />
          <FeatureCard
            icon={summarizationic}
            title="Summarization"
            description="Generates clean, AI-powered summaries from transcripts."
            color="bg-gradient-to-br from-blue-500 to-blue-700"
            image="/assets/summary.png"
            delay={400}
            isVisible={isVisible}
            src={summarizationIcon}
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: any;
  title: string;
  description: string;
  color: string;
  image: string;
  delay: number;
  isVisible: boolean;
  src?: any;
}

function FeatureCard({
  icon,
  title,
  description,
  color,
  delay,
  isVisible,
  src,
}: FeatureCardProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setAnimate(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div
      className={`group transition-all duration-1000 p-8 rounded-3xl shadow-md bg-[#D3E6FF1A] ${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:scale-105">
        <div className={`aspect-[4/3] ${color} relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 bg-white/10 backdrop-blur-sm rounded-3xl transform group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
        <Image
          src={src}
          alt={"mic"}
          fill
          className="object-cover rounded-3xl"
        />

      </div>

      <div className="mt-6">
        <div className="flex items-center space-x-3 mb-3 flex-col">
          <div className="text-gray-700">
              <Image
          src={icon}
          alt={"mic"}
          // fill
          height={52}
          width={52}
        />
          </div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
