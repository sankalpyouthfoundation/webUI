import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './footer/Footer';
import Home from './home/Home';
import Login from './login/Login';
// import Register from './login/Register';
import Heading from './header/Heading';
import AdminDashboard from './login/admin/AdminDashboard';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getConfig } from './env_config/activeConfig';
import ContactView from './login/admin/ContactView';
import Competition from './login/admin/Competition';
import StudentRegistration from './login/admin/StudentRegistration';
import ManageUser from './login/admin/ManageUser';
import FindStudent from './login/admin/FindStudent';
import ForestArmyRegistration from './forestarmy/ForestArmyRegistration';

function App() {
  const [status, setstatus] = useState({
    css:"flex w-3 h-3 bg-red-500 rounded-full float-right mt-1 md:float-right md:mt-1",
    tooltip: "Server is down"
  });

  useEffect(()=>{
    const config = getConfig();
    axios.get(config.health_check)
    .then((res)=>{
    if(res.status === 200){
        setstatus({
          css: "flex w-3 h-3 bg-green-500 rounded-full float-right mt-1 md:float-right md:mt-1",
          tooltip: "Server is up"
      });
    }
  })
  }, []) 
  
  return (
  <>
  <div><Toaster
      position="top-center"
      reverseOrder={false}
    /></div>
    <Heading heading="Sankalp Youth Foundation"/>
    <Routes>
      <Route path= "*" element={<Home/>}/>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/login" element={<Login/>}/>
      <Route path= "/dashboard" element={<AdminDashboard/>}/>
      <Route path= "/viewcontacts" element={<ContactView/>}/>
      <Route path= "/viewcompetitions" element={<Competition/>}/>
      <Route path= "/registration" element={<StudentRegistration/>}/>
      <Route path= "/manageusers" element={<ManageUser/>}/>
      <Route path= "/findstudent" element={<FindStudent/>}/>
      <Route path= "/forestarmy" element={<ForestArmyRegistration/>}/>
    </Routes>
    <Footer webstat = {status}/>
  </>
  );
}

export default App;
