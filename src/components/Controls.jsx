import React, { useEffect, useState } from 'react';
import { Search, Filter, Plus, Moon, Sun } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setCreatePostUI } from '../store/actions/actionCreators';

const Controls = ({ activeTab, searchProperty }) => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const [isDarkMode, setIsDarkMode] = useState();

    useEffect(() => {
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode === 'enabled') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', !isDarkMode ? 'enabled' : 'disabled');
    };

    return (
        <div className={`flex items-center justify-between mb-6 ${isDarkMode ? 'dark' : ''}`}>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
                <button 
                    onClick={() => searchProperty(searchValue)} 
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                >
                    <Filter className="w-4 h-4" />
                    Filter
                </button>
            </div>
            
            <div className="flex items-center gap-3">
                {/* Dark Mode Toggle Button */}
                <button
                    onClick={toggleDarkMode}
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
                    title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    {isDarkMode ? (
                        <Sun className="w-4 h-4" />
                    ) : (
                        <Moon className="w-4 h-4" />
                    )}
                </button>

                {activeTab === 'posts' && (
                    <button 
                        onClick={() => dispatch(setCreatePostUI(true))} 
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
                    >
                        <Plus className="w-4 h-4" />
                        {'Create Post'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Controls;