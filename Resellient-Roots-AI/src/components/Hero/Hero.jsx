import React from 'react';
import './Hero.css';
import Icons from '../../assets';
import leafImage from '../../assets/picture/leaf-hero.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <h1 className="hero__title">
          Predict the disease and find the cure!
        </h1>
        <p className="hero__description">
          Leaf Disease detection using Deep Learning Model, find the efficient fertilizer to cure your disease.
        </p>
        <div className="hero__cta">
          <button 
            className="hero__explore-btn"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="hero__explore-text">Explore More</span>
            <div className="hero__circle">
              <img 
                src={Icons.socials.arrowUpRight} 
                alt="" 
                className="hero__arrow"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="hero__right-panels">
        <div className="hero__right-panel-background"></div>
        <div className="hero__right-panel">
          <img 
            src={Icons.socials.star} 
            alt="Star" 
            className="hero__star-icon" 
          />
          <div 
            className="hero__panel-image" 
            style={{
              backgroundImage: `url(${leafImage})`
            }}
          ></div>
          <div className="hero__panel-text-container">
            <h3 className="hero__panel-heading">
              <img 
                src={Icons.socials.search} 
                alt="Search" 
                className="hero__search-icon" 
              />
              <span className="hero__panel-heading-text">Leaf spot diseases</span>
            </h3>
            <p className="hero__panel-description">
              Leaf spot diseases are caused by fungi and bacteria that affect the leaves of plants. These diseases can weaken plants by interrupting photosynthesis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
