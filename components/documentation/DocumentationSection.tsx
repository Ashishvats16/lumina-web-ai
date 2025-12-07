import { FileText } from 'lucide-react';

export default function Documentation() {
  const cards = [
    {
      id: 1,
      title: 'Getting Started Guide',
      description: 'Learn the basics and set up your workflow in minutes.',
      hasIcon: true,
    },
    {
      id: 2,
      title: 'API Reference (Swagger UI)',
      description: 'Explore API endpoints, authentication, and integration steps.',
      hasIcon: true,
    },
    {
      id: 3,
      title: 'Video Tutorials',
      description: 'Step-by-step walkthroughs for creating campaigns and analyzing videos.',
      hasIcon: true,
    },
    {
      id: 4,
      title: 'Best Practices',
      description: 'Optimization tips for formats, audio quality, and workflow.',
      hasIcon: true,
    },
    {
      id: 5,
      title: 'Guides',
      description: 'Platform optimization, multi-language strategy, marketing tips.',
      hasIcon: true,
    },
    {
      id: 6,
      title: 'Changelog',
      description: 'Product updates, new features, bug fixes.',
      hasIcon: true,
    },
    {
      id: 7,
      title: 'Use Cases',
      description: 'Examples for agencies, creators, e-learning, enterprise.',
      hasIcon: true,
    },
  ];

  return (
    <main className="min-h-screen bg-white w-full">
      <div className="max-w-9xl mx-auto px-6 py-8">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Documentation</h1>
          <p className="text-gray-600">
            Guides, API docs, and resources to master the platform.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((card) => (
            <div
              key={card.id}
              className="border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all bg-white cursor-pointer group"
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <FileText className="w-6 h-6 text-gray-700" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
