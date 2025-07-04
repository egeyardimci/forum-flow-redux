import { call, put } from "redux-saga/effects";
import { createPostSuccess, deletePostSuccess, getPostsSuccess, updatePostSuccess } from "../actions/actionCreators";

export function* workGetPostsFetch() {
  try {
    const response = yield call(fetch, "https://jsonplaceholder.typicode.com/posts/");
    const data = yield response.json();
    yield put(getPostsSuccess(data));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

export function* workDeletePostFetch(action) {
  try {
    const response = yield call(fetch, `https://jsonplaceholder.typicode.com/posts/${action.payload}`, {
      method: 'DELETE',
    });
    
    if (response.ok) {
      yield put(deletePostSuccess(action.payload));
    } else {
      throw new Error('Failed to delete post');
    }
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}

export function* workUpdatePostFetch(action) {
  try {
    const response = yield call(fetch, `https://jsonplaceholder.typicode.com/posts/${action.payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });

    if (response.ok) {
      const updatedPost = yield response.json();
      yield put(updatePostSuccess(updatedPost));
    } else {
      throw new Error('Failed to update post');
    }
  } catch (error) {
    console.error("Error updating post:", error);
  }
}

export function* workCreatePostFetch(action) {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });

    if (response.ok) {
      const newPost = yield response.json();
      yield put(createPostSuccess(newPost));
    } else {
      throw new Error('Failed to create post');
    }
  } catch (error) {
    console.error("Error creating post:", error);
  }
}