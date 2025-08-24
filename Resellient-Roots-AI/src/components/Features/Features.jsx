import React from 'react';
import './features.css';
import diseaseDetectionImg from '../../assets/features/disease-detection.png';
import accessReportsImg from '../../assets/features/access-reports.png';
import fertilizerImg from '../../assets/features/fertilizer-reccomendation.png';

const featuresData = [
  {
    id: 1,
    image: diseaseDetectionImg,
    title: 'Leaf Disease Detection',
    description: 'Deep Learning model is employed to detect the disease.'
  },
  {
    id: 2,
    image: accessReportsImg,
    title: 'Access Reports from Cloud',
    description: 'Get efficient and lab-quality reports within minutes.'
  },
  {
    id: 3,
    image: fertilizerImg,
    title: 'Fertilizer Recommendation',
    description: 'Get fertilizer recommendations using an AI model.'
  }
];

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-content">
        <h1 className="features-title">Disease Prediction</h1>
        <p className="features-subtitle">Prediction The Disease pleaseeeeee.....</p>
        
        <div className="features-boxes">
          {featuresData.map((feature) => (
            <div className="feature-box" key={feature.id}>
              <div className="feature-image-container">
                <div 
                  className="feature-image" 
                  style={{ backgroundImage: `url(${feature.image})` }}
                ></div>
              </div>
              <h3 className="feature-box-title">{feature.title}</h3>
              <p className="feature-box-subtitle">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
