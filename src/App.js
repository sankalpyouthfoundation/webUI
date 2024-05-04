import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './footer/Footer';
import Home from './home/Home';
import Login from './login/Login';
import Register from './login/Register';
import Heading from './header/Heading';

function App() {
  return (
  <>
    <Heading heading="Sankalp Youth Foundation"/>
    <Routes>
      <Route path= "*" element={<Home/>}/>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/login" element={<Login/>}/>
      <Route path= "/register" element={<Register/>}/>
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
