import wretch from "wretch";
import Cookies from "js-cookie";

// Base API setup for making HTTP requests
const api = wretch("http://localhost:8000").accept("application/json");

// cookie methods
const storeToken = (token: string) => {
  Cookies.set("Token", token);
};

const retriveToken = () => {
  return Cookies.get("Token");
};

const removeToken = () => {
  Cookies.remove("Token");
};

// auth methods
const register = (username: string, email: string, password: string) => {
  return api.post(
    { username, email, password },
    "/api/v1/accounts/users/register/"
  );
};

const login = (email: string, password: string) => {
  return api.post({ email, password }, "/api/v1/accounts/users/login/");
};

const logout = (token: string, logout_all: boolean = false) => {
  if (logout_all) {
    return api.post(
      { Authorization: "Token " + token },
      "/api/v1/accounts/users/logout-all/"
    );
  }
  return api.post(
    { Authorization: "Token " + token },
    "/api/v1/accounts/users/logout/"
  );
};

export const AuthActions = () => {
  return {
    storeToken,
    retriveToken,
    removeToken,
    login,
    logout,
    register,
  };
};
