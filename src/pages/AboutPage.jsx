import React from 'react';
import './AboutPage.css';
import AboutSection from '../components/sections/AboutSection';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="page-banner">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about SKILL BRIDGE and our mission</p>
        </div>
      </div>
      
      <div className="page-container">
        <AboutSection />
        
        <section className="about-vision">
          <div className="container">
            <h2>Our Vision</h2>
            <div className="vision-content">
              <p>
                At SKILL BRIDGE, we envision a future where education transcends geographical and socioeconomic barriers. We believe in creating an ecosystem where students from tier-2 and tier-3 cities have access to the same quality of industry-aligned education as their peers in metropolitan areas.
              </p>
              <p>
                Our goal is to bridge the gap between theoretical knowledge and practical application, ensuring that every student has the opportunity to develop the skills needed to thrive in a rapidly evolving job market.
              </p>
            </div>
          </div>
        </section>
        
        <section className="about-team">
          <div className="container">
            <h2>Our Team</h2>
            <p className="team-intro">
              SKILL BRIDGE is led by a passionate team of educators, industry professionals, and technology enthusiasts dedicated to transforming education in India.
            </p>
            
            <div className="team-members">
              {/* Placeholder for team members - in a real application, this would be populated from an API or data file */}
              <div className="team-member">
                <div className="member-photo"></div>
                <h3>Rahul Sharma</h3>
                <p className="member-role">Co-Founder & CEO</p>
                <p className="member-bio">Former education technology leader with 10+ years of experience in scaling learning platforms across India.</p>
              </div>
              
              <div className="team-member">
                <div className="member-photo"></div>
                <h3>Priya Patel</h3>
                <p className="member-role">Co-Founder & CTO</p>
                <p className="member-bio">Tech innovator with expertise in building adaptive learning systems and educational analytics platforms.</p>
              </div>
              
              <div className="team-member">
                <div className="member-photo"></div>
                <h3>Vikram Mehta</h3>
                <p className="member-role">Head of Curriculum</p>
                <p className="member-bio">Industry veteran with 15+ years of experience in designing technical curricula for leading educational institutions.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="about-partners">
          <div className="container">
            <h2>Our Partners</h2>
            <p className="partners-intro">
              We collaborate with educational institutions, industry leaders, and government bodies to create a comprehensive learning ecosystem.
            </p>
            
            <div className="partners-grid">
              {/* Placeholder for partner logos */}
              <div className="partner-logo"></div>
              <div className="partner-logo"></div>
              <div className="partner-logo"></div>
              <div className="partner-logo"></div>
              <div className="partner-logo"></div>
              <div className="partner-logo"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
