import { CREATE_POST_SUCCESS, DELETE_POST_SUCCESS, GET_POSTS_SUCCESS, SET_FILTERED_POSTS, UPDATE_POST_SUCCESS } from '../actions/actionTypes';

const initialState = {
  posts: [],
  filteredPosts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        filteredPosts: action.payload, // Initialize filteredPosts with all posts
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        filteredPosts: [...state.filteredPosts, action.payload],
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
        filteredPosts: state.filteredPosts.filter(post => post.id !== action.payload),
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        ),
        filteredPosts: state.filteredPosts.map(post =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case SET_FILTERED_POSTS:
      return {
        ...state,
        filteredPosts: action.payload
      };
    default:
      return state;
  }
};

export default postReducer;