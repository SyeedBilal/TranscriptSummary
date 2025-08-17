const TranscriptPreview = ({ transcript }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <h2 className="text-lg font-semibold text-gray-900 mb-4">
      Transcript Preview
    </h2>
    <div className="bg-gray-50 rounded-lg p-4 h-32 overflow-y-auto">
      <p className="text-sm text-gray-700 leading-relaxed">
        {transcript.substring(0, 300)}...
      </p>
    </div>
  </div>
);

export default TranscriptPreview;
