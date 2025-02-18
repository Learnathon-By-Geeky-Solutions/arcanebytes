import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/Logo.png"; 

const navbar = () => {
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
            <a>Home</a>
          </li>
          <li>
            <a>Leaderboard</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>About</a>
          </li>
          </ul>
        </div>
        <Link className="delay-150 duration-300 ease-in-out hover:scale-110" href="/">
                    <Image src={Logo} alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-lg menu-horizontal px-1">
          <li>
          <Link className="delay-150 duration-300 ease-in-out hover:text-[#FF5B36] " href="/">Home</Link>
          </li>
          <li>
          <Link className="delay-150 duration-300 ease-in-out hover:text-[#FF5B36]" href="/leaderboard">Leaderboard</Link>
          </li>
          <li>
          <Link className="delay-150 duration-300 ease-in-out hover:text-[#FF5B36]"  href="/features">Features</Link>
          </li>
          <li>
          <Link className="delay-150 duration-300 ease-in-out hover:text-[#FF5B36]" href="/">Blogs</Link>
          </li>
          <li>
          <Link className="delay-150 duration-300 ease-in-out hover:text-[#FF5B36]" href="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className=" px-10 py-2 rounded-full btn-outline-light" href="/login">Log In</Link>
        <Link className=" px-6 py-2 rounded-full btn-light ml-3" href="/contact">Contact Us</Link>
      </div>
    </div>
  );
};

export default navbar;
