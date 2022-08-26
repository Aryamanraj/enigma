import React from "react";
import tornado from "../assets/footer-img.png"
import logo from '../assets/ENIGMA-LOGO.png'

export default function Footer(){
    return(
        <footer>
            <img className='footer-img' src={tornado} alt="tornado object" />
            <div className="footer-cta">
                <div className="footer-logo-container">
                    <img src={logo} alt='Enigma 1' />
                    <h1>ENIGMA 1</h1>
                </div>
                <p>Sign up for free using your email address.</p>
                <button>Sign Up</button>
            </div>
            <div className="footer-resources">
                <h1>Resources</h1>
                <ul>
                    <li>Quickstart Guide</li>
                    <li>Team</li>
                </ul>
            </div>
            <div className="footer-get-started" >
                <h1>Get Started</h1>
                <ul>
                    <li>Create an Account</li>
                    <li>Login</li>
                </ul>
            </div>
            {/* <hr /> */}
        </footer>
    )
}