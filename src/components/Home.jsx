import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BookCollection from "./BookCollection";

class Home extends Component {
  state = {
    books: [],
    keyword: "computer science",
    maxResultsFromAPI: 40, // default max results: 10, max allowed: 40
    maxBooksPerPage: 12
  };
  componentDidMount() {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.keyword}${this
        .state.maxBooksPerPage && "&maxResults=" + this.state.maxBooksPerPage}`
    )
      .then(res => res.json())
      .then(res => this.setState({ books: res.items }))
      .catch(e => console.error(e));
  }
  render() {
    return (
      <div className="home">
        <Header />
        <BookCollection books={this.state.books} />
        <Footer />
      </div>
    );
  }
}

export default Home;
