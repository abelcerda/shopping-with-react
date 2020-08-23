export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const SUBSTRACT_QUANTITY = "SUBSTRACT_QUANTITY";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};

export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};

export const substractQuantity = (id) => {
  return {
    type: SUBSTRACT_QUANTITY,
    id,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};
