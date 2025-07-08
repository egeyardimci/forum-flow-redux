import { GET_USERS_SUCCESS, SET_FILTERED_USERS } from '../actions/actionTypes';

const initialState = {
  users: [],
  userIdToUsernameMap: {},
  filteredUsers: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        userIdToUsernameMap: action.userIdToUsernameMap,
        filteredUsers: action.users, // Initialize filteredUsers with all users
      };
      case SET_FILTERED_USERS:
        return{
          ...state,
          filteredUsers: action.payload
        }
    default:
      return state;
  }
};

export default userReducer;
