import React from "react";
import "../styles/Navbar.css";
import MobileMenu from "./MobileMenu";
import logo from "../assets/logo.png";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
        <img src={logo} alt="" />
    </div>
    <ul className="navbar-links">
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <MobileMenu />
  </nav>
);

export default Navbar;
