import Link from "next/link";
import React from "react";
import { Kelly_Slab } from "next/font/google";
const kelly = Kelly_Slab({
  weight: ["400"],
  subsets: ["latin"],
});
const navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start ml-[-24px]">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content main-theme rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                className="delay-150 duration-300 ease-in-out hover:text-[#FF5B36] "
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="delay-150 duration-300 ease-in-out hover:text-[#FF5B36]"
                href="/leaderboard"
              >
                Leaderboard
              </Link>
            </li>
            <li>
              <Link
                className="delay-150 duration-300 ease-in-out hover:text-[#FF5B36]"
                href="/features"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="delay-150 duration-300 ease-in-out hover:text-[#FF5B36]"
                href="/"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                className="delay-150 duration-300 ease-in-out hover:text-[#FF5B36]"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="delay-150 duration-300 ease-in-out hover:text-[#FF5B36]"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link
          className="delay-150 duration-300 ease-in-out hover:scale-110"
          href="/"
        >
            <h1
              className={`${kelly.className} text-4xl md:text-5xl`}
            >
              <span className="text-[#FF5B36]">K</span>aizen
            </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-lg menu-horizontal px-1">
          <li>
            <Link
              className="delay-150 duration-300 ease-in-out hover:text-[#FF5B36] "
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="delay-150 duration-300 ease-in-out hover:text-[#FF5B36]"
              href="/leaderboard"
            >
              Leaderboard
            </Link>
          </li>
          <li>
            <Link
              className="delay-150 duration-300 ease-in-out hover:text-[#FF5B36]"
              href="/features"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              className="delay-150 duration-300 ease-in-out hover:text-[#FF5B36]"
              href="/"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className="delay-150 duration-300 ease-in-out hover:text-[#FF5B36]"
              href="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end ml-24">
        <Link
          className="text-sm px-2 lg:px-10 py-2 rounded-full btn-outline-light"
          href="/login"
        >
          Log In
        </Link>
        <Link
          className="hidden md:block text-sm px-2 lg:px-6 py-2 rounded-full btn-light ml-3"
          href="/contact"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default navbar;
