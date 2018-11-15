import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/:keyword"
            render={props => <Home keyword={props.match.params.keyword} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
