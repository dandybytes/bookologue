import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BookCollection from "./BookCollection";

class Home extends Component {
  state = {
    books: [1, 2, 3, 4, 5, 6, 7]
  };
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
