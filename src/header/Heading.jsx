import React from 'react'
import { Link } from 'react-router-dom';
import ProfileCard from '../login/ProfileCard';

function Heading(props) {
    return (
      <>
      <div className="flex items-center z-50 p-2.5">
        <Link to={"/"} className="flex items-center">
          <img src="/logoicon.png" className="mr-1 h-12" alt="Logo"/>
          <span className="self-center md:text-xl text-xl font-semibold whitespace-nowrap dark:text-blue text-blue-700">{props.heading}</span>
        </Link>
      </div>
      {localStorage.getItem("syfLoggedInUser") !== null ? <div className="md:inline hidden"><ProfileCard/></div>
      :<Link to={"/login"} className= "z-60 dark:text-white hover:underline font-medium float-right -mt-12 mr-3 hidden md:inline text-blue-700">Login</Link>
      }
      </>
    );
  }
export default Heading