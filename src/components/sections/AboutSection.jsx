import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>About SKILL BRIDGE</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              SKILL BRIDGE aims to address the critical gap between education and employment in India through an innovative hybrid learning model. Our vision is to create an accessible, personalized, and industry-aligned learning ecosystem that transforms students and professionals in tier-2/3 cities into industry-ready talent.
            </p>
            <p>
              We're conducting extensive research to validate our approach and would greatly value your input in helping us build a solution that truly meets the needs of students, educators, and employers.
            </p>
          </div>
          
          <div className="about-image">
            <img 
              src="/images/skill-bridge-concept.png" 
              alt="SKILL BRIDGE Concept" 
              onError={(e) => {
                e.target.onError = null;
                e.target.src = 'https://via.placeholder.com/400x300?text=SKILL+BRIDGE+Concept';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
