import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getConfig } from '../../env_config/activeConfig';
import toast from 'react-hot-toast';
import LoginWelcome from '../utils/LoginWelcome';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../../utils/Loader';

const StudentRegistration = () => {
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        dateofBirth: '',
        fatherName: '',
        contact: '',
        schoolName: '',
        studentClass: '',
        address: '',
        competition: null
    });

    const [loaderview, setLoaderview] = useState(false);

    const [competitionOptions, setCompetitionOptions] = useState([]);
    const [isPreview, setIsPreview] = useState(false);
    const isLoggedIn = useSelector(state => state.login.isLoggedIn); 
    const config = getConfig();
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get(config.competition_endpoint)
            .then((res) => {
                setCompetitionOptions(res.data);
            })
            .catch((error) => {
                console.error('Error fetching competitions:', error);
            });
    }, [config.competition_endpoint]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const [selectedCompetitionId, setSelectedCompetitionId] = useState('');

    // Fetch competition options
    useEffect(() => {
        axios.get(config.competition_endpoint)
            .then((res) => {
                setCompetitionOptions(res.data);
            })
            .catch((error) => {
                console.error('Error fetching competitions:', error);
            });
    }, [config.competition_endpoint]);

    // Handle competition selection
    const handleCompetitionChange = (e) => {
        setSelectedCompetitionId(e.target.value);
    };

    const handlePreview = (e) => {
        e.preventDefault();

        // Validation: Check if any field is empty
        for (const key in data) {
            if (!data[key] && key !== 'competition') {
                toast.error(`Please fill in the ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
                return;
            }
        }

        setIsPreview(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleEdit = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsPreview(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format date of birth to dd-mm-yyyy
        const formattedDateOfBirth = new Date(data.dateofBirth).toISOString().split('T')[0].split('-').reverse().join('-');

        const updatedData = { ...data, dateofBirth: formattedDateOfBirth };

        axios.post(config.student_endpoint, updatedData)
            .then((res) => {
                console.log(res.data)
                if(res.data.status === 'Duplicate Competition'){
                    toast.error(res.data.message)
                }else{
                    toast.success("Student registered successfully!")
                    setData({
                        firstname: '',
                        lastname: '',
                        dateofBirth: '',
                        fatherName: '',
                        contact: '',
                        schoolName: '',
                        studentClass: '',
                        address: '',
                        competition: ''
                    });
                setIsPreview(false);
                }
                
            })
            .catch((error) => {
                console.error('Error registering student:', error);
                toast.error("Failed to register student!");
            });
    };

    const fetchData = () => {
        setLoaderview(true);
        axios.post(config.fetchStudent_endpoint, { contact: data.contact, firstname: data.firstname })
            .then((res) => {
                setLoaderview(false);
                toast.success("Fetched Successfully!");
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
                    competition: fetchedData.competitions ? fetchedData.competitions[0] || '' : ''
                });
            }).catch((error) => {
                setLoaderview(false);
                console.error('Error fetching student:', error);
                toast.error("Not registered Student!");
            });
    };
    

    if (isLoggedIn) {
        return (
            <>
                <LoginWelcome />
                <div className="p-4 m-5 w-full max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:border-gray-200">
                    <h5 className="text-xl font-medium text-gray-900 mb-4 text-center">Student Registration</h5>
                    {isPreview ? (
                        <div>
                            <h5 className="text-lg font-medium text-center text-green-500 mb-4">Preview</h5>
                            <div className="mb-4">
                                <strong>First Name: </strong>{data.firstname}
                            </div>
                            <div className="mb-4">
                                <strong>Last Name: </strong>{data.lastname}
                            </div>
                            <div className="mb-4">
                                <strong>Date of Birth: </strong>{new Date(data.dateofBirth).toLocaleDateString('en-GB')}
                            </div>
                            <div className="mb-4">
                                <strong>Father's Name: </strong>{data.fatherName}
                            </div>
                            <div className="mb-4">
                                <strong>Contact: </strong>{data.contact}
                            </div>
                            <div className="mb-4">
                                <strong>School Name: </strong>{data.schoolName}
                            </div>
                            <div className="mb-4">
                                <strong>Class: </strong>{data.studentClass}
                            </div>
                            <div className="mb-4">
                                <strong>Address: </strong>{data.address}
                            </div>
                            <div className="mb-4">
                                <strong>Competition: </strong>{data.competition ? `${data.competition.title} - ${data.competition.name}` : ''}
                            </div>
                            <div className="flex justify-between">
                                <button onClick={handleEdit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                                <button onClick={handleSubmit} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handlePreview} className="space-y-4">
                            <div>
                                <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900">Contact (Please enter email/mobile)</label>
                                <input type="text" name="contact" value={data.contact} onChange={handleInputChange} id="contact" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="Contact" required />
                            </div>
                            <div>
                                <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                                <input type="text" name="firstname" value={data.firstname} onChange={handleInputChange} id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="First Name" required />
                            </div>
                            <div className="p-2">
                                {loaderview ? <div className="float-center"><Loader/></div> : null}
                                <button type="button" onClick={fetchData} className='border font-medium bg-green-500 text-white dark:text-black rounded-lg p-1 float-right' >Fetch</button>
                            </div>
                            <div>
                                <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                                <input type="text" name="lastname" value={data.lastname} onChange={handleInputChange} id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="Last Name" required />
                            </div>
                            <div>
                                <label htmlFor="dateofBirth" className="block mb-2 text-sm font-medium text-gray-900">Date of Birth</label>
                                <input type="date" name="dateofBirth" value={data.dateofBirth} onChange={handleInputChange} id="dateofBirth" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="Date of Birth" required />
                            </div>
                            <div>
                                <label htmlFor="fatherName" className="block mb-2 text-sm font-medium text-gray-900">Father's Name</label>
                                <input type="text" name="fatherName" value={data.fatherName} onChange={handleInputChange} id="fatherName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="Father's Name" required />
                            </div>
                            <div>
                                <label htmlFor="schoolName" className="block mb-2 text-sm font-medium text-gray-900">School Name</label>
                                <input type="text" name="schoolName" value={data.schoolName} onChange={handleInputChange} id="schoolName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="School Name" required />
                            </div>
                            <div>
                                <label htmlFor="studentClass" className="block mb-2 text-sm font-medium text-gray-900">Class (NUR, UKG, LKG, 1, 2, 3, 4, 5, 6, 7, 8, 9)</label>
                                <input type="text" name="studentClass" value={data.studentClass} onChange={handleInputChange} id="studentClass" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="Class" required />
                            </div>
                            <div>
                                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                                <input type="text" name="address" value={data.address} onChange={handleInputChange} id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="Address" required />
                            </div>
                            <div>
                <label htmlFor="competition" className="block mb-2 text-sm font-medium text-gray-900">Competition</label>
                <select
                    name="competition"
                    value={selectedCompetitionId}
                    onChange={handleCompetitionChange}
                    id="competition"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                    required
                >
                    <option value="">Select Competition</option>
                    {competitionOptions.map((competition) => (
                        <option key={competition.id} value={competition.id}>{competition.title} - {competition.name}</option>
                    ))}
                </select>
            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Preview</button>
                        </form>
                    )}
                </div>
            </>
        );
    } else {
        navigate("/login");
    }
};

export default StudentRegistration;
