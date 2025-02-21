import React from "react";
import { Kelly_Slab } from "next/font/google";
const kelly = Kelly_Slab({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
  preload: true,
});
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kaizen Forum',
  description: 'Join the Kaizen community forum for discussions and knowledge sharing',
};

const ForumPage = () => {
  return (
    <div>
      <main>
        <section aria-label="Forum Header">
          <h1
            className={`${kelly.className} text-center py-5 text-5xl md:text-6xl`}
          >
            <span className="text-[#FF5B36]"> K</span>aizen Forum
          </h1>
        </section>
      </main>
    </div>
  );
};

export default ForumPage;