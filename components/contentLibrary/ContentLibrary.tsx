import { useState } from 'react';
import { Folder, Grid3x3, Menu, Plus, MoreVertical, Clock, User } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  status: 'Active' | 'Draft' | 'Archived';
  videos: number;
  clips: number;
  creator: string;
  timeAgo: string;
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Q4 Product Launch',
    status: 'Active',
    videos: 12,
    clips: 84,
    creator: 'Sarah Chen',
    timeAgo: '2 hours ago',
  },
  {
    id: '2',
    name: 'Customer Success Stories',
    status: 'Active',
    videos: 8,
    clips: 56,
    creator: 'Mike Johnson',
    timeAgo: '5 hours ago',
  },
  {
    id: '3',
    name: 'Internal Training Series',
    status: 'Draft',
    videos: 15,
    clips: 102,
    creator: 'Alex Kim',
    timeAgo: '1 day ago',
  },
  {
    id: '4',
    name: 'Social Media Campaign',
    status: 'Active',
    videos: 24,
    clips: 168,
    creator: 'Emily Rodriguez',
    timeAgo: '3 hours ago',
  },
  {
    id: '5',
    name: 'Webinar Archive',
    status: 'Archived',
    videos: 42,
    clips: 294,
    creator: 'David Park',
    timeAgo: '1 week ago',
  },
  {
    id: '6',
    name: 'Event Highlights',
    status: 'Active',
    videos: 15,
    clips: 102,
    creator: 'Lisa Wang',
    timeAgo: '6 hours ago',
  },
];

export default function ContentLibrary() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const tabs = ['All Projects', 'Active', 'Draft', 'Archived'];

  const filteredProjects = mockProjects.filter((project) => {
    if (activeTab === 'All Projects') return true;
    return project.status === activeTab;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Draft':
        return 'bg-orange-100 text-orange-700';
      case 'Archived':
        return 'bg-gray-200 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const toggleMenu = (id: string) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleAction = (action: string, projectName: string) => {
    console.log(`${action} - ${projectName}`);
    setOpenMenuId(null);
  };

  return (
    <div className="min-h-screen bg-white w-full">
      <div className="max-w-9xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Content Library
            </h1>
            <p className="text-gray-600">
              Organize your videos into projects and campaigns
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2.5 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Grid3x3 className="w-6 h-6" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2.5 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors">
              <Plus className="w-5 h-5" />
              <span>New Project</span>
            </button>
          </div>
        </div>

        <div className="flex gap-2 md:gap-3 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div
          className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1'
          }`}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Folder className="w-6 h-6 text-gray-900" />
                </div>
                <div className="relative">
                  <button
                    onClick={() => toggleMenu(project.id)}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                  {openMenuId === project.id && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setOpenMenuId(null)}
                      />
                      <div className="absolute right-0 top-8 z-20 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[140px]">
                        <button
                          onClick={() => handleAction('Edit', project.name)}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleAction('Duplicate', project.name)}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Duplicate
                        </button>
                        <button
                          onClick={() => handleAction('Share', project.name)}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Share
                        </button>
                        <hr className="my-1" />
                        <button
                          onClick={() => handleAction('Delete', project.name)}
                          className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {project.name}
              </h3>

              <div className="mb-4">
                <span
                  className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>

              <div className="flex gap-4 mb-6 p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Videos</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {project.videos}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Clips</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {project.clips}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{project.creator}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{project.timeAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
