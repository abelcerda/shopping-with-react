import Item1 from "../../images/item1.jpg";
import Item2 from "../../images/item2.jpg";
import Item3 from "../../images/item3.jpg";
import Item4 from "../../images/item4.jpg";
import Item5 from "../../images/item5.jpg";
import Item6 from "../../images/item6.jpg";
import {
  ADD_TO_CART,
  ADD_QUANTITY,
  SUBSTRACT_QUANTITY,
  REMOVE_ITEM,
  ADD_SHIPPING,
  SUB_SHIPPING,
} from "../actions/cartActions";

const initState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1,
    },
    {
      id: 2,
      title: "Color",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2,
    },
    {
      id: 3,
      title: "Individual",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3,
    },
    {
      id: 4,
      title: "White",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4,
    },
    {
      id: 5,
      title: "Personality",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5,
    },
    {
      id: 6,
      title: "Blues",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6,
    },
  ],
  addedItems: [],
  total: 0,
};

const SHIPPING_COST = 6;

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const addedItem = state.items.find((item) => item.id === action.id);
      const existingItem = state.addedItems.find(
        (item) => item.id === action.id
      );
      if (existingItem) {
        // item is already in the cart
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
        };
      }
      // new item in the cart
      addedItem.quantity = 1;
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: state.total + addedItem.price,
      };
    }
    case ADD_QUANTITY: {
      const itemToAdd = state.items.find((item) => item.id === action.id);
      itemToAdd.quantity++;
      return {
        ...state,
        total: state.total + itemToAdd.price,
      };
    }
    case SUBSTRACT_QUANTITY: {
      const itemToSubstract = state.items.find((item) => item.id === action.id);
      const newTotal = state.total - itemToSubstract.price;
      if (itemToSubstract.quantity === 1) {
        const newItems = state.addedItems.filter(
          (item) => item.id !== action.id
        );
        return {
          ...state,
          addedItems: newItems,
          total: newTotal,
        };
      }
      itemToSubstract.quantity--;
      return {
        ...state,
        total: newTotal,
      };
    }
    case REMOVE_ITEM: {
      const itemToRemove = state.items.find((item) => item.id === action.id);
      const newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      return {
        ...state,
        total: newTotal,
        addedItems: state.addedItems.filter(
          (item) => item.id !== itemToRemove.id
        ),
      };
    }
    case ADD_SHIPPING: {
      return {
        ...state,
        total: state.total + SHIPPING_COST,
      };
    }
    case SUB_SHIPPING: {
      return {
        ...state,
        total: state.total - SHIPPING_COST,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
