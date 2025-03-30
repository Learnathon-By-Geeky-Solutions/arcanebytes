import React from 'react'
import Hero from '../components/hero'
import FeaturesOverview from '../components/featuresOverview'
import LeaderboardPreview from '../components/leaderboardPreview'
import Faq from '../components/faq'
import Footer from '../components/footer'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kaizen',
  description: 'Welcome to Kaizen, the productivity app that helps you improve your habits and achieve your goals',
};
const page = () => {
  return (
    <div>
      <Hero/>
      <FeaturesOverview/>
      <LeaderboardPreview/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default page