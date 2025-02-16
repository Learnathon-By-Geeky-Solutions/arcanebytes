import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import FeaturesOverview from '../components/featuresOverview'
import LeadernoardPreview from '../components/leaderboardPreview'
const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturesOverview/>
      <LeadernoardPreview/>
    </div>
  )
}

export default page