import React, { Component } from "react";

class BookCard extends Component {
  state = {
    id: "",
    title: "",
    authors: "",
    imageLink: "",
    description: "",
    opacity: 1
  };
  toggleOpacity = id => {
    this.setState(prevState =>
      prevState.opacity === 1 ? { opacity: 0.5 } : { opacity: 1 }
    );
  };
  componentWillMount() {
    const id = this.props.id || +new Date();
    const title = this.props.bookInfo.title || "Book Title";
    const authors = this.props.bookInfo.authors || "author unknown";
    const imageLink =
      this.props.bookInfo.imageLinks.thumbnail ||
      "https://via.placeholder.com/200";
    let description = "";
    if (!this.props.bookInfo.description) {
      description = "...";
    } else if (this.props.bookInfo.description.length > 140) {
      const buffer = this.props.bookInfo.description.split(" ");
      while (description.length + buffer[0].length < 140) {
        description += buffer.shift() + " ";
      }
      description += "...";
    }
    this.setState({ id, title, authors, imageLink, description });
  }
  render() {
    const { id, title, authors, description, imageLink } = this.state;
    return (
      <div
        className="book-card-wrapper"
        style={{ opacity: this.state.opacity }}
        onClick={() => this.toggleOpacity(this.state.id)}
      >
        <div className="book-card-overlay" />
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
      </div>
    );
  }
}

export default BookCard;
