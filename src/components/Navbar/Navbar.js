import React from 'react'
import navlogo from '../../assets/speedway.png'
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav-logo">
                <img src={navlogo} alt="navlogo"height="40"/>
            </div>
            <div className="nav-items">
                <div className="nav-item">HOME</div>
                <div className="nav-item">ABOUT</div>
                <div className="nav-item">SERVICES</div>
                <div className="nav-item">CONTACT</div>
            </div>
            
        </nav>
    )
}

export default Navbar