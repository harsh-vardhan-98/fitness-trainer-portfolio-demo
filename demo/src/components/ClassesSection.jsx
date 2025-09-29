import React from "react";
import "../styles/ClassesSection.css";
import img1 from "../assets/cardsImage/pexels-cliff-booth-4057846.jpg";
import img2 from "../assets/cardsImage/pexels-leonmart-1552248.jpg";
import img3 from "../assets/cardsImage/pexels-olly-3757943.jpg";

const classes = [
  {
    title: "Personal with Snehil",
    img: img1,
    link: "#",
    duration: "50 min"
  },
  {
    title: "FWS Beginners",
    img: img2,
    link: "#",
    duration: "45 min"
  },
  {
    title: "FWS Master",
    img: img3,
    link: "#",
    duration: "45 min"
  }
];

const ClassesSection = () => (
  <section className="classes-section">
    <h2 className="classes-title">Our Classes</h2>
    <div className="classes-grid">
      {classes.map((cls, idx) => (
        <div className="class-card" key={idx}>
          <div className="class-img-wrap">
            <img src={cls.img} alt={cls.title} className="class-img" />
          </div>
          <div className="class-card-content">
            <div className="class-card-title">{cls.title}</div>
            <a className="class-card-link" href={cls.link}>Read More</a>
            <div className="class-card-duration">{cls.duration}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="classes-btn-wrap">
      <a className="classes-btn" href="#">Book Now</a>
    </div>
  </section>
);

export default ClassesSection;
