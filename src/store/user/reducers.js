import { LOGIN_USER, LOGOUT_USER } from "./actions";

const initialState = {
  user: {
    token: false,
  },
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      state.user = action.payload;
      return {
        ...state,
      };

    case LOGOUT_USER:
      state = initialState;
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default userReducer;
