import React from 'react'
import Carousel from '../slideshow/Carousel'
import OurInitiative from '../ourInitiative/OurInitiative'
import AboutSection from '../aboutus/AboutSection'
import Donate from '../donation/Donate'
import Contact from '../contact/Contact'
import Status from '../status/Status';
import HomeMenuHeader from '../header/HomeMenuHeader'

function Home() {
  return (
    <>
    <HomeMenuHeader/>
    <Carousel/>
    <Status/>
    <OurInitiative/>
    <AboutSection/>
    {/* <Team/> */}
    <Donate/>
    <Contact/>
    </>
  )
}

export default Home