import { authTypes } from "./action";

const initialState = {
  loading: false,
  token: null,
  loggedIn: false,
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.req:
      return { ...state, loading: true };
    case authTypes.err: {
      localStorage.removeItem("token");
      return {
        token: null,
        loggedIn: false,
        loading: false,
        error: action.payload,
      };
    }

    case authTypes.hasUser:
      return { ...state, loggedIn: action.payload, loading: false, error: "" };
    case authTypes.success: {
      localStorage.setItem("token", action.payload?.token);
      return { loggedIn: true, token: action.payload?.token, loading: false, error: "" };
    }
    default:
      return state;
  }
};
