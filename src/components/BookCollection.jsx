import React from "react";
import BookCard from "./BookCard";

const BookCollection = ({ books }) => {
  return (
    <div className="book-collection">
      {books.map(book => (
        <BookCard key={book.id} id={book.id} bookInfo={book.volumeInfo} />
      ))}
    </div>
  );
};

export default BookCollection;
