import { ADD_TOAST_SUCCESS, DELETE_TOAST_SUCCESS, SET_ACTIVE_TAB_SUCCESS, SET_CREATE_POST_UI, SET_LOADING_VALUE, SET_SEARCH_VALUE, TOGGLE_DARKMODE, TOGGLE_DARKMODE_SUCCESS } from '../actions/actionTypes';

const initialState = {
  activeTab: 'users',
  searchValue: '',
  createPostUI: false,
  darkMode: localStorage.getItem('darkMode') === 'true' || false,
  isLoading: true,
  toasts: [],
};

const dashBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB_SUCCESS:
      return {
        ...state,
        activeTab: action.payload,
        searchValue: '', // Reset search value when changing tabs
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
    case SET_LOADING_VALUE:
      return{
        ...state,
        isLoading: action.payload,
      };
    case ADD_TOAST_SUCCESS:
      return{
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case DELETE_TOAST_SUCCESS:
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.payload),
      };
    default:
      return state;
  }
};

export default dashBoardReducer;
