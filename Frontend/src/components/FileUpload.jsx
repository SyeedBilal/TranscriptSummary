import { Upload, FileText } from 'lucide-react';

const FileUpload = ({
  uploadedFile,
  setUploadedFile,
  setTranscript,
  showNotification,
  fileInputRef,
}) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setTranscript(e.target.result);
        showNotification('success', 'File uploaded successfully!');
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Upload className="h-5 w-5 mr-2 text-blue-500" />
        Upload Transcript
      </h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileUpload}
          accept=".txt,.doc,.docx"
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">
            {uploadedFile ? (
              <span className="text-green-600 font-medium">✓ {uploadedFile.name}</span>
            ) : (
              'Click to upload meeting transcript'
            )}
          </p>
          <p className="text-sm text-gray-500">Support: TXT, DOC, DOCX files</p>
        </label>
      </div>
    </div>
  );
};

export default FileUpload;
