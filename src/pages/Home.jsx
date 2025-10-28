import React from 'react'
import Banner from '../Components/Home/Banner'
import HeroSection from '../Components/Home/HeroSection'
import Feature from '../Components/Home/Feature'
import Testimonial from '../Components/Home/Testimonial'
import CallToAction from '../Components/Home/CallToAction'
import Footer from '../Components/Home/Footer'



function Home() {
  return (
    <div>
     <Banner/>
     <HeroSection/>
     <Feature/>
     <Testimonial/>
     <CallToAction/>
     <Footer/>
    </div>
  )
}

export default Home
