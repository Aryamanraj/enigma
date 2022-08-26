import React from "react";
import logo from '../assets/ENIGMA-LOGO.png'
import {Link} from 'react-router-dom'

export default function LoginNav(){
    return(
        <nav className="loginNav">
        
        <img className='loginNav-logo' src={logo} alt='enigma1' />
        
        <span className="navigation-link">
            <Link to='/' className="navigation-bar">
                HOME/
                </Link>
                
                <Link to="/login" className="navigation-bar selected">
                    LOGIN
                    </Link>
                    </span>
        <h1 className='loginNav-logo-txt'>ENIGMA 1</h1>
        <Link to='/about' className='loginNav-about'>ABOUT</Link>
        <Link to='/team' className='loginNav-contact'>TEAM</Link>
        <div className='loginNav-login'><Link to='/login' className='loginNav-login-txt'>LOGIN</Link></div>
    </nav>
    )
}