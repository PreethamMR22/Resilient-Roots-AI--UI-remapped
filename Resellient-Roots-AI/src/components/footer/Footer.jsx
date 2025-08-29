import React from 'react';
import Icons from '../../assets';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__container">
        {/* Left Section - Logo and Emails */}
        <div className="footer__left">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={Icons.logo.rootsLogo} alt="Resilient Roots Logo" className="footer__logo-img" />
            </div>
            <span className="footer__brand-text">
              <span className="full-text">RESILIENT ROOTS</span>
              <span className="short-text">RR</span>
              <span className="gradient-text">AI</span>
            </span>
          </div>
          <h2 className="footer__contact-heading">Contact Us</h2>
          <div className="footer__emails">
            <a href="mailto:contact@resilientroots.ai" className="footer__email">contact@resilientroots.ai</a>
            <a href="mailto:support@resilientroots.ai" className="footer__email">support@resilientroots.ai</a>
            <a href="mailto:info@resilientroots.ai" className="footer__email">info@resilientroots.ai</a>
            <a href="mailto:hello@resilientroots.ai" className="footer__email">hello@resilientroots.ai</a>
          </div>
        </div>

        {/* Center Section - Code Warriors */}
        <div className="footer__center">
          <div className="footer__code-warriors">Code Warriors</div>
        </div>

        {/* Right Section - Phone Numbers */}
        <div className="footer__right">
          <h2 className="footer__contact-heading">Contact Us</h2>
          <div className="footer__phones">
            <a href="tel:+1234567890" className="footer__phone">+1 (234) 567-890</a>
            <a href="tel:+1987654321" className="footer__phone">+1 (987) 654-321</a>
            <a href="tel:+1123456789" className="footer__phone">+1 (123) 456-789</a>
            <a href="tel:+1555555555" className="footer__phone">+1 (555) 555-555</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
