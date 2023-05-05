export const REQUEST_ABOUT_US = "REQUEST_ABOUT_US";
export const ERROR_ABOUT_US = "ERROR_ABOUT_US";
export const GET_ABOUT_US = "GET_ABOUT_US";
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
      const res = await apiClientWithFetch.getAll("elon/all");

      dispatch({
        type: GET_ABOUT_US,
        payload: res,
      });
    };
  }

  postData(body) {
    return async (dispatch) => {
      try {
        dispatch({
          type: REQUEST_ABOUT_US,
        });
        const res = await apiClientWithFetch.add(
          "elon/add",
          body,
          "multipart/form-data"
        );
        dispatch({
          type: POST_ABOUT_US,
          payload: res,
        });
      } catch (error) {
        dispatch({
          type: ERROR_ABOUT_US,
          payload: error.message,
        });
        
      }
    };
  }

  updateData(body) {
    return {
      type: PUT_ABOUT_US,
      payload: body,
    };
  }

  deleteData(id) {
    return {
      type: DELETE_ABOUT_US,
      payload: id,
    };
  }
}
