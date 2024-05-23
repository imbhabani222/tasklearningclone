import { call, put, takeLatest, all } from "redux-saga/effects";
import { useParams } from "react-router-dom";
import axios from "axios";

//takeLatest is just used as like switch case in the reducer,it just listening an action, switch == takeLatest or takeEvery
//to process the latest request action we prefer takeLatest

const fetchUsingAxios = (url, payload = null) => {
  return axios.get(url);
};
const addBlogAxios = (url, payload = null) => {
  return axios.post(url, payload);
};
//worker section//
function* fetchMovies(action) {
  try {
    const movies = yield call(
      fetchUsingAxios,
      "https://jsonplaceholder.typicode.com/photos"
    );
    yield put({ type: "FETCH_MOVIES_SUCCESS", result: movies });
  } catch (e) {
    yield put({ type: "FETCH_MOVIES_FAILED", error: e.message });
  }
}
function* addBlog(action) {
  try {
    const blogs = yield call(
      addBlogAxios,
      "https://jsonplaceholder.typicode.com/posts",
      action.payload
    );
    yield put({ type: "ADD_BLOG_SUCCESS", result: blogs });
  } catch (e) {
    yield put({ type: "ADD_BLOG_FAILED", error: e.message });
  }
}
function* fetchBlogs(action) {
  try {
    const blogData = yield call(
      fetchUsingAxios,
      "https://jsonplaceholder.typicode.com/posts",
      action.payload
    );
    yield put({ type: "FETCH_BLOG_SUCCESS", result: blogData });
  } catch (e) {
    yield put({ type: "FETCH_BLOG_FAILED", error: e.message });
  }
}
function* fetchBlogsData(action) {
  console.log(action.payload);
  try {
    const blogfetchData = yield call(
      fetchUsingAxios,
      `https://jsonplaceholder.typicode.com/posts/${action.payload}`,
      action.payload
    );
    yield put({ type: "FETCH_BLOG_DATA_SUCCESS", result: blogfetchData });
  } catch (e) {
    yield put({ type: "FETCH_BLOG_DATA_FAILED", error: e.message });
  }
}
function* fetchcomments(action) {
  console.log(action.payload);
  try {
    const commentData = yield call(
      fetchUsingAxios,
      `https://jsonplaceholder.typicode.com/posts/${action.payload}/comments`,
      action.payload
    );
    console.log(commentData);
    yield put({ type: "FETCH_COMMENT_SUCCESS", result: commentData });
  } catch (e) {
    yield put({ type: "FETCH_COMMENT_FAILED", error: e.message });
  }
}
function* fetchCommentsData(action) {
  console.log(action.payload);
  try {
    const commentfetchData = yield call(
      fetchUsingAxios,
      `https://jsonplaceholder.typicode.com/posts/${action.payload}/comments`,
      action.payload
    );
    console.log(commentfetchData);
    yield put({ type: "FETCH_COMMENT_DATA_SUCCESS", result: commentfetchData });
  } catch (e) {
    yield put({ type: "FETCH_COMMENT_DATA_FAILED", error: e.message });
  }
}
//watcher section //
// function* movieSaga() {
//   yield takeLatest("FETCH_MOVIES", fetchMovie);
// }
function* movieSaga() {
  //let { id } = useParams();
  yield all([
    takeLatest("FETCH_MOVIES", fetchMovies),
    takeLatest("ADD_BLOG", addBlog),
    takeLatest("FETCH_BLOG", fetchBlogs),
    takeLatest("FETCH_BLOG_DATA", fetchBlogsData),
    takeLatest("FETCH_COMMENT", fetchcomments),
    takeLatest("FETCH_COMMENT_DATA", fetchCommentsData),
  ]);
}
export default movieSaga;
//this one line our watcher , movieSaga is our function which we are importing and exporting in the index file
//here fetchMovies is a worker
