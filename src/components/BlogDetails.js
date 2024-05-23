// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

// const BlogDetails = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState({});
//   const [comments, setComments] = useState([{}]);
//   const [blogDes, setBlogDes] = useState("");

//   useEffect(() => {
//     async function fetchBlog() {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${id}`
//       );
//       const data = await response.json();
//       console.log(data);
//       setBlog(data);
//     }
//     console.log(blog);
//     fetchBlog();
//   }, [id]);
//   useEffect(() => {
//     async function fetchComments() {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${id}/comments`
//       );
//       const data = await response.json();
//       console.log(data);
//       setComments(data);
//     }
//     console.log(comments);
//     fetchComments();
//   }, [id]);

//   const handleChange = (e) => {
//     setBlogDes(e.target.value);
//   };
//   const clearState = () => {
//     setBlogDes("");
//   };
//   const handelSubmit = (e) => {
//     e.preventDefault();
//     console.log(blogDes);
//     clearState();
//   };
//   const pageSize = 5;
//   const page = 1;
//   const pages = Math.ceil(comments.length / pageSize);

//   const pageData = comments.slice(page * pageSize - pageSize, page * pageSize);
//   console.log(pageData);
//   return (
//     <div className="m-8">
//       <h1 className="my-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//         Blog {blog.id} Details:-
//       </h1>

//       <Link
//         to={`/blogs/list/${blog.id}/comments`}
//         className="block p-6 max-w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
//       >
//         <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//           {blog.id}
//         </h4>
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//           {blog.title}
//         </h5>
//         <p className="font-normal text-gray-700 dark:text-gray-400">
//           {blog.body}
//         </p>
//       </Link>

//       <div className="m-8">
//         <h1 className="my-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//           View Latest 5 Comments of Blog - {id} :-
//         </h1>
//         <Link to={`/blogs/list/${blog.id}/comments`}>
//           <button
//             type="button"
//             class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//           >
//             View All Comments
//           </button>
//         </Link>
//         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 Blog Id
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Post Id
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Post Email
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Post Description
//               </th>
//             </tr>
//           </thead>

//           {pageData.map((comment) =>
//             blog.id === comment.postId ? (
//               <tbody>
//                 <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                   <th
//                     scope="row"
//                     className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
//                   >
//                     <Link to={`/blogs/list/${comment.id}`}>
//                       {comment.postId}
//                     </Link>
//                   </th>
//                   <td className="px-6 py-4"> {comment.id}</td>

//                   <td className="px-6 py-4"> {comment.email}</td>
//                   <td className="px-6 py-4">{comment.body}</td>
//                 </tr>
//               </tbody>
//             ) : (
//               ""
//             )
//           )}
//         </table>
//       </div>
//       <form onSubmit={handelSubmit}>
//         <div className="mb-6">
//           <label
//             for="message"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
//           >
//             Add a new comment
//           </label>
//           <textarea
//             name="description"
//             id="message"
//             rows="4"
//             className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Add a new comment"
//             value={blogDes}
//             onChange={handleChange}
//           ></textarea>
//           <button
//             type="submit"
//             className="text-white my-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default BlogDetails;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  let blogDataList = useSelector(
    (state) => state?.blogData?.blogDataReducer?.result || []
  );
  let commentDataList = useSelector(
    (state) => state?.commentBlogData?.commentDataReducer?.result || []
  );
  console.log(commentDataList);
  console.log(blogDataList);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([{}]);
  const [blogDes, setBlogDes] = useState("");

  useEffect(() => {
    dispatch({ type: "FETCH_BLOG_DATA", payload: id });
  }, [dispatch]);
  useEffect(() => {
    dispatch({ type: "FETCH_COMMENT_DATA", payload: id });
  }, [dispatch]);

  // useEffect(() => {
  //   async function fetchComments() {
  //     const response = await fetch(
  //       `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     setComments(data);
  //   }
  //   console.log(comments);
  //   fetchComments();
  // }, [id]);

  const handleChange = (e) => {
    setBlogDes(e.target.value);
  };
  const clearState = () => {
    setBlogDes("");
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(blogDes);
    clearState();
  };
  const pageSize = 5;
  const page = 1;
  const pages = Math.ceil(commentDataList.length / pageSize);

  const pageData = commentDataList.slice(
    page * pageSize - pageSize,
    page * pageSize
  );
  console.log(pageData);
  return (
    <div className="m-8">
      <h1 className="my-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Blog {blogDataList.id} Details:-
      </h1>

      <Link
        to={`/blogs/list/${blogDataList.id}/comments`}
        className="block p-6 max-w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {blogDataList.id}
        </h4>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {blogDataList.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {blogDataList.body}
        </p>
      </Link>

      <div className="m-8">
        <h1 className="my-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          View Latest 5 Comments of Blog - {id} :-
        </h1>
        <Link to={`/blogs/list/${blogDataList.id}/comments`}>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            View All Comments
          </button>
        </Link>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Blog Id
              </th>
              <th scope="col" className="px-6 py-3">
                Post Id
              </th>
              <th scope="col" className="px-6 py-3">
                Post Email
              </th>
              <th scope="col" className="px-6 py-3">
                Post Description
              </th>
            </tr>
          </thead>

          {commentDataList.map((comment) =>
            blog.id === commentDataList.postId ? (
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    <Link to={`/blogs/list/${comment.id}`}>
                      {comment.postId}
                    </Link>
                  </th>
                  <td className="px-6 py-4"> {comment.id}</td>

                  <td className="px-6 py-4"> {comment.email}</td>
                  <td className="px-6 py-4">{comment.body}</td>
                </tr>
              </tbody>
            ) : (
              ""
            )
          )}
        </table>
      </div>
      <form onSubmit={handelSubmit}>
        <div className="mb-6">
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Add a new comment
          </label>
          <textarea
            name="description"
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add a new comment"
            value={blogDes}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="text-white my-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogDetails;
