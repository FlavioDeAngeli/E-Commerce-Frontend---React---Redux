import { LoginUser, LogoutUser } from "../store/user/actions";

export function HandleLogin(user, dispatch) {
  dispatch(LoginUser(user));
}

export function HandleLogout(dispatch) {
  dispatch(LogoutUser());
}
