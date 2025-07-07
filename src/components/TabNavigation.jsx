import { User, FileText } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setActiveTab } from '../store/actions/actionCreators';

const TabNavigation = ({ activeTab, userCount, postCount }) => {
  const dispatch = useDispatch();

  const setActiveTabHandler = (tab) => {
    dispatch(setActiveTab(tab));
  };

  return (
    <div className="flex items-center justify-center sm:justify-start gap-1 mb-6 w-full">
      <button
        onClick={() => setActiveTabHandler('users')}
        className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg font-medium transition-colors flex-1 sm:flex-none justify-center sm:justify-start ${
          activeTab === 'users'
            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
            : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
        }`}
      >
        <User className="w-4 h-4 flex-shrink-0" />
        <span className="hidden xs:inline sm:inline">Clients</span>
        <span className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex-shrink-0">
          {userCount}
        </span>
      </button>
      
      <button
        onClick={() => setActiveTabHandler('posts')}
        className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg font-medium transition-colors flex-1 sm:flex-none justify-center sm:justify-start ${
          activeTab === 'posts'
            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
            : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
        }`}
      >
        <FileText className="w-4 h-4 flex-shrink-0" />
        <span className="hidden xs:inline sm:inline">Posts</span>
        <span className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex-shrink-0">
          {postCount}
        </span>
      </button>
    </div>
  );
};

export default TabNavigation;