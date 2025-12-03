'use client';
import { MoreHorizontal, Plus, Play } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface MetricCard {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

interface RecentUpload {
  id: string;
  filename: string;
  timestamp: string;
  status: 'Completed' | 'Processing' | 'Uploading';
  icon: React.ReactNode;
}

interface QuickAction {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  href: string;
}

export default function Dashboard() {
  const [activeJob, setActiveJob] = useState<number | null>(null);
  const router = useRouter();

  const metrics: MetricCard[] = [
    { label: 'Total Videos', value: '1,247', change: '+12% from last month', isPositive: true },
    { label: 'Active Jobs', value: '89', change: '+8% from last month', isPositive: true },
    { label: 'Clips Generated', value: '2.4m', change: '-15% from last month', isPositive: false },
    { label: 'Publish-Ready Assets', value: '3,562', change: '+24% from last month', isPositive: true },
  ];

  const jobs = [
    { id: '1', title: 'Product_Launch_2024.mp4', status: 'Transcribing audio...', progress: 45 },
    { id: '2', title: 'Interview_Series_E03.mp4', status: 'Generating clips', progress: 78 },
    { id: '3', title: 'Webinar_Q4_Strategy.mp4', status: 'Complete', progress: 100 },
  ];

  const recentUploads: RecentUpload[] = [
    {
      id: '1',
      filename: 'Product Demo Q4 2024.mp4',
      timestamp: '2 hours ago',
      status: 'Completed',
      icon: <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center"><Play className="w-5 h-5 text-gray-600" /></div>,
    },
    {
      id: '2',
      filename: 'Customer Testimonial - Sarah.mp4',
      timestamp: '5 hours ago',
      status: 'Processing',
      icon: <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center"><Play className="w-5 h-5 text-gray-600" /></div>,
    },
    {
      id: '3',
      filename: 'Brand Story Extended Cut.mp4',
      timestamp: '1 hours ago',
      status: 'Completed',
      icon: <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center"><Play className="w-5 h-5 text-gray-600" /></div>,
    },
    {
      id: '4',
      filename: 'Social Media Promo Reel.mp4',
      timestamp: '2 days ago',
      status: 'Uploading',
      icon: <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center"><Play className="w-5 h-5 text-gray-600" /></div>,
    },
  ];

  const quickActions: QuickAction[] = [
    {
      icon: <Plus className="w-5 h-5" />,
      title: 'Upload New Video',
      description: 'Add videos for AI processing',
      color: 'bg-blue-50',
      href: '/dashboard/uploads',
    },
    {
      icon: <Plus className="w-5 h-5" />,
      title: 'Start Campaign',
      description: 'Create a new AI campaign',
      color: 'bg-purple-50',
      href: '/dashboard/library',
    },
    {
      icon: <Plus className="w-5 h-5" />,
      title: 'View Insights',
      description: 'Analyze your performance',
      color: 'bg-amber-50',
      href: '/dashboard',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Processing':
        return 'bg-blue-100 text-blue-700';
      case 'Uploading':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleUploadClick = (uploadId: string) => {
    router.push(`/dashboard/library/${uploadId}`);
  };

  const handleJobClick = (jobId: string) => {
    router.push(`/dashboard/uploads?job=${jobId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-9xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Overview</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your content.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-colors">
              <p className="text-gray-600 text-sm font-medium mb-2">{metric.label}</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">{metric.value}</h3>
              <p className={`text-sm font-medium ${metric.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {metric.change}
              </p>
              <div className="mt-4 w-12 h-12 bg-blue-100 rounded-lg"></div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <button 
            onClick={() => router.push('/dashboard/uploads')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
          >
            <Plus className="w-5 h-5" />
            New Project
          </button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Active Jobs</h2>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div 
                key={job.id} 
                onClick={() => handleJobClick(job.id)}
                className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-gray-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{job.status}</p>
                  </div>
                  <span className="text-gray-900 font-semibold">{job.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gray-900 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${job.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Recent Uploads</h2>
              <div className="space-y-4">
                {recentUploads.map((upload) => (
                  <div 
                    key={upload.id} 
                    onClick={() => handleUploadClick(upload.id)}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {upload.icon}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{upload.filename}</h3>
                        <p className="text-sm text-gray-500">{upload.timestamp}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(upload.status)}`}>
                        {upload.status}
                      </span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle more options
                        }}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveJob(index);
                      router.push(action.href);
                    }}
                    className={`w-full p-4 rounded-lg border border-gray-200 hover:border-gray-300 text-left transition-all ${action.color} hover:shadow-sm`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-gray-600 mt-0.5">
                        {action.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm">{action.title}</h3>
                        <p className="text-xs text-gray-600 mt-1">{action.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}