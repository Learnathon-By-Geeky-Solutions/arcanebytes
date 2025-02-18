import React from 'react'
import { Kelly_Slab } from "next/font/google";
import Image from 'next/image';
const kelly = Kelly_Slab({
    weight: ["400"],
    subsets: ['latin'],
  });

const leaderboardPreview = () => {
  return (
    <div className='my-20 flex flex-col items-center'>
        <h1 className={`${kelly.className} rounded-lg max-w-2xl text-[#202020] text-center accent-theme py-5 px-20 text-5xl`}>
            LeaderBoard Preview 
        </h1>
        <section className='flex flex-col items-center my-20'>
            <Image className='mb-10' alt='top-3' src="/Top 3.png" width={500} height={200} />
            <Image src="/Leaderboard.png" alt='leaderboard' width={1000} height={500} />
        </section>
    </div>
  )
}

export default leaderboardPreview