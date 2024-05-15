import React, { useState } from 'react';
import axios from 'axios';
import { getConfig } from '../../env_config/activeConfig';
import toast from 'react-hot-toast';
import Loader from '../../utils/Loader';
import LoginWelcome from '../utils/LoginWelcome';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const FindStudent = () => {
    const [contact, setContact] = useState('');
    const [firstname, setFirstname] = useState('');
    const [loading, setLoading] = useState(false);
    const [students, setStudents] = useState([]);
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const config = getConfig();
    const navigate = useNavigate();

    const data = {
        "contact": contact,
        "firstname": firstname
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(true);
        setStudents([]);

        axios.post(config.fetchStudent_endpoint, data)
            .then((res) => {
                setStudents(res.data);
                toast.success("Successfully fetched!")
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching students:', error);
                toast.error("Failed to fetch students!");
                setLoading(false);
            });
    };

    const StudentTable = ({ students }) => {
        return (
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-left">
                            <th className="py-2 px-4">First Name</th>
                            <th className="py-2 px-4">Last Name</th>
                            <th className="py-2 px-4">Date of Birth</th>
                            <th className="py-2 px-4">Father's Name</th>
                            <th className="py-2 px-4">Contact</th>
                            <th className="py-2 px-4">School Name</th>
                            <th className="py-2 px-4">Class</th>
                            <th className="py-2 px-4">Address</th>
                            <th className="py-2 px-4">Competitions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-2 px-4">{student.firstname}</td>
                                <td className="py-2 px-4">{student.lastname}</td>
                                <td className="py-2 px-4">{student.dateofBirth}</td>
                                <td className="py-2 px-4">{student.fatherName}</td>
                                <td className="py-2 px-4">{student.contact}</td>
                                <td className="py-2 px-4">{student.schoolName}</td>
                                <td className="py-2 px-4">{student.studentClass}</td>
                                <td className="py-2 px-4">{student.address}</td>
                                <td className="py-2 px-4">
                                <ul>
                                    {student.competitions.map((competition, compIndex) => (
                                        <li key={compIndex} className="list-disc list-inside">
                                            {competition.title} - {competition.name} {competition.rank ? <span className="text-blue-500">(Rank: {competition.rank})</span> : ''}
                                        </li>
                                    ))}
                                </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    if (!isLoggedIn) {
        navigate("/login");
        return null;
    }

    return (
        <>
            <LoginWelcome />
            <div className="p-4 m-5 w-full max-w-4xl mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:border-gray-200">
                <h5 className="text-xl font-medium text-gray-900 mb-4 text-center">Find Student</h5>
                <form onSubmit={handleSearch} className="space-y-4">
                    <div>
                        <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900">Contact</label>
                        <input
                            type="text"
                            name="contact"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            id="contact"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Contact"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                        <input
                            type="text"
                            name="firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            id="firstname"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="First Name"
                            required
                        />
                    </div>
                    {loading && <div className="mb-5 md:m-2"><Loader/></div>}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                            Search
                        </button>
                    </div>
                </form>
                
                {students.length > 0 && !loading && (
                    <div className="mt-6">
                        <StudentTable students={students} />
                    </div>
                )}
            </div>
        </>
    );
};

export default FindStudent;
