import React, { useState, useEffect } from 'react';
import Icons from '../../assets';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
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
            <a href="#home" className="navbar__link" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
            <a href="#features" className="navbar__link" onClick={(e) => scrollToSection(e, 'features')}>Features</a>
            <a href="#about" className="navbar__link" onClick={(e) => scrollToSection(e, 'about')}>About</a>
            <a href="#contact" className="navbar__link" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
            <img 
              src={Icons.socials.userIcon} 
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
