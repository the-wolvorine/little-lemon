import React from 'react';
import PropTypes from 'prop-types';
import '../styles/customerReviewCard.css';

const StarRating = ({ rating }) => {
  const starArray = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="star-rating">
      {starArray.map((star) => (
        <span key={star} className={star <= rating ? 'star-filled' : 'star-outline'}>
          &#9733; {/* Unicode character for a star */}
        </span>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

const CustomerReviewCard = ({ rating, imageSrc, name, reviewText }) => {
  return (
    <div className="customer-review-card">
      <StarRating rating={rating} />
      <img src={imageSrc} alt={`Avatar of ${name}`} className="avatar" />
      <div className="name">{name}</div>
      <div className="review-text">{reviewText}</div>
    </div>
  );
};

CustomerReviewCard.propTypes = {
  rating: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired,
};

export default CustomerReviewCard;
