import React from "react";
import { Kelly_Slab } from "next/font/google";
import Link from "next/link";
const kelly = Kelly_Slab({
  weight: ["400"],
});

const FeaturesPage = () => {
  return (
    <div>
      <h1 className={`${kelly.className} text-center py-5 text-6xl`}>
        <span className="text-[#FF5B36]"> K</span>aizen Features
      </h1>
      <section className="flex flex-col justify-center items-center">
        <h1
          className={`${kelly.className} text-center px-16 accent-theme rounded-xl py-2 text-3xl`}
        >
          User-End Features
        </h1>
        <section className="my-5 place-content-center place-items-center">
          <div className="flex gap-5">
            <div className="card btn-outline-accent w-96">
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
            <div className="card btn-outline-accent w-96">
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
          </div>
          <div className="flex my-5 gap-5">
            <div className="card btn-outline-accent w-96">
              <div className="card-body">
                <h2 className=" font-semibold text-xl text-center">
                Additional Productivity Tools
                </h2>
                <span className="font-color">
                  <li>Flashcards & Learning Support </li>
                  <li> Daily Motivation </li>
                  <li>  Performance Tracking </li>
                </span>
              </div>
            </div>
            <div className="card btn-outline-accent w-96">
              <div className="card-body">
                <h2 className=" font-semibold text-xl text-center">
                Goal Tracking & Social Engagement                </h2>
                <span className="font-color">
                  <li>  Goal Progress & Timeline </li>
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
