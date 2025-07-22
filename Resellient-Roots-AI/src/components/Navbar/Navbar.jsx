import React, { useState } from 'react';
import { Icons } from '../../assets';
const { logo: { rootsLogo } } = Icons;
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
          <div className="navbar__logo">
            <img src={rootsLogo} alt="Resilient Roots Logo" className="navbar__logo-img" />
          </div>
          <span className="navbar__brand-text">RESILIENT ROOTS AI</span>
        </div>
        
        <div className="navbar__nav-container">
          <div className={`navbar__menu ${isOpen ? 'active' : ''}`}>
            <a href="#home" className="navbar__link">Home</a>
            <a href="#features" className="navbar__link">Features</a>
            <a href="#about" className="navbar__link">About</a>
            <a href="#contact" className="navbar__link">Contact</a>
          </div>

          <div className="navbar__cta">
            <button className="navbar__button">Get Started</button>
          </div>

          <div 
            className="navbar__hamburger" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
