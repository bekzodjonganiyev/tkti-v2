import { faoliyat_parent, faoliyat_child } from "./actions";

const parentInitialState = {
  loading: false,
  data: [],
  dataById: {},
  error: "",
};

export const faoliyatParentReducer = (state = parentInitialState, action) => {
  switch (action.type) {
    case faoliyat_parent.request:
      return { ...state, loading: true };
    case faoliyat_parent.get:
      return { data: action.payload, loading: false, error: "" };
    case faoliyat_parent.error:
      return { data: [], loading: false, error: action.payload };
    case faoliyat_parent.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case faoliyat_parent.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case faoliyat_parent.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case faoliyat_parent.delete: {
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

export const faoliyatChildReducer = (state = childInitialState, action) => {
  switch (action.type) {
    case faoliyat_child.request:
      return { ...state, loading: true };
    case faoliyat_child.get:
      return { data: action.payload, loading: false, error: "" };
    case faoliyat_child.error:
      return { data: [], loading: false, error: action.payload };
    case faoliyat_child.getById:
      return { ...state, dataById: action.payload, loading: false, error: "" };
    case faoliyat_child.post:
      return {
        data: [action.payload, ...state.data],
        loading: false,
        error: "",
      };
    case faoliyat_child.put: {
      const updatedItem = state.data.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        data: updatedItem,
        loading: false,
        error: "",
      };
    }
    case faoliyat_child.delete: {
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
