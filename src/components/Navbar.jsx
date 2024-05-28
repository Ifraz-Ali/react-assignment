import React from 'react'
import logo from '../assets/space-logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='space-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='nav-links-container'>
                <ul className='nav-links'>  
                    <li><Link className='links' to='/' >Rockets</Link></li>
                    <li><Link className='links' to='/missions'>Missions</Link></li>
                    <li><Link className='links' to='/profile'>Profile</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar