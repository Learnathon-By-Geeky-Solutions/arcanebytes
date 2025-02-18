import React from "react";
import { Kelly_Slab } from "next/font/google";
import Image from "next/image";
const kelly = Kelly_Slab({
  weight: ["400"],
  subsets: ['latin'],
});
const featuresOverview = () => {
  return (
    <div className="my-20 ">
      <h1 className={`${kelly.className} text-center text-5xl`}>
        Features Overview
      </h1>
      <section className="flex items-center mt-20">
        <div className="card w-96 ">
          <figure>
            <Image src="./icon.png" alt="icon" width={100} height={100} />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Challenge Yourself</h2>
            <p>Create custom challenges and build streaks.</p>
          </div>
        </div>
        <div className="card w-96 ">
          <figure>
          <Image src="./icon (1).png" alt="icon" width={100} height={100} />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Earn Rewards</h2>
            <p>Gain XP and unlock premium badges.</p>
          </div>
        </div>
        <div className="card w-96 ">
          <figure>
          <Image src="./icon (2).png" alt="icon" width={100} height={100} />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Track Progress</h2>
            <p>Visualize your growth through timelines and graphs.</p>
          </div>
        </div>
        <div className="card w-96 ">
          <figure>
          <Image src="./icon (3).png" alt="icon" width={100} height={100} />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Beat Distractions</h2>
            <p>Stay focused with the app’s distraction-blocking feature.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default featuresOverview;
