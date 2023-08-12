export const xalqaro_parent = {
  request: "REQ_INR_PARENT",
  error: "ERR_INT_PARENT",
  post: "POST_INR_PARENT",
  get: "GET_INR_PARENT",
  getById: "GETONE_INR_PARENT",
  put: "PUT_INR_PARENT",
  delete: "DELETE_INR_PARENT",
};

import apiClientWithFetch from "../../../services/apiClientWithFetch";

export class XalqaroParentActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: xalqaro_parent.request,
      });
      const res = await apiClientWithFetch.get("xalqaro/all");
      if (res.status === 200) {
        dispatch({
          type: xalqaro_parent.get,
          payload: res.data,
        });
      } else {
        dispatch({
          type: xalqaro_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: xalqaro_parent.request,
      });
      const res = await apiClientWithFetch.get(`xalqaro/${id}`);
      if (res.status === 200) {
        dispatch({
          type: xalqaro_parent.getById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: xalqaro_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body, successCallback, errorCallback) {
    return async (dispatch) => {
      dispatch({
        type: xalqaro_parent,
      });
      const res = await apiClientWithFetch.add("xalqaro/add", body);
      if (res.status === 200) {
        dispatch({
          type: xalqaro_parent.post,
          payload: res.data,
        });
        successCallback(res)
      } else {
        dispatch({
          type: xalqaro_parent.error,
          payload: res?.status ? res.status : res,
        });
        errorCallback(res)
      }
    };
  }

  updateData(id, body, successCallback, errorCallback) {
    return async (dispatch) => {
      dispatch({
        type: xalqaro_parent.request,
      });
      const res = await apiClientWithFetch.update(`xalqaro/${id}`, body);
      if (res.status === 200) {
        dispatch({
          type: xalqaro_parent.put,
          payload: res.data,
        });
        successCallback(res)
      } else {
        dispatch({
          type: xalqaro_parent.error,
          payload: res?.status ? res.status : res,
        });
        errorCallback(res)
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: xalqaro_parent.request,
      });
      const res = await apiClientWithFetch.delete(`xalqaro/${id}`);
      if (res.status === 200) {
        dispatch({
          type: xalqaro_parent.delete,
          payload: res.data,
        });
      } else {
        dispatch({
          type: xalqaro_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}

export const xalqaro_child = {
  request: "REQ_INR_CHILD",
  error: "ERR_INT_CHILD",
  post: "POST_INR_CHILD",
  get: "GET_INR_CHILD",
  getById: "GETONE_INR_CHILD",
  put: "PUT_INR_CHILD",
  delete: "DELETE_INR_CHILD",
};

export class XalqaroChildActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: xalqaro_child.request,
      });
      const res = await apiClientWithFetch.get("xalqaro_data_child/all");
      if (res.status === 200) {
        dispatch({
          type: xalqaro_child.get,
          payload: res.data,
        });
      } else {
        dispatch({
          type: xalqaro_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: xalqaro_child.request,
      });
      const res = await apiClientWithFetch.get(`xalqaro_data_child/${id}`);
      if (res.status === 200) {
        dispatch({
          type: xalqaro_child.getById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: xalqaro_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body, successCallback, errorCallback) {
    return async (dispatch) => {
      dispatch({
        type: xalqaro_child,
      });
      const res = await apiClientWithFetch.add("xalqaro_data_child/add", body, true);
      if (res.status === 200) {
        dispatch({
          type: xalqaro_child.post,
          payload: res.data,
        });
        successCallback(res)
      } else {
        dispatch({
          type: xalqaro_child.error,
          payload: res?.status ? res.status : res,
        });
        errorCallback(res)
      }
    };
  }

  updateData(id, body, successCallback, errorCallback) {
    return async (dispatch) => {
      dispatch({
        type: xalqaro_child.request,
      });
      const res = await apiClientWithFetch.update(`xalqaro_data_child/${id}`, body, true);
      if (res.status === 200) {
        dispatch({
          type: xalqaro_child.put,
          payload: res.data,
        });
        successCallback(res)
      } else {
        dispatch({
          type: xalqaro_child.error,
          payload: res?.status ? res.status : res,
        });
        errorCallback(res)
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: xalqaro_child.request,
      });
      const res = await apiClientWithFetch.delete(`xalqaro_data_child/${id}`);
      if (res.status === 200) {
        dispatch({
          type: xalqaro_child.delete,
          payload: res.data,
        });
      } else {
        dispatch({
          type: xalqaro_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}