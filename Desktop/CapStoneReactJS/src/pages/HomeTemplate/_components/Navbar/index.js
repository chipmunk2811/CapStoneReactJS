import React from 'react'
import {  NavLink } from 'react-router-dom'
import "./style.css";

export default function NavbarHome() {
    return (
        <nav className="navbar navbar-expand-sm bg-white navbar-dark amy-primary-navigation container">
            {/* Brand/logo */}
            <NavLink className="navbar-brand" to="/"><img src='./img/img_66.png' alt="Movie" /></NavLink>
            {/* Links */}
            <ul className="navbar-nav nav-menu ml-auto ">
                <li className='nav-item'>
                    <NavLink className={({ isActive }) => isActive ? 'nav-link text-dark active' : "nav-link text-dark"} to="/home">HOME</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link text-dark' to="now-playing/">MOVIE</NavLink>
                    <ul className="sub-menu">
                        <li className="menu-item "><NavLink to="now-playing/">Now Playing</NavLink></li>
                        <li className="menu-item "><NavLink to="coming-soon/">Coming Soon</NavLink></li>
                    </ul>

                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link text-dark' to="/booking">BOOKING</NavLink>
                </li>
            </ul>
        </nav>
    )
}
