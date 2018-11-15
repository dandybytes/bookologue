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
      <img src={imageLink} alt="book cover" />
      <h1 className="book-title">{title}</h1>
      <h3 className="book-author">{authors}</h3>
      <p className="book-description">{description}</p>
    </div>
  );
};

export default BookCard;
