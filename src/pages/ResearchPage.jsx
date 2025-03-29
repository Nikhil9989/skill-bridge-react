import React from 'react';
import './ResearchPage.css';
import ResearchMethods from '../components/sections/ResearchMethods';
import { Link } from 'react-router-dom';

const ResearchPage = () => {
  const researchPhases = [
    {
      id: 1,
      title: 'Problem Identification',
      description: 'Identifying the core challenges in the Indian education system through extensive literature review, market analysis, and preliminary stakeholder interviews.',
      timeline: 'Completed: December 2024',
      keyFindings: [
        'Critical disconnect between curriculum and industry needs',
        'Fragmented learning ecosystem leading to skill gaps',
        'Geographical disparities in education quality and access'
      ]
    },
    {
      id: 2,
      title: 'Stakeholder Analysis',
      description: 'Comprehensive analysis of the needs, challenges, and expectations of all stakeholders in the education ecosystem.',
      timeline: 'January - March 2025',
      keyFindings: [
        'Students seek practical, industry-aligned skills',
        'Employers struggle to find candidates with right skill combinations',
        'Educational institutions face infrastructure and faculty expertise limitations'
      ]
    },
    {
      id: 3,
      title: 'Solution Conceptualization',
      description: 'Development of the SKILL BRIDGE concept based on initial research findings and stakeholder needs analysis.',
      timeline: 'March - April 2025',
      keyFindings: [
        'Hybrid learning model addresses both access and quality challenges',
        'Domain-based approach better aligns with industry skill requirements',
        'Personalization is key to addressing diverse learning needs'
      ]
    },
    {
      id: 4,
      title: 'Validation and Refinement',
      description: 'Validating the SKILL BRIDGE concept through comprehensive research methods and iterative refinement based on feedback.',
      timeline: 'Ongoing: April - June 2025',
      keyFindings: [
        'Initial response shows strong interest in the hybrid model',
        'Industry mentorship is a highly valued component',
        'Institutional partnerships are critical for infrastructure access'
      ]
    }
  ];

  return (
    <div className="research-page">
      <div className="page-banner">
        <div className="container">
          <h1>Our Research Methods</h1>
          <p>Exploring the skill gap challenge through rigorous, multi-faceted research</p>
        </div>
      </div>
      
      <div className="page-container">
        <div className="research-intro">
          <div className="container">
            <h2>Research Approach</h2>
            <p>
              At SKILL BRIDGE, our solution is deeply grounded in rigorous research. We employ a mixed-methods approach that combines qualitative and quantitative research techniques to gain a comprehensive understanding of the skill gap challenge in Indian education.
            </p>
            <p>
              Our research is guided by principles of inclusivity, rigor, and practical applicability. We ensure representation from diverse stakeholders across various geographical locations, with special focus on tier-2 and tier-3 cities where the challenges are often more pronounced.
            </p>
          </div>
        </div>
        
        <ResearchMethods />
        
        <div className="research-phases">
          <div className="container">
            <h2>Research Phases</h2>
            
            <div className="phases-timeline">
              {researchPhases.map((phase) => (
                <div className="phase-item" key={phase.id}>
                  <div className="phase-marker">
                    <div className="phase-number">{phase.id}</div>
                  </div>
                  
                  <div className="phase-content">
                    <h3>{phase.title}</h3>
                    <p className="phase-timeline">{phase.timeline}</p>
                    <p className="phase-description">{phase.description}</p>
                    
                    <div className="phase-findings">
                      <h4>Key Findings</h4>
                      <ul>
                        {phase.keyFindings.map((finding, index) => (
                          <li key={index}>{finding}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="research-participate">
          <div className="container">
            <h2>Participate in Our Research</h2>
            <p>
              Our research is ongoing, and we invite you to contribute your insights. Your participation can help shape the future of education in India.
            </p>
            
            <div className="participate-options">
              <div className="participate-card">
                <h3>Take a Survey</h3>
                <p>
                  Share your perspectives through our targeted surveys designed for different stakeholder groups.
                </p>
                <Link to="/surveys" className="btn btn-primary">
                  View Surveys
                </Link>
              </div>
              
              <div className="participate-card">
                <h3>Join an Interview</h3>
                <p>
                  Participate in an in-depth interview to share your experiences and insights.
                </p>
                <Link to="/interviews" className="btn btn-primary">
                  Schedule Interview
                </Link>
              </div>
              
              <div className="participate-card">
                <h3>View Research Dashboard</h3>
                <p>
                  Explore the latest findings from our ongoing research.
                </p>
                <Link to="/dashboard" className="btn btn-primary">
                  View Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
