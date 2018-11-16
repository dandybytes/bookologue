import React from "react";
import BookRating from "./BookRating";
import "./BookInfo.css";

const BookInfo = ({
  book: {
    title,
    authors,
    description,
    averageRating,
    ratingsCount,
    imageLinks: { thumbnail }
  }
}) => {
  return (
    <div className="book-details-container">
      <div className="book-details-visual">
        <h1 className="book-details-title">{title ? title : "Book Title"}</h1>
        <h3 className="book-details-author">
          {authors ? authors : "unkown author(s)"}
        </h3>
        {averageRating && ratingsCount ? (
          <BookRating rating={averageRating} numReviews={ratingsCount} />
        ) : null}
        <div className="book-details-image">
          <img
            src={thumbnail ? thumbnail : "https://via.placeholder.com/200"}
            alt="book cover"
          />
        </div>
      </div>
      <div className="book-details-description">
        <h3>Book Description:</h3>
        <p>{description ? description : "no description available"}</p>
      </div>
    </div>
  );
};

export default BookInfo;
