import { put, select, takeEvery } from "redux-saga/effects";
import { toggleDarkModeSuccess } from "../actions/actionCreators";
import { TOGGLE_DARKMODE } from "../actions/actionTypes";

function* workToggleDarkMode() {
    const isDarkMode = yield select((state) =>  state.dashboardReducer.darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', !isDarkMode ? true : false);
    yield put(toggleDarkModeSuccess());
}

function* rootSaga() {
    yield takeEvery(TOGGLE_DARKMODE, workToggleDarkMode);
}

export default rootSaga;