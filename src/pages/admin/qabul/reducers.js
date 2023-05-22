import { qabul_parent, qabul_child } from "./actions";

const parentInitialState = {
  loading: false,
  data: [],
  dataById: {},
  error: "",
};

export const qabulParentReducer = (state = parentInitialState, action) => {
  switch (action.type) {
    case qabul_parent.request:
      return { ...state, loading: true };
    case qabul_parent.get:
      return { data: action.payload, loading: false, error: "" };
    case qabul_parent.error:
      return { data: [], loading: false, error: action.payload };
    case qabul_parent.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case qabul_parent.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case qabul_parent.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case qabul_parent.delete: {
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

export const qabulChildReducer = (state = childInitialState, action) => {
  switch (action.type) {
    case qabul_child.request:
      return { ...state, loading: true };
    case qabul_child.get:
      return { data: action.payload, loading: false, error: "" };
    case qabul_child.error:
      return { data: [], loading: false, error: action.payload };
    case qabul_child.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case qabul_child.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case qabul_child.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case qabul_child.delete: {
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
