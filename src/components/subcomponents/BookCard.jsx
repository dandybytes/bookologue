import React, { Component } from "react";
import CardOverlay from "./CardOverlay";

class BookCard extends Component {
  state = {
    id: "",
    title: "",
    authors: "",
    imageLink: "",
    description: ""
  };
  handleClick = () => {
    this.props.toggleActive(this.state.id);
  };
  componentWillMount() {
    const id = this.props.id || +new Date();
    const clicked = this.props.clicked;
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
    this.setState({ id, clicked, title, authors, imageLink, description });
  }
  render() {
    const { id, title, authors, description, imageLink } = this.state;
    return (
      <div className="book-card-wrapper" onClick={this.handleClick}>
        {this.props.active && <CardOverlay id={id} />}
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
