import React from "react";

const BookCard = props => {
  console.log(props);
  const title = props.bookInfo.title || "Book Title";
  const authors = props.bookInfo.authors || "author unknown";
  const imageLink =
    props.bookInfo.imageLinks.thumbnail || "https://via.placeholder.com/200";
  const description = props.bookInfo.description || "";

  return (
    <div className="book-card">
      <div className="book-card-image">
        <img src={imageLink} alt="book cover" />
      </div>
      <div className="book-card-title">
        <h1 className="book-title">{title}</h1>
      </div>
      <div className="book-card-author">
        <h3 className="book-author">{authors}</h3>
      </div>
      <div className="book-card-description">
        <p className="book-description">{description.slice(0, 140) + "..."}</p>
      </div>
    </div>
  );
};

export default BookCard;
