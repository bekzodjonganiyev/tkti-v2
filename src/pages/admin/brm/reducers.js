import { brm_child, brm_parent } from "./actions";

const parentInitialState = {
  loading: false,
  data: [],
  dataById: {},
  error: "",
};

export const brmParentReducer = (state = parentInitialState, action) => {
  switch (action.type) {
    case brm_parent.request:
      return { ...state, loading: true };
    case brm_parent.get:
      return { data: action.payload, loading: false, error: "" };
    case brm_parent.error:
      return { data: [], loading: false, error: action.payload };
    case brm_parent.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case brm_parent.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case brm_parent.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case brm_parent.delete: {
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

export const brmChildReducer = (state = childInitialState, action) => {
  switch (action.type) {
    case brm_child.request:
      return { ...state, loading: true };
    case brm_child.get:
      return { data: action.payload, loading: false, error: "" };
    case brm_child.error:
      return { data: [], loading: false, error: action.payload };
    case brm_child.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case brm_child.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case brm_child.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case brm_child.delete: {
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
