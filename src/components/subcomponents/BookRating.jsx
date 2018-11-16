import React from "react";
import "./BookRating.css";

const BookRating = ({ rating, numReviews }) => {
  let fullStars = parseInt(rating);
  let halfStars = 0;
  if (rating - fullStars >= 0.75) {
    fullStars++;
  } else if (rating - fullStars > 0.25) {
    halfStars = 1;
  }
  const hollowStars = 5 - fullStars - halfStars;
  const stars = Array(fullStars)
    .fill(1)
    .concat(Array(halfStars).fill(0.5))
    .concat(Array(hollowStars).fill(0));

  return (
    <div className="book-details-rating">
      <div className="book-details-rating-stars">
        {stars.map((x, index) => {
          switch (x) {
            case 1:
              return <i key={index} className="fas fa-star" />; // full star
            case 0.5:
              return <i key={index} className="fas fa-star-half-alt" />; // half star
            case 0:
              return <i key={index} className="far fa-star" />; // hollow star
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default BookRating;
