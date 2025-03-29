import React, { useState } from 'react';
import './InterviewsSection.css';

const InterviewsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    city: '',
    availability: '',
    language: 'english'
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
    console.log('Interview form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: '',
        city: '',
        availability: '',
        language: 'english'
      });
    }, 5000);
  };
  
  return (
    <div className="interviews-section">
      <div className="container">
        <div className="section-title">
          <h2>Join Our Research Interviews</h2>
        </div>
        
        <div className="interview-content">
          <div className="interview-text">
            <p>
              We're conducting in-depth interviews with students, educators, employers, and potential mentors to gain deeper insights into the skill gap challenges and potential solutions.
            </p>
            <p>
              Interviews take approximately 60 minutes and can be conducted in your preferred language. All participants will receive appropriate compensation for their time.
            </p>
            
            <h3>Who we're looking to interview:</h3>
            <ul>
              <li>Students and recent graduates from tier-2/3 cities</li>
              <li>College professors and administrators</li>
              <li>Employers and hiring managers</li>
              <li>Industry professionals interested in mentoring</li>
              <li>Parents of college students</li>
            </ul>
          </div>
          
          <div className="interview-form">
            <h3>Express Interest</h3>
            
            {submitted ? (
              <div className="form-success">
                <p>Thank you for your interest in participating in our research interviews!</p>
                <p>We'll review your information and contact you soon to schedule an interview.</p>
              </div>
            ) : (
              <form id="interview-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="role">I am a:</label>
                  <select 
                    id="role" 
                    name="role" 
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your role</option>
                    <option value="student">Student/Recent Graduate</option>
                    <option value="educator">Educator/Administrator</option>
                    <option value="employer">Employer/Hiring Manager</option>
                    <option value="professional">Industry Professional</option>
                    <option value="parent">Parent</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input 
                    type="text" 
                    id="city" 
                    name="city" 
                    value={formData.city}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="availability">Preferred Interview Time</label>
                  <select 
                    id="availability" 
                    name="availability" 
                    value={formData.availability}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your preference</option>
                    <option value="weekday-morning">Weekday Mornings</option>
                    <option value="weekday-afternoon">Weekday Afternoons</option>
                    <option value="weekday-evening">Weekday Evenings</option>
                    <option value="weekend-morning">Weekend Mornings</option>
                    <option value="weekend-afternoon">Weekend Afternoons</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="language">Preferred Language</label>
                  <select 
                    id="language" 
                    name="language" 
                    value={formData.language}
                    onChange={handleChange}
                    required
                  >
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="tamil">Tamil</option>
                    <option value="telugu">Telugu</option>
                    <option value="kannada">Kannada</option>
                    <option value="marathi">Marathi</option>
                    <option value="gujarati">Gujarati</option>
                    <option value="bengali">Bengali</option>
                  </select>
                </div>
                
                <button type="submit" className="submit-button">Submit</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewsSection;
