// Header Component
const Header = () => (
  <div className="sticky top-0 z-20 w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-800 dark:to-gray-900 shadow-lg mb-6 transition-all duration-300">
    <div className=" max-w-7xl mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-sans font-bold text-white tracking-tight">
            Forum Flow
          </h1>
          <p className="text-blue-100 dark:text-gray-300 text-sm font-medium mt-1">
            Forum Management System
          </p>
        </div>
        
        <img 
          src="/forumflow.svg" 
          alt="ForumFlow Logo" 
          className="w-32 h-16 object-contain"
          onError={(e) => {
            console.log('Logo failed to load, trying alternative path');
            e.target.src = './forumflow.svg';
          }}
        />
      </div>
    </div>
  </div>
);

export default Header;