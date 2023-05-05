import {
  REQUEST_ABOUT_US,
  ERROR_ABOUT_US,
  GET_ABOUT_US,
  POST_ABOUT_US,
  PUT_ABOUT_US,
  DELETE_ABOUT_US,
} from "./actions";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const aboutUsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ABOUT_US:
      return { ...state, loading: true };
    case ERROR_ABOUT_US:
      return { data: [], loading: false, error: action.payload };
    case GET_ABOUT_US:
      return { data: action.payload, loading: false, error: "" };
    case POST_ABOUT_US:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case PUT_ABOUT_US: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload._id : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case DELETE_ABOUT_US: {
      const filteredItem = state.data.filter(
        (item) => item._id !== action.payload
      );
      return {
        data: filteredItem,
        loading: false,
        error: "",
      };
    }
    default:
      return state;
  }
};
