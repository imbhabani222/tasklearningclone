import React, { Fragment } from "react";
import logo1 from "../assets/Starbucks.svg";
import logo2 from "../assets/independent.png";
import logo3 from "../assets/ccommons.png";
const Home = () => {
  const TestimonialData = [
    {
      id: 1,
      heading: "Starbucks",
      subTitle:
        " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      logo: logo1,
    },
    {
      id: 2,
      heading: "Vectors",
      subTitle:
        " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      logo: logo2,
    },
    {
      id: 3,
      heading: "Creative",
      subTitle:
        " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      logo: logo3,
    },
  ];
  return (
    <Fragment>
      <section className="">
        <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-col">
          <h1 className="text-white text-4xl font-bold">
            Welcome to ABC Company
          </h1>
          <p className="text-white w-[780px] text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae esse
            accusamus libero ipsum vel velit in, ducimus labore quam aspernatur
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae esse
            accusamus libero ipsum vel velit in, ducimus labore quam aspernatur
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae esse
            accusamus libero ipsum vel velit in, ducimus labore quam aspernatur
          </p>
        </div>
        <div className="w-full ">
          <h2 className="m-7 text-2xl font-bold text-center">
            Success Stories from Our Patners
          </h2>
          <div>
            {TestimonialData.map((ele) => (
              <a
                href="#"
                className="flex justify-between p-6 m-7 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <article>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {ele.heading}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {ele.subTitle}
                  </p>
                </article>
                <img className="w-20 rounded-t-lg" src={ele.logo} alt="logo1" />
              </a>
            ))}
          </div>
        </div>

        <form className="m-7">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Email
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="email"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email...."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Subscribe
            </button>
          </div>
        </form>
      </section>

      {/* <footer className="footer">
        <span className="footercopy">&copy;</span>ABC Company 2022
        <nav>
          <ul className="navbar_ul">
            <li className="navbar_li">
              <a href="faq.html">FAQ</a>
            </li>
            <li className="navbar_li">
              <a href="subscribe.html">Subscribe(Email)</a>
            </li>
            <li className="navbar_li">
              <a href="sevices.html">Terms and Conditions</a>
            </li>
            <li className="navbar_li">
              <a href="event.html">Privacy Policy</a>
            </li>
          </ul>
        </nav>
      </footer> */}
    </Fragment>
  );
};

export default Home;
