import {
  REQUEST_BANNER,
  ERROR_BANNER,
  GET_BANNER,
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
   
    case GET_BY_ID_BANNER:
      return {
        ...state,
        dataById: action.payload,
        loading: false,
        error: "",
      };
    
    default:
      return state;
  }
};
