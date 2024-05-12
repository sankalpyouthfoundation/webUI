import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../utils/Loader';
import { getConfig } from '../env_config/activeConfig';

function Login(props) {
    const [loading, setloading] = useState(false);

    useEffect(() => {
    //props.handleLogout();
    localStorage.clear();
    }, [])

    const navigate = useNavigate();

    const [data, setData] = useState({
        "email": "",
        "password": ""
    })

    const handle = (e) =>{
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
    }

    const config = getConfig();

    const login = (e) =>{
        window.scrollTo({ top: 0, behavior: "smooth" });
        e.preventDefault();
        setloading(true);
        axios
        .post(config.login_endpoint, data)
        .then((res)=>{
            setloading(false);
            if(res.data.status === "Unauthorized"){
                toast.error(res.data.status + ", Incorrect Credentials")
                navigate("/login", { replace: true });
            }
            else if(res.data.status === "No Account exist with this mail"){
                toast.error(res.data.status + ". " + res.data.message);
                navigate("/login",{replace: true}) //In future we will enable register then will change to /register
            }
            else{
                toast.success("Login Successful!")
                localStorage.setItem("syfLoggedInUser", JSON.stringify(res.data));
                setTimeout(()=>{localStorage.removeItem("syfLoggedInUser");navigate("/login");},900000);// 15min * 60sec * 1000ms = 90000ms
                navigate("/admin",{replace: true})
                window.location.reload();
                //let data = JSON.parse(localStorage.getItem("loggedInUser"));
                //let token = data.jwtToken.token;
                //res.data.seller ? navigate(`/dashboard?${token}`) : navigate(`/profile?${token}`);
            }
        }).catch(error=>console.error(error));
    }
        
  return (
    <>
    {loading ? <Loader/> : null}
    <div className="p-4 m-5 w-full max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:border-gray-700">
    <form className="space-y-6" method='POST' onSubmit={(e)=>{login(e)}} >
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="email" name="email" onChange={(e) => handle(e)} value={data.email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
            <input type="password" name="password" onChange={(e) => handle(e)} value={data.password} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>
        {/* <div className="flex items-start">
            <Link to={"/login"} className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot Password?</Link>
        </div> */}
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <Link to={"/register"} className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
        </div>
    </form>
</div>
</>
  )
}

export default Login