import { Brain } from 'lucide-react';

const GenerateButton = ({ transcript, isGenerating, generateSummary }) => (
  <button
    onClick={generateSummary}
    disabled={!transcript || isGenerating}
    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
  >
    {isGenerating ? (
      <>
        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
        <span>Generating Summary...</span>
      </>
    ) : (
      <>
        <Brain className="h-4 w-4" />
        <span>Generate Summary</span>
      </>
    )}
  </button>
);

export default GenerateButton;
