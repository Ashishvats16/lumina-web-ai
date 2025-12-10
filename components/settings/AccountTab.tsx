import { User, Trash2 } from 'lucide-react';

interface AccountTabProps {
  onDelete?: () => void;
}

export default function AccountTab({ onDelete }: AccountTabProps) {
  const activityItems = [
    {
      title: 'Brand profile updated',
      date: '1 Dec 2024, 1:25:10, profile',
    },
    {
      title: 'Brand profile updated',
      date: '16 Oct 2024, 1:25:10, profile',
    },
    {
      title: 'Brand profile created',
      date: '10 May 2024, 1:25:10, profile',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Account Activity Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
          <User className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Account Activity</h3>
            <p className="text-sm text-gray-600">Track and review recent updates and activity on your account</p>
          </div>
        </div>

        <div className="space-y-4">
          {activityItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-b-0">
              <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                <p className="text-xs text-gray-600 mt-1">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delete Account Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
          <User className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Account Activity</h3>
            <p className="text-sm text-gray-600">Permanently delete your brand account along with all linked data</p>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <div className="flex items-start gap-4 mb-4">
            <Trash2 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-2">Delete Brand Account</h4>
              <p className="text-sm text-gray-700 mb-4">
                This action will permanently delete your brand account and all associated data, including your profile,
                campaigns, analytics, and transaction history. The deletion cannot be undone. If you're facing any issues,
                consider contacting our support team before proceeding.
              </p>
              <button
                onClick={onDelete}
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded transition-colors text-sm"
              >
                <Trash2 className="w-4 h-4" />
                Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}