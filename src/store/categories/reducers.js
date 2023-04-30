import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from "./actions";

const initialState = {
  categories: [],
  loading: false,
  error: false,
};

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    default:
      return state;
  }
}

export default categoriesReducer;
