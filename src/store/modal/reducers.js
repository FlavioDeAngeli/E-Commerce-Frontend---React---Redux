import { SET_MODAL_PRODUCT } from "./actions";

const initialState = {
  modalProduct: {},
};

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL_PRODUCT:
      return {
        ...state,
        modalProduct: action.payload,
      };
    default:
      return state;
  }
}

export default modalReducer;
