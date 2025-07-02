import React from 'react';

import './Hero.css'
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>pefscom now provides APIs</h1>
          <p>
            We provide APIs for SMS, Email sending, And push notification,
            build your applications with our APIs
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn-primary">
              Start Free Trial <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#" className="btn-secondary">
              Watch Demo <i className="fas fa-play"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://pefscomsystem.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-31-at-9.08.00-AM.jpeg"
            alt="AI Visualization"
          />
        </div>
      </div>
      <div className="hero-wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
