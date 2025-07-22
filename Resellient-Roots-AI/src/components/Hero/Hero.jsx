import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Grow Your Business with AI-Powered Solutions</h1>
          <p className="hero__subtitle">
            Transform your operations with our cutting-edge AI technology designed to streamline processes and boost efficiency.
          </p>
          <div className="hero__cta">
            <button className="hero__button hero__button--primary">Get Started</button>
            <button className="hero__button hero__button--secondary">Learn More</button>
          </div>
        </div>
        <div className="hero__image">
          <div className="hero__image-placeholder">
            {/* Replace with your actual image */}
            <div className="hero__image-content">
              <span>AI Illustration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
