'use client';

import { Check } from 'lucide-react';
import { useState } from 'react';

export default function PricingTiers() {
  const [isMonthly, setIsMonthly] = useState(true);

  const starterFeatures = [
    'Upload up to 2 videos/month',
    'Standard summaries & transcripts',
    'Access to basic campaign templates',
    '480p / 720p clip exports',
    'Community support',
  ];

  const creatorFeatures = [
    'Everything in Basic, plus',
    'Upload up to 2 videos/Unlimited uploads',
    'Advanced templates (customizable)',
    'Brand panel (logo, color, font settings)',
    'Engagement-based summary and insights',
    'HD clip exports',
    'Priority email support',
  ];

  const proFeatures = [
    'Everything in Creator, plus',
    'Enterprise upload size & speed',
    'Custom integrations & API access',
    'SLA support',
    'Team / multi-seat accounts',
    'Advanced analytics & reporting',
    'Watermark-free exports',
    'Priority feature requests',
  ];

  return (
    <div className=" bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.25),_transparent_70%),linear-gradient(to_bottom,_white,_rgba(239,246,255,0.5),_white)] py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-black mb-4">
            Pricing Tiers
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Simple plans for every creator.
          </p>
          <p className="text-base text-gray-500 mb-8">
            Choose the plan that fits your workflow — from solo creators to full production teams.
          </p>

          <div className="inline-flex items-center bg-white rounded-full p-1.5 shadow-lg">
            <button
              onClick={() => setIsMonthly(true)}
              className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all ${
                isMonthly
                  ? 'bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                !isMonthly
                  ? 'bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
                20% save
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto" >
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-black mb-2">Starter</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Individuals or small teams testing video content workflows for the first time
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-black">$19</span>
                <span className="text-gray-500 ml-1">/ month</span>
              </div>
            </div>

            <button className="w-full py-3.5 px-6 bg-gradient-to-b from-gray-700 to-gray-800 text-white rounded-full font-medium hover:from-gray-600 hover:to-gray-700 transition-all shadow-lg mb-8">
              Get Started
            </button>

            <div className="space-y-3.5 flex-grow">
              {starterFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100/70 via-blue-50/50 to-white rounded-3xl shadow-2xl p-8 flex flex-col relative border border-blue-200/50">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-black mb-2">Creator</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Social creators, small agencies, or marketing teams pushing content regularly
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-black">$49</span>
                <span className="text-gray-600 ml-1">/ month</span>
              </div>
            </div>

            <button className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-full font-medium hover:from-blue-600 hover:to-blue-500 transition-all shadow-lg mb-8">
              Get Started
            </button>

            <div className="space-y-3.5 flex-grow">
              {creatorFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-black mb-2">Pro</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Agencies, enterprises, content-heavy teams needing scale, branding, and deep analytics
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-black">$99</span>
                <span className="text-gray-500 ml-1">/ month</span>
              </div>
            </div>

            <button className="w-full py-3.5 px-6 bg-gradient-to-b from-gray-700 to-gray-800 text-white rounded-full font-medium hover:from-gray-600 hover:to-gray-700 transition-all shadow-lg mb-8">
              Get Started
            </button>

            <div className="space-y-3.5 flex-grow">
              {proFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
