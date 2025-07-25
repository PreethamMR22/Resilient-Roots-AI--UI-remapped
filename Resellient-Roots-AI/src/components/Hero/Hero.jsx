import React from 'react';
import './Hero.css';
import Icons from '../../assets';

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
          <button className="hero__explore-btn">
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
    </section>
  );
};

export default Hero;
