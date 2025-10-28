import React from 'react'
import Banner from '../Components/Home/Banner'
import HeroSection from '../Components/Home/HeroSection'
import Feature from '../Components/Home/Feature'
import Testimonial from '../Components/Home/Testimonial'
import CallToAction from '../Components/Home/CallToAction'



function Home() {
  return (
    <div>
     <Banner/>
     <HeroSection/>
     <Feature/>
     <Testimonial/>
     <CallToAction/>
    </div>
  )
}

export default Home
