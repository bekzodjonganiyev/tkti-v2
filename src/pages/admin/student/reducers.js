import { student_parent, student_child } from "./actions";

const parentInitialState = {
  loading: false,
  data: [],
  dataById: {},
  error: "",
};

export const studentParentReducer = (state = parentInitialState, action) => {
  switch (action.type) {
    case student_parent.request:
      return { ...state, loading: true };
    case student_parent.get:
      return { data: action.payload, loading: false, error: "" };
    case student_parent.error:
      return { data: [], loading: false, error: action.payload };
    case student_parent.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case student_parent.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case student_parent.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case student_parent.delete: {
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

export const studentChildReducer = (state = childInitialState, action) => {
  switch (action.type) {
    case student_child.request:
      return { ...state, loading: true };
    case student_child.get:
      return { data: action.payload, loading: false, error: "" };
    case student_child.error:
      return { data: [], loading: false, error: action.payload };
    case student_child.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case student_child.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case student_child.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case student_child.delete: {
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
