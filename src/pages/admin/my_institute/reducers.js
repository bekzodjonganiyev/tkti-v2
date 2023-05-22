import { my_institute_parent, my_institute_child } from "./actions";

const parentInitialState = {
  loading: false,
  data: [],
  dataById: {},
  error: "",
};

export const MyInstituteParentReducer = (state = parentInitialState, action) => {
  switch (action.type) {
    case my_institute_parent.request:
      return { ...state, loading: true };
    case my_institute_parent.get:
      return { data: action.payload, loading: false, error: "" };
    case my_institute_parent.error:
      return { data: [], loading: false, error: action.payload };
    case my_institute_parent.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case my_institute_parent.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case my_institute_parent.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case my_institute_parent.delete: {
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

export const MyInstituteChildReducer = (state = childInitialState, action) => {
  switch (action.type) {
    case my_institute_child.request:
      return { ...state, loading: true };
    case my_institute_child.get:
      return { data: action.payload, loading: false, error: "" };
    case my_institute_child.error:
      return { data: [], loading: false, error: action.payload };
    case my_institute_child.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case my_institute_child.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case my_institute_child.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case my_institute_child.delete: {
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
