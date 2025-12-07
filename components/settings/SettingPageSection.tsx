import { useState } from 'react';
import ProfileTab from './ProfileTab';
import AccountTab from './AccountTab';
import NotificationsTab from './NotificationTab';
// import ProfileTab from './ProfileTab';
// import NotificationsTab from './NotificationsTab';
// import AccountTab from './AccountTab';

type TabType = 'profile' | 'notifications' | 'account';

interface SettingsData {
  profile: {
    firstName: string;
    lastName: string;
    email: string;
    brandKit: string;
    defaultTemplate: string;
    defaultVideoQuality: string;
    reducedMotion: boolean;
    highContrast: boolean;
    theme: string;
  };
  notifications: {
    videoProcessingComplete: boolean;
    clipGenerationUpdates: boolean;
    teamActivity: boolean;
    weeklySummaryEmails: boolean;
    storageWarnings: boolean;
    productUpdates: boolean;
  };
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [data, setData] = useState<SettingsData>({
    profile: {
      firstName: '',
      lastName: '',
      email: 'example123@gmail.com',
      brandKit: 'default',
      defaultTemplate: 'social-square',
      defaultVideoQuality: '1080p',
      reducedMotion: false,
      highContrast: false,
      theme: 'light',
    },
    notifications: {
      videoProcessingComplete: true,
      clipGenerationUpdates: true,
      teamActivity: false,
      weeklySummaryEmails: true,
      storageWarnings: true,
      productUpdates: false,
    },
  });

  const handleFieldChange = (section: 'profile' | 'notifications', field: string, value: any) => {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSaveChanges = () => {
    console.log('All Settings Data:', data);
    alert('Settings saved! Check console for data.');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to permanently delete your account? This action cannot be undone.')) {
      console.log('Delete account requested');
      alert('Account deletion process initiated');
    }
  };

  const tabs: { label: string; value: TabType }[] = [
    { label: 'Profile', value: 'profile' },
    { label: 'Notifications', value: 'notifications' },
    { label: 'Account', value: 'account' },
  ];

  return (
    <main className="min-h-screen w-full bg-white ">
      <div className="max-w-9xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-base sm:text-lg text-gray-600">Manage your account and preference</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg border border-gray-200 mb-8">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`flex-1 py-4 px-4 sm:px-6 text-center font-medium text-sm sm:text-base transition-colors ${
                  activeTab === tab.value
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                } relative -mb-px`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'profile' && (
            <div>
              <ProfileTab
                data={data.profile}
                onChange={(field, value) => handleFieldChange('profile', field, value)}
              />
              <button
                onClick={handleSaveChanges}
                className="mt-8 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors"
              >
                Save Changes
              </button>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <NotificationsTab
                data={data.notifications}
                onChange={(field, value) => handleFieldChange('notifications', field, value)}
              />
            </div>
          )}

          {activeTab === 'account' && <AccountTab onDelete={handleDeleteAccount} />}
        </div>
      </div>
    </main>
  );
}