import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SurveyDetailPage.css';

const SurveyDetailPage = () => {
  const { surveyId } = useParams();
  const navigate = useNavigate();
  const [surveyData, setSurveyData] = useState(null);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // In a real application, this would fetch the survey from an API
    const fetchSurvey = () => {
      const surveys = {
        student: {
          title: 'Student Skills Gap Assessment',
          description: 'For current students and recent graduates from tier-2/3 cities',
          intro: 'This survey aims to identify skill gaps and learning needs of students and recent graduates. Your feedback will help us develop targeted solutions for improving educational outcomes.',
          questions: [
            {
              id: 'q1',
              type: 'radio',
              label: 'Which best describes your current status?',
              options: ['Current Student', 'Recent Graduate (< 2 years)', 'Working Professional (2+ years)', 'Unemployed/Seeking Work']
            },
            {
              id: 'q2',
              type: 'select',
              label: 'Which academic field are you studying or graduated from?',
              options: ['Computer Science/IT', 'Engineering (non-CS)', 'Business/Commerce', 'Arts & Humanities', 'Sciences', 'Other']
            },
            {
              id: 'q3',
              type: 'checkbox',
              label: 'Which skills do you feel you lack the most for industry readiness? (Select up to 3)',
              options: ['Technical/Domain Skills', 'Communication Skills', 'Problem-Solving', 'Teamwork', 'Leadership', 'Critical Thinking', 'Time Management']
            },
            {
              id: 'q4',
              type: 'textarea',
              label: 'What challenges have you faced in acquiring industry-relevant skills through your education?'
            }
          ]
        },
        employer: {
          title: 'Employer Needs Analysis',
          description: 'For hiring managers and industry professionals',
          intro: 'This survey helps us understand the skills employers are looking for and the challenges faced in hiring recent graduates. Your insights will inform our curriculum development.',
          questions: [
            {
              id: 'q1',
              type: 'radio',
              label: 'What is the size of your organization?',
              options: ['Small (1-50 employees)', 'Medium (51-500 employees)', 'Large (501-5000 employees)', 'Enterprise (5000+ employees)']
            },
            {
              id: 'q2',
              type: 'select',
              label: 'Which industry does your organization primarily operate in?',
              options: ['Information Technology', 'Manufacturing', 'Financial Services', 'Healthcare', 'Education', 'Retail', 'Other']
            },
            {
              id: 'q3',
              type: 'checkbox',
              label: 'What are the primary skill gaps you observe in recent graduates? (Select up to 3)',
              options: ['Technical Skills', 'Communication Skills', 'Problem-Solving', 'Adaptability', 'Teamwork', 'Industry Knowledge', 'Work Ethic']
            },
            {
              id: 'q4',
              type: 'textarea',
              label: 'What specific skills or knowledge areas would you like to see emphasized in educational programs?'
            }
          ]
        },
        institution: {
          title: 'Educational Institution Assessment',
          description: 'For educators and administrators',
          intro: 'This survey helps us understand the challenges faced by educational institutions in preparing industry-ready graduates. Your input will help us develop solutions that complement existing educational frameworks.',
          questions: [
            {
              id: 'q1',
              type: 'radio',
              label: 'What type of educational institution do you represent?',
              options: ['University', 'College', 'Polytechnic', 'Vocational Training Institute', 'Other']
            },
            {
              id: 'q2',
              type: 'select',
              label: 'How would you rate your institution\'s industry integration?',
              options: ['Excellent', 'Good', 'Average', 'Below Average', 'Poor']
            },
            {
              id: 'q3',
              type: 'checkbox',
              label: 'What are the biggest challenges your institution faces in providing industry-relevant education? (Select up to 3)',
              options: ['Curriculum Constraints', 'Faculty Expertise', 'Infrastructure Limitations', 'Industry Partnerships', 'Funding', 'Regulatory Requirements', 'Student Readiness']
            },
            {
              id: 'q4',
              type: 'textarea',
              label: 'How could an external partner help your institution improve the industry readiness of your students?'
            }
          ]
        },
        concept: {
          title: 'Solution Concept Testing',
          description: 'For all stakeholders',
          intro: 'This survey collects feedback on the SKILL BRIDGE concept. Your opinion will help us refine our approach and ensure it meets the needs of all stakeholders.',
          questions: [
            {
              id: 'q1',
              type: 'radio',
              label: 'Which stakeholder group do you primarily belong to?',
              options: ['Student/Recent Graduate', 'Industry Professional', 'Educator/Administrator', 'Parent', 'Other']
            },
            {
              id: 'q2',
              type: 'select',
              label: 'How would you rate the potential impact of the SKILL BRIDGE concept?',
              options: ['Very High', 'High', 'Moderate', 'Low', 'Very Low']
            },
            {
              id: 'q3',
              type: 'checkbox',
              label: 'Which aspects of the SKILL BRIDGE concept appeal to you most? (Select up to 3)',
              options: ['Hybrid Learning Model', 'Industry-Aligned Curriculum', 'Mentorship Component', 'Project-Based Learning', 'Personalized Learning Paths', 'Placement Support', 'Flexible Pricing']
            },
            {
              id: 'q4',
              type: 'textarea',
              label: 'What suggestions do you have to improve the SKILL BRIDGE concept?'
            }
          ]
        }
      };

      if (surveys[surveyId]) {
        setSurveyData(surveys[surveyId]);
        
        // Initialize form data
        const initialData = {};
        surveys[surveyId].questions.forEach(question => {
          if (question.type === 'checkbox') {
            initialData[question.id] = [];
          } else {
            initialData[question.id] = '';
          }
        });
        setFormData(initialData);
      } else {
        // Survey not found, redirect to surveys page
        navigate('/surveys');
      }
    };

    fetchSurvey();
  }, [surveyId, navigate]);

  const handleInputChange = (questionId, value, isCheckbox = false) => {
    if (isCheckbox) {
      setFormData(prevData => {
        const currentValues = [...prevData[questionId]];
        
        if (currentValues.includes(value)) {
          // Remove value if already selected
          return {
            ...prevData,
            [questionId]: currentValues.filter(item => item !== value)
          };
        } else {
          // Add value if not already selected
          return {
            ...prevData,
            [questionId]: [...currentValues, value]
          };
        }
      });
    } else {
      setFormData(prevData => ({
        ...prevData,
        [questionId]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real application, this would send the formData to an API
    console.log('Survey submitted:', formData);
    
    // Show submission confirmation
    setSubmitted(true);
    
    // Scroll to top
    window.scrollTo(0, 0);
  };

  if (!surveyData) {
    return (
      <div className="survey-detail-page">
        <div className="container">
          <div className="loading">Loading survey...</div>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="survey-detail-page">
        <div className="page-banner">
          <div className="container">
            <h1>Thank You!</h1>
            <p>Your feedback has been submitted successfully</p>
          </div>
        </div>
        
        <div className="submission-confirmation">
          <div className="container">
            <div className="confirmation-message">
              <h2>Survey Completed</h2>
              <p>Your responses to the {surveyData.title} have been recorded. We appreciate your time and valuable input.</p>
              <p>If you provided contact information and are selected for incentives, we will reach out to you via email.</p>
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/surveys')}
              >
                Back to Surveys
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="survey-detail-page">
      <div className="page-banner">
        <div className="container">
          <h1>{surveyData.title}</h1>
          <p>{surveyData.description}</p>
        </div>
      </div>
      
      <div className="survey-content">
        <div className="container">
          <div className="survey-intro">
            <p>{surveyData.intro}</p>
          </div>
          
          <form className="survey-form" onSubmit={handleSubmit}>
            {surveyData.questions.map((question) => (
              <div className="form-question" key={question.id}>
                <label>{question.label}</label>
                
                {question.type === 'radio' && (
                  <div className="radio-options">
                    {question.options.map((option, index) => (
                      <div className="radio-option" key={index}>
                        <input
                          type="radio"
                          id={`${question.id}-${index}`}
                          name={question.id}
                          value={option}
                          checked={formData[question.id] === option}
                          onChange={() => handleInputChange(question.id, option)}
                          required
                        />
                        <label htmlFor={`${question.id}-${index}`}>{option}</label>
                      </div>
                    ))}
                  </div>
                )}
                
                {question.type === 'select' && (
                  <select
                    value={formData[question.id]}
                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                    required
                  >
                    <option value="">-- Select an option --</option>
                    {question.options.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                )}
                
                {question.type === 'checkbox' && (
                  <div className="checkbox-options">
                    {question.options.map((option, index) => (
                      <div className="checkbox-option" key={index}>
                        <input
                          type="checkbox"
                          id={`${question.id}-${index}`}
                          name={question.id}
                          value={option}
                          checked={formData[question.id].includes(option)}
                          onChange={() => handleInputChange(question.id, option, true)}
                        />
                        <label htmlFor={`${question.id}-${index}`}>{option}</label>
                      </div>
                    ))}
                  </div>
                )}
                
                {question.type === 'textarea' && (
                  <textarea
                    value={formData[question.id]}
                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                    required
                    rows="5"
                    placeholder="Your answer..."
                  ></textarea>
                )}
              </div>
            ))}
            
            <div className="form-section">
              <h3>Contact Information (Optional)</h3>
              <p className="form-info">Provide your email if you'd like to be considered for incentives.</p>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email || ''}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
            </div>
            
            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={() => navigate('/surveys')}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Submit Survey
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyDetailPage;
