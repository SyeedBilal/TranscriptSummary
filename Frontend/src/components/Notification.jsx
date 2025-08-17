import { CheckCircle, AlertCircle } from 'lucide-react';

const Notification = ({ notification }) => {
  if (!notification.show) return null;
  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right-full">
      <div className={`flex items-center space-x-2 px-4 py-3 rounded-lg shadow-lg ${
        notification.type === 'success'
          ? 'bg-green-500 text-white'
          : 'bg-red-500 text-white'
      }`}>
        {notification.type === 'success'
          ? <CheckCircle className="h-4 w-4" />
          : <AlertCircle className="h-4 w-4" />
        }
        <span>{notification.message}</span>
      </div>
    </div>
  );
};

export default Notification;
