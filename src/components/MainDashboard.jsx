import { useEffect } from 'react';
import Header from './Header';
import TabNavigation from './TabNavigation';
import Controls from './Controls';
import UsersTable from './users/UserTable';
import PostsTable from './posts/PostTable';
import {useDispatch, useSelector } from 'react-redux';
import { deleteToast, getPostsFetch, getUsersFetch } from '../store/actions/actionCreators';
import Footer from './footer/Footer';
import { getActiveTab, getIsDarkMode, getToasts } from '../store/selectors/dashBoardSelectors';
import { getFilteredUsers, getUsers } from '../store/selectors/userSelectors';
import { getFilteredPosts } from '../store/selectors/postSelectors';
import Toast from './Toast';

const MainDashboard = () => {
  const activeTab = useSelector(getActiveTab);
  const users = useSelector(getUsers);
  const isDarkMode = useSelector(getIsDarkMode);
  const filteredPosts = useSelector(getFilteredPosts);
  const filteredUsers = useSelector(getFilteredUsers);
  const toasts = useSelector(getToasts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersFetch());
    dispatch(getPostsFetch());
  }, [dispatch]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  },[isDarkMode]);
  
  useEffect(() => {
    console.log("Toasts changed in MainDashboard:", toasts);
  }, [toasts]);


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex flex-col justify-between">
      <Header />
      <div className="w-full h-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-6">

        <TabNavigation
          activeTab={activeTab}
          userCount={filteredUsers.length}
          postCount={filteredPosts.length}
        />

        <Controls activeTab={activeTab} />

        {activeTab === 'users' && (
          <UsersTable users={filteredUsers} />
        )}

        {activeTab === 'posts' && (
          <PostsTable posts={filteredPosts} users={users} />
        )}
      </div>
      <Footer />
      {/* Render all toasts */}
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          type={toast.type}
          title={toast.title}
          message={toast.message}
          isVisible={toast.isVisible}
          onClose={() => dispatch(deleteToast(toast.id))}
          duration={2000}
          position="bottom-right"
          darkMode={isDarkMode}
        />
      ))}
    </div>
  );
};

export default MainDashboard;