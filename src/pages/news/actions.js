export const REQUEST_NEWS = "REQUEST_NEWS";
export const ERROR_NEWS = "ERROR_NEWS";
export const GET_NEWS = "GET_NEWS";
export const GET_BY_ID_NEWS = "GET_BY_ID_NEWS";
export const POST_NEWS = "POST_NEWS";
export const PUT_NEWS = "PUT_NEWS";
export const DELETE_NEWS = "DELETE_NEWS";
export const SET_OPEN_NAVBAR = "SET_OPEN_NAVBAR";

import apiClientWithFetch from "../../services/apiClientWithFetch";

export class NewsActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_NEWS,
      });
      const res = await apiClientWithFetch.get("news/all");
      if (res.status === 200) {
        dispatch({
          type: GET_NEWS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_NEWS,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_NEWS,
      });
      const res = await apiClientWithFetch.get(`news/${id}`);
      if (res.status === 200) {
        dispatch({
          type: GET_BY_ID_NEWS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_NEWS,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_NEWS,
      });
      const res = await apiClientWithFetch.add(
        "news/add",
        body,
        "multipart/form-data"
      );
      if (res.status === 200) {
        dispatch({
          type: POST_NEWS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_NEWS,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_NEWS,
      });
      const res = await apiClientWithFetch.update(
        `news/${id}`,
        body,
        "multipart/form-data"
      );
      if (res.status === 200) {
        dispatch({
          type: PUT_NEWS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_NEWS,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_NEWS,
      });
      const res = await apiClientWithFetch.delete(`news/${id}`);
      if (res.status === 200) {
        dispatch({
          type: DELETE_NEWS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_NEWS,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
