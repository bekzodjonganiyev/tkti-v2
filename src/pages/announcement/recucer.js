import {
    REQUEST_ANNOUNCEMENT,
    ERROR_ANNOUNCEMENT,
    GET_ANNOUNCEMENT,
    POST_ANNOUNCEMENT,
    PUT_ANNOUNCEMENT,
    DELETE_ANNOUNCEMENT,
    GET_BY_ID_ANNOUNCEMENT,
  } from "./actions";
  
  const initialState = {
    loading: false,
    data: [],
    dataById: {},
    error: "",
  };
  
  export const announcementReducer = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_ANNOUNCEMENT:
        return { ...state, loading: true };
      case ERROR_ANNOUNCEMENT:
        return { data: [], loading: false, error: action.payload };
      case GET_ANNOUNCEMENT:
        return { data: action.payload, loading: false, error: "" };
      case POST_ANNOUNCEMENT:
        return {
          data: [action.payload, ...state.data],
          loading: false,
          error: "",
        };
      case GET_BY_ID_ANNOUNCEMENT:
        return {
          ...state,
          dataById: action.payload,
          loading: false,
          error: ""
        }
      case PUT_ANNOUNCEMENT: {
        const updatedItem = state.data.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
        return {
          data: updatedItem,
          loading: false,
          error: "",
        };
      }
      case DELETE_ANNOUNCEMENT: {
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
  