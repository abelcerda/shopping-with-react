import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css";
import {
  removeItem,
  addQuantity,
  substractQuantity,
} from "./actions/cartActions";
import Recipe from "./Recipe";

const Cart = (props) => {
  const handleRemove = (id) => props.removeItem(id);
  const handleAddQuantity = (id) => props.addQuantity(id);
  const handleSubstractQuantity = (id) => props.substractQuantity(id);

  const addedItems =
    props.items && props.items.length ? (
      props.items.map((item) => (
        <li className="collection-item avatar" key={item.id}>
          <div className="item-img">
            <img src={item.img} alt={item.img} className="" height="250" />
          </div>
          <div className="item-desc">
            <span className="title">{item.title}</span>
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
            <p>
              <b>Quantity: {item.quantity}</b>
            </p>
            <div className="add-remove">
              <Link to="/cart" onClick={() => handleAddQuantity(item.id)}>
                <i className="material-icons">arrow_drop_up</i>
              </Link>
              <Link to="/cart" onClick={() => handleSubstractQuantity(item.id)}>
                <i className="material-icons">arrow_drop_down</i>
              </Link>
            </div>
            <button
              className="waves-effect waves-light btn pink remove"
              type="button"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        </li>
      ))
    ) : (
      <p>Nothing.</p>
    );

  return (
    <div className="container">
      <div className="cart">
        <h5>You have ordered:</h5>
        <ul className="collection">{addedItems}</ul>
      </div>
      <Recipe />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => dispatch(removeItem(id)),
    addQuantity: (id) => dispatch(addQuantity(id)),
    substractQuantity: (id) => dispatch(substractQuantity(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
