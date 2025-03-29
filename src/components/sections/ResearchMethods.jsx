import React from 'react';
import './ResearchMethods.css';
import { FaComments, FaClipboardList, FaUsers, FaDesktop } from 'react-icons/fa';

const ResearchMethods = () => {
  const methodsData = [
    {
      id: 1,
      icon: <FaComments />,
      title: 'Structured Interviews',
      description: '60-minute semi-structured interviews conducted in local languages to deeply understand stakeholder needs.'
    },
    {
      id: 2,
      icon: <FaClipboardList />,
      title: 'Online Surveys',
      description: 'Targeted surveys to collect quantitative data on skills gaps, learning preferences, and market needs.'
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: 'Focus Groups',
      description: 'Facilitated discussions with 6-8 participants to explore collective perspectives and generate insights.'
    },
    {
      id: 4,
      icon: <FaDesktop />,
      title: 'Prototype Testing',
      description: 'Interactive testing of our platform and curriculum concepts to validate usability and effectiveness.'
    }
  ];

  return (
    <div className="research-methods-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Research Methods</h2>
        </div>
        
        <div className="methods-grid">
          {methodsData.map(method => (
            <div className="method-card" key={method.id}>
              <div className="method-icon">
                {method.icon}
              </div>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchMethods;
