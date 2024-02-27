import React from 'react';

const Profile = () => {
    
    return (
        <div className='profile'>
            <h1>MyProfile</h1> 
            <div className='userdetails'>
                <p>Name: </p>
                <p>Email:</p>
                <button>Change Password</button>
                <button>Logout</button>
            </div>
        </div>
    );
};

export default Profile;