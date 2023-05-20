export const REQUEST_BANNER = "REQUEST_BANNER";
export const ERROR_BANNER = "ERROR_BANNER";
export const GET_BANNER = "GET_BANNER";
export const GET_BY_ID_BANNER = "GET_BY_ID_BANNER";
export const POST_BANNER = "POST_BANNER";
export const PUT_BANNER = "PUT_BANNER";
export const DELETE_BANNER = "DELETE_BANNER";

import apiClientWithFetch from "../../services/apiClientWithFetch";

export class BannerActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_BANNER,
      });
      const res = await apiClientWithFetch.get("banner/get/all");
      if (res.status === 200) {
        dispatch({
          type: GET_BANNER,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_BANNER,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_BANNER,
      });
      const res = await apiClientWithFetch.get(`banner/${id}`);
      if (res.status === 200) {
        dispatch({
          type: GET_BY_ID_BANNER,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_BANNER,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_BANNER,
      });
      const res = await apiClientWithFetch.add(
        "banner/add",
        body,
        "multipart/form-data"
      );
      if (res.status === 200) {
        dispatch({
          type: POST_BANNER,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_BANNER,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_BANNER,
      });
      const res = await apiClientWithFetch.update(
        `banner/${id}`,
        body,
        "multipart/form-data"
      );
      if (res.status === 200) {
        dispatch({
          type: PUT_BANNER,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_BANNER,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_BANNER,
      });
      const res = await apiClientWithFetch.delete(`banner/${id}`);
      if (res.status === 200) {
        dispatch({
          type: DELETE_BANNER,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_BANNER,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
