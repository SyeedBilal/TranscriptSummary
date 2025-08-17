import { Edit3, Share2 } from 'lucide-react';

const SummarySection = ({
  summary,
  setSummary,
  isEditing,
  setIsEditing,
  setEmailModal,
}) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-gray-900">
        Generated Summary
      </h2>
      <div className="flex space-x-2">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center space-x-1 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <Edit3 className="h-4 w-4" />
          <span>{isEditing ? 'Save' : 'Edit'}</span>
        </button>
        <button
          onClick={() => setEmailModal(true)}
          className="flex items-center space-x-1 px-3 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
        >
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </button>
      </div>
    </div>
    {isEditing ? (
      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="w-full h-96 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm"
      />
    ) : (
      <div className="bg-gray-50 rounded-lg p-4 h-96 overflow-y-auto">
        <pre className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">
          {summary}
        </pre>
      </div>
    )}
  </div>
);

export default SummarySection;
