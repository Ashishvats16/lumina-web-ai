"use client";

import { useState } from "react";
// import MultiSelectBox from "./MultiSelectBox";

import { Layout, Upload, Palette } from "lucide-react";
import MultiSelectBox from "./MultiSelectBox";
import GeneratingClips from "./GeneratingClips";
import { useRouter } from "next/navigation";

interface SelectionsState {
  platforms: string[];
  languages: string[];
  videoTypes: string[];
}

interface SelectClipsConfigurationProps {
  onGenerateClips?: (selections: SelectionsState) => void;
  fileName?: string;
  onBack?: () => void;
  onComplete?: () => void;
}

const platformOptions = ["Instagram", "TikTok", "YouTube", "Facebook"];
const languageOptions = [
  "English",
  "Hindi",
  "Spanish",
  "French",
  "German",
  "Portuguese",
  "Chinese",
  "Japanese",
];
const videoTypeOptions = [
  "Presentation",
  "News/Interview",
  "Tutorial",
  "Documentary",
];

export default function SelectClipsConfiguration({
  onGenerateClips,
  onComplete,
  fileName,
  onBack,
}: SelectClipsConfigurationProps) {
  const [selections, setSelections] = useState<SelectionsState>({
    platforms: ["Instagram"],
    languages: ["English"],
    videoTypes: ["Presentation"],
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const toggleSelection = (section: keyof SelectionsState, value: string) => {
    setSelections((prev) => {
      const exists = prev[section].includes(value);
      return {
        ...prev,
        [section]: exists
          ? prev[section].filter((v) => v !== value)
          : [...prev[section], value],
      };
    });
  };

  const handleGenerate = () => {
    console.log("Selections", selections);
    onGenerateClips?.(selections);
    setIsGenerating(true);
    setTimeout(() => {      
        setProgress(30);
         setProgress(50);
    }, 2000);
    onComplete?.();
  };

  


  return (
    <div className="">
      <div className="max-w-9xl mx-auto px-6 md:px-8 lg:px-8">
        {fileName && (
          <div className="mb-8">
            <button
              onClick={onBack}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-4"
            >
              ← Back
            </button>
            <p className="text-gray-600 text-sm">
              Processing:{" "}
              <span className="font-medium text-gray-900">{fileName}</span>
            </p>
          </div>
        )}

        {!isGenerating ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <MultiSelectBox
                label="Select Platform"
                icon={
                  <Layout className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
                }
                options={platformOptions}
                selected={selections.platforms}
                onChange={(v) => toggleSelection("platforms", v)}
              />

              <MultiSelectBox
                label="Languages"
                icon={
                  <Upload
                    className="w-6 h-6 text-gray-900 rotate-180"
                    strokeWidth={1.5}
                  />
                }
                options={languageOptions}
                selected={selections.languages}
                onChange={(v) => toggleSelection("languages", v)}
                showMoreLimit={3}
              />

              <MultiSelectBox
                label="Video Type"
                icon={
                  <Palette
                    className="w-6 h-6 text-gray-900"
                    strokeWidth={1.5}
                  />
                }
                options={videoTypeOptions}
                selected={selections.videoTypes}
                onChange={(v) => toggleSelection("videoTypes", v)}
              />
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleGenerate}
                disabled={
                  !selections.platforms.length ||
                  !selections.languages.length ||
                  !selections.videoTypes.length
                }
                className="w-full md:w-96 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Generate clips
              </button>
            </div>
          </>
        ) : (
         <GeneratingClips progress={progress} onCancel={()=> console.log("Cancelling generating clip!")
         } />
        )}
      </div>
    </div>
  );
}
