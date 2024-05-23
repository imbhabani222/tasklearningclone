import { combineReducers } from "redux";
const initialState = {
  fetching: false,
  result: null,
  error: null,
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      //return action.result.data;
      return {
        ...state,
        fetching: true,
        result: null,
        error: null,
      };
    case "FETCH_MOVIES_SUCCESS":
      //return action.result.data;
      return {
        ...state,
        fetching: false,
        result: action.result.data,
        error: null,
      };

    case "FETCH_MOVIES_FAILED":
      //return action.error;
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.error,
      };
    default:
      return state;
  }
};
const addBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      //return action.result.data;
      return {
        ...state,
        fetching: true,
        result: null,
        error: null,
      };
    case "ADD_BLOG_SUCCESS":
      //return action.result.data;
      return {
        ...state,
        fetching: false,
        result: action.result.data,
        error: null,
      };

    case "ADD_BLOG_FAILED":
      //return action.error;
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.error,
      };
    default:
      return state;
  }
};
const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BLOG":
      //return action.result.data;
      return {
        ...state,
        fetching: true,
        result: null,
        error: null,
      };
    case "FETCH_BLOG_SUCCESS":
      //return action.result.data;
      return {
        ...state,
        fetching: false,
        result: action.result.data,
        error: null,
      };

    case "FETCH_BLOG_FAILED":
      //return action.error;
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.error,
      };
    default:
      return state;
  }
};
const blogDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BLOG_DATA":
      //return action.result.data;
      return {
        ...state,
        fetching: true,
        result: null,
        error: null,
      };
    case "FETCH_BLOG_DATA_SUCCESS":
      //return action.result.data;
      return {
        ...state,
        fetching: false,
        result: action.result.data,
        error: null,
      };

    case "FETCH_BLOG_DATA_FAILED":
      //return action.error;
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.error,
      };
    default:
      return state;
  }
};
const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMMENT":
      //return action.result.data;
      return {
        ...state,
        fetching: true,
        result: null,
        error: null,
      };
    case "FETCH_COMMENT_SUCCESS":
      //return action.result.data;
      return {
        ...state,
        fetching: false,
        result: action.result.data,
        error: null,
      };

    case "FETCH_COMMENT_FAILED":
      //return action.error;
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.error,
      };
    default:
      return state;
  }
};
const commentDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMMENT_DATA":
      //return action.result.data;
      return {
        ...state,
        fetching: true,
        result: null,
        error: null,
      };
    case "FETCH_COMMENT_DATA_SUCCESS":
      //return action.result.data;
      return {
        ...state,
        fetching: false,
        result: action.result.data,
        error: null,
      };

    case "FETCH_COMMENT_DATA_FAILED":
      //return action.error;
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.error,
      };
    default:
      return state;
  }
};
export default combineReducers({
  movieReducer,
  addBlogReducer,
  blogReducer,
  blogDataReducer,
  commentReducer,
  commentDataReducer,
});
