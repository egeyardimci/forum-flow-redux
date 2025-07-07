import { call, put } from "redux-saga/effects";
import { GET_USERS_SUCCESS } from "../actions/actionTypes";
import { getUserSuccess } from "../actions/actionCreators";
import { fetchUsers } from "../../api";

export function* workGetUsersFetch() {
  try {
    const userData = yield call(fetchUsers);
    
    const userIdtToUsernameMap = userData.reduce((acc, user) => {
      acc[user.id] = user.name;
      return acc;
    }, {});

    yield put(getUserSuccess(userData, userIdtToUsernameMap));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}