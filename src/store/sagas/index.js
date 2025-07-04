import { takeEvery } from "redux-saga/effects";
import { CREATE_POST_FETCH, DELETE_POST_FETCH, GET_POSTS_FETCH, GET_USERS_FETCH, UPDATE_POST_FETCH} from"../actions/actionTypes";
import { workGetUsersFetch } from "./userSaga";
import { workCreatePostFetch, workDeletePostFetch, workGetPostsFetch, workUpdatePostFetch } from "./postSaga";

function* rootSaga() {
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
  yield takeEvery(GET_POSTS_FETCH, workGetPostsFetch);
  yield takeEvery(CREATE_POST_FETCH, workCreatePostFetch);
  yield takeEvery(DELETE_POST_FETCH, workDeletePostFetch);
  yield takeEvery(UPDATE_POST_FETCH, workUpdatePostFetch);
}

export default rootSaga;
    