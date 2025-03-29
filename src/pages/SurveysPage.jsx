import React from 'react';
import './SurveysPage.css';
import SurveysSection from '../components/sections/SurveysSection';

const SurveysPage = () => {
  return (
    <div className="surveys-page">
      <div className="page-banner">
        <div className="container">
          <h1>Research Surveys</h1>
          <p>Help us improve education by participating in our research</p>
        </div>
      </div>
      
      <div className="page-container">
        <div className="surveys-intro">
          <div className="container">
            <h2>Why Your Participation Matters</h2>
            <p>
              Our research surveys are designed to collect valuable insights from various stakeholders in the education ecosystem. Your feedback helps us identify skill gaps, understand learning preferences, and develop solutions that truly address the needs of students, educators, and employers.
            </p>
            <p>
              All surveys are anonymous and your data will be used solely for research purposes. Selected participants will receive incentives as a token of our appreciation for your time and insights.
            </p>
          </div>
        </div>
        
        <SurveysSection />
        
        <div className="surveys-faq">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How long do the surveys take to complete?</h3>
                <p>
                  Most of our surveys take between 10-20 minutes to complete, depending on the survey type and your responses.
                </p>
              </div>
              
              <div className="faq-item">
                <h3>How will my data be used?</h3>
                <p>
                  All survey data is anonymized and used solely for research purposes to improve our understanding of skill gaps and educational needs. We follow strict data protection protocols.
                </p>
              </div>
              
              <div className="faq-item">
                <h3>Who is eligible for incentives?</h3>
                <p>
                  For surveys offering incentives, recipients are randomly selected from completed responses. You'll be notified via email if you're selected.
                </p>
              </div>
              
              <div className="faq-item">
                <h3>Can I participate in multiple surveys?</h3>
                <p>
                  Yes, you're welcome to participate in any surveys relevant to your role or experience. Each survey provides unique insights for our research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveysPage;
