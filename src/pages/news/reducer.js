import {
    REQUEST_NEWS,
    ERROR_NEWS,
    GET_NEWS,
    GET_BY_ID_NEWS,
    SET_OPEN_NAVBAR,
  } from "./actions";
  
  const initialState = {
    loading: false,
    data: {},
    dataById: {},
    error: "",
    open: false

  };
  
  export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_NEWS:
        return { ...state, loading: true };
      case ERROR_NEWS:
        return { data: [], loading: false, error: action.payload };
      case GET_NEWS:
        return { data: action.payload, loading: false, error: "" };
     
      case GET_BY_ID_NEWS:
        return {
          ...state,
          dataById: action.payload,
          loading: false,
          error: ""
        }
    
      case SET_OPEN_NAVBAR: {
        return {
          ...state,
          open: action.payload
        };
      }
      default:
        return state;
    }
  };
  