import { all, fork, put, select, take, takeEvery } from "redux-saga/effects";
import { setActiveTabSuccess, setFilteredPosts, setFilteredUsers, setLoadingValue, toggleDarkModeSuccess } from "../actions/actionCreators";
import { GET_POSTS_SUCCESS, GET_USERS_SUCCESS, SET_ACTIVE_TAB, SET_ACTIVE_TAB_SUCCESS, SET_SEARCH_VALUE, TOGGLE_DARKMODE } from "../actions/actionTypes";
import { getActiveTab } from "../selectors/dashBoardSelectors";
import { getUserIdToUsernameMap, getUsers } from "../selectors/userSelectors";
import { getPosts } from "../selectors/postSelectors";

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

function* workSearch(action){
    const searchValue = action.payload;
    const activeTab = yield select(getActiveTab);
    console.log("Search value:", searchValue, "Active tab:", activeTab);

    if (activeTab === 'users') {
        const users = yield select(getUsers);

        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()));
        console.log("Filtered users:", filteredUsers);
        yield put(setFilteredUsers(filteredUsers));
    } else if (activeTab === 'posts') {        
        const userIdToUsernameMap = yield select(getUserIdToUsernameMap);
        const posts = yield select(getPosts);
        console.log(posts)
        const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          userIdToUsernameMap[post.userId]?.toLowerCase().includes(searchValue.toLowerCase()));
        yield put(setFilteredPosts(filteredPosts));
    }
}

function* workSetActiveTab(action) {
    const users = yield select(getUsers);
    const posts = yield select(getPosts);
    yield put(setActiveTabSuccess(action.payload));
    yield put(setFilteredPosts(posts)); // Reset filtered posts when changing tabs
    yield put(setFilteredUsers(users)); // Reset filtered users when changing tabs
}

function* rootSaga() {
    yield takeEvery(TOGGLE_DARKMODE, workToggleDarkMode);
    yield takeEvery(SET_SEARCH_VALUE, workSearch);
    yield fork(watchLoadingValue);
    yield takeEvery(SET_ACTIVE_TAB,workSetActiveTab)
}

export default rootSaga;