import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './footer/Footer';
import Home from './home/Home';
import Login from './login/Login';
// import Register from './login/Register';
import Heading from './header/Heading';
import AdminDashboard from './login/admin/AdminDashboard';
import { Toaster } from 'react-hot-toast';
import { useEffect} from 'react';
import axios from 'axios';
import { getConfig } from './env_config/activeConfig';
import ContactView from './login/admin/ContactView';
import Competition from './login/admin/Competition';
import StudentRegistration from './login/admin/StudentRegistration';
import ManageUser from './login/admin/ManageUser';
import FindStudent from './login/admin/FindStudent';
import ForestArmyRegistration from './forestarmy/ForestArmyRegistration';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    const config = getConfig();
    axios.get(config.health_check)
    .then((res)=>{
    if(res.status === 200){
      dispatch({ type: "SERVER_UP" });
    }
  })
  }, [dispatch]) 
  
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
      <Route path= "/pahadgreenarmy" element={<ForestArmyRegistration/>}/>
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
