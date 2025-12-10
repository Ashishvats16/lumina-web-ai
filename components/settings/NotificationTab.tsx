import { Bell } from 'lucide-react';
import Toggle from './Toggle';
import Notifications from '../notifications/Notifications';

interface NotificationsTabProps {
  data: {
    videoProcessingComplete: boolean;
    clipGenerationUpdates: boolean;
    teamActivity: boolean;
    weeklySummaryEmails: boolean;
    storageWarnings: boolean;
    productUpdates: boolean;
  };
  onChange: (field: string, value: any) => void;
}

export default function NotificationsTab({ data, onChange }: NotificationsTabProps) {
  return (
    <div className="space-y-8">
        <Notifications />
      {/* Configure Notifications Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
          <Bell className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
            <p className="text-sm text-gray-600">Configure your notification preferences</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Video processing complete */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <div>
              <h4 className="font-medium text-gray-900">Video processing complete</h4>
              <p className="text-sm text-gray-600">Notify when video processing finishes</p>
            </div>
            <Toggle
              checked={data.videoProcessingComplete}
              onChange={(checked) => onChange('videoProcessingComplete', checked)}
            />
          </div>

          {/* Clip generation updates */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <div>
              <h4 className="font-medium text-gray-900">Clip generation updates</h4>
              <p className="text-sm text-gray-600">Get updates during clip generation</p>
            </div>
            <Toggle
              checked={data.clipGenerationUpdates}
              onChange={(checked) => onChange('clipGenerationUpdates', checked)}
            />
          </div>

          {/* Team activity */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <div>
              <h4 className="font-medium text-gray-900">Team activity</h4>
              <p className="text-sm text-gray-600">Notifications for team member actions</p>
            </div>
            <Toggle checked={data.teamActivity} onChange={(checked) => onChange('teamActivity', checked)} />
          </div>

          {/* Weekly summary emails */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <div>
              <h4 className="font-medium text-gray-900">Weekly summary emails</h4>
              <p className="text-sm text-gray-600">Receive weekly activity summaries</p>
            </div>
            <Toggle
              checked={data.weeklySummaryEmails}
              onChange={(checked) => onChange('weeklySummaryEmails', checked)}
            />
          </div>

          {/* Storage warnings */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <div>
              <h4 className="font-medium text-gray-900">Storage warnings</h4>
              <p className="text-sm text-gray-600">Alerts when approaching storage limits</p>
            </div>
            <Toggle checked={data.storageWarnings} onChange={(checked) => onChange('storageWarnings', checked)} />
          </div>

          {/* Product updates */}
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Product updates</h4>
              <p className="text-sm text-gray-600">News about new features and improvements</p>
            </div>
            <Toggle
              checked={data.productUpdates}
              onChange={(checked) => onChange('productUpdates', checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}