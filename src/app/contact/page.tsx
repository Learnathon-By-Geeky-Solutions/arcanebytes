import React from "react";
import Navbar from "../../components/navbar";
import Image from "next/image";
import { Kelly_Slab } from "next/font/google";
const kelly = Kelly_Slab({
  weight: ["400"],
});
const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <main className="flex justify-center mx-20 my-5">
        <section className="flex w-1/2 flex-col">
          <span>
            <Image src="/Image-4.svg" alt="login" width={400} height={300} />
          </span>
          <span>
            <h1 className={`${kelly.className} text-7xl`}>
              Let&apos;s Connect<br />
              <p className="text-5xl mt-5">
                with <span className="text-[#FF5B36]">K</span>aizen
              </p>
            </h1>
          </span>
        </section>
        <section className=" w-1/2 mt-10 bg-gradient-to-br from-[#591404] via-red-900 to-[#FF5B36] p-1 rounded-lg">
          <div className=" flex flex-col items-center h-full w-full rounded-md px-10 py-5 main-theme">
            <span>
              <h1 className={`${kelly.className} text-5xl`}>
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
