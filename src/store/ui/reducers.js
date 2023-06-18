import { WINDOW_RESIZE } from "./actions";

const initialState = {
  isMobile: null,
};

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case WINDOW_RESIZE:
      return {
        ...state,
        isMobile: action.payload,
      };

    default:
      return state;
  }
}

export default uiReducer;
