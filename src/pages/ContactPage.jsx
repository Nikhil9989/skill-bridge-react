import React from 'react';
import './ContactPage.css';
import ContactSection from '../components/sections/ContactSection';
import { FaEnvelope, FaQuestionCircle, FaHandshake, FaBullhorn } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="page-banner">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for questions, collaborations, or feedback</p>
        </div>
      </div>
      
      <div className="page-container">
        <div className="contact-options">
          <div className="container">
            <h2>How Can We Help?</h2>
            
            <div className="options-grid">
              <div className="option-card">
                <div className="option-icon">
                  <FaQuestionCircle />
                </div>
                <h3>General Inquiries</h3>
                <p>
                  Have questions about SKILL BRIDGE or our research initiatives? Our team is ready to provide the information you need.
                </p>
                <a href="mailto:info@skillbridge.edu" className="option-link">
                  info@skillbridge.edu
                </a>
              </div>
              
              <div className="option-card">
                <div className="option-icon">
                  <FaHandshake />
                </div>
                <h3>Partnership Opportunities</h3>
                <p>
                  Interested in collaborating with SKILL BRIDGE? Reach out to explore potential partnership opportunities.
                </p>
                <a href="mailto:partnerships@skillbridge.edu" className="option-link">
                  partnerships@skillbridge.edu
                </a>
              </div>
              
              <div className="option-card">
                <div className="option-icon">
                  <FaEnvelope />
                </div>
                <h3>Research Participation</h3>
                <p>
                  Want to contribute to our research? Contact our research team to learn how you can participate.
                </p>
                <a href="mailto:research@skillbridge.edu" className="option-link">
                  research@skillbridge.edu
                </a>
              </div>
              
              <div className="option-card">
                <div className="option-icon">
                  <FaBullhorn />
                </div>
                <h3>Media Inquiries</h3>
                <p>
                  For media inquiries, press releases, or speaking engagements, please contact our communications team.
                </p>
                <a href="mailto:media@skillbridge.edu" className="option-link">
                  media@skillbridge.edu
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <ContactSection />
        
        <div className="contact-map">
          <div className="container">
            <h2>Visit Our Office</h2>
            <p className="map-info">
              Our research office is located in the Innovation Center, Pune. Feel free to visit us during business hours (Monday-Friday, 9am-6pm).
            </p>
            
            <div className="map-container">
              {/* In a real application, this would be a Google Maps or similar embed */}
              <div className="map-placeholder">
                <div className="map-text">
                  <h3>SKILL BRIDGE Research Office</h3>
                  <p>Innovation Center, 3rd Floor</p>
                  <p>123 Tech Park Road, Hinjewadi</p>
                  <p>Pune, Maharashtra 411057</p>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
