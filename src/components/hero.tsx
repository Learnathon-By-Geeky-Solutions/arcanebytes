import Link from "next/link";
import React from "react";
import { Kelly_Slab } from "next/font/google";
import { Khand } from "next/font/google";
import Image from "next/image";
const kelly = Kelly_Slab({
  weight: ["400"],
  subsets: ['latin'],
});
const khand = Khand({
  weight: ["700"],
  subsets: ['latin'],
});

const hero = () => {
  return (
    <>
      <div className="flex mt-5 mb-10 justify-around">
        <section className="mt-10">
          <h1 className={`${kelly.className} mb-5 text-7xl font-bold`}>
            Trust The Process
          </h1>
          <p className="mt-10 text-lg max-w-lg">
            “Hold the vision. Drop the excuses. Remember your why. <br />
            Swerve around obstacles. Trust the process. <br />
            Happiness and success will find you.”
          </p>
          <p className="mt-5 italic">– Karen Salmansohn</p>
        </section>
        <section>
          <Image src="/image-1.svg" alt="hero" width={300} height={400} />
        </section>
      </div>
      <div className="flex justify-around bg-[#FF5B36] rounded-lg py-5 px-10">
        <h1
          className={`${khand.className} text-5xl leading-snug p-5 text-[#202020]`}
        >
          Achieve your goals with personalized challenges, <br /> rewards, and
          progress tracking.
        </h1>
        <div className="flex flex-col gap-5 items-center">
          <Image src="/mascot.svg" alt="login" width={170} height={100} />
          <span className="flex gap-5 justify-end">
            <Link
              className=" px-6 py-2 rounded-lg btn-dark ml-5 text-[#]"
              href="/login"
            >
              Get Started
            </Link>
            <Link
              className=" btn-outline-dark font-medium px-6 py-2  rounded-lg"
              href="/contact"
            >
              Learn More
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default hero;
