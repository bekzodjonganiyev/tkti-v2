import { tabCompActionTypes } from "./action";

const initialState = {
    loading: undefined,
    dataById: {},
    error: null,
}
export const tabCompReducer = (state = initialState, action) => {
    switch (action.type) {
        case tabCompActionTypes.loading:
          return { ...state, loading: true };
        case tabCompActionTypes.error:
          return { ...state, loading: false, error: action.payload };
        case tabCompActionTypes.getById:
          return { dataById: action.payload, loading: false, error: "" };
        default:
          return state;
      }
}