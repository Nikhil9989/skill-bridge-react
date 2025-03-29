import React from 'react';
import './DashboardPage.css';
import DashboardSection from '../components/sections/DashboardSection';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <div className="page-banner">
        <div className="container">
          <h1>Research Dashboard</h1>
          <p>Tracking our progress in understanding education challenges</p>
        </div>
      </div>
      
      <div className="page-container">
        <div className="dashboard-intro">
          <div className="container">
            <h2>The Power of Data-Driven Research</h2>
            <p>
              Our research dashboard provides a transparent view of our ongoing efforts to understand the skill gap challenges in Indian education. We believe in making our findings accessible to all stakeholders, enabling collaborative solutions.
            </p>
            <p>
              The data presented here is collected through various research methods, including surveys, interviews, focus groups, and prototype testing. As we gather more insights, this dashboard will be updated to reflect our growing understanding of the challenges and potential solutions.
            </p>
          </div>
        </div>
        
        <DashboardSection />
        
        <div className="methodology">
          <div className="container">
            <h2>Research Methodology</h2>
            
            <div className="methodology-content">
              <div className="methodology-text">
                <p>
                  Our research follows a rigorous methodology designed to gather comprehensive insights from diverse stakeholders across India's educational landscape. We employ a mixed-methods approach combining quantitative and qualitative techniques.
                </p>
                <p>
                  All data is collected with explicit consent from participants, and personal information is kept strictly confidential. Our findings are analyzed using both statistical methods and thematic analysis to identify patterns, challenges, and opportunities.
                </p>
              </div>
              
              <div className="methodology-table">
                <table>
                  <thead>
                    <tr>
                      <th>Research Method</th>
                      <th>Sample Size Target</th>
                      <th>Current Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Online Surveys</td>
                      <td>300 respondents</td>
                      <td>105 completed (35%)</td>
                    </tr>
                    <tr>
                      <td>In-depth Interviews</td>
                      <td>60 participants</td>
                      <td>12 conducted (20%)</td>
                    </tr>
                    <tr>
                      <td>Focus Groups</td>
                      <td>8 groups (6-8 per group)</td>
                      <td>2 completed (25%)</td>
                    </tr>
                    <tr>
                      <td>Prototype Testing</td>
                      <td>30 participants</td>
                      <td>3 completed (10%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        <div className="future-updates">
          <div className="container">
            <h2>Upcoming Research Initiatives</h2>
            
            <div className="updates-grid">
              <div className="update-card">
                <h3>Regional Analysis</h3>
                <p>
                  Breaking down skill gaps and educational challenges by region to identify geographic patterns and localized solutions.
                </p>
                <span className="update-timeline">Q2 2025</span>
              </div>
              
              <div className="update-card">
                <h3>Industry-Specific Reports</h3>
                <p>
                  Deep dives into skill requirements and gaps for specific industries, starting with IT, manufacturing, and financial services.
                </p>
                <span className="update-timeline">Q3 2025</span>
              </div>
              
              <div className="update-card">
                <h3>Economic Impact Assessment</h3>
                <p>
                  Analysis of the economic impact of the skill gap on individuals, businesses, and the broader economy.
                </p>
                <span className="update-timeline">Q4 2025</span>
              </div>
              
              <div className="update-card">
                <h3>Solutions Effectiveness Tracking</h3>
                <p>
                  Measuring the impact of various intervention strategies on closing skill gaps and improving employment outcomes.
                </p>
                <span className="update-timeline">Q1 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
