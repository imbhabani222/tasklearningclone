import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import movieReducer from "../src/redux/rducers/movieReducer";
import addBlogReducer from "../src/redux/rducers/movieReducer";
import blogReducer from "../src/redux/rducers/movieReducer";
import commentReducer from "../src/redux/rducers/movieReducer";
import commentDataReducer from "../src/redux/rducers/movieReducer";
import rootSaga from "./redux/sagas/sagas";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    movies: movieReducer,
    addBlog: addBlogReducer,
    blogData: blogReducer,
    commentData: commentReducer,
    commentBlogData: commentDataReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
//sagaMiddleware provides a method that is run in which we supplies/inclueds all the watcher files i.e appRootSaga
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
