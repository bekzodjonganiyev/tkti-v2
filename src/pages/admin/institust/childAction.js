export const REQUEST_FAKULTET = "REQUEST_FAKULTET";
export const ERROR_FAKULTET = "ERROR_FAKULTET";
export const GET_FAKULTET = "GET_FAKULTET";
export const GET_BY_ID_FAKULTET = "GET_BY_ID_FAKULTET";
export const POST_FAKULTET = "POST_FAKULTET";
export const PUT_FAKULTET = "PUT_FAKULTET";
export const DELETE_FAKULTET = "DELETE_FAKULTET";

import apiClientWithFetch from "../../../services/apiClientWithFetch";

export class ActionFakulet {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_FAKULTET,
      });
      const res = await apiClientWithFetch.get("fak_data/all");
      if (res.status === 200) {
        dispatch({
          type: GET_FAKULTET,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_FAKULTET,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_FAKULTET,
      });
      const res = await apiClientWithFetch.get(`elon/${id}`);
      if (res.status === 200) {
        dispatch({
          type: GET_BY_ID_FAKULTET,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_FAKULTET,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body, isFormData) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_FAKULTET,
      });
      const res = await apiClientWithFetch.add(
        "fak_data/add",
        body, isFormData ? 
        "multipart/form-data" : null
      );
      if (res.status === 200) {
        dispatch({
          type: POST_FAKULTET,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_FAKULTET,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_FAKULTET,
      });
      const res = await apiClientWithFetch.update(
        `elon/${id}`,
        body,
        "multipart/form-data"
      );
      if (res.status === 200) {
        dispatch({
          type: PUT_FAKULTET,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_FAKULTET,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_FAKULTET,
      });
      const res = await apiClientWithFetch.delete(`elon/${id}`);
      if (res.status === 200) {
        dispatch({
          type: DELETE_FAKULTET,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_FAKULTET,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
