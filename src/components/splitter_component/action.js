export const REQUEST_SPLITTER_COMP = "REQUEST_SPLITTER_COMP";
export const ERROR_SPLITTER_COMP = "ERROR_SPLITTER_COMP";
export const GET_SPLITTER_COMP = "GET_SPLITTER_COMP";
export const GET_BY_ID_SPLITTER_COMP = "GET_BY_ID_SPLITTER_COMP";

import apiClientWithFetch from "../../services/apiClientWithFetch"

export class SplitterComponentActions {
  getData(url) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_SPLITTER_COMP,
      });
      const res = await apiClientWithFetch.get(url);
      if (res.status === 200) {
        dispatch({
          type: GET_SPLITTER_COMP,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_SPLITTER_COMP,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: REQUEST_SPLITTER_COMP,
      });
      const res = await apiClientWithFetch.get(`elon/${id}`);
      if (res.status === 200) {
        dispatch({
          type: GET_BY_ID_SPLITTER_COMP,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_SPLITTER_COMP,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
