import { research_parent, research_child } from "./actions";

const parentInitialState = {
  loading: false,
  data: [],
  dataById: {},
  error: "",
};

export const researchParentReducer = (state = parentInitialState, action) => {
  switch (action.type) {
    case research_parent.request:
      return { ...state, loading: true };
    case research_parent.get:
      return { data: action.payload, loading: false, error: "" };
    case research_parent.error:
      return { data: [], loading: false, error: action.payload };
    case research_parent.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case research_parent.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case research_parent.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case research_parent.delete: {
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

export const researchChildReducer = (state = childInitialState, action) => {
  switch (action.type) {
    case research_child.request:
      return { ...state, loading: true };
    case research_child.get:
      return { data: action.payload, loading: false, error: "" };
    case research_child.error:
      return { data: [], loading: false, error: action.payload };
    case research_child.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case research_child.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case research_child.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case research_child.delete: {
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
