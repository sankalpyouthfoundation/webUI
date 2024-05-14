import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import { logout } from '../redux/loginAction';

function ProfileCard(props) {
    const myref = useRef();

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleLogout = () =>{
      localStorage.removeItem("syfLoggedInUser")
      dispatch(logout());
      navigate("/",{replace: true})
    }

    let data = JSON.parse(localStorage.getItem("syfLoggedInUser"));
    
    let [toggle, settoggle] = useState("z-60 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600");

    const myfunc =()=> {
        if(toggle === "z-60 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"){
            settoggle("z-60 absolute -ml-24 block my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600")
        }else{
            settoggle("z-60 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600")    
        }
    }
    
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (myref.current && !myref.current.contains(event.target)) {
          settoggle("z-60 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600");
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    if(true){
      return (
        <>
        <div className="top-0 right-0 fixed m-5 mr-8" onClick={myfunc} ref={myref}>
          <button  id="profileCard" type="button" className="flex mr-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <svg className="h-6 w-6 text-blue-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
          </button>
          {/* <!-- Dropdown menu --> */}
          <div className={toggle}>
          
            <div className="py-3">
            <Link to={"/admin"}><span className="block text-center text-sm text-blue-600 dark:text-white p-1">{"Admin!"}</span></Link>
            </div>
            
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link to={"/manageusers"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Manage users</Link>
              </li>
              <li>
                <Link to={"/registration"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Add Student</Link>
              </li>
              <li>
                <Link to={"/viewcontacts"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Messages</Link>
              </li>
              <li>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Find Student</a>
              </li>
              <li>
                <p onClick={handleLogout} className="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</p>
              </li>
            </ul>
          </div>
          </div>
        </>
      )

    }else{
      // User Profile Card
      return (
        <>
        <div className="ml-5" onClick={myfunc} ref={myref}>
          <button  type="button" className="flex mr-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <svg className="h-6 w-6 text-blue-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
          </button>
          {/* <!-- Dropdown menu --> */}
          <div className={toggle}>
            <div className="py-3">
            <Link to={"/profile"}><span className="block text-center text-sm text-blue-600 dark:text-white p-1">{data.firstname + " " + data.lastname}</span></Link>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link to={"/personal"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My Profile</Link>
              </li>
              <li>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Orders</a>
              </li>
              <li>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Wishlist</a>
              </li>
              <li>
                <Link to={"/address"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Addresses</Link>
              </li>
              <li>
                <Link to={"/login"} onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div>
          </div>
        </>
      )
    }
  
}

export default ProfileCard