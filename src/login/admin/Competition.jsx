import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { getConfig } from '../../env_config/activeConfig';
import toast from 'react-hot-toast';
import LoginWelcome from '../utils/LoginWelcome';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NoAccess from '../utils/NoAccess';

const Competition = () => {
    const [data, setData] = useState({
        title: '',
        name: ''
    });
    const [competitions, setCompetitions] = useState([]);
    const [deleteId, setDeleteId] = useState(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isAddFormVisible, setIsAddFormVisible] = useState(false); 
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const isAdmin = useSelector(state=> state.login.isAdmin); 

    const config = getConfig();
    const navigate = useNavigate();

    const fetchCompetitions = useCallback(() => {
        axios.get(config.competition_endpoint)
            .then((res) => {
                setCompetitions(res.data);
                //toast.success("Successfully fetched!")
            })
            .catch((error) => {
                console.error('Error fetching competitions:', error);
            });
    }, [config.competition_endpoint]); 

    useEffect(() => {
        fetchCompetitions();
    }, [fetchCompetitions]); 

    const handleInputChange = (e) => {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
    };

    const addCompetition = () => {
        if(data.name !== "" && data.title !== ""){
            axios.post(config.competition_endpoint, data)
            .then((res) => {
                toast.success("Successfully added!");
                fetchCompetitions();
                setData({ title: '', name: '' });
            })
            .catch((error) => {
                console.error('Error adding competition:', error);
                toast.error("Failed to add competition!");
            });
        }else{
            toast.error("Please fill out both fields")
        }
    };

    const deleteCompetition = () => {
        axios.delete(`${config.competition_endpoint}/${deleteId}`)
            .then((res) => {
                toast.success("Successfully deleted!");
                fetchCompetitions();
            })
            .catch((error) => {
                console.error('Error deleting competition:', error);
                toast.error("Failed to delete competition!");
            })
            .finally(() => {
                // Close the dialog regardless of success or failure
                setIsDeleteDialogOpen(false);
                setDeleteId(null);
            });
    };
    if(isLoggedIn && isAdmin){
    return (
        <>
        <LoginWelcome/>
        <div className="p-4 m-5 w-full max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:border-gray-200">
            <div className="mt-4">
                <h5 className="text-xl font-medium text-gray-900 mb-4 text-center">Manage Competitions</h5>
                {isAddFormVisible && (
                    <div>
                        <div className="mt-8">
                            <h5 className="text-xl font-medium text-gray-900 mb-4">Add new competition</h5>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                                    <input type="text" name="title" value={data.title} onChange={handleInputChange} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="Title" required/>
                                </div>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Competition Name</label>
                                    <input type="text" name="name" value={data.name} onChange={handleInputChange} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="Competition Name" required/>
                                </div>
                                <button onClick={addCompetition} className="md:w-full w-1/2 text-white dark:text-black bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-4">Add Competition</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8">
                {/* <h5 className="text-xl font-medium text-gray-900 mb-4">Competitions</h5> */}
                <table className="w-full">
                    <thead>
                        <tr className="border px-4 py-2">
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Competition Name</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {competitions.map((competition) => (
                            <tr key={competition.id}>
                                <td className="border px-4 py-2">{competition.title}</td>
                                <td className="border px-4 py-2">{competition.name}</td>
                                <td className="border px-4 py-2">
                                    <button onClick={() => {
                                        setDeleteId(competition.id);
                                        setIsDeleteDialogOpen(true);
                                    }} className="text-red-600">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {!isAddFormVisible ?<center><button onClick={() => {setIsAddFormVisible(true);window.scrollTo({ top: 0, behavior: "smooth" });}} className="md:w-full w-1/2 text-white dark:text-black bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-4">Add Competition</button></center>: null}

            {/* Delete confirmation dialog */}
            {isDeleteDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <p className="text-lg mb-4">Are you sure you want to delete this competition?</p>
                        <div className="flex justify-center">
                            <button onClick={deleteCompetition} className="mr-2 px-4 py-2 bg-red-500 text-white rounded-lg">Yes</button>
                            <button onClick={() => setIsDeleteDialogOpen(false)} className="px-4 py-2 bg-gray-500 text-white rounded-lg">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
    );}
    else if(isLoggedIn){
        return <NoAccess/>;
    }
    else{
        navigate("/login");
      }
};

export default Competition;
