export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const LoginUser = (data) => ({
  type: LOGIN_USER,
  payload: data,
});

export const LogoutUser = () => ({
  type: LOGOUT_USER,
});
