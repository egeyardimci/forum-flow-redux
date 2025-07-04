import { CREATE_POST_SUCCESS, DELETE_POST_SUCCESS, GET_POSTS_SUCCESS, UPDATE_POST_SUCCESS } from '../actions/actionTypes';

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    default:
      return state;
  }
};

export default postReducer;