import { lidership_parent, lidership_child } from "./actions";

const parentInitialState = {
  loading: false,
  data: [],
  dataById: {},
  error: "",
};

export const lidershipParentReducer = (state = parentInitialState, action) => {
  switch (action.type) {
    case lidership_parent.request:
      return { ...state, loading: true };
    case lidership_parent.get:
      return { data: action.payload, loading: false, error: "" };
    case lidership_parent.error:
      return { data: [], loading: false, error: action.payload };
    case lidership_parent.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case lidership_parent.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case lidership_parent.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case lidership_parent.delete: {
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

const childInitialState = {
  loading: false,
  data: [],
  dataById: {},
  error: "",
};

export const lidershipChildReducer = (state = childInitialState, action) => {
  switch (action.type) {
    case lidership_child.request:
      return { ...state, loading: true };
    case lidership_child.get:
      return { data: action.payload, loading: false, error: "" };
    case lidership_child.error:
      return { data: [], loading: false, error: action.payload };
    case lidership_child.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case lidership_child.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case lidership_child.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case lidership_child.delete: {
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
