import React from 'react'
import { Link } from 'react-router-dom'

function LoginWelcome() {
    let data = JSON.parse(localStorage.getItem("syfLoggedInUser"));
  return (
    <div className="flex justify-center relative text-2xl mt-2 mb-5 md:mt-0 font-medium text-blue-600 dark:text-blue-500">Welcome, <Link to={"/dashboard"}>&nbsp;{data.name}!</Link></div>
  )
}

export default LoginWelcome