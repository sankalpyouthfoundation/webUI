// import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register(props) {
    // const navigate = useNavigate();
    // const [active, setActive] = useState(false);

    // const [loading, setloading] = useState(false);

    // const handleCheckbox = (event) =>{
    //     setActive(event.target.checked);
    // }

    const [data, setData] = useState({
        "firstname": "",
        "lastname": "",
        "phone": "",
        "email": "",
        "password": "",
        // "isSeller": active
      }); 

      const handle = (e) =>{
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
    }
    
    //const login = (e) =>{
    //     e.preventDefault();
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    //     setloading(true);
    //     axios.post("https://ecommerce-api-4fpf.onrender.com/api/signup",{
    //         "firstname": data.firstname,
    //         "lastname": data.lastname,
    //         "phone": data.phone,
    //         "email": data.email,
    //         "password": data.password,
    //         "isSeller": active 
    //     })
    //     .then((res)=>{
    //         setloading(false);
    //         if(res.data.status === "User Already Exist!"){
    //             toast.error(res.data.status)
    //         }
    //         else{
    //             toast.success("Account Created Successfully! Please proceed to log in.")
    //             setTimeout(()=>{navigate("/login", { replace: true });}, 2000)
    //         }
    //     })
    //     .catch(error=>console.error(error))
    //     .finally(()=>{
    //         // window.scrollTo({ top: 0, behavior: "smooth" });
    //     })
    // }

    // {loading ? <Loader/> : null}

  return (
    <>
    
    <div className="p-4 m-5 w-full max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">        
    <form method='POST'>
    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign up to our platform</h5>
    <div class="mt-3 grid gap-6 mb-6 md:grid-cols-1">
        <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
            <input type="text" onChange={(e) => handle(e)} value={data.fullname} id="firstname" name='name' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required=""/>
        </div>
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
            <input type="text" onChange={(e) => handle(e)} value={data.phone} id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+919*********" required=""/>
        </div>
    </div>
    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
        <input type="email" onChange={(e) => handle(e)} value={data.email} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@email.com" required=""/>
    </div> 
    <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
        <input type="password" onChange={(e) => handle(e)} value={data.password} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required=""/>
    </div>
    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
    <div className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-300">
            Already have account? <Link to={"/login"} className="text-blue-700 hover:underline dark:text-blue-500">Sign in</Link>
    </div>

    </form>
    </div>
    </>
  )
}

export default Register