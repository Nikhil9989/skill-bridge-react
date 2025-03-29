import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ title, subtitle, buttons }) => {
  return (
    <div className="hero">
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        
        {buttons && buttons.length > 0 && (
          <div className="hero-buttons">
            {buttons.map((button, index) => (
              <Link 
                key={index} 
                to={button.link} 
                className={button.primary ? 'btn btn-primary' : 'btn btn-secondary'}
              >
                {button.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
