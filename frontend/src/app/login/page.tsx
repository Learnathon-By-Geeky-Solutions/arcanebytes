import React from "react";
import Image from "next/image";
import Image2 from "../../../public/image-2.svg";
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
  title: 'Kaizen Sign-In',
  description: 'Login to the Kaizen app to start your productivity journey',
};
const LoginPage = () => {
  return (
    <div>
      <main className="flex flex-col md:flex-row justify-evenly md:mx-10 my-5">
        <section className="flex flex-wrap-reverse">
          <span className="hidden md:block">
            <Image src={Image2} alt="login" width={300} height={300} />
          </span>
          <section aria-label="Login Header">
          <h1 className={`${kelly.className}  md:mt-10 text-5xl md:text-7xl`}>
              Stay Focused <br />
              <p className="text-3xl md:text-5xl mt-3 md:mt-10">
                with <span className="text-[#FF5B36]">K</span>aizen
              </p>
            </h1>
          </section>
        </section>
        <section className=" md:w-1/3 mt-10 bg-gradient-to-br from-[#591404] via-red-900 to-[#FF5B36] transition ease-in-out delay-300 duration-400 hover:bg-gradient-to-tr p-1 rounded-lg">
          <div className=" flex flex-col items-center h-full w-full rounded-md px-5 md:px-10 py-5 main-theme">
            <span>
              <h1 className={`${kelly.className} text-4xl`}>
                Sign In <br />
              </h1>
            </span>
            <div className="mt-5 md:w-full">
              <form className="">
                <div>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input secondary-theme dark-font w-full"
                    required
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input secondary-theme dark-font w-full"
                    required
                  />
                  <p className="my-3 text-xs">
                    <Link href="/" className="font-bold underline">
                      Forgot Password?
                    </Link>
                  </p>
                </div>
                <div className="mt-5 flex justify-center items-center">
                  <Link href="/"  className="btn-accent text-center font-medium md:w-40 rounded-lg p-3">
                    Login
                  </Link>
                </div>
                <p className="text-center mt-4 text-sm">or continue with</p>
                <div className="mt-4 flex gap-2 md:gap-5 justify-center items-center">
                  <Link href="/"  className="secondary-theme transition delay-150 duration-300 ease-in-out hover:scale-110 rounded-lg py-3 px-4 md:px-8">
                    <Image
                      src="/google.png"
                      alt="login"
                      width={20}
                      height={20}
                    />
                  </Link>
                  <Link href="/"  className="secondary-theme transition delay-150 duration-300 ease-in-out hover:scale-110 rounded-lg py-3 px-4 md:px-8">
                    <Image
                      src="/facebook.png"
                      alt="login"
                      width={20}
                      height={20}
                    />
                  </Link>
                  <Link href="/"  className="secondary-theme transition delay-150 duration-300 ease-in-out hover:scale-110 rounded-lg py-3 px-4 md:px-8">
                    <Image
                      src="/github.png"
                      alt="login"
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
                <p className="text-center mt-4 text-xs md:text-sm">
                  Don&apos;t have an account yet?{" "}
                  <Link href="/register" className="font-bold underline">
                    Register Now
                  </Link>{" "}
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
