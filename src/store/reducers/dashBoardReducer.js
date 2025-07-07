import {SET_ACTIVE_TAB, SET_CREATE_POST_UI, SET_SEARCH_VALUE, TOGGLE_DARKMODE, TOGGLE_DARKMODE_SUCCESS } from '../actions/actionTypes';

const initialState = {
  activeTab: 'users',
  searchValue: '',
  createPostUI: false,
  darkMode: localStorage.getItem('darkMode') === 'true' || false,
};

const dashBoardReducer = (state = initialState, action) => {
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
    case TOGGLE_DARKMODE_SUCCESS:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default dashBoardReducer;
