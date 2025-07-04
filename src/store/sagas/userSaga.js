import { call, put } from "redux-saga/effects";
import { GET_USERS_SUCCESS } from "../actions/actionTypes";
import { getUserSuccess } from "../actions/actionCreators";

export function* workGetUsersFetch() {
  try {
    const response = yield call(fetch, "https://jsonplaceholder.typicode.com/users/");
    const data = yield response.json();
    
    const userIdtToUsernameMap = data.reduce((acc, user) => {
      acc[user.id] = user.name;
      return acc;
    }, {});

    yield put(getUserSuccess(data, userIdtToUsernameMap));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}