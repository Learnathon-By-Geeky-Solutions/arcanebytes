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
  title: 'Kaizen Features',
  description: 'Explore the features of the Kaizen app and how it can help you improve your productivity',
};

const FeaturesPage = () => {
  return (
    <div>
      <section aria-label="Features Header">
      <h1 className={`${kelly.className} text-center py-5 text-5xl md:text-6xl`}>
        <span className="text-[#FF5B36]"> K</span>aizen Features
      </h1>
      </section>
      <section className="flex flex-col justify-center items-center">
        <h1
          className={`${kelly.className} text-center px-5 md:px-16 accent-theme rounded-xl py-2 text-3xl`}
        >
          User-End Features
        </h1>
        <section className="my-5 place-content-center place-items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card btn-outline-accent md:w-96">
              <div className="card-body">
                <h2 className=" font-semibold text-xl text-center">
                  User Challenges
                </h2>
                <span className="font-color">
                  <li> Personal Challenges</li>
                  <li> Habit Formation & Breaking </li>
                  <li> Daily Highlights </li>
                  <li> Delayed Pleasure System </li>
                </span>
              </div>
            </div>
            <div className="card btn-outline-accent md:w-96">
              <div className="card-body">
                <h2 className=" font-semibold text-xl text-center">
                  Gamification & System Features
                </h2>
                <span className="font-color">
                  <li> Reward System</li>
                  <li> AI-Powered Insights</li>
                </span>
              </div>
            </div>
            <div className="card btn-outline-accent md:w-96">
              <div className="card-body">
                <h2 className=" font-semibold text-xl text-center">
                  Additional Productivity Tools
                </h2>
                <span className="font-color">
                  <li>Flashcards & Learning Support </li>
                  <li> Daily Motivation </li>
                  <li> Performance Tracking </li>
                </span>
              </div>
            </div>
            <div className="card btn-outline-accent md:w-96">
              <div className="card-body">
                <h2 className=" font-semibold text-xl text-center">
                  Goal Tracking & Social Engagement{" "}
                </h2>
                <span className="font-color">
                  <li> Goal Progress & Timeline </li>
                  <li> Community & Leaderboards </li>
                </span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default FeaturesPage;
