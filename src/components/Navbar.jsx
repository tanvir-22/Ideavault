import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#0F172A] ">
      <div className="navbar shadow-sm  w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Ideas</a>
              </li>
              <li>
                <a>Add Idea</a>
              </li>
              <li>
                <a>My Ideas</a>
              </li>
              <li>
                <a>My Interactions</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">IdeaVault </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Ideas</a>
            </li>
            <li>
              <a>Add Idea</a>
            </li>
            <li>
              <a>My Ideas</a>
            </li>
            <li>
              <a>My Interactions</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <button className="btn bg-[#1e293b]">Login</button>
          <button className="btn bg-[#7357f5]">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
