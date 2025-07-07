import { GET_USERS_FETCH, GET_POSTS_FETCH, SET_ACTIVE_TAB, SET_SEARCH_VALUE, SET_SEARCH_VALUE_SUCCESS, GET_USERS_SUCCESS, GET_POSTS_SUCCESS, SET_CREATE_POST_UI, DELETE_POST_FETCH, DELETE_POST_SUCCESS, UPDATE_POST_FETCH, UPDATE_POST_SUCCESS, CREATE_POST_FETCH, CREATE_POST_SUCCESS, TOGGLE_DARKMODE, TOGGLE_DARKMODE_SUCCESS } from './actionTypes';

export const getUsersFetch = () => ({
  type: GET_USERS_FETCH
});

export const getUserSuccess = (users, userIdToUsernameMap) => ({
  type: GET_USERS_SUCCESS,
  users: users,
  userIdToUsernameMap: userIdToUsernameMap
});

export const setActiveTab = (tab) => ({
  type: SET_ACTIVE_TAB,
  payload: tab,
});

export const setSearchValue = (value) => ({
  type: SET_SEARCH_VALUE,
  payload: value,
});

export const setSearchValueSuccess = (value) => ({
  type: SET_SEARCH_VALUE_SUCCESS,
  payload: value,
});

export const getPostsFetch = () => ({
  type: GET_POSTS_FETCH,
});

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export const setCreatePostUI = (isVisible) => ({
  type: SET_CREATE_POST_UI,
  payload: isVisible,
});

export const deletePostFetch = (postId) => ({
  type: DELETE_POST_FETCH,
  payload: postId,
});

export const deletePostSuccess = (postId) => ({
  type: DELETE_POST_SUCCESS,
  payload: postId,
});

export const updatePostFetch = (post) => ({
  type: UPDATE_POST_FETCH,
  payload: post,
});

export const updatePostSuccess = (post) => ({
  type: UPDATE_POST_SUCCESS,
  payload: post,
});

export const createPostFetch = (post) => ({
  type: CREATE_POST_FETCH,
  payload: post,
}); 

export const createPostSuccess = (post) => ({
  type: CREATE_POST_SUCCESS,
  payload: post,
});

export const toggleDarkMode = () => ({
  type: TOGGLE_DARKMODE,
});

export const toggleDarkModeSuccess = () => ({
  type: TOGGLE_DARKMODE_SUCCESS,
});