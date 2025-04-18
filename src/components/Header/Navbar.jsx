import React from "react";
import { Link, NavLink } from "react-router";
import Button from "../Ui/Button";

const Navbar = () => {
  // const links = <>
  //     <Link to='/'><li className="m-2">Home</li></Link>
  //     <Link to='/readList'><li className="m-2">Listed Books</li></Link>
  // </>
  return (
    <div className="navbar bg-base-100 shadow-sm px-2 md:px-10 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/readList"
                className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pagesToRead"
                className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md font-medium transition duration-200 work-sans text-lg ${
                  isActive
                    ? "text-green-500 border-2 border-green-500"
                    : "text-gray-700 hover:text-green-500"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/readList"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md font-medium transition duration-200 work-sans text-lg ${
                  isActive
                    ? "text-green-500 border-2 border-green-500"
                    : "text-gray-700 hover:text-green-500"
                }`
              }
            >
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pagesToRead"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md font-medium transition duration-200 work-sans text-lg ${
                  isActive
                    ? "text-green-500 border-2 border-green-500"
                    : "text-gray-700 hover:text-green-500"
                }`
              }
            >
              Pages to Read
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center space-x-4">
        <a className="btn btn-success text-white work-sans font-semibold">Sign In</a>
        <a className="btn btn-info text-white work-sans font-semibold">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
