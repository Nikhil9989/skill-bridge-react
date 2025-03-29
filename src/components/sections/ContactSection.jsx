import React, { useState } from 'react';
import './ContactSection.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit the form data to an API
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 5000);
  };
  
  return (
    <div className="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <p>
              Have questions about our research or interested in collaborating? Get in touch with our research team.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>research@skillbridge.edu</span>
              </div>
              
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91 9876543210</span>
              </div>
              
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>SKILL BRIDGE Research Office, Innovation Center, Pune, Maharashtra</span>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaFacebook />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            {submitted ? (
              <div className="form-success">
                <p>Thank you for your message!</p>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input 
                    type="email" 
                    id="contact-email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input 
                    type="text" 
                    id="contact-subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea 
                    id="contact-message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
