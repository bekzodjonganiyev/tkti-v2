export const REQUEST_UNIVER = "REQUEST_UNIVER";
export const ERROR_UNIVER = "ERROR_UNIVER";
export const GET_UNIVER = "GET_UNIVER";
export const GET_BY_ID_UNIVER = "GET_BY_ID_UNIVER";
export const POST_UNIVER = "POST_UNIVER";
export const PUT_UNIVER = "PUT_UNIVER";
export const DELETE_UNIVER = "DELETE_UNIVER";

import apiClientWithFetch from "../../../services/apiClientWithFetch";

export class ActionUniver {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_UNIVER,
      });
      const res = await apiClientWithFetch.get("fak_data/all");
      if (res.status === 200) {
        dispatch({
          type: GET_UNIVER,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_UNIVER,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_UNIVER,
      });
      const res = await apiClientWithFetch.get(`fak_data/${id}`);
      if (res.status === 200) {
        dispatch({
          type: GET_BY_ID_UNIVER,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_UNIVER,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body, isFormData) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_UNIVER,
      });
      const res = await apiClientWithFetch.add(
        "fak_data/add",
        body, isFormData ? 
        "multipart/form-data" : null
      );
      if (res.status === 200) {
        dispatch({
          type: POST_UNIVER,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_UNIVER,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_UNIVER,
      });
      const res = await apiClientWithFetch.update(
        `elon/${id}`,
        body,
        "multipart/form-data"
      );
      if (res.status === 200) {
        dispatch({
          type: PUT_UNIVER,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_UNIVER,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_UNIVER,
      });
      const res = await apiClientWithFetch.delete(`elon/${id}`);
      if (res.status === 200) {
        dispatch({
          type: DELETE_UNIVER,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_UNIVER,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
