import React from "react";
import { Kelly_Slab } from "next/font/google";
const kelly = Kelly_Slab({
  weight: ["400"],
});

const AboutPage = () => {
  return (
    <div>
      <h1 className={`${kelly.className} text-center py-5 text-7xl`}>
        About <span className="text-[#FF5B36]"> K</span>aizen
      </h1>
      <section className="flex flex-col justify-center items-center">
        <h1
          className={`${kelly.className} text-center px-16 accent-theme rounded-xl py-2 mb-5 text-4xl`}
        >
          Project Overview
        </h1>
        <section className="text-justify max-w-5xl">
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
        </section>
        <h3 className="text-3xl font-bold py-5">Core Concepts</h3>
        <section className="text-justify max-w-3xl mb-10">
          <b>Objectives: </b>
          <li>Help users overcome procrastination by breaking large goals
          into smaller, manageable tasks.</li>
          <li>Reward users with virtual points,
          badges, and delayed gratification for staying on track. </li>
          <li>Use AI to
          provide personalized recommendations and progress analysis.</li> <br />
            <b>Target Audience: </b> Students, freelancers, and professionals struggling with
          productivity.  <br /> <br />
          <b>Unique Selling Point: </b>Combines psychological principles
          with gamification, creating a fun and engaging experience to drive
          behavior change.
        </section>
      </section>
    </div>
  );
};

export default AboutPage;
