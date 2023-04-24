export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (data) => ({
  type: ADD_TO_CART,
  payload: data,
});

export const RemoveFromCart = (data) => ({
  type: REMOVE_FROM_CART,
  payload: data,
});
