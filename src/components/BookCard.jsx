import React from "react";

const BookCard = props => {
  return (
    <div className="book-card">
      <img src="https://via.placeholder.com/200" alt="book cover" />
      <h1 className="book-title">Title</h1>
      <h3 className="book-author">Author: Unknown</h3>
      <p className="book-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
        doloribus officiis molestiae ipsam aliquam recusandae rerum natus saepe
        voluptatem veniam, voluptate facilis, velit accusamus?
      </p>
    </div>
  );
};

export default BookCard;
