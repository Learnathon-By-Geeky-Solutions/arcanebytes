import Link from "next/link";
import React from "react";
import { Kelly_Slab } from "next/font/google";
import { Khand } from 'next/font/google'
import Image from "next/image";
const kelly = Kelly_Slab({
  weight: ["400"],
});
const khand = Khand({
    weight: ["700"],
  });

const hero = () => {
  return (
    <>
      <div className="flex justify-evenly">
        <section className="mt-20">
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
          <Image src="/image-1.svg" alt="hero" width={400} height={400} />
        </section>
      </div>
      <div className="bg-[#FF5B36] rounded-lg p-10">
        <h1 className={`${khand.className} text-6xl leading-snug text-[#202020]  p-5`}>
          Achieve your goals with personalized challenges, <br /> rewards, and progress
          tracking.
        </h1>
        <span className="flex gap-5 justify-end"> 
        <Link className=" px-6 py-2 rounded-lg font-color bg-[#202020] ml-5 text-[#]" href="/login">Get Started</Link>
            <Link className=" border-2 border-[#202020] text-[#202020] font-semibold px-6 py-2  rounded-lg" href="/login">Learn More</Link>
        </span>
      </div>
    </>
  );
};

export default hero;
