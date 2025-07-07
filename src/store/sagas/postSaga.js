import { call, put } from "redux-saga/effects";
import { createPostSuccess, deletePostSuccess, getPostsSuccess, updatePostSuccess } from "../actions/actionCreators";
import { createPost, deletePost, fetchPosts, updatePost } from "../../api";

export function* workGetPostsFetch() {
  try {
    const postData = yield call(fetchPosts);
    yield put(getPostsSuccess(postData));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

export function* workDeletePostFetch(action) {
  try {
    yield call(deletePost,action.payload.id);
    yield put(deletePostSuccess(action.payload));
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}

export function* workUpdatePostFetch(action) {
  try {
    const updatedPost = yield call(updatePost, action.payload);
    yield put(updatePostSuccess(updatedPost));
  } catch (error) {
    console.error("Error updating post:", error);
  }
}

export function* workCreatePostFetch(action) {
  try {
    const newPost = yield call(createPost, action.payload);
    yield put(createPostSuccess(newPost));
  } catch (error) {
    console.error("Error creating post:", error);
  }
}