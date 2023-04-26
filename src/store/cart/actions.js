export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

export const AddToCart = (data) => ({
  type: ADD_TO_CART,
  payload: data,
});

export const RemoveFromCart = (data) => ({
  type: REMOVE_FROM_CART,
  payload: data,
});

export const DeleteFromCart = (data) => ({
  type: DELETE_FROM_CART,
  payload: data,
});

export const ClearCart = () => ({
  type: CLEAR_CART,
});
