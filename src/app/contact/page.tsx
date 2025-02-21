import React from "react";
import Image from "next/image";
import Image4 from "../../../public/image-4.svg";
import { Kelly_Slab } from "next/font/google";
const kelly = Kelly_Slab({
  weight: ["400"],
  subsets: ["latin"],
});
const ContactPage = () => {
  return (
    <div>
      <main className="flex flex-col md:flex-row justify-center md:mx-20 my-5">
        <section className="flex md:w-1/2 flex-col">
          <span className="hidden md:block">
            <Image src={Image4} alt="login" width={400} height={300} />
          </span>
          <span>
            <h1 className={`${kelly.className} text-5xl md:text-7xl`}>
              Let&apos;s Connect<br />
              <p className="text-4xl md:text-5xl mt-5">
                with <span className="text-[#FF5B36]">K</span>aizen
              </p>
            </h1>
          </span>
        </section>
        <section className=" md:w-1/2 mt-10 bg-gradient-to-br from-[#591404] via-red-900 to-[#FF5B36] transition ease-in-out delay-300 duration-400 hover:bg-gradient-to-tr p-1 rounded-lg">
          <div className=" flex flex-col items-center h-full w-full rounded-md px-6 md:px-10 py-5 main-theme">
            <span>
              <h1 className={`${kelly.className} text-4xl md:text-5xl`}>
                Contact Us <br />
              </h1>
            </span>
            <div className="mt-5 w-full">
              <form className="">
                <div>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="input secondary-theme dark-font w-full"
                    required
                  />
                </div>
                <div className="mt-5">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    placeholder="Ask your queries"
                    className="input p-3 h-40 secondary-theme dark-font w-full"
                    required
                  />
                </div>
                <div className="mt-5 flex justify-center items-center">
                  <button className="btn-accent font-medium w-40 rounded-lg p-3">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
