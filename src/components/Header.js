import React from "react";
import Logo from "../Logo.svg";

import "../styles/header.css";
import {Link} from 'react-router-dom';

export default function Header() {
    return(
        <header>
            <img src={Logo} alt="Little Lemon" className="img"/>
            <nav className="header-nav">
                <ul className="header-links">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/bookings'>Reservations</Link></li>
                    <li><Link to='/orders'>Order Online</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}