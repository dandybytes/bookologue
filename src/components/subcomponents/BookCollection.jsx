import React, { Component } from "react";
import BookCard from "./BookCard";

class BookCollection extends Component {
  state = {
    active: ""
  };
  toggleActiveCard = clickedID => {
    this.setState(prevState =>
      prevState.active === clickedID ? { active: "" } : { active: clickedID }
    );
  };
  render() {
    return (
      <div className="book-collection">
        {this.props.books.map(book => (
          <BookCard
            key={book.id}
            id={book.id}
            active={book.id === this.state.active}
            toggleActive={this.toggleActiveCard}
            bookInfo={book.volumeInfo}
          />
        ))}
      </div>
    );
  }
}

export default BookCollection;
