export const REQUEST_VIDEONEWS = "REQUEST_VIDEONEWS";
export const ERROR_VIDEONEWS = "ERROR_VIDEONEWS";
export const GET_VIDEONEWS = "GET_VIDEONEWS";
export const GET_BY_ID_VIDEONEWS = "GET_BY_ID_VIDEONEWS";
export const POST_VIDEONEWS = "POST_VIDEONEWS";
export const PUT_VIDEONEWS = "PUT_VIDEONEWS";
export const DELETE_VIDEONEWS = "DELETE_VIDEONEWS";

import apiClientWithFetch from "../../services/apiClientWithFetch";

export class VideoNewsActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_VIDEONEWS,
      });
      const res = await apiClientWithFetch.get("elon/all");
      if (res.status === 200) {
        dispatch({
          type: GET_VIDEONEWS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_VIDEONEWS,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_VIDEONEWS,
      });
      const res = await apiClientWithFetch.get(`elon/${id}`);
      if (res.status === 200) {
        dispatch({
          type: GET_BY_ID_VIDEONEWS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_VIDEONEWS,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_VIDEONEWS,
      });
      const res = await apiClientWithFetch.add(
        "elon/add",
        body,
        "multipart/form-data"
      );
      if (res.status === 200) {
        dispatch({
          type: POST_VIDEONEWS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_VIDEONEWS,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_VIDEONEWS,
      });
      const res = await apiClientWithFetch.update(
        `elon/${id}`,
        body,
        "multipart/form-data"
      );
      if (res.status === 200) {
        dispatch({
          type: PUT_VIDEONEWS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_VIDEONEWS,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_VIDEONEWS,
      });
      const res = await apiClientWithFetch.delete(`elon/${id}`);
      if (res.status === 200) {
        dispatch({
          type: DELETE_VIDEONEWS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_VIDEONEWS,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
