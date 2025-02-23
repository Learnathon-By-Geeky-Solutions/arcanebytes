import React from "react";
import LeaderboardTable from "./table";
import TopStats from "./topStats";
import Top3 from "./top3";
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
  title: 'Kaizen Leaderboard',
  description: 'View the top performers on the Kaizen app and track your progress',
};
const Leaderboard = () => {
  return (
    <div>
      <div className="flex justify-center">
      <section aria-label="Features Header">
      <h1 className={`${kelly.className} rounded-lg px-10 text-center btn-accent py-2 mt-5 text-3xl md:text-5xl`}>
        LeaderBoard
      </h1>
      </section>
      </div>
      <Top3 />
      <TopStats />
      <LeaderboardTable />
    </div>
  );
};

export default Leaderboard;
