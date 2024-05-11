import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LoginWelcome from '../utils/LoginWelcome';


function AdminDashboard(props) {
//   const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigate = useNavigate();
//   const handleDelete = () =>{
//     setShowDeleteModal(true);
//     //DeleteAccount();
//   }
  let data = JSON.parse(localStorage.getItem("syfLoggedInUser"));
  if(null != data){
    return (
    <>
    <LoginWelcome/>

    <div className="flex flex-col md:flex-wrap md:flex-row justify-center items-center mt-0 md:mt-0 mb-16 md:mb-16">
  <div className="m-2 rounded-lg shadow-lg bg-white w-64">
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">
      <center><svg class="h-24 w-24 text-teal-300"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
</svg>

        Manage Users
        </center>
        </h5>
      
      <Link to={"/personal"}><button type="button" className=" inline-block px-6 py-2.5 float-right my-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
        view</button></Link></div>
  </div>

  <div className="m-2 rounded-lg shadow-lg bg-white w-64">
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">
        <center>
        <svg class="h-24 w-24 text-teal-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />  <circle cx="8.5" cy="7" r="4" />  <line x1="20" y1="8" x2="20" y2="14" />  <line x1="23" y1="11" x2="17" y2="11" /></svg>
        
        Register Student </center></h5>
        
      <button type="button" className=" inline-block px-6 py-2.5 float-right my-3 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">ADD</button>
    </div>
  </div>

  <div className="m-2 rounded-lg shadow-lg bg-white w-64">
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">
        <center>
        <svg class="h-24 w-24 text-teal-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />  <line x1="8" y1="9" x2="16" y2="9" />  <line x1="8" y1="13" x2="14" y2="13" /></svg>
        
        Messages </center></h5>
      <Link to={"/viewcontacts"}><button type="button" className=" inline-block px-6 py-2.5 float-right my-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view</button></Link>
    </div>
  </div>

  <div className="m-2 rounded-lg shadow-lg bg-white w-64">
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">
        <center>
        <svg class="h-24 w-24 text-teal-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />  <circle cx="8.5" cy="7" r="4" />  <polyline points="17 11 19 13 23 9" /></svg>
        Find Student</center></h5>
      <button type="button" className=" inline-block px-6 py-2.5 float-right my-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view</button>
    </div>
  </div>

  <div className="m-2 rounded-lg shadow-lg bg-white w-64">
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">
        <center>
        <svg class="h-24 w-24 text-teal-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />  <polyline points="14 2 14 8 20 8" />  <line x1="16" y1="13" x2="8" y2="13" />  <line x1="16" y1="17" x2="8" y2="17" />  <polyline points="10 9 9 9 8 9" /></svg>
        Competitions</center></h5>
      <button type="button" className=" inline-block px-6 py-2.5 float-right my-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view</button>
    </div>
  </div>
</div>
    {/* <center>
    <button type="submit" onClick={handleDelete} className="w-6/12 mb-8 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete Account</button>
    </center> */}
    {/* Delete Confirmation Modal */}
    {/* {showDeleteModal && <DeleteConfirmModal closeModal={() => setShowDeleteModal(false)} />} */}
  </>)
  }
  else{
    navigate("/login");
  }
}

export default AdminDashboard