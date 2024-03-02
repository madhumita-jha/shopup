import React from 'react';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const navigate = useNavigate();
    const Logout = () => {
        window.localStorage.removeItem("isLoggedIn");
        navigate('/login');
    }

    return (
        <div className='profile'>
            <h1>MyProfile</h1> 
            <div className='userdetails'>
                <p>Name: </p>
                <p>Email: </p>
                <button>Change Password</button>
                <button onClick={() => Logout()}>Logout</button>
            </div>
            <div className='order history'>
            </div>
        </div>
    );
};

export default Profile;