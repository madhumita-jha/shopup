import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const navigate = useNavigate();
    const Logout = () => {
        window.localStorage.removeItem("isLoggedIn");
        navigate('/login');
    }
    const [userDetails, setUserDetails] = useState({ fullname: '', email: '' });

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch('http://localhost:3000/profile', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setUserDetails(data);
                } else {
                    navigate('/login');
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };
        fetchUserDetails();
    }, [navigate]);

    

    return (
        <div className='profile'>
            <h1>MyProfile</h1> 
            <div className='userdetails'>
                <p>Name: {userDetails.fullname}</p>
                <p>Email: {userDetails.email}</p>
                <button>Change Password</button>
                <button onClick={() => Logout()}>Logout</button>
            </div>
        </div>
    );
};

export default Profile;