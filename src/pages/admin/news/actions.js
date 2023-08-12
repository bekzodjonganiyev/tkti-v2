export const newsActionTypes = {
  loading: "REQ_NEWS",
  error: "ERR_NEWS",
  post: "POST_NEWS",
  get: "GET_NEWS",
  getById: "GET_ONE_NEW",
  put: "PUT_NEW",
  delete: "DELETE_NEW",
};

import apiClientWithFetch from "../../../services/apiClientWithFetch";

export class NewsActions {
  getData(category, page, callback) {
    const url = page
      ? `news/all?category=${category}&page=${page}`
      : `news/all?category=${category}`;
    return async (dispatch) => {
      dispatch({
        type: newsActionTypes.loading,
      });
      const res = await apiClientWithFetch.get(url);
      if (res.status === 200) {
        dispatch({
          type: newsActionTypes.get,
          payload: res.data,
        });
        callback(res)
      } else {
        dispatch({
          type: newsActionTypes.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: newsActionTypes.loading,
      });
      const res = await apiClientWithFetch.get(`news/${id}`);
      if (res.status === 200) {
        dispatch({
          type: newsActionTypes.getById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: newsActionTypes.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body, successCallback, errorCallback) {
    return async (dispatch) => {
      dispatch({
        type: newsActionTypes.loading,
      });
      const res = await apiClientWithFetch.add("news/add", body, true);
      if (res.status === 200) {
        dispatch({
          type: newsActionTypes.post,
          payload: res.data,
        });
        successCallback(res)
      } else {
        dispatch({
          type: newsActionTypes.error,
          payload: res?.status ? res.status : res,
        });
        errorCallback(res)
      }
    };
  }

  updateData(id, body, successCallback, errorCallback) {
    return async (dispatch) => {
      dispatch({
        type: newsActionTypes.loading,
      });
      const res = await apiClientWithFetch.update(`news/${id}`, body);
      if (res.status === 200) {
        dispatch({
          type: newsActionTypes.put,
          payload: res.data,
        });
        successCallback(res)
      } else {
        dispatch({
          type: newsActionTypes.error,
          payload: res?.status ? res.status : res,
        });
        errorCallback(res)
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: newsActionTypes.loading,
      });
      const res = await apiClientWithFetch.delete(`news/${id}`);
      if (res.status === 200) {
        dispatch({
          type: newsActionTypes.delete,
          payload: res.data,
        });
      } else {
        dispatch({
          type: newsActionTypes.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
