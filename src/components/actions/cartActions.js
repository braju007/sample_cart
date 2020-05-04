import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY
} from "./action-types/cart-actions";

//action: add cart
export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  };
};
//action: remove item
export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};
//action: subtract quantity
export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    id
  };
};
//action: add quantity
export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    id
  };
};
