import { useState, useMemo, useReducer } from "react";
import { Layout, List, Search, Plus } from "lucide-react";
import VideoProject from "./VideosProject";
import VideoProjectListItem from "./VideosProjectListItem";
import { useRouter } from "next/navigation";
// import VideoProject from '../components/VideoProject';
// import VideoProjectListItem from '../components/VideoProjectListItem';

type ViewMode = "grid" | "list";
type ProjectFilter = "all" | "complete" | "processing";
type PlatformFilter = "all" | "instagram" | "tiktok" | "youtube" | "facebook";
type DateFilter = "7" | "30" | "90" | "all";

interface Project {
  id: number;
  title: string;
  status: "Complete" | "Processing";
  platforms: string[];
  videos: number;
  clips: number;
  timestamp: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: "Q4 Product Launch",
    status: "Complete",
    platforms: ["Instagram", "TikTok"],
    videos: 11,
    clips: 4,
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    title: "Customer Success Stories",
    status: "Processing",
    platforms: ["Instagram", "TikTok"],
    videos: 11,
    clips: 4,
    timestamp: "2 day ago",
  },
  {
    id: 3,
    title: "Internal Training Series",
    status: "Complete",
    platforms: ["YouTube"],
    videos: 11,
    clips: 4,
    timestamp: "1 week ago",
  },
  {
    id: 4,
    title: "Q4 Product Launch",
    status: "Complete",
    platforms: ["Facebook"],
    videos: 11,
    clips: 4,
    timestamp: "2 hours ago",
  },
  {
    id: 5,
    title: "Customer Success Stories",
    status: "Processing",
    platforms: ["Instagram", "YouTube"],
    videos: 11,
    clips: 4,
    timestamp: "1 day ago",
  },
  {
    id: 6,
    title: "Internal Training Series",
    status: "Complete",
    platforms: ["TikTok"],
    videos: 11,
    clips: 4,
    timestamp: "1 week ago",
  },
];

interface AllVideosProps {
  onVideoClick: (videoId: number) => void;
}

export default function AllVideos() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>("all");
  const [platformFilter, setPlatformFilter] = useState<PlatformFilter>("all");
  const [dateFilter, setDateFilter] = useState<DateFilter>("30");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredProjects = useMemo(() => {
    return mockProjects.filter((project) => {
      const matchesSearch = project.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesProject =
        projectFilter === "all" ||
        (projectFilter === "complete" && project.status === "Complete") ||
        (projectFilter === "processing" && project.status === "Processing");
      const matchesPlatform =
        platformFilter === "all" ||
        project.platforms.some((p) => p.toLowerCase() === platformFilter);

      return matchesSearch && matchesProject && matchesPlatform;
    });
  }, [searchQuery, projectFilter, platformFilter]);

  function onVideoClick(projectId: number) {
    console.log("Video clicked:", projectId);
    router.push(`/dashboard/videos/${projectId}`);
  }

  const handleSeeMore = (e: React.MouseEvent, projectId: number) => {
    e.stopPropagation();
    onVideoClick(projectId);
  };

  const handleNewProjectClick = () => {         
   console.log("New project btn clicked");
   router.push(`/dashboard/videos/new?step=upload`);
   
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-9xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              All Videos
            </h1>
            <p className="text-gray-600">
              Organize your videos into projects and campaigns
            </p>
          </div>
          <div className="flex gap-8">

     
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded transition-colors ${
                viewMode === "grid"
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Layout className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded transition-colors ${
                viewMode === "list"
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors" onClick={handleNewProjectClick}>
            <Plus className="w-5 h-5" />
            New Project
          </button>
               </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-col md:flex-row gap-3 items-start md:items-center flex-1">
              <div className="relative">
                <select
                  value={projectFilter}
                  onChange={(e) =>
                    setProjectFilter(e.target.value as ProjectFilter)
                  }
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white cursor-pointer hover:border-gray-400 transition-colors"
                >
                  <option value="all">All Projects</option>
                  <option value="complete">Complete</option>
                  <option value="processing">Processing</option>
                </select>
              </div>

              <div className="relative">
                <select
                  value={platformFilter}
                  onChange={(e) =>
                    setPlatformFilter(e.target.value as PlatformFilter)
                  }
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white cursor-pointer hover:border-gray-400 transition-colors"
                >
                  <option value="all">All Platforms</option>
                  <option value="instagram">Instagram</option>
                  <option value="tiktok">TikTok</option>
                  <option value="youtube">YouTube</option>
                  <option value="facebook">Facebook</option>
                </select>
              </div>

              <div className="relative">
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value as DateFilter)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white cursor-pointer hover:border-gray-400 transition-colors"
                >
                  <option value="7">Last 7 days</option>
                  <option value="30">Last 30 days</option>
                  <option value="90">Last 90 days</option>
                  <option value="all">All time</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:flex-none md:w-48">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <VideoProject
                key={project.id}
                id={project.id}
                title={project.title}
                status={project.status}
                platforms={project.platforms}
                clips={project.clips}
                timestamp={project.timestamp}
                onClick={() => onVideoClick(project.id)}
                onSeeMore={(e) => handleSeeMore(e, project.id)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {filteredProjects.map((project) => (
              <VideoProjectListItem
                key={project.id}
                id={project.id}
                title={project.title}
                status={project.status}
                videos={project.videos}
                clips={project.clips}
                timestamp={project.timestamp}
                onClick={() => onVideoClick(project.id)}
                onSeeMore={(e) => handleSeeMore(e, project.id)}
              />
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <p className="text-gray-600">
              No projects found. Try adjusting your filters or search query.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
