import { media_types } from "./action";

const parentInitialState = {
  loading: false,
  data: [],
  dataById: {},
  error: "",
};

export const mediaReducer = (state = parentInitialState, action) => {
  switch (action.type) {
    case media_types.request:
      return { ...state, loading: true };
    case media_types.get:
      return { data: action.payload, loading: false, error: "" };
    case media_types.error:
      return { data: [], loading: false, error: action.payload };
    case media_types.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case media_types.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case media_types.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case media_types.delete: {
      const filteredItem = state.data.filter(
        (item) => item._id !== action.payload._id
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
