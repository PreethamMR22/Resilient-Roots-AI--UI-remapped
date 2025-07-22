import React, { useState } from 'react';
import Icons from '../../assets';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
          <div className="navbar__logo">
            <img src={Icons.logo.rootsLogo} alt="Resilient Roots Logo" className="navbar__logo-img" />
          </div>
          <span className="navbar__brand-text">
            <span className="full-text">RESILIENT ROOTS</span>
            <span className="short-text">RR</span>
            <span className="gradient-text">AI</span>
          </span>
        </div>
        
        <div className="navbar__nav-container">
          <div className={`navbar__menu ${isOpen ? 'active' : ''}`}>
            <a href="#home" className="navbar__link">Home</a>
            <a href="#features" className="navbar__link">Features</a>
            <a href="#about" className="navbar__link">About</a>
            <a href="#contact" className="navbar__link">Contact</a>
            <img 
              src={Icons.socials.navbarMobileVersion} 
              alt="Mobile menu" 
              className="navbar__mobile-version"
              onClick={() => setIsOpen(!isOpen)}
            />
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
