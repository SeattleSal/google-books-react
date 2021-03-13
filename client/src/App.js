/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-header">
          <h2>My Google Books</h2>
        </div>
      </div>
    );
  }
}

export default App;
