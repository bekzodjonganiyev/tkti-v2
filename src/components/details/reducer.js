import {
    REQUEST_DETAILS,
    ERROR_DETAILS,
    GET_DETAILS,
    POST_DETAILS,
    PUT_DETAILS,
    DELETE_DETAILS,
    GET_BY_ID_DETAILS,
  } from "./actions";
  
  const initialState = {
    loading: false,
    data: [],
    dataById: {},
    error: "",
  };
  
  export const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_DETAILS:
        return { ...state, loading: true };
      case ERROR_DETAILS:
        return { data: [], loading: false, error: action.payload };
      case GET_DETAILS:
        return { data: action.payload, loading: false, error: "" };
      case POST_DETAILS:
        return {
          data: [action.payload, ...state.data],
          loading: false,
          error: "",
        };
      case GET_BY_ID_DETAILS:
        return {
          ...state,
          dataById: action.payload,
          loading: false,
          error: ""
        }
      case PUT_DETAILS: {
        const updatedItem = state.data.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
        return {
          data: updatedItem,
          loading: false,
          error: "",
        };
      }
      case DELETE_DETAILS: {
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
  