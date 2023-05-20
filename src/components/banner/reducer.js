import {
  REQUEST_BANNER,
  ERROR_BANNER,
  GET_BANNER,
  POST_BANNER,
  PUT_BANNER,
  DELETE_BANNER,
  GET_BY_ID_BANNER,
} from "./actions";

const initialState = {
  loading: false,
  data: [],
  dataById: {},
  error: "",
};

export const bannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BANNER:
      return { ...state, loading: true };
    case ERROR_BANNER:
      return { data: [], loading: false, error: action.payload };
    case GET_BANNER:
      return { data: action.payload, loading: false, error: "" };
    case POST_BANNER:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case GET_BY_ID_BANNER:
      return {
        ...state,
        dataById: action.payload,
        loading: false,
        error: "",
      };
    case PUT_BANNER: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case DELETE_BANNER: {
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
