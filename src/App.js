import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
