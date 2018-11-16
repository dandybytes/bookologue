import React from "react";

const BookCard = props => {
  const title = props.bookInfo.title || "Book Title";
  const authors = props.bookInfo.authors || "author unknown";
  const imageLink =
    props.bookInfo.imageLinks.thumbnail || "https://via.placeholder.com/200";
  let description = "";
  if (!props.bookInfo.description) {
    description = "...";
  } else if (props.bookInfo.description.length > 140) {
    const buffer = props.bookInfo.description.split(" ");
    while (description.length + buffer[0].length < 140) {
      description += buffer.shift() + " ";
    }
    description += "...";
  }
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
        <p className="book-description">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;
