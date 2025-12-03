import { useState } from 'react';
import { CheckCircle, Info, AlertCircle, XCircle, Settings } from 'lucide-react';

interface Notification {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  description: string;
  timeAgo: string;
  isRead: boolean;
}

interface Activity {
  id: string;
  action: string;
  timeAgo: string;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'success',
    title: 'Video processing complete',
    description: 'Product_Launch_2024.mp4 has been processed. 8 clips generated.',
    timeAgo: '5 minutes ago',
    isRead: false,
  },
  {
    id: '2',
    type: 'info',
    title: 'New team member added',
    description: 'Emily Rodriguez joined your workspace as an Editor.',
    timeAgo: '1 hour ago',
    isRead: false,
  },
  {
    id: '3',
    type: 'success',
    title: 'Campaign published',
    description: 'Q4 Product Launch campaign has been published to 3 platforms.',
    timeAgo: '3 hour ago',
    isRead: true,
  },
  {
    id: '4',
    type: 'warning',
    title: 'Storage limit approaching',
    description: "You've used 85% of your storage quota. Consider upgrading your plan.",
    timeAgo: '5 hour ago',
    isRead: true,
  },
  {
    id: '5',
    type: 'error',
    title: 'Processing failed',
    description: 'Team_All_Hands_Nov.mp4 failed during transcription. Check error logs.',
    timeAgo: '1 day ago',
    isRead: true,
  },
];

const mockActivities: Activity[] = [
  {
    id: '1',
    action: 'Sarah Chen uploaded Product_Demo_Final.mp4',
    timeAgo: '12 min ago',
  },
  {
    id: '2',
    action: 'Mike Johnson created project Social Media Campaign',
    timeAgo: '1 hour ago',
  },
  {
    id: '3',
    action: 'Alex Kim generated clips from Webinar_Q4_Strategy.mp4',
    timeAgo: '3 hour ago',
  },
  {
    id: '4',
    action: 'Emily Rodriguez updated brand colors Default Brand',
    timeAgo: '5 hour ago',
  },
  {
    id: '5',
    action: 'David Park published campaign Customer Testimonials',
    timeAgo: '1 day ago',
  },
];

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('All');
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const tabs = ['All', 'Unread', 'Processing', 'Team', 'System'];

  const filteredNotifications = notifications.filter((notif) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Unread') return !notif.isRead;
    if (activeTab === 'Processing')
      return notif.description.toLowerCase().includes('process');
    if (activeTab === 'Team')
      return notif.type === 'info' || notif.title.includes('team');
    if (activeTab === 'System')
      return notif.type === 'warning' || notif.type === 'error';
    return true;
  });

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'info':
        return <Info className="w-6 h-6 text-blue-600" />;
      case 'warning':
        return <AlertCircle className="w-6 h-6 text-orange-600" />;
      case 'error':
        return <XCircle className="w-6 h-6 text-red-600" />;
      default:
        return <Info className="w-6 h-6 text-gray-600" />;
    }
  };

  const getNotificationBg = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-50';
      case 'info':
        return 'bg-blue-50';
      case 'warning':
        return 'bg-orange-50';
      case 'error':
        return 'bg-red-50';
      default:
        return 'bg-gray-50';
    }
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, isRead: true }))
    );
  };

  const toggleNotificationRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, isRead: !notif.isRead } : notif
      )
    );
  };

  return (
    <div className="min-h-screen bg-white w-full">
      <div className="max-w-9xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Notifications
            </h1>
            <p className="text-gray-600">
              Stay updated on your content and team activity
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={markAllAsRead}
              className="px-4 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Mark all as read
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <Settings className="w-4 h-4" />
              <span>Setting</span>
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
                  ? 'bg-blue-600 text-white'
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-3 mb-12">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex gap-4 p-5 rounded-xl border border-gray-200 transition-colors ${getNotificationBg(
                notification.type
              )}`}
            >
              <div className="flex-shrink-0 mt-1">
                {getNotificationIcon(notification.type)}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {notification.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {notification.description}
                </p>
                <p className="text-gray-500 text-xs">{notification.timeAgo}</p>
              </div>

              <button
                onClick={() => toggleNotificationRead(notification.id)}
                className={`flex-shrink-0 w-3 h-3 rounded-full transition-colors ${
                  notification.isRead
                    ? 'bg-gray-300'
                    : 'bg-blue-600'
                }`}
                title={notification.isRead ? 'Mark as unread' : 'Mark as read'}
              />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-3 border border-gray-200 rounded-xl overflow-hidden">
            {mockActivities.map((activity, index) => (
              <div
                key={activity.id}
                className={`p-5 ${index !== mockActivities.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <p className="text-gray-900 mb-1">{activity.action}</p>
                <p className="text-gray-500 text-sm">{activity.timeAgo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
