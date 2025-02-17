import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import FeaturesOverview from '../components/featuresOverview'
import LeaderboardPreview from '../components/leaderboardPreview'
import Faq from '../components/faq'
import Footer from '../components/footer'
const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturesOverview/>
      <LeaderboardPreview/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default page