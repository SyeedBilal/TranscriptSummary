import { Brain, Download, Trash2 } from 'lucide-react';

const Header = ({ summary, downloadSummary, clearAll }) => (
  <header className="bg-white shadow-sm border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">AI Meeting Notes Summarizer</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={downloadSummary}
            disabled={!summary}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 transition-colors"
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </button>
          <button
            onClick={clearAll}
            className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:text-red-700 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
            <span>Clear All</span>
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
