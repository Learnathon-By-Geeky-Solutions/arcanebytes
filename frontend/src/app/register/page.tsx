import React from "react";
import Image from "next/image";
import Image3 from "../../../public/image-3.svg";
import { Kelly_Slab } from "next/font/google";
import Link from "next/link";
const kelly = Kelly_Slab({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
  preload: true,
});
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kaizen Sign-Up',  
  description: 'Register for Kaizen to track habits, join challenges, and unlock achievements in your personal productivity journey',
};
const RegisterPage = () => {
  return (
    <div>
      <main className="flex flex-col-reverse md:flex-row justify-around mt-5 md:mt-10">
        <section className="flex flex-col mt-10 md:mt-0 md:w-2/5 items-center bg-gradient-to-br from-[#591404] via-red-900 to-[#FF5B36] transition ease-in-out delay-300 duration-400 hover:bg-gradient-to-tr p-1 rounded-lg">
        <div className=" flex flex-col items-center h-full w-full rounded-md px-5 md:px-10 py-5 main-theme">
        <span>
            <h1 className={`${kelly.className} text-4xl`}>
              Sign Up <br />
            </h1>
          </span>
          <div className=" w-full">
            <form className="">
              <div>
                <label className="label">
                  <span className="label-text text-xs md:text-sm">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input secondary-theme dark-font w-full"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs md:text-sm">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input secondary-theme dark-font w-full"
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row md:gap-3">
                <div className="">
                  <label className="label">
                    <span className="label-text text-xs md:text-sm">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input secondary-theme dark-font w-full"
                    required
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text text-xs md:text-sm">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="confirm password"
                    className="input secondary-theme dark-font w-full"
                    required
                  />
                </div>
              </div>
              <div className="mt-5 flex justify-center items-center">
                <Link href="/" className="btn-accent text-center font-medium w-40 rounded-lg p-3">
                  Register
                </Link>
              </div>
              <p className="text-center mt-4 text-sm">or continue with</p>
              <div className="mt-4 flex gap-2 md:gap-5 justify-center items-center">
                <Link href="/"  className="secondary-theme transition delay-150 duration-300 ease-in-out hover:scale-110 rounded-lg py-3 px-4 md:px-8">
                  <Image src="/google.png" alt="login" width={20} height={20} />
                </Link>
                <Link href="/"  className="secondary-theme transition delay-150 duration-300 ease-in-out hover:scale-110 rounded-lg py-3 px-4 md:px-8">
                  <Image
                    src="/facebook.png"
                    alt="login"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="/" className="secondary-theme transition delay-150 duration-300 ease-in-out hover:scale-110 rounded-lg py-3 px-4 md:px-8">
                  <Image src="/github.png" alt="login" width={20} height={20} />
                </Link>
              </div>
              <p className="text-center mt-3 text-xs md:text-sm">
                Already have an account yet?
                <Link href="/login" className="font-bold pl-1 md:pl-3 underline">
                  Login Now
                </Link>
              </p>
            </form>
          </div>
          </div>
        </section>
        <section className="flex flex-col">
        <section aria-label="Register Header">
        <h1 className={`${kelly.className} text-4xl md:text-6xl`}>
              Start Your Journey <br />
              <p className="text-3xl md:text-5xl mt-2 md:mt-5">
                with <span className="text-[#FF5B36]">K</span>aizen
              </p>
            </h1>
          </section>
          <span className="hidden md:block">
            <Image src={Image3} alt="login" width={460} height={300} />
          </span>
        </section>
      </main>
    </div>
  );
};

export default RegisterPage;
