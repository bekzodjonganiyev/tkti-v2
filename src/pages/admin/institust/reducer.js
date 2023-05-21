import {
    REQUEST_UNIVER,
    ERROR_UNIVER,
    POST_UNIVER,
    PUT_UNIVER,
    DELETE_UNIVER,
    GET_BY_ID_UNIVER,
    GET_UNIVER,
  } from "./actions";
  
  const initialState = {
    loading: false,
    data: [],
    dataById: {},
    error: "",
  };
  
  export const univerUsReducer = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_UNIVER:
        return { ...state, loading: true };
      case ERROR_UNIVER:
        return { data: [], loading: false, error: action.payload };
      case GET_UNIVER:
        return { data: action.payload, loading: false, error: "" };
      case POST_UNIVER:
        return {
          data: [action.payload, ...state.data],
          loading: false,
          error: "",
        };
      case GET_BY_ID_UNIVER:
        return {
          ...state,
          dataById: action.payload,
          loading: false,
          error: ""
        }
      case PUT_UNIVER: {
        const updatedItem = state.data.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
        return {
          data: updatedItem,
          loading: false,
          error: "",
        };
      }
      case DELETE_UNIVER: {
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
  