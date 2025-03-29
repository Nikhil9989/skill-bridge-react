import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>SKILL BRIDGE</h2>
            <p>Bridging the gap between education and industry</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h3>Research</h3>
              <ul>
                <li><Link to="/surveys">Surveys</Link></li>
                <li><Link to="/interviews">Interviews</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/research">Methodology</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>About</h3>
              <ul>
                <li><Link to="/about">Our Mission</Link></li>
                <li><Link to="/about">The Team</Link></li>
                <li><Link to="/about">Partners</Link></li>
                <li><Link to="/about">Careers</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/data-usage">Data Usage</Link></li>
                <li><Link to="/ethics">Research Ethics</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} SKILL BRIDGE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
