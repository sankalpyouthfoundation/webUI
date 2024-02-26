// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './footer/Footer';
import Navbar from './header/Navbar';
import Carousel from './slideshow/Carousel';
import Status from './status/Status';

function App() {
  return (
  <>
    <Navbar heading="Sankalp Youth Foundation"/>
    <Carousel/>
    <Status/>
    <Footer/>
  </>
  );
}

export default App;
