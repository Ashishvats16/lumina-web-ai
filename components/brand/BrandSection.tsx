'use client'
import { useState, useRef } from 'react';
import { Upload, ChevronDown } from 'lucide-react';

interface BrandData {
  primaryLogo: File | null;
  logoVariant: File | null;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  primaryFont: string;
  secondaryFont: string;
  introVideo: File | null;
  outroVideo: File | null;
}

interface UploadedFile {
  name: string;
  size: string;
}

const fonts = [
  'Inter',
  'Roboto',
  'Poppins',
  'Playfair Display',
  'Montserrat',
  'Open Sans',
];

const predefinedColors = [
  { name: 'Primary', color: '#378EFF' },
  { name: 'Secondary', color: '#8638C6' },
  { name: 'Green', color: '#43AF57' },
  { name: 'Red', color: '#FF5757' },
  { name: 'Orange', color: '#FFB84D' },
  { name: 'Pink', color: '#FF6B9D' },
];

export default function BrandTemplates() {
  const [activeTab, setActiveTab] = useState('Brand Identity');
  const [brandData, setBrandData] = useState<BrandData>({
    primaryLogo: null,
    logoVariant: null,
    primaryColor: '#378EFF',
    secondaryColor: '#8638C6',
    accentColor: '#43AF57',
    backgroundColor: '#FFFFFF',
    primaryFont: 'Inter',
    secondaryFont: 'Inter',
    introVideo: null,
    outroVideo: null,
  });

  const [uploadedFiles, setUploadedFiles] = useState<Record<string, UploadedFile | null>>({
    primaryLogo: null,
    logoVariant: null,
    introVideo: null,
    outroVideo: null,
  });

  const [colorInputs, setColorInputs] = useState<Record<string, string>>({
    primaryColor: '#378EFF',
    secondaryColor: '#8638C6',
    accentColor: '#43AF57',
    backgroundColor: '#FFFFFF',
  });

  const [openFontDropdown, setOpenFontDropdown] = useState<string | null>(null);
  const [savedData, setSavedData] = useState<BrandData | null>(null);

  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add('bg-gray-100');
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove('bg-gray-100');
  };

  const handleDrop = (e: React.DragEvent, fieldName: string) => {
    e.preventDefault();
    e.currentTarget.classList.remove('bg-gray-100');

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      handleFileSelect(file, fieldName);
    }
  };

  const handleFileSelect = (file: File, fieldName: string) => {
    const isVideo = fieldName.includes('Video');
    const isImage = fieldName.includes('Logo');

    if (isVideo && !file.type.startsWith('video/')) {
      alert('Please select a video file');
      return;
    }

    if (isImage && !file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    const sizeInMB = file.size / (1024 * 1024);
    const maxSize = isVideo ? 500 : 10;

    if (sizeInMB > maxSize) {
      alert(`File size must be less than ${maxSize}MB`);
      return;
    }

    setBrandData((prev) => ({
      ...prev,
      [fieldName]: file,
    }));

    setUploadedFiles((prev) => ({
      ...prev,
      [fieldName]: {
        name: file.name,
        size: `${(sizeInMB).toFixed(2)}MB`,
      },
    }));
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0], fieldName);
    }
  };

  const handleColorChange = (colorType: string, value: string) => {
    const upperColorType = colorType.charAt(0).toUpperCase() + colorType.slice(1);
    const fieldName = colorType === 'background' ? 'backgroundColor' : `${colorType}Color`;

    setColorInputs((prev) => ({
      ...prev,
      [colorType]: value,
    }));

    setBrandData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handlePresetColor = (colorType: string, color: string) => {
    const fieldName = colorType === 'background' ? 'backgroundColor' : `${colorType}Color`;

    setColorInputs((prev) => ({
      ...prev,
      [colorType]: color,
    }));

    setBrandData((prev) => ({
      ...prev,
      [fieldName]: color,
    }));
  };

  const handleSave = () => {
    setSavedData(brandData);
    alert('Brand settings saved successfully!');
  };

  const renderUploadZone = (fieldName: string, label: string, accept: string) => {
    const isUploaded = uploadedFiles[fieldName];

    return (
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">{label}</h4>
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, fieldName)}
          onClick={() => fileInputRefs.current[fieldName]?.click()}
          className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-gray-400 transition-colors"
        >
          <input
            ref={(ref) => {
              fileInputRefs.current[fieldName] = ref;
            }}
            type="file"
            accept={accept}
            onChange={(e) => handleFileInputChange(e, fieldName)}
            className="hidden"
          />

          {isUploaded ? (
            <div className="space-y-2">
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-900">{isUploaded.name}</p>
              <p className="text-xs text-gray-500">{isUploaded.size}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setUploadedFiles((prev) => ({
                    ...prev,
                    [fieldName]: null,
                  }));
                  setBrandData((prev) => ({
                    ...prev,
                    [fieldName]: null,
                  }));
                }}
                className="text-xs text-blue-600 hover:text-blue-700 mt-2"
              >
                Remove file
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <Upload className="w-8 h-8 text-gray-400 mx-auto" />
              <p className="font-medium text-gray-900">Drag & Drop {label.split('(')[0]} Files</p>
              <p className="text-sm text-gray-500">or click to browse from your computer</p>
              <p className="text-xs text-gray-400 mt-2">{accept}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderColorPalette = (colorType: string, colorLabel: string) => {
    const fieldName = colorType === 'background' ? 'backgroundColor' : `${colorType}Color`;
    const currentColor = brandData[fieldName as keyof BrandData];
    const inputValue = colorInputs[colorType] || '';

    return (
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">{colorLabel}</h4>
        <div className="flex items-center gap-3">
          <div
            className="w-16 h-16 rounded-lg border-2 border-gray-200 cursor-pointer"
            style={{ backgroundColor: currentColor as string }}
            onClick={() => {
              const input = document.createElement('input');
              input.type = 'color';
              input.value = currentColor as string;
              input.onchange = (e) => {
                const color = (e.target as HTMLInputElement).value;
                handleColorChange(colorType, color);
              };
              input.click();
            }}
          />

          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              const value = e.target.value;
              if (value.match(/^#[0-9A-F]{6}$/i) || value.length === 0) {
                setColorInputs((prev) => ({
                  ...prev,
                  [colorType]: value,
                }));
                if (value.match(/^#[0-9A-F]{6}$/i)) {
                  handleColorChange(colorType, value);
                }
              }
            }}
            placeholder="#FFFFFF"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex gap-2">
            {predefinedColors.map((preset) => (
              <button
                key={preset.color}
                onClick={() => handlePresetColor(colorType, preset.color)}
                className={`w-8 h-8 rounded transition-all ${
                  currentColor === preset.color ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                }`}
                style={{ backgroundColor: preset.color }}
                title={preset.color}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderFontDropdown = (fontType: string, label: string) => {
    const fieldName = fontType === 'primary' ? 'primaryFont' : 'secondaryFont';
    const currentFont = brandData[fieldName as keyof BrandData];
    const isOpen = openFontDropdown === fontType;

    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        <div className="relative">
          <button
            onClick={() => setOpenFontDropdown(isOpen ? null : fontType)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {/* <span className="text-gray-700">{currentFont}</span> */}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setOpenFontDropdown(null)}
              />
              <div className="absolute top-12 left-0 right-0 z-20 bg-white border border-gray-300 rounded-lg shadow-lg py-2">
                {fonts.map((font) => (
                  <button
                    key={font}
                    onClick={() => {
                      setBrandData((prev) => ({
                        ...prev,
                        [fieldName]: font,
                      }));
                      setOpenFontDropdown(null);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                      currentFont === font
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    style={{ fontFamily: font }}
                  >
                    {font}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white w-full">
      <div className="max-w-9xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Brand & Templates
          </h1>
          <p className="text-gray-600">
            Manage your brand identity and content templates
          </p>
        </div>

        <div className="flex gap-4 md:gap-6 mb-8 border-b border-gray-300">
          {['Brand Identity', 'Templates'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-1 font-medium transition-colors ${
                activeTab === tab
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Brand Identity' && (
          <div className="space-y-6 pb-12">
            <div className="bg-white rounded-2xl border border-gray-300 p-6 md:p-8">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Upload className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Brand Logo</h2>
                  <p className="text-sm text-gray-600">Upload your company logo (PNG, SVG)</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {renderUploadZone(
                  'primaryLogo',
                  'Primary Logo',
                  'image/png,image/svg+xml,image/jpeg'
                )}
                {renderUploadZone(
                  'logoVariant',
                  'Logo Variant (Dark BG)',
                  'image/png,image/svg+xml,image/jpeg'
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-300 p-6 md:p-8">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🎨</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Brand Logo</h2>
                  <p className="text-sm text-gray-600">Define your color palette</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {renderColorPalette('primary', 'Primary')}
                {renderColorPalette('secondary', 'Secondary')}
                {renderColorPalette('accent', 'Accent')}
                {renderColorPalette('background', 'Background')}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-300 p-6 md:p-8">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">T</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Typography</h2>
                  <p className="text-sm text-gray-600">Select your brand fonts</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderFontDropdown('primary', 'Primary Font')}
                {renderFontDropdown('secondary', 'Secondary Font')}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-300 p-6 md:p-8">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">T</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Intro & Outro</h2>
                  <p className="text-sm text-gray-600">Upload branded intro and outro clips</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderUploadZone(
                  'introVideo',
                  'Intro Video (3-5s)',
                  'video/mp4,video/webm,video/quicktime'
                )}
                {renderUploadZone(
                  'outroVideo',
                  'Outro Video (3-5)',
                  'video/mp4,video/webm,video/quicktime'
                )}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save Brand Settings
              </button>
            </div>

            {savedData && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <h3 className="font-semibold text-blue-900 mb-3">Saved Brand Settings:</h3>
                <div className="space-y-2 text-sm text-blue-800">
                  <p>Primary Color: <code className="font-mono bg-white px-2 py-1 rounded">{savedData.primaryColor}</code></p>
                  <p>Secondary Color: <code className="font-mono bg-white px-2 py-1 rounded">{savedData.secondaryColor}</code></p>
                  <p>Accent Color: <code className="font-mono bg-white px-2 py-1 rounded">{savedData.accentColor}</code></p>
                  <p>Background Color: <code className="font-mono bg-white px-2 py-1 rounded">{savedData.backgroundColor}</code></p>
                  <p>Primary Font: <code className="font-mono bg-white px-2 py-1 rounded">{savedData.primaryFont}</code></p>
                  <p>Secondary Font: <code className="font-mono bg-white px-2 py-1 rounded">{savedData.secondaryFont}</code></p>
                  {uploadedFiles.primaryLogo && <p>Primary Logo: {uploadedFiles.primaryLogo.name}</p>}
                  {uploadedFiles.logoVariant && <p>Logo Variant: {uploadedFiles.logoVariant.name}</p>}
                  {uploadedFiles.introVideo && <p>Intro Video: {uploadedFiles.introVideo.name}</p>}
                  {uploadedFiles.outroVideo && <p>Outro Video: {uploadedFiles.outroVideo.name}</p>}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'Templates' && (
          <div className="bg-white rounded-2xl border border-gray-300 p-8 text-center text-gray-600">
            <p>Templates section coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
}
