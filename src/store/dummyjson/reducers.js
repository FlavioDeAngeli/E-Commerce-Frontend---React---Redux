import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./actions";

const initialState = {
  products: [],
  loading: false,
  error: false,
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
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
