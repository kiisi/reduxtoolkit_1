import React, { useState, useRef } from 'react'
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false)

    const mobileNavRef = useRef()
    const mobileNavCloseRef = useRef()

    const menuHandler = () => {
        setClick(!click)
        let mobileNav = mobileNavRef.current
        let mobileNavClose = mobileNavCloseRef.current


        mobileNav.classList.remove("nav-slide-effect-out")
        mobileNav.classList.add("nav-slide-effect-in")
        mobileNav.addEventListener('animationend', () => {
            mobileNav.style.right = '0';
            mobileNavClose.classList.add('show')
        })



    }

    const closeHandler = () => {
        setClick(!click)
        let mobileNav = mobileNavRef.current
        let mobileNavClose = mobileNavCloseRef.current


        mobileNavClose.classList.remove('show')

        mobileNav.classList.remove("nav-slide-effect-in")
        mobileNav.classList.add("nav-slide-effect-out")
        mobileNav.addEventListener('animationend', () => {
            mobileNav.style.right = '-40rem';
            mobileNavClose.classList.remove('show')

        })
    }

    return (
        <>
            <nav className="nav">
                <div className="nav-logo">
                    <h1>Speedway International Movers Delivery Company And Security Service</h1>
                </div>
                <div className="nav-items">
                    <div className="nav-item"><a href="#about">ABOUT</a></div>
                    <div className="nav-item"><a href="#services">SERVICES</a></div>
                    <div className="nav-item"><a href="#contact">CONTACT</a></div>
                </div>
                <div className="nav-menu-icon" onClick={menuHandler}>
                    <span className="material-icons">menu</span>
                </div>

            </nav>
            <nav className="mobile-nav" ref={mobileNavRef}>
                <div className="mobile-nav-close-wrapper">
                    <div className="mobile-nav-close" onClick={closeHandler} ref={mobileNavCloseRef}>
                        <span className="material-icons">close</span>
                    </div>
                </div>
                <div className="mobile-nav-content">
                    <div className="mobile-nav-menu">
                        <div><a href="#about">ABOUT</a></div>
                        <div><a href="#services">SERVICES</a></div>
                        <div><a href="#contact">CONTACT</a></div>
                    </div>
                </div>
            </nav>
            <div className="nav-modal" style={{ display: click ? 'block' : 'none' }} onClick={closeHandler}></div>
        </>
    )
}

export default Navbar