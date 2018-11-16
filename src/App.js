import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookListPage from "./components/pages/BookListPage";
import BookDetailsPage from "./components/pages/BookDetailsPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={BookListPage} />
          <Route
            path="/books/:keyword"
            render={props => (
              <BookListPage keyword={props.match.params.keyword} />
            )}
          />
          <Route
            path="/book/:id"
            render={props => <BookDetailsPage id={props.match.params.id} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
