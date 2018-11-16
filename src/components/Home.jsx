import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BookCollection from "./BookCollection";

class Home extends Component {
  state = {
    books: [],
    maxResultsFromAPI: 40, // default max results: 10, max allowed: 40
    maxBooksPerPage: 12
  };
  fetchData = keyword => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${
        keyword ? keyword : "web development"
      }${this.state.maxBooksPerPage &&
        "&maxResults=" + this.state.maxBooksPerPage}`
    )
      .then(res => res.json())
      .then(res => this.setState({ books: res.items }))
      .catch(e => console.error(e));
  };
  componentDidMount() {
    this.fetchData(this.props.keyword);
  }
  componentDidUpdate = (prevProps, prevState) =>
    this.props.keyword !== prevProps.keyword &&
    this.fetchData(this.props.keyword);
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
