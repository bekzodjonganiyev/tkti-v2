export const REQUEST_UNI_COMP = "REQUEST_UNI_COMP";
export const ERROR_UNI_COMP = "ERROR_UNI_COMP";
export const GET_UNI_COMP = "GET_UNI_COMP";
export const GET_BY_ID_UNI_COMP = "GET_BY_ID_UNI_COMP";

import apiClientWithFetch from "../../services/apiClientWithFetch"

export class UniversalComponentActions {
  getData(url) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_UNI_COMP,
      });
      const res = await apiClientWithFetch.get(url);
      if (res.status === 200) {
        dispatch({
          type: GET_UNI_COMP,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_UNI_COMP,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_UNI_COMP,
      });
      const res = await apiClientWithFetch.get(`elon/${id}`);
      if (res.status === 200) {
        dispatch({
          type: GET_BY_ID_UNI_COMP,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_UNI_COMP,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
