import React, { useState } from 'react';
import './Prising.css'
const plans = [
  {
    name: 'Starter',
    monthlyPrice: 5000,
    annualPrice: 4000,
    description: 'This API handles the fowarding of emails',
    features: [
      { label: '5,000 API calls per month', included: true },
     
      { label: 'Basic analytics', included: true },
      { label: 'Email support', included: true },
      { label: 'Advanced security', included: false },
    ],
    buttonText: 'Get Started',
    buttonClass: 'btn-secondary',
    popular: false,
  },
  {
    name: 'Professional',
    monthlyPrice: 100000,
    annualPrice: 7000,
    description: 'This is Our WhatsApp API',
    features: [
      { label: '50,000 API calls per month', included: true },
      { label: ' WhatsApp Messages', included: true },
      { label: 'Advanced analytics', included: true },
      { label: 'Advanced security', included: false },
    ],
    buttonText: 'Get Started',
    buttonClass: 'btn-primary',
    popular: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 6000,
    annualPrice: 5000,
    description: 'This API is for SIMS Notification',
    features: [
      { label: 'Unlimited API calls', included: true },
      { label: 'Custom analytics dashboard', included: true },
      { label: '24/7 dedicated support', included: true },
      { label: 'Enterprise-grade security', included: true },
    ],
    buttonText: 'Contact Sales',
    buttonClass: 'btn-secondary',
    popular: false,
  },
];

const Pricing = () => {
  const [annual, _] = useState(false);


  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that fits your business needs</p>
        </div>
        <div className="pricing-toggle">
         
          <span>
            Annual <span className="discount">Save 20%</span>
          </span>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="monthly" style={{ display: annual ? 'none' : 'inline' }}>
                    {plan.monthlyPrice}Frs
                  </span>
                  <span className="annually" style={{ display: annual ? 'inline' : 'none' }}>
                    {plan.annualPrice}Frs
                  </span>
                  <span className="period">/month</span>
                </div>
                <p>{plan.description}</p>
              </div>
              <div className="pricing-features">
                <ul>
                  {plan.features.map(({ label, included }, idx) => (
                    <li key={idx} className={included ? '' : 'disabled'}>
                      <i className={`fas fa-${included ? 'check' : 'times'}`}></i> {label}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#" className={plan.buttonClass}>
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
