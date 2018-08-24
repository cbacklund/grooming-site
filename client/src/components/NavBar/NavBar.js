import React from "react";
import "./NavBar.css";

const NavBar = () => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Bark Avenue</a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/services">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/stylist">Stylists</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/booking">Book An Appointment</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact</a> 
                </li>
            </ul>
            <span class="navbar-text">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/auth">Customer LogIn</a>
                    </li>
                </ul>
            </span>
        </div>
    </nav>
);

export default NavBar;
