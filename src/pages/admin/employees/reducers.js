import { employees_parent, employees_child } from "./actions";

const parentInitialState = {
  loading: false,
  data: [],
  dataById: {},
  error: "",
};

export const employeesParentReducer = (state = parentInitialState, action) => {
  switch (action.type) {
    case employees_parent.request:
      return { ...state, loading: true };
    case employees_parent.get:
      return { data: action.payload, loading: false, error: "" };
    case employees_parent.error:
      return { data: [], loading: false, error: action.payload };
    case employees_parent.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case employees_parent.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case employees_parent.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case employees_parent.delete: {
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

export const employeesChildReducer = (state = childInitialState, action) => {
  switch (action.type) {
    case employees_child.request:
      return { ...state, loading: true };
    case employees_child.get:
      return { data: action.payload, loading: false, error: "" };
    case employees_child.error:
      return { data: [], loading: false, error: action.payload };
    case employees_child.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case employees_child.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case employees_child.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case employees_child.delete: {
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
