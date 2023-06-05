import { SET_CLOSE_HEADER, SET_OPEN_HEADER } from "./action";

const initialState = {
  open: false,
};

export const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN_HEADER:
      return { open: true };
    case SET_CLOSE_HEADER:
      return { open: false };
    default:
      return state;
  }
};
