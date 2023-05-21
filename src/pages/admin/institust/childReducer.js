import {
    REQUEST_FAKULTET,
    ERROR_FAKULTET,
    POST_FAKULTET,
    PUT_FAKULTET,
    DELETE_FAKULTET,
    GET_BY_ID_FAKULTET,
    GET_FAKULTET,
  } from "./childAction";
  
  const initialState = {
    loading: false,
    data: [],
    dataById: {},
    error: "",
  };
  
  export const fakultetUsReducer = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_FAKULTET:
        return { ...state, loading: true };
      case ERROR_FAKULTET:
        return { data: [], loading: false, error: action.payload };
      case GET_FAKULTET:
        return { data: action.payload, loading: false, error: "" };
      case POST_FAKULTET:
        return {
          data: [action.payload, ...state.data],
          loading: false,
          error: "",
        };
      case GET_BY_ID_FAKULTET:
        return {
          ...state,
          dataById: action.payload,
          loading: false,
          error: ""
        }
      case PUT_FAKULTET: {
        const updatedItem = state.data.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
        return {
          data: updatedItem,
          loading: false,
          error: "",
        };
      }
      case DELETE_FAKULTET: {
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
  