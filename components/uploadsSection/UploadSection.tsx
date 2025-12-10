'use client';
import { useState, useRef } from 'react';
import { FileVideo, MoreVertical, Download, Trash2, Eye, ChevronLeft } from 'lucide-react';
import VideoUploadFlow from './VideoUploadSection';

interface Upload {
  id: string;
  fileName: string;
  size: string;
  uploader: string;
  created: string;
  status: 'Processed' | 'Processing' | 'Failed';
}

const mockUploads: Upload[] = [
  {
    id: '1',
    fileName: 'Product_Launch_2024.mp4',
    size: '2.4GB',
    uploader: 'Sarah Chen',
    created: '2024-11-10 09:23',
    status: 'Processed',
  },
  {
    id: '2',
    fileName: 'Interview_Series_E03.mp4',
    size: '1.8GB',
    uploader: 'Mike Johnson',
    created: '2024-11-10 08:15',
    status: 'Processing',
  },
  {
    id: '3',
    fileName: 'Webinar_Q4_Strategy.mp4',
    size: '3.2GB',
    uploader: 'Alex Kim',
    created: '2024-11-09 16:42',
    status: 'Processed',
  },
  {
    id: '4',
    fileName: 'Customer_Testimonial.mp4',
    size: '945MB',
    uploader: 'Emily Rodriguez',
    created: '2024-11-09 14:20',
    status: 'Processed',
  },
  {
    id: '5',
    fileName: 'Team_All_Hands_Nov.mp4',
    size: '2.1GB',
    uploader: 'David Park',
    created: '2024-11-09 11:05',
    status: 'Failed',
  },
];

export default function UploadsJobs({ onComplete }: { onComplete?: (videoData?: any) => void }) {
  const [activeTab, setActiveTab] = useState<'uploads'>('uploads');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    console.log('Files selected:', files);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const toggleMenu = (id: string) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleAction = (action: string, fileName: string) => {
    console.log(`${action} - ${fileName}`);
    setOpenMenuId(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processed':
        return 'bg-green-100 text-green-700';
      case 'Processing':
        return 'bg-blue-100 text-blue-700';
      case 'Failed':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className=" w-full min-h-screen bg-white">
       
      <div className="max-w-9xl mx-auto px-6">
       

        <VideoUploadFlow onComplete={onComplete} />

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('uploads')}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === 'uploads'
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Uploads
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    File
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Size
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Uploader
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockUploads.map((upload) => (
                  <tr key={upload.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <FileVideo className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <span className="text-sm text-gray-900 font-medium">
                          {upload.fileName}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{upload.size}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{upload.uploader}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{upload.created}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          upload.status
                        )}`}
                      >
                        {upload.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 relative">
                      <button
                        onClick={() => toggleMenu(upload.id)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <MoreVertical className="w-5 h-5" />
                      </button>
                      {openMenuId === upload.id && (
                        <>
                          <div
                            className="fixed inset-0 z-10"
                            onClick={() => setOpenMenuId(null)}
                          />
                          <div className="absolute right-6 top-12 z-20 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[160px]">
                            <button
                              onClick={() => handleAction('View', upload.fileName)}
                              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                            >
                              <Eye className="w-4 h-4" />
                              View
                            </button>
                            <button
                              onClick={() => handleAction('Download', upload.fileName)}
                              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                            >
                              <Download className="w-4 h-4" />
                              Download
                            </button>
                            <button
                              onClick={() => handleAction('Delete', upload.fileName)}
                              className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                            >
                              <Trash2 className="w-4 h-4" />
                              Delete
                            </button>
                          </div>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
