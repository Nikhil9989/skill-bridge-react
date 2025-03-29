import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicked outside
  useEffect(() => {
    if (menuOpen) {
      const closeMenu = () => setMenuOpen(false);
      document.addEventListener('click', closeMenu);
      
      return () => {
        document.removeEventListener('click', closeMenu);
      };
    }
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container">
        <div className="logo">
          <Link to="/">
            <h1>SKILL BRIDGE</h1>
            <p>Research & Validation</p>
          </Link>
        </div>
        
        <div 
          className={`burger ${menuOpen ? 'active' : ''}`} 
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        
        <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`}  onClick={(e) => e.stopPropagation()}>
          <li>
            <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/research" className={({isActive}) => isActive ? 'active' : ''}>
              Research Methods
            </NavLink>
          </li>
          <li>
            <NavLink to="/surveys" className={({isActive}) => isActive ? 'active' : ''}>
              Surveys
            </NavLink>
          </li>
          <li>
            <NavLink to="/interviews" className={({isActive}) => isActive ? 'active' : ''}>
              Interviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={({isActive}) => isActive ? 'active' : ''}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="cta-button">
              Participate
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
