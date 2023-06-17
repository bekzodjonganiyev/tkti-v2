import { form2ActionTypes } from "./action";

const form2InitialState = {
  options: [],
  dataById: {},
  loading: false,
  error: false,
  success: false,
  added: false,
  updated: false,
};

export const form2Reducer = (state = form2InitialState, action) => {
  switch (action.type) {
    case form2ActionTypes.loading:
      return { ...state, loading: true };
    case form2ActionTypes.error:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case form2ActionTypes.getOptions:
      return {
        // AntD Select componenti uchun options props ga mos tushadigan qilib qo'yildi
        ...state,
        options: action.payload.map((item) => ({
          value: item._id,
          label: item.title_uz || item.job_uz,
        })),
        success: true,
        loading: false,
        error: false,
      };
    case form2ActionTypes.getDataById:
      return {
        ...state,
        dataById: action.payload,
        success: true,
        loading: false,
        error: false,
      };
    case form2ActionTypes.post:
      return {
        added: true,
        success: true,
        loading: false,
        error: false,
      };
    case form2ActionTypes.put:
      return {
        updated: true,
        success: true,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
