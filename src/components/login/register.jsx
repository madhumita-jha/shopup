import React, {useState} from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    axios.defaults.withCredentials = true;

    const register = () => {
        axios.post("http://localhost:3000/register", {
            fullname: fullname, 
            email: email, 
            password: password
        }).then((response) => {
            console.log(response);
            alert("Registration succesful!");
            window.location.href = '/login';
        });
    }

    return (
        <div className='login'>
            <div className='login-header'><h2>Register</h2></div>
            <form className='register-box' >
                <div className='form-group'>
                    <label htmlFor="fullname" className='label'>Full Name</label>
                    <input type="text" name="fullname" className="input" placeholder="FullName" onChange={(e) => {setFullName(e.target.value)}} />

                </div> 
                <div className='form-group'>
                    <label htmlFor="email" className='label'>Email:</label>
                    <input type="text" name="email" className="input" placeholder='Email' onChange={(e) => {setEmail(e.target.value)}}/>
                    
                </div>
                <div className='form-group'>
                    <label htmlFor="password" className='label'>Password:</label>
                    <input type="text" name="password" className="input" placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}/>
                    
                </div>
                <button className='submit' onClick={register}>Sign Up</button>
                <p className='route'><Link to="/login" className="no-underline">Already have an account?</Link></p>
            </form>
        </div>
    );
};

export default Register;
