import { all, fork, put, select, take, takeEvery } from "redux-saga/effects";
import { setLoadingValue, toggleDarkModeSuccess } from "../actions/actionCreators";
import { GET_POSTS_SUCCESS, GET_USERS_SUCCESS, TOGGLE_DARKMODE } from "../actions/actionTypes";

function* workToggleDarkMode() {
    const isDarkMode = yield select((state) =>  state.dashboardReducer.darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', !isDarkMode ? true : false);
    yield put(toggleDarkModeSuccess());
}


function* watchLoadingValue(){
    yield all([
        take(GET_POSTS_SUCCESS),
        take(GET_USERS_SUCCESS)
  ]);
  
  yield put(setLoadingValue(false));
}

function* rootSaga() {
    yield takeEvery(TOGGLE_DARKMODE, workToggleDarkMode);
    yield fork(watchLoadingValue);
}

export default rootSaga;