import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

const initialState = {
  cart: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const newProduct = action.payload;
      const found = state.cart.find((product) => product.id === newProduct.id);
      if (found) {
        found.quantity++;
        return {
          ...state,
        };
      } else {
        newProduct.quantity = 1;
        return {
          ...state,
          cart: [...state.cart, newProduct],
        };
      }

    case REMOVE_FROM_CART:
      const filteredCart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      return {
        ...state,
        cart: filteredCart,
      };
    default:
      return state;
  }
}

export default cartReducer;
