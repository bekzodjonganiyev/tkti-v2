import {
    REQUEST_ANNOUNCEMENT,
    ERROR_ANNOUNCEMENT,
    GET_ANNOUNCEMENT,
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
     
      case GET_BY_ID_ANNOUNCEMENT:
        return {
          ...state,
          dataById: action.payload,
          loading: false,
          error: ""
        }
      
      default:
        return state;
    }
  };
  