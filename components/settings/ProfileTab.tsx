import { User, Palette } from 'lucide-react';
import CustomDropdown from './CustomDropDown';
import Toggle from './Toggle';
// import CustomDropdown from './CustomDropdown';
// import Toggle from './Toggle';

interface ProfileTabProps {
  data: {
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
  onChange: (field: string, value: any) => void;
}

export default function ProfileTab({ data, onChange }: ProfileTabProps) {
  const templateOptions = [
    { label: 'Social Square (1:1)', value: 'social-square' },
    { label: 'Social Square (1:1)', value: 'social-square-2' },
    { label: 'Social Square (1:1)', value: 'social-square-3' },
  ];

  const videoQualityOptions = [
    { label: '1080p (Recommended)', value: '1080p' },
    { label: '720p', value: '720p' },
    { label: '480p', value: '480p' },
  ];

  const brandKitOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Brand 1', value: 'brand1' },
    { label: 'Brand 2', value: 'brand2' },
  ];

  const themeOptions = [
    { label: 'Light (Current)', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'Auto', value: 'auto' },
  ];

  return (
    <div className="space-y-8">
      {/* Profile Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
          <User className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Profile</h3>
            <p className="text-sm text-gray-600">Update your personal information</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Avatar and Change Photo */}
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-xl md:text-2xl flex-shrink-0">
              tu
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Change Photo</h4>
              <p className="text-sm text-gray-600 mb-3">JPG, PNG up to 5MB</p>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Choose File
              </button>
            </div>
          </div>

          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">First Name</label>
              <input
                type="text"
                value={data.firstName}
                onChange={(e) => onChange('firstName', e.target.value)}
                placeholder="Enter your First name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Last Name</label>
              <input
                type="text"
                value={data.lastName}
                onChange={(e) => onChange('lastName', e.target.value)}
                placeholder="Enter your Last name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => onChange('email', e.target.value)}
              placeholder="example123@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
          </div>

          {/* Save Changes Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors">
            Save Changes
          </button>
        </div>
      </div>

      {/* Brand Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
          <Palette className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Brand</h3>
            <p className="text-sm text-gray-600">Set your brand kit</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Brand Kit */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-medium text-gray-900">Brand Kit</label>
              <button className="px-3 py-1.5 bg-blue-500 text-white text-xs font-medium rounded hover:bg-blue-600 transition-colors">
                Edit
              </button>
            </div>
          </div>

          {/* Default Template */}
          <CustomDropdown
            label="Default Template"
            options={templateOptions}
            value={data.defaultTemplate}
            onChange={(value) => onChange('defaultTemplate', value)}
          />

          {/* Default Video Quality */}
          <CustomDropdown
            label="Default Video Quality"
            options={videoQualityOptions}
            value={data.defaultVideoQuality}
            onChange={(value) => onChange('defaultVideoQuality', value)}
          />
        </div>
      </div>

      {/* Accessibility & Display Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
          <User className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Accessibility & Display</h3>
            <p className="text-sm text-gray-600">Customize your viewing experience</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Reduced Motion */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-200">
            <div>
              <h4 className="font-medium text-gray-900">Reduced motion</h4>
              <p className="text-sm text-gray-600">Minimize animations and transitions</p>
            </div>
            <Toggle checked={data.reducedMotion} onChange={(checked) => onChange('reducedMotion', checked)} />
          </div>

          {/* High Contrast */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-200">
            <div>
              <h4 className="font-medium text-gray-900">High contrast</h4>
              <p className="text-sm text-gray-600">Increase color contrast for better visibility</p>
            </div>
            <Toggle checked={data.highContrast} onChange={(checked) => onChange('highContrast', checked)} />
          </div>

          {/* Theme */}
          <CustomDropdown
            label="Theme"
            options={themeOptions}
            value={data.theme}
            onChange={(value) => onChange('theme', value)}
          />
        </div>
      </div>
    </div>
  );
}