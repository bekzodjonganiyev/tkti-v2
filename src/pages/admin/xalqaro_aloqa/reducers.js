import { xalqaro_parent, xalqaro_child } from "./actions";

const parentInitialState = {
  loading: false,
  data: [],
  dataById: {},
  error: "",
};

export const xalqaroParentReducer = (state = parentInitialState, action) => {
  switch (action.type) {
    case xalqaro_parent.request:
      return { ...state, loading: true };
    case xalqaro_parent.get:
      return { data: action.payload, loading: false, error: "" };
    case xalqaro_parent.error:
      return { data: [], loading: false, error: action.payload };
    case xalqaro_parent.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case xalqaro_parent.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case xalqaro_parent.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case xalqaro_parent.delete: {
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

export const xalqaroChildReducer = (state = childInitialState, action) => {
  switch (action.type) {
    case xalqaro_child.request:
      return { ...state, loading: true };
    case xalqaro_child.get:
      return { data: action.payload, loading: false, error: "" };
    case xalqaro_child.error:
      return { data: [], loading: false, error: action.payload };
    case xalqaro_child.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case xalqaro_child.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case xalqaro_child.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case xalqaro_child.delete: {
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
