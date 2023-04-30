import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./actions";

const initialState = {
  products: [],
  total: 100,
  loading: false,
  error: false,
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    default:
      return state;
  }
}

export default productsReducer;
