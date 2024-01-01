import React from "react";
import Logo from "../Logo.svg";

import "../styles/header.css";

export default function Header() {
    return(
        <header>
            <img src={Logo} alt="Little Lemon" className="img"/>
            <nav>
                <ul>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Menu</a>
                    <a href="/">Reservations</a>
                    <a href="/">Order Online</a>
                    <a href="/">Login</a>
                </ul>
            </nav>
        </header>
    );
}