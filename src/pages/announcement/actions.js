export const REQUEST_ANNOUNCEMENT = "REQUEST_ANNOUNCEMENT";
export const ERROR_ANNOUNCEMENT = "ERROR_ANNOUNCEMENT";
export const GET_ANNOUNCEMENT = "GET_ANNOUNCEMENT";
export const GET_BY_ID_ANNOUNCEMENT = "GET_BY_ID_ANNOUNCEMENT";
export const POST_ANNOUNCEMENT = "POST_ANNOUNCEMENT";
export const PUT_ANNOUNCEMENT = "PUT_ANNOUNCEMENT";
export const DELETE_ANNOUNCEMENT = "DELETE_ANNOUNCEMENT";

import apiClientWithFetch from "../../services/apiClientWithFetch";

export class AnnouncementActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_ANNOUNCEMENT,
      });
      const res = await apiClientWithFetch.get("elon/all");
      if (res.status === 200) {
        dispatch({
          type: GET_ANNOUNCEMENT,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_ANNOUNCEMENT,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_ANNOUNCEMENT,
      });
      const res = await apiClientWithFetch.get(`elon/${id}`);
      if (res.status === 200) {
        dispatch({
          type: GET_BY_ID_ANNOUNCEMENT,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_ANNOUNCEMENT,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_ANNOUNCEMENT,
      });
      const res = await apiClientWithFetch.add(
        "elon/add",
        body,
        "multipart/form-data"
      );
      if (res.status === 200) {
        dispatch({
          type: POST_ANNOUNCEMENT,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_ANNOUNCEMENT,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_ANNOUNCEMENT,
      });
      const res = await apiClientWithFetch.update(
        `elon/${id}`,
        body,
        "multipart/form-data"
      );
      if (res.status === 200) {
        dispatch({
          type: PUT_ANNOUNCEMENT,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_ANNOUNCEMENT,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_ANNOUNCEMENT,
      });
      const res = await apiClientWithFetch.delete(`elon/${id}`);
      if (res.status === 200) {
        dispatch({
          type: DELETE_ANNOUNCEMENT,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_ANNOUNCEMENT,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
