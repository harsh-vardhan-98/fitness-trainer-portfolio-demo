import React from "react";
import "../styles/WindowSection.css";
import gymBg from "../assets/pexels-shkrabaanthony-5890294.jpg"; // Replace with your background image path

const WindowSection = () => (
  <section className="window-section" style={{ backgroundImage: `url(${gymBg})` }}>
    <div className="window-overlay"></div>
   <div className="window-foreground">
      <h2 className="window-title">FWS Community?</h2>
      <h3 className="window-subtitle">The Ultimate Method to Change Your Life</h3>
      <p className="window-desc">
        At FWS, you’re not just another client — you’re part of a supportive family. We celebrate every milestone, encourage consistency, and push each other to achieve the best versions of ourselves. Whether you’re aiming to shed fat, improve energy levels, or simply adopt a healthier lifestyle, our community is here to guide you every step of the way.
      </p>
      <a className="window-btn" href="#">Read More</a>
    </div>
  </section>
);

export default WindowSection;
