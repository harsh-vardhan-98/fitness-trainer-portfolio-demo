import React, { useState } from "react";
import "../styles/MobileMenu.css";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="mobile-menu-toggle" onClick={() => setOpen((o) => !o)}>
        <span className="mobile-menu-bar" />
        <span className="mobile-menu-bar" />
        <span className="mobile-menu-bar" />
      </button>
      <nav className={`mobile-menu ${open ? "open" : ""}`}>
        <ul>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
          <li><a href="#gallery" onClick={() => setOpen(false)}>Gallery</a></li>
          <li><a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
