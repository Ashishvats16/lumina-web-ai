import { useState } from 'react';
import { Search, ChevronDown, Play } from 'lucide-react';

interface SearchResult {
  id: string;
  fileName: string;
  description: string;
  thumbnail: string;
  duration: string;
  creator: string;
  timestamp: string;
  sentiment: 'Positive' | 'Neutral' | 'Negative';
  confidence: number;
  tags: string[];
}

interface FilterOption {
  id: string;
  label: string;
  options: string[];
}

const mockResults: SearchResult[] = [
  {
    id: '1',
    fileName: 'Product_Launch_2024.mp4',
    description:
      'Our AI-powered automation can reduce manual editing time by up to 70%, allowing content creators to focus on what matters most...',
    thumbnail: 'bg-blue-100',
    duration: '2:42',
    creator: 'Product Demo',
    timestamp: '2:34',
    sentiment: 'Positive',
    confidence: 94,
    tags: ['AI', 'Automation', 'Productivity'],
  },
  {
    id: '2',
    fileName: 'Interview_Series_E03.mp4',
    description:
      'The biggest challenge in content creation is scaling quality without sacrificing authenticity. That\'s where smart automation comes in...',
    thumbnail: 'bg-purple-100',
    duration: '0:42',
    creator: 'Mike Johnson',
    timestamp: '5:34',
    sentiment: 'Neutral',
    confidence: 89,
    tags: ['Content', 'Scaling', 'Quality'],
  },
  {
    id: '3',
    fileName: 'Webinar_Q4_Strategy.mp4',
    description:
      'We\'ve seen teams reduce their video production time from weeks to days using automated workflows and intelligent clip generation...',
    thumbnail: 'bg-green-100',
    duration: '0:42',
    creator: 'Alex Kim',
    timestamp: '8:44',
    sentiment: 'Positive',
    confidence: 91,
    tags: ['Workflow', 'Efficiency', 'Teams'],
  },
];

const filterOptions: FilterOption[] = [
  {
    id: 'speakers',
    label: 'All Speakers',
    options: ['Sarah Chen', 'Mike Johnson', 'Alex Kim', 'Emily Rodriguez', 'David Park'],
  },
  {
    id: 'topic',
    label: 'All Topic',
    options: ['AI', 'Automation', 'Productivity', 'Content', 'Scaling', 'Quality'],
  },
  {
    id: 'sentiment',
    label: 'All Sentiment',
    options: ['Positive', 'Neutral', 'Negative'],
  },
  {
    id: 'dates',
    label: 'All Dates',
    options: ['Today', 'This Week', 'This Month', 'This Year'],
  },
  {
    id: 'projects',
    label: 'All Projects',
    options: ['Q4 Product Launch', 'Customer Success', 'Training Series'],
  },
  {
    id: 'duration',
    label: 'Any Duration',
    options: ['< 1 min', '1-5 min', '5-10 min', '> 10 min'],
  },
];

export default function SemanticSearch() {
  const [searchQuery, setSearchQuery] = useState('automation and productivity');
  const [activeDropdowns, setActiveDropdowns] = useState<Record<string, boolean>>({});
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});

  const toggleDropdown = (filterId: string) => {
    setActiveDropdowns((prev) => ({
      ...prev,
      [filterId]: !prev[filterId],
    }));
  };

  const selectFilter = (filterId: string, option: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterId]: option,
    }));
    toggleDropdown(filterId);
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'Positive':
        return 'bg-green-100 text-green-700';
      case 'Neutral':
        return 'bg-gray-200 text-gray-700';
      case 'Negative':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-white w-full">
      <div className="max-w-9xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Semantic Search
          </h1>
          <p className="text-gray-600">
            Search across all your video content using natural language
          </p>
        </div>

        <div className="border border-gray-300 rounded-3xl p-6 md:p-8 mb-8 bg-white">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search your videos..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {filterOptions.map((filter) => (
              <div key={filter.id} className="relative">
                <button
                  onClick={() => toggleDropdown(filter.id)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  {selectedFilters[filter.id] || filter.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdowns[filter.id] ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeDropdowns[filter.id] && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => toggleDropdown(filter.id)}
                    />
                    <div className="absolute top-12 left-0 z-20 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[180px]">
                      {filter.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => selectFilter(filter.id, option)}
                          className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                            selectedFilters[filter.id] === option
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-600">
            {mockResults.length} results found
          </p>
        </div>

        <div className="space-y-4">
          {mockResults.map((result) => (
            <div
              key={result.id}
              className="border border-gray-300 rounded-2xl p-6 hover:shadow-md transition-shadow bg-white"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 relative w-full md:w-48 h-32 md:h-40">
                  <div className={`w-full h-full rounded-lg ${result.thumbnail} flex items-center justify-center`}>
                    <div className="absolute bottom-3 right-3 bg-gray-900 text-white text-xs font-semibold px-2.5 py-1 rounded flex items-center gap-1">
                      <Play className="w-3 h-3 fill-current" />
                      {result.duration}
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {result.fileName}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {result.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-700">
                    <div className="flex items-center gap-1">
                      <span className="text-gray-400">👤</span>
                      <span>{result.creator}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-400">⏱</span>
                      <span>{result.timestamp}</span>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getSentimentColor(
                        result.sentiment
                      )}`}
                    >
                      {result.sentiment}
                    </span>
                    <span className="text-gray-600">
                      Confidence: {result.confidence}%
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {result.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
