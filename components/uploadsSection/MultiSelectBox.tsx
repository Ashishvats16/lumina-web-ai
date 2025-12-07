"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface MultiSelectBoxProps {
  label: string;
  icon: React.ReactNode;
  options: string[];
  selected: string[];
  onChange: (value: string) => void;
  showMoreLimit?: number; // for languages
}

export default function MultiSelectBox({
  label,
  icon,
  options,
  selected,
  onChange,
  showMoreLimit = 0,
}: MultiSelectBoxProps) {
  const [expanded, setExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const visibleOptions =
    showMoreLimit > 0 && !showMore
      ? options.slice(0, showMoreLimit)
      : options;

  const getDisplayLabel = () => {
    if (selected.length === 0) return "Select...";
    if (selected.length === 1) return selected[0];
    return `${selected.length} selected`;
  };

  return (
    <div className="bg-white border border-gray-300 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-lg font-semibold text-gray-900">{label}</h3>
      </div>

      {/* Dropdown Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 flex items-center justify-between hover:bg-gray-200 transition-colors text-sm"
      >
        <span>{getDisplayLabel()}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-600 transition-transform ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Options */}
      {expanded && (
        <div className="mt-4 space-y-3">
          {visibleOptions.map((val) => (
            <label
              key={val}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selected.includes(val)}
                onChange={() => onChange(val)}
                className="w-5 h-5 rounded border-gray-300 text-blue-600 cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                {val}
              </span>
            </label>
          ))}

          {/* Show More Button */}
          {showMoreLimit > 0 && options.length > showMoreLimit && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1 mt-2 w-full"
            >
              <span>{showMore ? "Show less" : "See more"}</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform ${
                  showMore ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
