import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav-logo">
                <h1>Speedway Movers Delivery Company</h1>
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