import React, {useEffect, useState} from 'react';
import '../styles.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [emaillog ,setEmailLog] = useState('');
    const [passlog, setPassLog] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get("http://localhost:3000/login").then((response) => {
            if(response.data.loggedIn === true){
                setLoginStatus(response.data.user[0].email);
            }
        })
    })

    const login = (e) => {
        e.preventDefault();
        window.localStorage.setItem("isLoggedIn", true)
        axios.post("http://localhost:3000/login", {
            email: emaillog, 
            password: passlog
        }).then((response) => {
            if(response.data.message){
                setLoginStatus(response.data.message)
                alert("Wrong email or password!");
            } else{
                setLoginStatus(response.data[0].email);
                navigate('/profile');
            }
        });
    }

    return (
        <div className='login'>
            <div className='login-header'><h2>Login</h2></div>
            <form className='login-box'>
                <div className='form-group'>
                    <label htmlFor="username" className='label'>Email:</label>
                    <input type="text" name="username" className="input" placeholder='Enter Email' onChange={(e) => {setEmailLog(e.target.value)}}/>

                </div>
                <div className='form-group'>
                    <label htmlFor="username" className='label'>Password:</label>
                    <input type="password" name="password" className="input" placeholder='Enter Password' onChange={(e) => {setPassLog(e.target.value)}}/>

                </div>
                <button className='submit' onClick={login}>Log In</button>
                <p className='route'><Link to="/register" className="no-underline">New User? Create account</Link></p>
            </form>
            <h1>{loginStatus}</h1>
        </div>
    );
};

export default Login;
