import React, { useState, useEffect } from 'react';
import './ReviewModal.css';

const ReviewModal = ({ isOpen, onClose, onSubmit }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim() && rating > 0) {
      onSubmit({ review, rating });
      setIsSubmitted(true);
      // Reset form after 2 seconds
      setTimeout(() => {
        setReview('');
        setRating(0);
        setIsSubmitted(false);
        onClose();
      }, 2000);
    }
  };

  // Close modal when clicking outside the modal content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        
        {!isSubmitted ? (
          <>
            <h2>Write a Review</h2>
            <form onSubmit={handleSubmit}>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= rating ? 'selected' : ''}`}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </span>
                ))}
                <span className="rating-text">
                  {rating > 0 ? `You rated this ${rating} star${rating > 1 ? 's' : ''}` : 'Rate your experience'}
                </span>
              </div>
              <div className="form-group">
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Share your experience with us..."
                  rows="4"
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Submit Review
              </button>
            </form>
          </>
        ) : (
          <div className="thank-you-message">
            <h2>Thank You!</h2>
            <p>Your feedback has been submitted successfully.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewModal;
