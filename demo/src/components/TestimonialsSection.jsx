import React, { useState } from "react";
import "../styles/TestimonialsSection.css";
import user from "../assets/icons8-user-100.png";


const testimonials = [
  {
    name: "Vipul Pathak",
    image: user,
    text: "Snehil changed my life! The trainers are amazing and the classes are always motivating. Highly recommended!"
  },
  {
    name: "Rahul Kumar",
    image: user,
    text: "I love the community and the results I've seen. The workouts are fun and effective."
  },
  {
    name: "Priya Patel",
    image: user,
    text: "Best fitness experience ever. The support and encouragement from everyone is fantastic!"
  },
  {
    name: "John Smith",
    image: user,
    text: "Great trainers and a wonderful environment. I feel stronger every day!"
  },
  {
    name: "Emily Davis",
    image: user,
    text: "The best gym experience I've ever had. Highly recommend FoxFit!"
  },
  {
    name: "Carlos Martinez",
    image: user,
    text: "Friendly staff and great classes. I look forward to every session."
  }
];

const CARDS_TO_SHOW = 3;
const TestimonialsSection = () => {
  const [startIdx, setStartIdx] = useState(0);
  const total = testimonials.length;

  const next = () => {
    setStartIdx((prev) => (prev + CARDS_TO_SHOW) % total);
  };
  const prev = () => {
    setStartIdx((prev) => (prev - CARDS_TO_SHOW + total) % total);
  };

  // Get the 3 testimonials to show
  const visibleTestimonials = [];
  for (let i = 0; i < CARDS_TO_SHOW; i++) {
    visibleTestimonials.push(testimonials[(startIdx + i) % total]);
  }

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonials-grid-row">
        {/* <button onClick={prev} className="testimonial-arrow left">&#8592;</button> */}
        <div className="testimonials-grid">
          {visibleTestimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="testimonial-img-wrap">
                <img className="testimonial-img" src={t.image} alt={t.name} />
              </div>
              <div className="testimonial-card-content">
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-text">{t.text}</div>
              </div>
            </div>
          ))}
        </div>
        {/* <button onClick={next} className="testimonial-arrow right">&#8594;</button> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
