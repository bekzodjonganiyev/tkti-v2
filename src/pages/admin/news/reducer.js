import { newsActionTypes } from "./actions";

const newsInitialState = {
  loading: undefined,
  data: [],
  dataById: {},
  error: undefined,
  success: undefined,
  added: undefined,
  updated: undefined,
};

export const newsReducer = (state = newsInitialState, action) => {
  switch (action.type) {
    case newsActionTypes.loading:
      return { ...state, loading: true };
    case newsActionTypes.get:
      return { data: action.payload, success: true, loading: false, error: "" };
    case newsActionTypes.error:
      return { data: [], success: false, loading: false, error: action.payload };
    case newsActionTypes.getById:
      return { ...state, dataById: action.payload, success: true, loading: false, error: "" };
    case newsActionTypes.post:
      return {
        data: [action.payload, ...state.data],
        success: true,
        added: true,
        loading: false,
        error: "",
      };
    case newsActionTypes.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        success: true,
        updated: true,
        loading: false,
        error: "",
      };
    }
    case newsActionTypes.delete: {
      const filteredItem = state.data.filter(
        (item) => item._id !== action.payload._id
      );
      return {
        data: filteredItem,
        success: true,
        loading: false,
        error: "",
      };
    }
    default:
      return state;
  }
};
