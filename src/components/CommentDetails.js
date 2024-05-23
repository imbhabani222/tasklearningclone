// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

// const CommentDetails = () => {
//   const { id } = useParams();
//   const [comments, setComments] = useState([{}]);

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

//   return (
//     <div className="m-8">
//       <Link to="/blogs">
//         <button
//           type="button"
//           class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             class="h-5 w-5"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
//               clip-rule="evenodd"
//             />
//           </svg>
//         </button>
//       </Link>
//       <h1 className="my-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//         View All Comments of Blog - {id} :-
//       </h1>

//       <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             <th scope="col" className="px-6 py-3">
//               Post Id
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Post Email
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Post Description
//             </th>
//           </tr>
//         </thead>

//         <tbody>
//           {comments.map((comment) => (
//             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//               <th
//                 scope="row"
//                 className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
//               >
//                 <Link to={`/blogs/list/${comment.id}`}>{comment.id}</Link>
//               </th>
//               <td className="px-6 py-4"> {comment.email}</td>
//               <td className="px-6 py-4">{comment.body}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CommentDetails;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CommentDetails = () => {
  let commentList = useSelector(
    (state) => state?.commentBlogData?.commentDataReducer?.result || []
  );
  console.log(commentList);
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_COMMENT", payload: id });
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
  // useEffect(() => {
  //   dispatch({ type: "FETCH_COMMENT" });
  // }, [dispatch]);

  return (
    <div className="m-8">
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
      <h1 className="my-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        View All Comments of Blog :-{id}
      </h1>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
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

        <tbody>
          {commentList.map((comment) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                <Link to={`/blogs/list/${comment.id}`}>{comment.id}</Link>
              </th>
              <td className="px-6 py-4"> {comment.email}</td>
              <td className="px-6 py-4">{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommentDetails;
