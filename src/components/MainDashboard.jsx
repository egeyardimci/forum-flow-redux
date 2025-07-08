import { useEffect } from 'react';
import Header from './Header';
import TabNavigation from './TabNavigation';
import Controls from './Controls';
import UsersTable from './users/UserTable';
import PostsTable from './posts/PostTable';
import {useDispatch, useSelector } from 'react-redux';
import { getPostsFetch, getUsersFetch, setSearchValue } from '../store/actions/actionCreators';
import Footer from './footer/Footer';
import { getActiveTab, getIsDarkMode } from '../store/selectors/dashBoardSelectors';
import { getFilteredUsers, getUsers } from '../store/selectors/userSelectors';
import { getFilteredPosts } from '../store/selectors/postSelectors';

const MainDashboard = () => {
  const activeTab = useSelector(getActiveTab);
  const users = useSelector(getUsers);
  const isDarkMode = useSelector(getIsDarkMode);
  const filteredPosts = useSelector(getFilteredPosts);
  const filteredUsers = useSelector(getFilteredUsers);

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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
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
    </div>
  );
};

export default MainDashboard;