import { Edit3 } from 'lucide-react';

const presets = [
  'Focus on action items',
  'Executive summary',
  'Technical details only',
  'Key decisions',
];

const CustomPrompt = ({ customPrompt, setCustomPrompt }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
      <Edit3 className="h-5 w-5 mr-2 text-purple-500" />
      Custom Instructions (Optional)
    </h2>
    <textarea
      value={customPrompt}
      onChange={(e) => setCustomPrompt(e.target.value)}
      placeholder="e.g., 'Summarize in bullet points for executives' or 'Highlight only action items'"
      className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
    />
    <div className="mt-3 flex flex-wrap gap-2">
      {presets.map((preset) => (
        <button
          key={preset}
          onClick={() => setCustomPrompt(preset)}
          className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
        >
          {preset}
        </button>
      ))}
    </div>
  </div>
);

export default CustomPrompt;
