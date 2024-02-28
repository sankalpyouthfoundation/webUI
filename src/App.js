// import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutSection from './aboutus/AboutSection';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Navbar from './header/Navbar';
import OurInitiative from './ourInitiative/OurInitiative';
import Team from './ourteam/Team';
import Carousel from './slideshow/Carousel';
import Status from './status/Status';

function App() {
  return (
  <>
    <Navbar heading="Sankalp Youth Foundation"/>
    <Carousel/>
    <Status/>
    <OurInitiative/>
    <AboutSection/>
    <Team/>
    <Contact/>
    <Footer/>
  </>
  );
}

export default App;
