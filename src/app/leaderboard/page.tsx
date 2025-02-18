import React from "react";
import LeaderboardTable from "./table";
import TopStats from "./topStats";
import Top3 from "./top3";
import { Kelly_Slab } from "next/font/google";
const kelly = Kelly_Slab({
  weight: ["400"],
  subsets: ["latin"],
});
const Leaderboard = () => {
  return (
    <div>
      <div className="flex justify-center">
      <h1 className={`${kelly.className} rounded-lg w-1/3 text-center btn-accent py-2 mt-5 text-5xl`}>
        LeaderBoard
      </h1>
      </div>
    
      <Top3 />
      <TopStats />
      <LeaderboardTable />
    </div>
  );
};

export default Leaderboard;
