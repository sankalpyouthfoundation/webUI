import React, { useState } from 'react';
import axios from 'axios';
import { getConfig } from '../../env_config/activeConfig';
import toast from 'react-hot-toast';
import LoginWelcome from '../utils/LoginWelcome';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../../utils/Loader';

const Attendance = () => {
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        dateofBirth: '',
        fatherName: '',
        contact: '',
        schoolName: '',
        studentClass: '',
        address: '',
        studentRecordId: '',
        competitions: [],
    });

    const [loaderview, setLoaderview] = useState(false);
    const [isPreview, setIsPreview] = useState(false);
    const [isDataFetched, setIsDataFetched] = useState(false);

    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
    const config = getConfig();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCompetitionAttendanceChange = (index, value) => {
        const updatedCompetitions = [...data.competitions];
        updatedCompetitions[index].present = value === 'true';
        setData((prevData) => ({
            ...prevData,
            competitions: updatedCompetitions,
        }));
    };

    const handlePreview = (e) => {
        e.preventDefault();
        setIsPreview(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleEdit = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsPreview(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(config.student_update_endpoint, data)
            .then((res) => {
                if (res.data.status === 'Duplicate Competition') {
                    toast.error(res.data.message);
                } else {
                    toast.success('Attendance Submitted!');
                    setData({
                        firstname: '',
                        lastname: '',
                        dateofBirth: '',
                        fatherName: '',
                        contact: '',
                        schoolName: '',
                        studentClass: '',
                        address: '',
                        studentRecordId: '',
                        competitions: [],
                    });
                    setIsPreview(false);
                    setIsDataFetched(false);
                }
            })
            .catch((error) => {
                console.error('Error submitting data:', error);
                toast.error('Failed to submit attendance!');
            });
    };

    const fetchData = () => {
        if (!data.firstname || !data.contact) {
            toast.error('Please enter contact and firstname.');
            return;
        }

        setLoaderview(true);
        axios
            .post(config.fetchStudent_endpoint, { contact: data.contact, firstname: data.firstname })
            .then((res) => {
                setLoaderview(false);
                toast.success('Data fetched successfully!');
                const fetchedData = res.data[0];
                setData({
                    firstname: fetchedData.firstname || '',
                    lastname: fetchedData.lastname || '',
                    dateofBirth: fetchedData.dateofBirth || '',
                    fatherName: fetchedData.fatherName || '',
                    contact: fetchedData.contact || data.contact,
                    schoolName: fetchedData.schoolName || '',
                    studentClass: fetchedData.studentClass || '',
                    address: fetchedData.address || '',
                    studentRecordId: fetchedData.studentRecordId || '',
                    competitions: fetchedData.competitions || [],
                });
                setIsDataFetched(true);
            })
            .catch((error) => {
                setLoaderview(false);
                console.error('Error fetching student:', error);
                toast.error('No record Found!');
            });
    };

    if (isLoggedIn) {
        return (
            <>
                <LoginWelcome />
                <div className="p-4 m-5 w-full max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:border-gray-200">
                    <h5 className="text-xl font-medium text-gray-900 mb-4 text-center">Student Attendance</h5>
                    {isPreview ? (
                        <div>
                            <h5 className="text-lg font-medium text-center text-green-500 mb-4">Preview</h5>
                            <div className="mb-4">
                                <strong>Student ID: </strong>{data.studentRecordId}
                            </div>
                            <div className="mb-4">
                                <strong>Full Name: </strong>{`${data.firstname} ${data.lastname}`}
                            </div>
                            <div className="mb-4">
                                <strong>Date of Birth: </strong>{new Date(data.dateofBirth).toLocaleDateString('en-GB')}
                            </div>
                            <div className="mb-4">
                                <strong>Competitions:</strong>
                                <ul>
                                    {data.competitions.map((comp, index) => (
                                        <li key={comp.id}>
                                            {comp.title} - {comp.name} | Present: <strong>{comp.present ? 'Yes' : 'No'}</strong>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex justify-between">
                                <button
                                    onClick={handleEdit}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handlePreview} className="space-y-4">
                            <div>
                                <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900">Contact</label>
                                <input
                                    type="text"
                                    name="contact"
                                    value={data.contact}
                                    onChange={handleInputChange}
                                    id="contact"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                                    placeholder="Contact"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    value={data.firstname}
                                    onChange={handleInputChange}
                                    id="firstname"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            {isDataFetched && (
                                <>
                                    <div className="mb-4">
                                        <strong>Full Name:</strong> {`${data.firstname} ${data.lastname}`}
                                    </div>
                                    <div className="mb-4">
                                        <strong>Date of Birth:</strong> {new Date(data.dateofBirth).toLocaleDateString('en-GB')}
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-medium text-gray-900 mb-4">Competitions</h5>
                                        {data.competitions.map((competition, index) => (
                                            <div key={competition.id} className="mb-4">
                                                <p className="mb-2">{competition.title} - {competition.name}</p>
                                                <div>
                                                    <label className="mr-4">
                                                        <input
                                                            type="radio"
                                                            name={`competition-${index}`}
                                                            value="true"
                                                            checked={competition.present === true}
                                                            onChange={() => handleCompetitionAttendanceChange(index, 'true')}
                                                        />
                                                        Yes
                                                    </label>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name={`competition-${index}`}
                                                            value="false"
                                                            checked={competition.present === false}
                                                            onChange={() => handleCompetitionAttendanceChange(index, 'false')}
                                                        />
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                            {loaderview ? (
                                <Loader />
                            ) : (
                                <button
                                    type="button"
                                    onClick={fetchData}
                                    className="w-full text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:bg-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-2"
                                >
                                    Fetch
                                </button>
                            )}
                            {isDataFetched && (
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
                                >
                                    Preview
                                </button>
                            )}
                        </form>
                    )}
                </div>
            </>
        );
    } else {
        navigate('/');
        return null;
    }
};

export default Attendance;
