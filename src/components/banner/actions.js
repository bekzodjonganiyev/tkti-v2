export const REQUEST_BANNER = "REQUEST_BANNER";
export const ERROR_BANNER = "ERROR_BANNER";
export const GET_BANNER = "GET_BANNER";
export const GET_BY_ID_BANNER = "GET_BY_ID_BANNER";


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
}
