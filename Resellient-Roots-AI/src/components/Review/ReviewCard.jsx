import React from 'react';
import './ReviewCard.css';

// Styles
const styles = {
  reviewerName: {
    color: '#2D352A',
    textAlign: 'right',
    fontFamily: '"Clash Display"',
    fontSize: '19.118px',
    fontWeight: 500,
    lineHeight: 'normal',
    margin: 0
  },
  reviewerEmail: {
    color: '#2D352A',
    fontFamily: '"Clash Display"',
    fontSize: '9.732px',
    fontWeight: 300,
    lineHeight: 'normal',
    margin: 0
  },
  reviewCardTitle: {
    color: '#2D352A',
    fontFamily: '"Clash Display"',
    fontSize: '19.118px',
    fontWeight: 500,
    lineHeight: 'normal',
    margin: '10px 0 5px 0'
  },
  reviewCardContent: {
    color: '#2D352A',
    fontFamily: '"Clash Display"',
    fontSize: '12.745px',
    fontWeight: 400,
    lineHeight: 'normal',
    margin: 0
  },
  ratingNumber: {
    color: '#2D352A',
    fontFamily: '"Clash Display"',
    fontSize: '12.745px',
    fontWeight: 600,
    lineHeight: 'normal',
    marginLeft: '8px'
  }
};

// Import user photos
import biligiriRanga from '../../assets/review/biligiri ranga.svg';
import kariBasapp from '../../assets/review/kari-basapp.svg';
import puttSomanna from '../../assets/review/puttSomanna.svg';

// Map user emails to their respective photos
const userPhotos = {
  'john@example.com': biligiriRanga,
  'jane@example.com': kariBasapp,
  'robert@example.com': puttSomanna
};

const ReviewCard = ({ name, email, title, content, rating, photo }) => {
  return (
    <div className="review-card">
      <div className="reviewer-info">
        <div className="reviewer-photo">
          {photo ? (
            <img 
              src={photo} 
              alt={name} 
              className="reviewer-photo"
            />
          ) : (
            <div className="reviewer-photo-placeholder">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="reviewer-details">
          <div className="reviewer-name" style={styles.reviewerName}>{name}</div>
          <div className="reviewer-email" style={styles.reviewerEmail}>{email}</div>
        </div>
      </div>
   
      <div className="review-card-content-wrapper">
        <h4 className="review-card-title" style={styles.reviewCardTitle}>{title}</h4>
        <p className="review-card-text" style={styles.reviewCardContent}>{content}</p>
      </div>

      <div className="review-rating">
        {[...Array(5)].map((_, i) => (
          <img 
            key={i} 
            src={i < rating ? "/src/assets/socials/Star-yellow.svg" : "/src/assets/socials/star.svg"} 
            alt="star"
            className="star-icon"
          />
        ))}
        <span className="rating-number" style={styles.ratingNumber}>{rating}.0</span>
      </div>
    </div>
  );
};

export default ReviewCard;
