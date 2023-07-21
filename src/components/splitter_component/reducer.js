import {
  REQUEST_SPLITTER_COMP,
  ERROR_SPLITTER_COMP,
  GET_SPLITTER_COMP,
  GET_BY_ID_SPLITTER_COMP,
} from "./action";

const initialState = {
  loading: false,
  data: [],
  dataById: {},
  error: "",
};

export const splitterCompReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SPLITTER_COMP:
      return { ...state, loading: true };
    case ERROR_SPLITTER_COMP:
      return { data: [], loading: false, error: action.payload };
    case GET_SPLITTER_COMP:
      return { data: action.payload, loading: false, error: "" };
    case GET_BY_ID_SPLITTER_COMP:
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
