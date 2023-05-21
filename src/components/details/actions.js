export const REQUEST_DETAILS = "REQUEST_DETAILS";
export const ERROR_DETAILS = "ERROR_DETAILS";
export const GET_DETAILS = "GET_DETAILS";
export const GET_BY_ID_DETAILS = "GET_BY_ID_DETAILS";
export const POST_DETAILS = "POST_DETAILS";
export const PUT_DETAILS = "PUT_DETAILS";
export const DELETE_DETAILS = "DELETE_DETAILS";

import apiClientWithFetch from "../../services/apiClientWithFetch";

export class DetailsActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_DETAILS,
      });
      const res = await apiClientWithFetch.get("news/all");
      if (res.status === 200) {
        dispatch({
          type: GET_DETAILS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_DETAILS,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_DETAILS,
      });
      const res = await apiClientWithFetch.get(`news/${id}`);
      if (res.status === 200) {
        dispatch({
          type: GET_BY_ID_DETAILS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_DETAILS,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_DETAILS,
      });
      const res = await apiClientWithFetch.add(
        "news/add",
        body,
        "multipart/form-data"
      );
      if (res.status === 200) {
        dispatch({
          type: POST_DETAILS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_DETAILS,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_DETAILS,
      });
      const res = await apiClientWithFetch.update(
        `news/${id}`,
        body,
        "multipart/form-data"
      );
      if (res.status === 200) {
        dispatch({
          type: PUT_DETAILS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_DETAILS,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_DETAILS,
      });
      const res = await apiClientWithFetch.delete(`news/${id}`);
      if (res.status === 200) {
        dispatch({
          type: DELETE_news,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_news,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
