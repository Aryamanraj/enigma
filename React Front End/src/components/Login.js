import React,{useState} from "react";
import Footer from "./Footer";
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye ,faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import LoginNav from "./LoginNav";
import cylinder from "../assets/cylinder.png"
import gear from "../assets/gear.png"

export default function Login(){
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({username:"",password:"", isVisible: false});

   function handleClick(input) { 
setCredentials((prevCred)=>({...prevCred, [input.target.name]: input.target.value}))
    // console.log(credentials);
}
    function handleSubmit(e){
        e.preventDefault();
        let person = JSON.parse(localStorage.getItem(JSON.stringify(credentials.username)));
        if(credentials.username == person.username && credentials.password == person.password){
            navigate('/dashboard');
        }else console.log('error');
    }
    function toggleView(){
        setCredentials((prevCred)=>({...prevCred, isVisible: !prevCred.isVisible}));
    }
    return(
        <div className="login-page">
            <img className="cylinder-img" src={cylinder} alt='cylinder object' />
            <img className="gear-img" src={gear} alt='gear object' />
        <LoginNav />
        <h1>Log in with</h1>
        <div className='login-container'>
        <input type="text" value={credentials.username} onChange={handleClick} name="username" placeholder="Username" className="login-input" />
            <input type={credentials.isVisible ? "text": "password"} onChange={handleClick} value={credentials.password} name="password" placeholder="Password" className="login-input" />
            <FontAwesomeIcon className="icon" icon={credentials.isVisible ? faEye : faEyeSlash} onClick={toggleView} />
        </div>
        <div className="btn-container">
        <button onClick={handleSubmit} className="login-btn">Login</button>
        <button onClick={()=> navigate('/register')} className="login-btn">Register</button>
        </div>
        <Footer />
        </div>
    )
}