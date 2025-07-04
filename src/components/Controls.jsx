import React, { useState} from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setCreatePostUI } from '../store/actions/actionCreators';
const Controls = ({ activeTab, searchProperty }) => {
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('');
    return (
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-4">
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <button onClick={() => searchProperty(searchValue)} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
        <Filter className="w-4 h-4" />
        Filter
      </button>
    </div>
    {activeTab === 'posts' && (
      <button onClick={() => dispatch(setCreatePostUI(true))} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        <Plus className="w-4 h-4" />
        {'Create Post'}
      </button>
    )}
  </div>
)};

export default Controls;
