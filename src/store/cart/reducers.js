import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
} from "./actions";

const initialState = {
  cart: [],
};

function cartReducer(state = initialState, action) {
  const newProduct = action.payload;
  let found;
  let filteredCart;

  switch (action.type) {
    case ADD_TO_CART:
      found = state.cart.find((product) => product.id === newProduct.id);
      if (found) {
        found.quantity++;
        return {
          ...state,
          cart: [...state.cart], //necessary to rerender product.quantity component
        };
      } else {
        newProduct.quantity = 1;
        return {
          ...state,
          cart: [...state.cart, newProduct],
        };
      }

    case REMOVE_FROM_CART:
      found = state.cart.find((product) => product.id === newProduct.id);
      filteredCart = state.cart.filter(
        (product) => product.id !== newProduct.id
      );
      if (found.quantity === 1) {
        return {
          ...state,
          cart: filteredCart,
        };
      } else {
        found.quantity--;
        return {
          ...state,
          cart: [...state.cart], //necessary to rerender product.quantity component
        };
      }

    case DELETE_FROM_CART:
      filteredCart = state.cart.filter(
        (product) => product.id !== newProduct.id
      );
      return {
        cart: filteredCart,
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
}

export default cartReducer;
