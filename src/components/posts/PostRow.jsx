import { FileText, MoreVertical, Edit, Trash2, Eye, X, Save, Calendar, User } from "lucide-react";
import { useState } from "react";
import ViewDetailsModal from "./ViewDetailsModal";
import EditPostModal from "./EditPostModal";
import { useSelector } from "react-redux";
import { getUserIdToUsernameMap } from "../../store/selectors/userSelectors";

const PostRow = ({ 
  post, 
  onDelete, 
  onUpdate
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showViewDetails, setShowViewDetails] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const userIdToUsernameMap = useSelector(getUserIdToUsernameMap);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleAction = (action, e) => {
    e.stopPropagation();
    setShowMenu(false);
    
    switch(action) {
      case 'view':
        setShowViewDetails(true);
        break;
      case 'edit':
        setShowEditForm(true);
        break;
      case 'delete':
        if (window.confirm(`Are you sure you want to delete "${post.title}"?`)) {
          onDelete?.(post.id);
        }
        break;
    }
  };

  return (
    <>
      {/* Card View */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-300 mb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">by {userIdToUsernameMap[post.userId]}</p>
            </div>
          </div>
          
          {/* Menu Button */}
          <div className="relative">
            <button 
              onClick={handleMenuClick}
              className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <MoreVertical className="w-4 h-4" />
            </button>
            
            {showMenu && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setShowMenu(false)}
                />
                <div className="absolute right-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-20">
                  <button
                    onClick={(e) => handleAction('view', e)}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>
                  <button
                    onClick={(e) => handleAction('edit', e)}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                    Edit Post
                  </button>
                  <button
                    onClick={(e) => handleAction('delete', e)}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete Post
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300`}>
            ID: {post.id}
          </span>
        </div>

        {post.body && (
          <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">{post.body}</p>
        )}
        
      </div>

      {/* View Details Modal */}
      {showViewDetails && (
        <ViewDetailsModal 
          post={post} 
          onClose={() => setShowViewDetails(false)} 
        />
      )}

      {/* Edit Modal */}
      {showEditForm && (
        <EditPostModal 
          post={post} 
          onClose={() => setShowEditForm(false)}
          onSave={(updatedPost) => {
            onUpdate?.(updatedPost);
            setShowEditForm(false);
          }}
        />
      )}
    </>
  );
};

export default PostRow;