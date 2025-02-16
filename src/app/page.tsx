import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import FeaturesOverview from '../components/featuresOverview'
const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturesOverview/>
    </div>
  )
}

export default page