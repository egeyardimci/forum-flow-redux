import React, { useState } from 'react';
import { Search, Plus, Moon, Sun } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCreatePostUI, toggleDarkMode } from '../store/actions/actionCreators';
import { getIsDarkMode } from '../store/selectors/dashBoardSelectors';

const Controls = ({ activeTab, searchProperty }) => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const isDarkMode = useSelector(getIsDarkMode);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        searchProperty(value);
    };

    return (
        <div className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6 ${isDarkMode ? 'dark' : ''}`}>
            {/* Search Section */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-none">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                </div>
                {/* Dark Mode Toggle Button */}
                <button
                    onClick={() => dispatch(toggleDarkMode())}
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 whitespace-nowrap"
                    title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    {isDarkMode ? (
                        <Sun className="w-4 h-4" />
                    ) : (
                        <Moon className="w-4 h-4" />
                    )}
                </button>
            </div>
            
            {/* Action Buttons Section */}
            <div className="flex items-center gap-3 justify-center sm:justify-start">
               

                {activeTab === 'posts' && (
                    <button 
                        onClick={() => dispatch(setCreatePostUI(true))} 
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 flex-shrink-0"
                    >
                        <Plus className="w-4 h-4" />
                        <span className="hidden xs:inline sm:hidden md:inline">Create Post</span>
                        <span className="xs:hidden sm:inline md:hidden">Create</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Controls;