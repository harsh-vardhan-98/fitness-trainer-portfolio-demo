import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/pexels-tima-miroshnichenko-5750870.jpg" // Replace with your image path

const About = () => (
  <section className="about-section" id="about">
    <div className="about-container">
      <div className="about-img-bg">
        <img className="about-img" src={aboutImg} alt="Fitness Trainer" />
      </div>
      <div className="about-content">
          <h2 className="about-title">Introducing FWS</h2>
          <h3 className="about-subtitle">The Ultimate Method to Change Your Life</h3>
          <p className="about-desc">
           Hi, I’m Snehil, a certified nutritionist and founder of FitWithSnehil. Over the years, I have helped 5000+ clients in their fat-loss journey. With a combination of live workouts and personalized diet plans, I empower people to achieve lasting results and transform their lifestyle.
          </p>
          <a className="about-btn" href="#">Read More</a>
      </div>
    </div>
  </section>
);

export default About;
