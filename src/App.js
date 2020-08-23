import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
