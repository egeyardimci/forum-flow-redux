import { GET_USERS_SUCCESS } from '../actions/actionTypes';

const initialState = {
  users: [],
  userIdToUsernameMap: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        userIdToUsernameMap: action.userIdToUsernameMap,
      };
    default:
      return state;
  }
};

export default userReducer;
