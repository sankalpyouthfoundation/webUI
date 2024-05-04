import React from 'react'
import { Link } from 'react-router-dom';

function Heading(props) {
    return (
      <>
      <div className="flex items-center z-50 p-2.5">
        <Link to={"/"} className="flex items-center">
          <img src="/logoicon.png" className="mr-1 h-12" alt="Logo"/>
          <span className="self-center md:text-xl text-xl font-semibold whitespace-nowrap dark:text-white text-blue-700">{props.heading}</span>
        </Link>
      </div>
      {/* <Link to={"/login"} className= "dark:text-white hover:underline font-medium float-right hidden md:inline text-blue-700">Login</Link> */}
      </>
    );
  }
export default Heading