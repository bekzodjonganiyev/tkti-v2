export const REQUEST_ABOUT_US = "REQUEST_ABOUT_US";
export const ERROR_ABOUT_US = "ERROR_ABOUT_US";
export const GET_ABOUT_US = "GET_ABOUT_US";
export const GET_BY_ID_ABOUT_US = "GET_BY_ID_ABOUT_US";
export const POST_ABOUT_US = "POST_ABOUT_US";
export const PUT_ABOUT_US = "PUT_ABOUT_US";
export const DELETE_ABOUT_US = "DELETE_ABOUT_US";

import apiClientWithFetch from "../../../services/apiClientWithFetch";

export class AboutUsActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_ABOUT_US,
      });
      const res = await apiClientWithFetch.get("elon/all");
      if (res.status === 200) {
        dispatch({
          type: GET_ABOUT_US,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_ABOUT_US,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_ABOUT_US,
      });
      const res = await apiClientWithFetch.get(`elon/${id}`);
      if (res.status === 200) {
        dispatch({
          type: GET_BY_ID_ABOUT_US,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_ABOUT_US,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_ABOUT_US,
      });
      const res = await apiClientWithFetch.add(
        "elon/add",
        body,
        "multipart/form-data"
      );
      if (res.status === 200) {
        dispatch({
          type: POST_ABOUT_US,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_ABOUT_US,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_ABOUT_US,
      });
      const res = await apiClientWithFetch.update(
        `elon/${id}`,
        body,
        "multipart/form-data"
      );
      if (res.status === 200) {
        dispatch({
          type: PUT_ABOUT_US,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_ABOUT_US,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_ABOUT_US,
      });
      const res = await apiClientWithFetch.delete(`elon/${id}`);
      if (res.status === 200) {
        dispatch({
          type: DELETE_ABOUT_US,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_ABOUT_US,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
