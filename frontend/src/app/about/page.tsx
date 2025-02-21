import React from "react";
import { Kelly_Slab } from "next/font/google";
import Link from "next/link";
const kelly = Kelly_Slab({
  weight: ["400"],
  subsets: ["latin"],
});

const AboutPage = () => {
  return (
    <div>
      <h1 className={`${kelly.className} text-center py-5 text-4xl md:text-6xl`}>
        About <span className="text-[#FF5B36]"> K</span>aizen
      </h1>
      <section className="flex flex-col justify-center items-center">
        <h1
          className={`${kelly.className} text-center px-10 md:px-16 accent-theme rounded-xl py-2 md:mb-5 text-2xl md:text-4xl`}
        >
          Project Overview
        </h1>
        <article className="text-justify text-xs md:text-lg my-5 md:max-w-6xl">
          <b>Kaizen</b> is an innovative, gamified productivity application
          designed to help individuals overcome procrastination and build
          positive habits through continuous improvement. Inspired by the
          Japanese philosophy of &quot;Kaizen&quot; & the app empowers users to
          achieve their personal and professional goals by focusing on small,
          consistent changes that lead to lasting results. The platform offers
          features like personalized challenges, habit tracking, performance
          analytics, and motivational content. With a gamified reward system,
          users earn XP, unlock badges, and progress through levels, making
          self-improvement engaging and fun. Tools like AI-driven
          recommendations, flashcards, and distraction-blocking mechanisms also
          ensure users stay focused and on track. Kaizen transforms the journey
          of productivity into an exciting adventure, proving that every small
          step counts toward achieving greatness.
        </article>
        <h3 className="text-center text-2xl font-medium py-5">
          Developed By - <Link className="accent-font" href={'https://github.com/Learnathon-By-Geeky-Solutions/arcanebytes'} target="_blank">ArcaneBytes</Link>

        </h3>
        <section className={`${kelly.className} flex flex-col gap-5 text-xl justify-center items-center mb-10`}>
          <Link href={'https://github.com/twfksh'} target="_blank"> Toufiq Ahmed Shishir</Link>
          <Link href={'https://github.com/fahimalshihab'} target="_blank">Fahim Al Shihab</Link>
          <Link href={'https://github.com/TanzilRayhan'} target="_blank">Tanzil Rayhan</Link>
        </section>
      </section>
    </div>
  );
};

export default AboutPage;
