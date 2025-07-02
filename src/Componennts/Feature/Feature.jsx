import React from 'react';
import './Feature.css'
const features = [
  {
    icon: 'fas fa-paint-brush', // Graphic design
    title: 'Graphic Design',
    description: 'Our goal is to propel your business forward',
  },
  {
    icon: 'fas fa-desktop', // Desktop apps
    title: 'Desktop Application Development',
    description: 'Our goal is to propel your business forward',
  },
  {
    icon: 'fas fa-code', // Full stack dev
    title: 'Full Stack Web Development',
    description: 'Our goal is to propel your business forward',
  },
  {
    icon: 'fas fa-database', // Database admin
    title: 'Database Administration',
    description: 'Our goal is to propel your business forward',
  },
  {
    icon: 'fas fa-tools', // Basic skills & maintenance
    title: 'Basic Skills & Maintenance',
    description: 'Our goal is to propel your business forward',
  },
  {
    icon: 'fas fa-mobile-alt', // Mobile apps
    title: 'Mobile App Development',
    description: 'Our goal is to propel your business forward',
  },
  {
    icon: 'fas fa-user-shield', // Cyber security
    title: 'Cyber Security (COMPTIA CERTIFICATION)',
    description: 'Our goal is to propel your business forward',
  },
  {
    icon: 'fab fa-wordpress', // CMS WordPress
    title: 'CMS (WordPress)',
    description: 'Our goal is to propel your business forward',
  },
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2>We Run all kinds of Services</h2>
          <p>Discover how our platform can revolutionize your business operations</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
