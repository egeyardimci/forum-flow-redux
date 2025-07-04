import { User, FileText } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setActiveTab } from '../store/actions/actionCreators';
const TabNavigation = ({ activeTab, userCount, postCount }) => {
  const dispatch = useDispatch();

  const setActiveTabHandler = (tab) => {
    dispatch(setActiveTab(tab));
  };

  return (
    <div className="flex items-center gap-1 mb-6">
      <button
        onClick={() => (setActiveTabHandler('users'))}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
        activeTab === 'users'
          ? 'bg-blue-100 text-blue-700'
          : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      <User className="w-4 h-4" />
      Clients
      <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
        {userCount}
      </span>
    </button>
    
    <button
      onClick={() => setActiveTabHandler('posts')}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
        activeTab === 'posts'
          ? 'bg-blue-100 text-blue-700'
          : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      <FileText className="w-4 h-4" />
      Posts
      <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
        {postCount}
      </span>
    </button>
  </div>);

};

export default TabNavigation;