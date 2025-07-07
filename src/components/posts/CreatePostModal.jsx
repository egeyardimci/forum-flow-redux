import { FileText, Plus, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCreatePostUI } from "../../store/actions/actionCreators";
import { getUserIdToUsernameMap } from "../../store/selectors/userSelectors";

const CreatePostModal = ({ onSave, users }) => {
  const dispatch = useDispatch();
  const userIdToUsernameMap = useSelector(getUserIdToUsernameMap);

  const onClose = () => {
    dispatch(setCreatePostUI(false));
  }

  const [formData, setFormData] = useState({
    title: '',
    body: '',
    userId: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      ...formData,
    };
    onSave(newPost);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto hide-scrollbar transition-colors duration-300">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center text-white">
                <Plus className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Create New Post</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Enter post title..."
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Author *
                </label>
                <select
                  name="userId"
                  value={formData.userId}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  required
                >
                  <option value="">Select author...</option>
                  {users.map(user => (
                    <option key={user.id} value={user.id}>
                      {user.name} (@{user.username})
                    </option>
                  ))}
                </select>
              </div>

            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Content *
              </label>
              <textarea
                name="body"
                value={formData.body}
                onChange={handleInputChange}
                rows={10}
                className="w-full dark:text-gray-100 px-3 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                placeholder="Write your post content here..."
                required
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {formData.body.length} characters
              </p>
            </div>

            {/* Preview Section */}
            {formData.title && (
              <div className="border-t pt-4">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Preview</h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">{formData.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {formData.userId ? `by ${userIdToUsernameMap[formData.userId]}` : 'by [Author]'}
                      </p>
                    </div>
                  </div>
                  {formData.body && (
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 line-clamp-3">
                      {formData.body}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Create Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreatePostModal;