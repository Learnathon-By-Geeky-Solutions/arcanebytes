import React from "react";
import { Kelly_Slab } from "next/font/google";
const kelly = Kelly_Slab({
  weight: ["400"],
  subsets: ["latin"],
});

const ForumPage = () => {
  return (
    <div>
      <h1 className={`${kelly.className} text-center py-5 text-5xl md:text-6xl`}>
        <span className="text-[#FF5B36]"> K</span>aizen Forum
      </h1>
    </div>
  );
};

export default ForumPage;
