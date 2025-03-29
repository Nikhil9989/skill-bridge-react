import React from 'react';
import { Link } from 'react-router-dom';
import './SurveysSection.css';

const SurveysSection = () => {
  const surveysData = [
    {
      id: 'student',
      title: 'Student Skills Gap Assessment',
      description: 'For current students and recent graduates from tier-2/3 cities',
      details: [
        'Duration: 15-20 minutes',
        'Focus: Identifying skill gaps and learning needs',
        'Incentive: ₹500 Amazon voucher for selected participants'
      ]
    },
    {
      id: 'employer',
      title: 'Employer Needs Analysis',
      description: 'For hiring managers and industry professionals',
      details: [
        'Duration: 15-20 minutes',
        'Focus: Industry skill requirements and hiring challenges',
        'Incentive: Early access to talent pool'
      ]
    },
    {
      id: 'institution',
      title: 'Educational Institution Assessment',
      description: 'For educators and administrators',
      details: [
        'Duration: 15-20 minutes',
        'Focus: Curriculum gaps and partnership potential',
        'Incentive: Exclusive partnership opportunities'
      ]
    },
    {
      id: 'concept',
      title: 'Solution Concept Testing',
      description: 'For all stakeholders',
      details: [
        'Duration: 10-15 minutes',
        'Focus: Feedback on SKILL BRIDGE concept',
        'Incentive: Priority access to beta program'
      ]
    }
  ];

  return (
    <div className="surveys-section">
      <div className="container">
        <div className="section-title">
          <h2>Current Surveys</h2>
        </div>
        
        <div className="surveys-grid">
          {surveysData.map(survey => (
            <div className="survey-card" key={survey.id}>
              <h3>{survey.title}</h3>
              <p>{survey.description}</p>
              <ul>
                {survey.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <Link to={`/surveys/${survey.id}`} className="button">
                Take Survey
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurveysSection;
