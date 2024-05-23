import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Gallary = () => {
  const dispatch = useDispatch();
  const reduxMovie = useSelector(
    (state) => state?.movies?.movieReducer?.result || []
  );
  // reduxMovie = reduxMovie || [];
  console.log(reduxMovie);
  const pageSize = 20;
  const page = 1;
  const pages = Math.ceil(reduxMovie.length / pageSize);

  const pageData = reduxMovie.slice(
    page * pageSize - pageSize,
    page * pageSize
  );
  console.log(pageData);
  //useSelector take the callback function it will take the entire store as a state
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, [dispatch]);

  return (
    <div className="m-7">
      <h2 className="mb-5 font-bold text-lg">Here is the List of 20 images</h2>
      <div className="flex align-middle flex-wrap">
        {pageData.map((movie) => (
          <>
            <div className="m-3 ml-0 origin-center hover:scale-[2]">
              <img src={movie.thumbnailUrl} alt="alt" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
