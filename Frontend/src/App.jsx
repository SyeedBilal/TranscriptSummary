import  { useState, useRef } from 'react';
import Header from './components/Header';
import Notification from './components/Notification';
import FileUpload from './components/FileUpload';
import CustomPrompt from './components/CustomPrompt';
import GenerateButton from './components/GenerateButton';
import TranscriptPreview from './components/TranscriptPreview';
import SummarySection from './components/SummarySection';
import EmptyState from './components/EmptyState';
import EmailModal from './components/EmailModal';
import axios from 'axios';

const App = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [transcript, setTranscript] = useState('');
  const [customPrompt, setCustomPrompt] = useState('');
  const [summary, setSummary] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [emailRecipients, setEmailRecipients] = useState('');
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });
  const fileInputRef = useRef(null);

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => setNotification({ show: false, type: '', message: '' }), 3000);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      // Simulate file reading for transcript
      const reader = new FileReader();
      reader.onload = (e) => {
        setTranscript(e.target.result);
        showNotification('success', 'File uploaded successfully!');
      };
      reader.readAsText(file);
    }
  };


  // Make Api call here to generate summary
  const generateSummary = async () => {
    if (!transcript) {
      showNotification('error', 'Please upload a transcript first');
      return;
    }
    
    setIsGenerating(true);

    const response =await axios.post(`${import.meta.env.VITE_BACKEND_URL}/generateSummary`, {
      transcript,
      customPrompt,
    });

    if (response.status === 200) {
      setSummary(response.data.summary);
      showNotification('success', 'Summary generated successfully!');
      setIsGenerating(false);
    } else {
      showNotification('error', 'Failed to generate summary');
      setIsGenerating(false);
    }
  
  };

  const handleEmailShare = async () => {
    if (!emailRecipients.trim()) {
      showNotification('error', 'Please enter at least one email address');
      return;
    }

    const response=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/sendEmail`, {
      recipients: emailRecipients.split(',').map(email => email.trim()),
      summary,
    });
    
    if (response.status === 200) {
      showNotification('success', 'Summary sent via email!');
      setEmailModal(false);
      setEmailRecipients('');
    } else {
      showNotification('error', 'Failed to send email');
    }
    // // Simulate email sending
    // setTimeout(() => {
    //   setEmailModal(false);
    //   setEmailRecipients('');
    //   showNotification('success', 'Summary sent via email!');
    // }, 1000);
  };

  const downloadSummary = () => {
    if (!summary) {
      showNotification('error', 'No summary to download');
      return;
    }

    // To be learn how to download the summary
    
    const blob = new Blob([summary], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `meeting-summary-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
    showNotification('success', 'Summary downloaded!');
  };

  const clearAll = () => {
    setUploadedFile(null);
    setTranscript('');
    setCustomPrompt('');
    setSummary('');
    setIsEditing(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
    showNotification('success', 'All data cleared!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header
        summary={summary}
        downloadSummary={downloadSummary}
        clearAll={clearAll}
      />

      <Notification notification={notification} />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Input Section */}
          <div className="space-y-6">
            <FileUpload
              uploadedFile={uploadedFile}
              setUploadedFile={setUploadedFile}
              setTranscript={setTranscript}
              showNotification={showNotification}
              fileInputRef={fileInputRef}
            />
            <CustomPrompt
              customPrompt={customPrompt}
              setCustomPrompt={setCustomPrompt}
            />
            <GenerateButton
              transcript={transcript}
              isGenerating={isGenerating}
              generateSummary={generateSummary}
            />
          </div>

          {/* Right Column - Output Section */}
          <div className="space-y-6">
            {transcript && (
              <TranscriptPreview transcript={transcript} />
            )}
            {summary && (
              <SummarySection
                summary={summary}
                setSummary={setSummary}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                setEmailModal={setEmailModal}
              />
            )}
            {!summary && !isGenerating && <EmptyState />}
          </div>
        </div>
      </main>

      {emailModal && (
        <EmailModal
          emailRecipients={emailRecipients}
          setEmailRecipients={setEmailRecipients}
          setEmailModal={setEmailModal}
          handleEmailShare={handleEmailShare}
        />
      )}
    </div>
  );
};

export default App;