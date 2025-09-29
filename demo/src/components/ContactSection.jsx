import React from "react";
import instagram from "../assets/social/instagram.png";
import twitter from "../assets/social/twitter.png";
import youtube from "../assets/social/youtube.png";
import facebook from "../assets/social/facebook.png";
import "../styles/ContactSection.css";

const ContactSection = () => (
  <section className="contact-section">
    <div className="contact-left">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-desc">Feel free to contact me anywhere.</p>
      <div className="contact-info">
        <div>Address. 102 mayur vihar<br />New Delhi, IN 450154</div>
        <div>Email. info@mysite.com</div>
        <div>Phone. 123-456-7890</div>
      </div>
    </div>
    <div className="contact-socials">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" className="contact-social-icon" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="Twitter" className="contact-social-icon" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <img src={youtube} alt="YouTube" className="contact-social-icon" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="Facebook" className="contact-social-icon" />
      </a>
    </div>
  </section>
);

export default ContactSection;
