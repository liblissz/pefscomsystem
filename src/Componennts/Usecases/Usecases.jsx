import React, { useState } from 'react';
import './Usecase.css';

// The data for all use cases
const useCasesData = [
  {
    id: 'introduction',
    title: 'Brief introduction',
    description: 'At Pefscom System, we specialize in delivering cutting-edge IT solutions, software development, and digital transformation services to help businesses, institutions and companies thrive in the modern world.',
    points: [
      'Cloud Based Services Free Spaces',
     
    ],
    imgSrc: 'https://pefscomsystem.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-01-at-10.43.54-AM-650x650.jpeg',
    imgAlt: 'PEFSCOM',
  },
  {
    id: 'Our Mission',
    title: 'Our Mission',
    description: `At PefscomSystem, our mission is to empower businesses through innovative IT solutions. We are committed to delivering cutting-edge technology, seamless integrations, and exceptional service to help organizations thrive in an ever-evolving digital world. By combining expertise, creativity, and a customer-centric approach, we aim to transform challenges 
    into opportunities and drive sustainable growth for our clients.`,
    points: [
   
      'Automating workflows',
    ],
    imgSrc: 'https://pefscomsystem.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-31-at-9.08.00-AM.jpeg',
    imgAlt: 'PEFSCOM',
  },
  {
    id: 'Our Vision',
    title: 'Our Vision',
    description: `At PefscomSystem, our vision is to be a global leader in IT innovation, shaping the future of technology-driven solutions. We strive to create a smarter, more connected world by empowering businesses with scalable, secure, and forward-thinking digital advancements. Our focus is on 
    driving transformation, fostering growth, and making technology accessible for all.`,
    points: [
      'Forecast product demand',
     
    ],
    imgSrc: 'https://pefscomsystem.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-31-at-17.55.12.jpeg',
    imgAlt: 'PEFSCOM',
  },
  {
    id: ' Our Value',
    title: 'Our Value',
    description: `At PefscomSystem, our values define who we are and guide everything we do. We prioritize innovation, integrity, and excellence, ensuring we deliver reliable and impactful IT solutions. With a commitment to collaboration, customer satisfaction, and continuous
     improvement, we aim to build lasting relationships while driving success for our clients and`,
    points: [
      'Predict when machines need fixing',
    ],
    imgSrc: 'https://i.imgur.com/T7Am8ag.jpeg',
    imgAlt: 'PEFSCOM',
  },
];

const UseCases = () => {
  // The active tab (default is healthcare)
  const [activeTab, setActiveTab] = useState('introduction');

  return (
    <section id="use-cases" className="use-cases">
      <div className="container">
        <div className="section-header">
          <h2>PEFSCOM SYSTEM</h2>
          <p>See how businesses across industries use our Skills </p>
        </div>

        <div className="use-cases-tabs">
          {/* Navigation Tabs */}
          <div className="tabs-nav">
            {useCasesData.map((useCase) => (
              <button
                key={useCase.id}
                className={`tab-btn ${activeTab === useCase.id ? 'active' : ''}`}
                onClick={() => setActiveTab(useCase.id)}
              >
                {useCase.id.charAt(0).toUpperCase() + useCase.id.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tabs-content">
            {useCasesData.map((useCase) => (
              <div
                key={useCase.id}
                className={`tab-pane ${activeTab === useCase.id ? 'active' : ''}`}
                id={useCase.id}
              >
                <div className="tab-content">
                  <div className="tab-text">
                    <h3>{useCase.title}</h3>
                    <p>{useCase.description}</p>
                    <ul>
                      {useCase.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    <a href="#" className="btn-secondary">
                      Click on next tab <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="tab-image">
                    <img src={useCase.imgSrc} alt={useCase.imgAlt} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
