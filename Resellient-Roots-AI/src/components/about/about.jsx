import React from 'react';
import './about.css';

const About = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <div className="about-left">
          <div className="photo-div">
            <img 
              src="/src/assets/aboutLeaf/aboutLeaf.jpg" 
              alt="About Leaf" 
              className="about-image"
            />
          </div>
        </div>
        <div className="about-right">
          <h2 className="about-title">About this Website</h2>
          <p className="about-description">
            Our website offers an innovative solution for farmers, gardeners, and plant enthusiasts by leveraging AI to detect leaf diseases through scanning. Users simply upload an image of a plant's leaf, and the AI analyzes it to identify any potential diseases.
          </p>
          <div 
            className="about-arrow"
            onClick={scrollToFeatures}
            style={{ cursor: 'pointer' }}
          >
            <span className="explore-text">Explore More</span>
            <img 
              src="/src/assets/aboutLeaf/aboutArrow.svg" 
              alt="Scroll down" 
              className="arrow-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;