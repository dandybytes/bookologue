import React, { Component } from "react";
import Header from "../subcomponents/Header";
import Footer from "../subcomponents/Footer";
import LoadingSpinner from "../subcomponents/LoadingSpinner";
import BookInfo from "../subcomponents/BookInfo";
import "./BookDetailsPage.css";

class BookDetailsPage extends Component {
  state = {
    isLoading: true,
    book: null
  };
  fetchData = keyword => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.props.id}`)
      .then(res => res.json())
      .then(res =>
        this.setState({ book: res.items[0].volumeInfo, isLoading: false })
      )
      .catch(e => console.error(e));
  };
  componentWillMount() {
    this.fetchData(this.props.id);
  }
  render() {
    return (
      <main>
        <Header />
        {this.state.isLoading ? (
          <LoadingSpinner />
        ) : (
          <BookInfo book={this.state.book} />
        )}
        <Footer />
      </main>
    );
  }
}

export default BookDetailsPage;
