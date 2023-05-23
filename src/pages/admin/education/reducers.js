import { education_parent, education_child } from "./actions";

const parentInitialState = {
  loading: false,
  data: [],
  dataById: {},
  error: "",
};

export const educationParentReducer = (state = parentInitialState, action) => {
  switch (action.type) {
    case education_parent.request:
      return { ...state, loading: true };
    case education_parent.get:
      return { data: action.payload, loading: false, error: "" };
    case education_parent.error:
      return { data: [], loading: false, error: action.payload };
    case education_parent.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case education_parent.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case education_parent.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case education_parent.delete: {
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

export const educationChildReducer = (state = childInitialState, action) => {
  switch (action.type) {
    case education_child.request:
      return { ...state, loading: true };
    case education_child.get:
      return { data: action.payload, loading: false, error: "" };
    case education_child.error:
      return { data: [], loading: false, error: action.payload };
    case education_child.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case education_child.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case education_child.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case education_child.delete: {
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
