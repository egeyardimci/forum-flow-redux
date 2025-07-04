import {SET_ACTIVE_TAB, SET_CREATE_POST_UI, SET_SEARCH_VALUE } from '../actions/actionTypes';

const initialState = {
  activeTab: 'users',
  searchValue: '',
  createPostUI: false,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    case SET_SEARCH_VALUE:
        return {
          ...state,
          searchValue: action.payload,
        };
    case SET_CREATE_POST_UI:
      return {
        ...state,
        createPostUI: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
