import {
  REQUEST_UNI_COMP,
  ERROR_UNI_COMP,
  GET_UNI_COMP,
  GET_BY_ID_UNI_COMP,
} from "./action";

const initialState = {
  loading: false,
  data: [],
  dataById: {},
  error: "",
};

export const genericComReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_UNI_COMP:
      return { ...state, loading: true };
    case ERROR_UNI_COMP:
      return { data: [], loading: false, error: action.payload };
    case GET_UNI_COMP:
      return { data: action.payload, loading: false, error: "" };
    case GET_BY_ID_UNI_COMP:
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
