import { pressclub_parent, pressclub_child } from "./actions";

const parentInitialState = {
  loading: false,
  data: [],
  dataById: {},
  error: "",
};

export const pressclubParentReducer = (state = parentInitialState, action) => {
  switch (action.type) {
    case pressclub_parent.request:
      return { ...state, loading: true };
    case pressclub_parent.get:
      return { data: action.payload, loading: false, error: "" };
    case pressclub_parent.error:
      return { data: [], loading: false, error: action.payload };
    case pressclub_parent.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case pressclub_parent.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case pressclub_parent.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case pressclub_parent.delete: {
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

export const pressclubChildReducer = (state = childInitialState, action) => {
  switch (action.type) {
    case pressclub_child.request:
      return { ...state, loading: true };
    case pressclub_child.get:
      return { data: action.payload, loading: false, error: "" };
    case pressclub_child.error:
      return { data: [], loading: false, error: action.payload };
    case pressclub_child.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case pressclub_child.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case pressclub_child.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case pressclub_child.delete: {
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
