import { Mail, Send, X } from 'lucide-react';

const EmailModal = ({
  emailRecipients,
  setEmailRecipients,
  setEmailModal,
  handleEmailShare,
}) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md mx-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Mail className="h-5 w-5 mr-2 text-blue-500" />
          Share Summary via Email
        </h3>
        <button
          onClick={() => setEmailModal(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Recipients (comma-separated)
          </label>
          <textarea
            value={emailRecipients}
            onChange={(e) => setEmailRecipients(e.target.value)}
            placeholder="john@example.com, sarah@example.com"
            className="w-full h-20 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setEmailModal(false)}
            className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleEmailShare}
            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
          >
            <Send className="h-4 w-4" />
            <span>Send Email</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default EmailModal;
