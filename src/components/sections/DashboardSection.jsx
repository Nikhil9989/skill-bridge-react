import React, { useEffect, useRef } from 'react';
import './DashboardSection.css';
import { Chart, registerables } from 'chart.js';

// Register all Chart.js components
Chart.register(...registerables);

const DashboardSection = () => {
  const awarenessChartRef = useRef(null);
  const severityChartRef = useRef(null);
  const satisfactionChartRef = useRef(null);
  const adoptionChartRef = useRef(null);
  
  const chartInstancesRef = useRef({
    awarenessChart: null,
    severityChart: null,
    satisfactionChart: null,
    adoptionChart: null
  });

  useEffect(() => {
    // Create charts when component mounts
    createCharts();
    
    // Cleanup function to destroy charts when component unmounts
    return () => {
      Object.values(chartInstancesRef.current).forEach(chart => {
        if (chart) {
          chart.destroy();
        }
      });
    };
  }, []);

  const createCharts = () => {
    // Destroy existing charts if they exist
    Object.values(chartInstancesRef.current).forEach(chart => {
      if (chart) {
        chart.destroy();
      }
    });

    // Create Awareness Chart
    if (awarenessChartRef.current) {
      chartInstancesRef.current.awarenessChart = new Chart(awarenessChartRef.current, {
        type: 'bar',
        data: {
          labels: ['Students', 'Employers', 'Educators', 'Parents'],
          datasets: [{
            label: 'Problem Awareness (%)',
            data: [87, 92, 78, 65],
            backgroundColor: 'rgba(53, 80, 222, 0.7)',
            borderColor: 'rgba(53, 80, 222, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 100
            }
          }
        }
      });
    }

    // Create Severity Chart
    if (severityChartRef.current) {
      chartInstancesRef.current.severityChart = new Chart(severityChartRef.current, {
        type: 'radar',
        data: {
          labels: ['Technical Skills', 'Communication', 'Problem Solving', 'Industry Knowledge', 'Adaptability', 'Leadership'],
          datasets: [{
            label: 'Skill Gap Severity (1-10)',
            data: [8.3, 7.2, 6.8, 8.5, 6.5, 7.9],
            backgroundColor: 'rgba(255, 107, 107, 0.3)',
            borderColor: 'rgba(255, 107, 107, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(255, 107, 107, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 107, 107, 1)'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              min: 0,
              max: 10,
              ticks: {
                stepSize: 2
              }
            }
          }
        }
      });
    }

    // Create Satisfaction Chart
    if (satisfactionChartRef.current) {
      chartInstancesRef.current.satisfactionChart = new Chart(satisfactionChartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Satisfied', 'Neutral', 'Dissatisfied'],
          datasets: [{
            data: [28, 32, 40],
            backgroundColor: [
              'rgba(98, 200, 142, 0.7)',
              'rgba(255, 193, 7, 0.7)',
              'rgba(255, 107, 107, 0.7)'
            ],
            borderColor: [
              'rgba(98, 200, 142, 1)',
              'rgba(255, 193, 7, 1)',
              'rgba(255, 107, 107, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      });
    }

    // Create Adoption Chart
    if (adoptionChartRef.current) {
      chartInstancesRef.current.adoptionChart = new Chart(adoptionChartRef.current, {
        type: 'pie',
        data: {
          labels: ['Very Likely', 'Somewhat Likely', 'Neutral', 'Unlikely'],
          datasets: [{
            data: [42, 35, 18, 5],
            backgroundColor: [
              'rgba(53, 80, 222, 0.7)',
              'rgba(98, 200, 142, 0.7)',
              'rgba(255, 193, 7, 0.7)',
              'rgba(255, 107, 107, 0.7)'
            ],
            borderColor: [
              'rgba(53, 80, 222, 1)',
              'rgba(98, 200, 142, 1)',
              'rgba(255, 193, 7, 1)',
              'rgba(255, 107, 107, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      });
    }
  };

  return (
    <div className="dashboard-section">
      <div className="container">
        <div className="section-title">
          <h2>Research Dashboard</h2>
          <p className="dashboard-intro">
            Below are the preliminary results from our ongoing research. This dashboard is updated weekly as new data is collected and analyzed.
          </p>
        </div>
        
        <div className="metrics-grid">
          <div className="metric-card">
            <h3>Problem Awareness</h3>
            <div className="chart-container">
              <canvas ref={awarenessChartRef}></canvas>
            </div>
            <p>Percentage of stakeholders who recognize the skill gap problem</p>
          </div>
          
          <div className="metric-card">
            <h3>Severity Rating</h3>
            <div className="chart-container">
              <canvas ref={severityChartRef}></canvas>
            </div>
            <p>Average severity rating of the skill gap problem (1-10)</p>
          </div>
          
          <div className="metric-card">
            <h3>Current Solution Satisfaction</h3>
            <div className="chart-container">
              <canvas ref={satisfactionChartRef}></canvas>
            </div>
            <p>Satisfaction with current education and skill development options</p>
          </div>
          
          <div className="metric-card">
            <h3>Willingness to Adopt</h3>
            <div className="chart-container">
              <canvas ref={adoptionChartRef}></canvas>
            </div>
            <p>Willingness to adopt the SKILL BRIDGE solution</p>
          </div>
        </div>
        
        <div className="dashboard-details">
          <h3>Key Findings</h3>
          <ul id="key-findings">
            <li>92% of employers report difficulties finding graduates with the right combination of technical and soft skills</li>
            <li>Technical skills in emerging technologies show the largest gap (8.3/10 severity)</li>
            <li>Only 28% of students are satisfied with current skill development options</li>
            <li>77% of respondents would likely adopt a hybrid learning model like SKILL BRIDGE</li>
            <li>Personalized learning paths and industry mentorship are the most appealing features to potential users</li>
          </ul>
          
          <h3>Research Progress</h3>
          <div className="progress-container">
            <div className="progress-item">
              <span className="progress-label">Surveys Completed</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '35%'}}></div>
              </div>
              <span className="progress-value">105/300</span>
            </div>
            
            <div className="progress-item">
              <span className="progress-label">Interviews Conducted</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '20%'}}></div>
              </div>
              <span className="progress-value">12/60</span>
            </div>
            
            <div className="progress-item">
              <span className="progress-label">Focus Groups Completed</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '25%'}}></div>
              </div>
              <span className="progress-value">2/8</span>
            </div>
            
            <div className="progress-item">
              <span className="progress-label">Prototype Tests Run</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '10%'}}></div>
              </div>
              <span className="progress-value">3/30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
