export const REQUEST_NEWS = "REQUEST_NEWS";
export const ERROR_NEWS = "ERROR_NEWS";
export const GET_NEWS = "GET_NEWS";
export const GET_BY_ID_NEWS = "GET_BY_ID_NEWS";

export const SET_OPEN_NAVBAR = "SET_OPEN_NAVBAR";

import apiClientWithFetch from "../../services/apiClientWithFetch";

export class NewsActions {
  getData(category, page ) {
    const url = page
      ? `news/all?category=${category}&page${page}`
      : `news/all?category=${category}`;
    return async (dispatch) => {
      dispatch({
        type: REQUEST_NEWS,
      });
      const res = await apiClientWithFetch.get(url);
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


}
