import React from 'react';
import './CTA.css'
const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Transform Your Business ?</h2>
          <p>Grow Your Business, IT Carrer With Our Expertise</p>
          <div className="cta-buttons">
            <a href="https://pefscomsystem.com/contact/" target='_blank' className="btn-primary">Contact Us</a>
            <a href="#" className="btn-outline">API dashboard</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
