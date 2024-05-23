import React, { useState } from "react";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const BlogPost = () => {
  const dispatch = useDispatch();
  const addBlogSchema = yup.object().shape({
    title: yup.string().min(5).max(15).required(),
    descrption: yup.string().required(),
  });
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
  });
  const [blogDataError, setBlogDataError] = useState({
    title: "",
    description: "",
  });
  const clearState = () => {
    setBlogData({
      title: "",
      description: "",
    });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(blogData);
    dispatch({ type: "ADD_BLOG", payload: blogData });
    clearState();
  };
  const handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    setBlogData({ ...blogData, [name]: value });

    let genratedErrors = {};
    try {
      addBlogSchema.validateSync(blogData, { abortEarly: false });
    } catch (e) {
      if (e.inner.length > 0) {
        e.inner.forEach((error) => {
          genratedErrors[error.path] = error.message;
        });
      }
    }
    let newBlogErrors = {};

    Object.keys(blogDataError).forEach((name) => {
      if (genratedErrors[name]) {
        newBlogErrors[name] = genratedErrors[name];
      } else {
        newBlogErrors[name] = "";
      }
      setBlogDataError({
        ...blogData,
        ...newBlogErrors,
      });
    });
  };

  return (
    <div>
      <Link to="/blogs">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </Link>
      <form onSubmit={handelSubmit} className="p-7 bg-gray-200">
        <div className="mb-6">
          <label
            for="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Title
          </label>
          <input
            type="text"
            value={blogData.title}
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Blog Title..."
            // required
            onChange={handleChange}
          />
          {blogDataError.name && (
            <p className="text-red-700">{blogDataError.title}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Description
          </label>
          <textarea
            name="description"
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add a Description"
            value={blogData.description}
            onChange={handleChange}
          ></textarea>
          {blogDataError.description && (
            <p className="text-red-700">{blogDataError.description}</p>
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogPost;
