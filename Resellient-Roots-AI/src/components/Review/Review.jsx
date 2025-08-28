import React from 'react';
import './Review.css';
import ReviewCard from './reviewCard';

// Import photos
import rangappaPhoto from '../../assets/review/biligiri ranga.svg';
import kariBasappPhoto from '../../assets/review/kari-basapp.svg';
import puttSomannaPhoto from '../../assets/review/puttSomanna.svg';
const Review = () => {
  return (
    <section className="review">
      <div className="review-content">
        <div className="review-left">
          <h1 className="review-title">Customer Reviews & Satisfaction</h1>
          <p className="review-subtitle">
            We strive to provide the best service through Disease Prediction, Report Generation, and Fertilizer Recommendation... 
            Drop your suggestions here!
          </p>
          <button className="review-button">Write a Review</button>
        </div>
        <div className="review-right">
          <div className="review-card-stack">
            <div className="review-card-container card-1">
            <ReviewCard 
                name="Putt Somanna" 
                email="puttsomanna@example.com" 
                rating={5} 
                title="Excellent Support"
                content="The disease prediction model is quite accurate. It helped me identify an issue early and save my crops. Highly recommended for all farmers!"
                photo={puttSomannaPhoto}
              />
             
            </div>
            <div className="review-card-container card-2">
              <ReviewCard 
                name="Kari Basapp" 
                email="karibasapp@example.com" 
                rating={4} 
                title="Very Helpful"
                content="The fertilizer recommendations have significantly improved my crop yield. The report generation feature is very detailed and easy to understand."
                photo={kariBasappPhoto}
              />
            </div>
            <div className="review-card-container card-3">
            <ReviewCard 
                name="Rangappa" 
                email="rangappa@example.com" 
                rating={5} 
                title="Great Service!"
                content="Leaf spot diseases are caused by fungi and bacteria that affect the leaves of plants. These diseases can weaken plants by interrupting photosynthesis."
                photo={rangappaPhoto}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
