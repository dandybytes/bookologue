import React from "react";
import BookCard from "./BookCard";

const BookCollection = props => {
  return (
    <div className="book-collection">
      {props.books.map(book => (
        <BookCard />
      ))}
    </div>
  );
};

export default BookCollection;
