import { call, put, takeEvery } from "redux-saga/effects";
import { addToast, createPostSuccess, deletePostSuccess, getPostsSuccess, updatePostSuccess } from "../actions/actionCreators";
import { createPost, deletePost, fetchPosts, updatePost } from "../../api";
import { CREATE_POST_FETCH, DELETE_POST_FETCH, GET_POSTS_FETCH, UPDATE_POST_FETCH } from "../actions/actionTypes";

function* workGetPostsFetch() {
  try {
    const postData = yield call(fetchPosts);
    yield put(getPostsSuccess(postData));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

function* workDeletePostFetch(action) {
  try {
    yield call(deletePost,action.payload.id);
    yield put(deletePostSuccess(action.payload));
    yield put(addToast("success", "Post Deleted", "The post has been successfully deleted."));
  } catch (error) {
    console.error("Error deleting post:", error);
    yield put(addToast("error", "Deletion Failed", "There was an error deleting the post."));
  }
}

function* workUpdatePostFetch(action) {
  try {
    const updatedPost = yield call(updatePost, action.payload);
    yield put(updatePostSuccess(updatedPost));
    yield put(addToast("success", "Post Updated", "The post has been successfully updated."));
  } catch (error) {
    console.error("Error updating post:", error);
    yield put(addToast("error", "Update Failed", "There was an error updating the post."));
  }
}

function* workCreatePostFetch(action) {
  try {
    const newPost = yield call(createPost, action.payload);
    yield put(createPostSuccess(newPost));
    yield put(addToast("success", "Post Created", "The post has been successfully created."));
  } catch (error) {
    console.error("Error creating post:", error);
    yield put(addToast("error", "Creation Failed", "There was an error creating the post."));
  }
}

function* rootSaga() {
  yield takeEvery(GET_POSTS_FETCH, workGetPostsFetch);
  yield takeEvery(DELETE_POST_FETCH, workDeletePostFetch);
  yield takeEvery(UPDATE_POST_FETCH, workUpdatePostFetch);
  yield takeEvery(CREATE_POST_FETCH, workCreatePostFetch);
}

export default rootSaga;