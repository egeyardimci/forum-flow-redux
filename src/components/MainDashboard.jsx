import {useCallback, useEffect,useState } from 'react';
import Header from './Header';
import TabNavigation from './TabNavigation';
import Controls from './Controls';
import UsersTable from './users/UserTable';
import PostsTable from './posts/PostTable';
import {useDispatch, useSelector } from 'react-redux';
import { getPostsFetch, getUsersFetch, setSearchValue } from '../store/actions/actionCreators';
import Footer from './footer/Footer';

const MainDashboard = () => {
  const activeTab = useSelector((state) => state.dashboardReducer.activeTab);
  const users = useSelector((state) => state.userReducer.users);
  const posts = useSelector((state) => state.postReducer.posts);
  const searchValue = useSelector((state) => state.dashboardReducer.searchValue);
  const userIdToUsernameMap = useSelector((state) => state.userReducer.userIdToUsernameMap);
  const isDarkMode = useSelector((state) => state.dashboardReducer.darkMode);


  const [filteredUsers, setFilteredUsers] = useState(users);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const dispatch = useDispatch();
  const setSearchValueHandler = (value) => {
    dispatch(setSearchValue(value));
  };

  const searchProperty = useCallback((searchTerm) => {
    if(searchTerm === '') {
      setFilteredUsers(users);
      setFilteredPosts(posts);
      return;
    }
      const newFilteredPosts = posts.filter((post) => {
        return (
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          userIdToUsernameMap[post.userId]?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setFilteredPosts(newFilteredPosts);
      const newFilteredUsers = users.filter((user) => {
        return (
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

      setFilteredUsers(newFilteredUsers);
  }, [posts, users, userIdToUsernameMap]);

  useEffect(() => {
    dispatch(getUsersFetch());
    dispatch(getPostsFetch());
  }, [dispatch]);

  useEffect(() => {
    setFilteredUsers(users);
    setFilteredPosts(posts);
  }, [users,posts]);

  useEffect(() => {
    searchProperty(searchValue);
  }, [activeTab, searchProperty, searchValue]);

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

        <Controls searchProperty={setSearchValueHandler} activeTab={activeTab} />

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