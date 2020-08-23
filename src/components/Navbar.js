import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">
          Shopping
        </Link>
        <ul className="right">
          <Link to="/">Shop</Link>
          <Link to="/cart">My cart</Link>
          <Link to="/cart">shopping_cart</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
