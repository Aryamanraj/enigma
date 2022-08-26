import React,{useState} from "react";
import Footer from "./Footer";
import LoginNav from "./LoginNav";
import topSphere from "../assets/top-sphere.png"
import SideBig from "../assets/side-big.png"
import sideSmall from "../assets/side-small.png"
import midBig from "../assets/mid-big.png"
import midSmall from "../assets/mid-small.png"

export default function Register(){
    const [regDetails, setRegDetails] = useState(
        {
            Pname: "",
            institution: "",
            email: "",
            username: "",
            password: "",
            confirmPassword:"",
            country: "",
            state: ""
    }
    );
    function handleClick(detail){
        
        setRegDetails((prevDetails)=>({ ...prevDetails, [detail.target.name]: detail.target.value }));
        
    }
    function handleSignUp(e){
        e.preventDefault();
        localStorage.setItem(JSON.stringify(regDetails.username), JSON.stringify(regDetails));
        console.log(regDetails);
    }
    return(
        <div className="registration-page">
            <img className="topSphere" src={topSphere} alt='top sphere' />
            <img className="sideBig" src={SideBig} alt='side big sphere' />
            <img className="sideSmall" src={sideSmall} alt='side small sphere' />
            <img className="midBig" src={midBig} alt='mid big sphere' />
            <img className="midSmall" src={midSmall} alt='mid small sphere' />
        <LoginNav />
        
        <h1>Register</h1>
        <div className='registration-container'>
            <input type="text" value={regDetails.Pname} onChange={handleClick} name="Pname" placeholder="Name" className="registration-input full-size" />
            <input type="text" value={regDetails.institution} onChange={handleClick} name="institution" placeholder="Institution" className="registration-input full-size" />
            <div className="reg-grid">
            <input type="text" value={regDetails.email} onChange={handleClick} name="email" placeholder="Email" className="registration-input grid-mem shift-right" />
            <input type="text" value={regDetails.username} onChange={handleClick} name="username" placeholder="Username" className="registration-input grid-mem shift-left" />
            <input type="password" onChange={handleClick} value={regDetails.password} name="password" placeholder="Password" className="registration-input grid-mem shift-right" />
            <input type="password" onChange={handleClick} value={regDetails.confirmPassword} name="confirmPassword" placeholder="Confirm Password" className="registration-input grid-mem shift-left" />
            <input type="text" value={regDetails.country} onChange={handleClick} name="country" placeholder="Country" className="registration-input grid-mem shift-right" />
            <input type="text" value={regDetails.state} onChange={handleClick} name="state" placeholder="State" className="registration-input grid-mem shift-left" />
            </div>
        </div>
        <div className="btn-container">
        <button  onClick={handleSignUp} className="login-btn">Sign Up</button>
        </div>
        <Footer />
        </div>
    )
}