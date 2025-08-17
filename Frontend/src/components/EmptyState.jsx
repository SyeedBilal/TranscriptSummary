import { Brain } from 'lucide-react';

const EmptyState = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
    <Brain className="h-16 w-16 text-gray-300 mx-auto mb-4" />
    <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Summarize</h3>
    <p className="text-gray-500">
      Upload your meeting transcript and click "Generate Summary" to get started
    </p>
  </div>
);

export default EmptyState;
