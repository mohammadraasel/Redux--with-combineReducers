import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import Search from "./Search";
import PostsList from "./PostsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Random finder</h2>
        <Search />
        <PostsList />
      </div>
    );
  }
}

export default App;
