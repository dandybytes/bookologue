import React, { Component } from "react";
import Header from "../subcomponents/Header";
import Footer from "../subcomponents/Footer";
import BookCollection from "../subcomponents/BookCollection";
import LoadingSpinner from "../subcomponents/LoadingSpinner";

class BookListPage extends Component {
  state = {
    isLoading: true,
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
      .then(res => this.setState({ books: res.items, isLoading: false }))
      .catch(e => console.error(e));
  };
  componentWillMount() {
    this.fetchData(this.props.keyword);
  }
  componentDidUpdate = (prevProps, prevState) =>
    this.props.keyword !== prevProps.keyword &&
    this.fetchData(this.props.keyword);
  render() {
    return (
      <main>
        <Header />
        {this.state.isLoading ? (
          <LoadingSpinner />
        ) : (
          <BookCollection books={this.state.books} />
        )}
        <Footer />
      </main>
    );
  }
}

export default BookListPage;
