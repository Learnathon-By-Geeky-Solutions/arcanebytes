import React from "react";

const topStats = () => {
  return (
    <div className="flex mt-5 justify-center">
      <div className="stats border-4 border-[#FF5B36]">
        <div className="stat">
          <div className="stat-figure hidden md:block text-primary">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            
          </div>
          <div className="stat-title text-xs md:text-base">Total Tasks</div>
          <div className="stat-value text-base md:text-3xl text-primary">100</div>
        </div>

        <div className="stat">
          <div className="stat-figure hidden md:block text-secondary">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-xs md:text-base">Total Rewards</div>
          <div className="stat-value  text-base md:text-3xl  text-secondary">1000</div>
        </div>

        <div className="stat">
          <div className="stat-figure hidden md:block text-secondary">
            <div className="avatar online">
              <div className="w-8 md:w-16 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
          <div className="stat-title text-xs md:text-base">Tasks done</div>
          <div className="stat-value  text-base md:text-3xl">86%</div>
        </div>
      </div>
    </div>
  );
};

export default topStats;
