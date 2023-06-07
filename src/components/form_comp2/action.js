export const form2ActionTypes = {
  loading: "FORM2_LOADING",
  success: "FORM2_SUCCESS",
  error: "FORM2_ERROR",
  getOptions: "FORM2_GET_OPTIONS",
  getDataById: "FORM2_GET_SINGLE_DATA",
  post: "FORM2_POST",
  put: "FORM2_PUT",
};

import apiClientWithFetch from "../../services/apiClientWithFetch";

export class From2Actions {
  getOptions(url) {
    return async (dispatch) => {
      dispatch({
        type: form2ActionTypes.loading,
      });

      const res = await apiClientWithFetch.get(url);
      if (res.status === 200) {
        dispatch({
          type: form2ActionTypes.success,
        });
        dispatch({
          type: form2ActionTypes.getOptions,
          payload: res.data,
        });
      } else {
        dispatch({
          type: form2ActionTypes.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(url) {
    return async (dispatch) => {
      dispatch({
        type: form2ActionTypes.loading,
      });
      const res = await apiClientWithFetch.get(url);
      if (res.status === 200) {
        dispatch({
          type: form2ActionTypes.getDataById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: form2ActionTypes.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(url, body) {
    return async (dispatch) => {
      dispatch({
        type: form2ActionTypes.loading,
      });
      const res = await apiClientWithFetch.add(url, body);
      if (res.status === 200) {
        dispatch({
          type: form2ActionTypes.post,
          payload: res.data,
        });
      } else {
        dispatch({
          type: form2ActionTypes.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  putData(url, body) {
    return async (dispatch) => {
      dispatch({
        type: form2ActionTypes.loading,
      });

      const res = await apiClientWithFetch.update(url, body);
      if (res.status === 200) {
        dispatch({
          type: form2ActionTypes.success,
        });
        dispatch({
          type: form2ActionTypes.put,
          payload: res.data,
        });
      } else {
        dispatch({
          type: form2ActionTypes.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
