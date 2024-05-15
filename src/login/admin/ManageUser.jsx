import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { getConfig } from '../../env_config/activeConfig';
import toast from 'react-hot-toast';
import LoginWelcome from '../utils/LoginWelcome';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ManageUser = () => {
    const [users, setUsers] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
    const [userToUpdate, setUserToUpdate] = useState(null);

    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const config = getConfig();
    const navigate = useNavigate();

    const fetchUsers = useCallback(() => {
        axios.get(config.signup_endpoint)
            .then((res) => {
                setUsers(res.data);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }, [config.signup_endpoint]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setShowForm(true);
    };

    const handleFormSubmit = (userData) => {
        axios.post(config.signup_endpoint, userData)
            .then((res) => {
                toast.success("User registered successfully!");
                fetchUsers();
                setShowForm(false);
            })
            .catch((error) => {
                console.error('Error registering user:', error);
                toast.error("Failed to register user!");
            });
    };

    const handleActionClick = (user) => {
        setUserToUpdate(user);
        setShowConfirmationDialog(true);
    };

    const handleConfirmAction = () => {
        axios.patch(`${config.signup_endpoint}/${userToUpdate.email}`, userToUpdate)
            .then((res) => {
                toast.success(res.data.message);
                fetchUsers();
            })
            .catch((error) => {
                console.error('Error updating user:', error);
                toast.error("Failed to update user!");
            })
            .finally(() => {
                setShowConfirmationDialog(false);
                setUserToUpdate(null);
            });
    };

    const handleCancelAction = () => {
        setShowConfirmationDialog(false);
        setUserToUpdate(null);
    };

    const handleNewUserClick = () => {
        setSelectedUser(null);
        setShowForm(true);
    };

    const UserTable = ({ users, onEditClick, onActionClick }) => {
        return (
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Contact</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Admin</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-4 py-2">{user.name}</td>
                                <td className="px-4 py-2">{user.contact}</td>
                                <td className="px-4 py-2">{user.email}</td>
                                <td className="px-4 py-2">{user.admin ? 'Yes' : 'No'}</td>
                                <td className="px-4 py-2">
                                    {/* <button
                                        onClick={() => onEditClick(user)}
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-2">
                                        Edit
                                    </button> */}
                                    <button
                                        onClick={() => onActionClick(user)}
                                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2">
                                        Change
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const UserForm = ({ user, onSubmit, onCancel }) => {
        const [formData, setFormData] = useState({
            name: '',
            contact: '',
            email: '',
            password: ''
        });

        useEffect(() => {
            if (user) {
                setFormData({
                    name: user.name,
                    contact: user.contact,
                    email: user.email,
                    password: ''
                });
            } else {
                setFormData({
                    name: '',
                    contact: '',
                    email: '',
                    password: ''
                });
            }
        }, [user]);

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            onSubmit(formData);
        };

        return (
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900">Contact</label>
                    <input
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        id="contact"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Contact"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Password"
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                        {user ? 'Update User' : 'Register User'}
                    </button>
                </div>
            </form>
        );
    };

    const ConfirmationDialog = ({ message, onConfirm, onCancel }) => {
        return (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
                <div className="bg-white rounded-lg p-6">
                    <p className="mb-4">{message}</p>
                    <div className="flex justify-end">
                        <button
                            onClick={onCancel}
                            className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2">
                            Cancel
                        </button>
                        <button
                            onClick={onConfirm}
                            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">
                            Confirm
                        </button>
                    </div>
                </div>
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
                <h5 className="text-xl font-medium text-gray-900 mb-4 text-center">Manage Users</h5>
                {showForm ? (
                    <UserForm
                        user={selectedUser}
                        onSubmit={handleFormSubmit}
                        onCancel={() => setShowForm(false)}
                    />
                ) : (
                    <>
                        <div className="flex justify-end mb-4">
                            <button
                                onClick={handleNewUserClick}
                                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5">
                                New User Register
                            </button>
                        </div>
                        <UserTable
                            users={users}
                            onEditClick={handleEditClick}
                            onActionClick={handleActionClick}
                        />
                    </>
                )}
                {showConfirmationDialog && (
                    <ConfirmationDialog
                        message="Are you sure you want to change?"
                        onConfirm={handleConfirmAction}
                        onCancel={handleCancelAction}
                    />
                )}
            </div>
        </>
    );
};

export default ManageUser;
