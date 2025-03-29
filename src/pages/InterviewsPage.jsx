import React from 'react';
import './InterviewsPage.css';
import InterviewsSection from '../components/sections/InterviewsSection';

const InterviewsPage = () => {
  return (
    <div className="interviews-page">
      <div className="page-banner">
        <div className="container">
          <h1>Research Interviews</h1>
          <p>Share your insights and help shape the future of education</p>
        </div>
      </div>
      
      <div className="page-container">
        <div className="interviews-intro">
          <div className="container">
            <h2>Why Join Our Research Interviews?</h2>
            <p>
              Research interviews are a crucial part of our methodology to deeply understand the challenges and needs of various stakeholders in the education ecosystem. These one-on-one conversations allow us to explore nuanced perspectives that surveys alone cannot capture.
            </p>
            <p>
              By participating in our interviews, you're contributing valuable insights that will directly shape the development of SKILL BRIDGE. Your experience and opinions matter to us, and they will help ensure our solution addresses real-world needs effectively.
            </p>
            
            <div className="interview-benefits">
              <div className="benefit-card">
                <h3>Your Voice Matters</h3>
                <p>
                  Share your unique perspective on education challenges and potential solutions. Your experiences and insights will help shape our approach.
                </p>
              </div>
              <div className="benefit-card">
                <h3>Compensation for Your Time</h3>
                <p>
                  We value your time and expertise. All interview participants receive compensation, typically in the form of gift cards or vouchers.
                </p>
              </div>
              <div className="benefit-card">
                <h3>Flexible Scheduling</h3>
                <p>
                  Interviews are scheduled at your convenience, with options for evenings and weekends. Choose your preferred time slot and language.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <InterviewsSection />
        
        <div className="interview-process">
          <div className="container">
            <h2>What to Expect</h2>
            
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Application</h3>
                <p>
                  Fill out the form on this page to express your interest in participating in our research interviews.
                </p>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Selection</h3>
                <p>
                  Our research team will review your application and reach out to you if you're selected for an interview.
                </p>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Scheduling</h3>
                <p>
                  We'll work with you to find a convenient time for the interview, which will take place via video call or phone.
                </p>
              </div>
              
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Interview</h3>
                <p>
                  Participate in a 60-minute conversation with one of our researchers about your experiences and perspectives.
                </p>
              </div>
              
              <div className="process-step">
                <div className="step-number">5</div>
                <h3>Compensation</h3>
                <p>
                  Receive your compensation (typically ₹1000-2000 in gift cards) after completing the interview.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewsPage;
