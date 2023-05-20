import {
    REQUEST_VIDEONEWS,
    ERROR_VIDEONEWS,
    GET_VIDEONEWS,
    POST_VIDEONEWS,
    PUT_VIDEONEWS,
    DELETE_VIDEONEWS,
    GET_BY_ID_VIDEONEWS,
  } from "./actions";
  
  const initialState = {
    loading: false,
    data: [],
    dataById: {},
    error: "",
  };
  
  export const videoNewsReducer = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_VIDEONEWS:
        return { ...state, loading: true };
      case ERROR_VIDEONEWS:
        return { data: [], loading: false, error: action.payload };
      case GET_VIDEONEWS:
        return { data: action.payload, loading: false, error: "" };
      case POST_VIDEONEWS:
        return {
          data: [action.payload, ...state.data],
          loading: false,
          error: "",
        };
      case GET_BY_ID_VIDEONEWS:
        return {
          ...state,
          dataById: action.payload,
          loading: false,
          error: ""
        }
      case PUT_VIDEONEWS: {
        const updatedItem = state.data.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
        return {
          data: updatedItem,
          loading: false,
          error: "",
        };
      }
      case DELETE_VIDEONEWS: {
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
  