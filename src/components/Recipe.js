import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { addShipping, substractShipping } from "./actions/cartActions";
import "./Recipe.css";

const Recipe = (props) => {
  const checkboxRef = useRef(null);
  useEffect(() => {
    return () => {
      if (checkboxRef.current.checked) {
        substractShipping();
      }
    };
  }, []);

  const handleChecked = (e) =>
    e.target.checked ? props.addShipping() : props.substractShipping();

  return (
    <div>
      <div className="collection">
        <li className="collenction-item">
          <label>
            <input type="checkbox" ref={checkboxRef} onChange={handleChecked} />
            <span>Shipping(+6$)</span>
          </label>
        </li>
        <li className="collection-item">
          <b>Total: {props.total}$</b>
        </li>
      </div>
      <div className="checkout">
        <button className="waves-effect waves-light btn">Checkout</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ total: state.total });

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => dispatch(addShipping()),
    substractShipping: () => dispatch(substractShipping()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
