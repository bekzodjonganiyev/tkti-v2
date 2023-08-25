export const faoliyat_parent = {
  request: "REQ_FAOLIYAT",
  error: "ERR_FAOLIYAT",
  post: "POST_FAOLIYAT",
  get: "GET_FAOLIYAT",
  getById: "GETONE_FAOLIYAT",
  put: "PUT_FAOLIYAT",
  delete: "DELETE_FAOLIYAT",
};

import apiClientWithFetch from "../../../services/apiClientWithFetch";

export class FaoliyatParentActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: faoliyat_parent.request,
      });
      const res = await apiClientWithFetch.get("faoliyat/all");
      if (res.status === 200) {
        dispatch({
          type: faoliyat_parent.get,
          payload: res.data,
        });
      } else {
        dispatch({
          type: faoliyat_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: faoliyat_parent.request,
      });
      const res = await apiClientWithFetch.get(`faoliyat/${id}`);
      if (res.status === 200) {
        dispatch({
          type: faoliyat_parent.getById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: faoliyat_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body, successCallback, errorCallback) {
    return async (dispatch) => {
      dispatch({
        type: faoliyat_parent,
      });
      const res = await apiClientWithFetch.add("faoliyat/add", body);
      if (res.status === 200) {
        dispatch({
          type: faoliyat_parent.post,
          payload: res.data,
        });
        successCallback(res);
      } else {
        dispatch({
          type: faoliyat_parent.error,
          payload: res?.status ? res.status : res,
        });
        errorCallback(res);
      }
    };
  }

  updateData(id, body, successCallback, errorCallback) {
    return async (dispatch) => {
      dispatch({
        type: faoliyat_parent.request,
      });
      const res = await apiClientWithFetch.update(`faoliyat/${id}`, body);
      if (res.status === 200) {
        dispatch({
          type: faoliyat_parent.put,
          payload: res.data,
        });
        successCallback(res);
      } else {
        dispatch({
          type: faoliyat_parent.error,
          payload: res?.status ? res.status : res,
        });
        errorCallback(res);
      }
    };
  }

  deleteData(id, successCallback, errorCallback) {
    return async (dispatch) => {
      dispatch({
        type: faoliyat_parent.request,
      });
      const res = await apiClientWithFetch.delete(`faoliyat/${id}`);
      if (res.status === 200) {
        dispatch({
          type: faoliyat_parent.delete,
          payload: res.data,
        });
        successCallback(res);
      } else {
        dispatch({
          type: faoliyat_parent.error,
          payload: res?.status ? res.status : res,
        });
        errorCallback(res);
      }
    };
  }
}

export const faoliyat_child = {
  request: "REQ_FAOLIYAT_CHILD",
  error: "ERR_FAOLIYAT_CHILD",
  post: "POST_FAOLIYAT_CHILD",
  get: "GET_FAOLIYAT_CHILD",
  getById: "GETONE_FAOLIYAT_CHILD",
  put: "PUT_FAOLIYAT_CHILD",
  delete: "DELETE_FAOLIYAT_CHILD",
};

export class FaoliyatChildActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: faoliyat_child.request,
      });
      const res = await apiClientWithFetch.get("faoliyat/");
      if (res.status === 200) {
        dispatch({
          type: faoliyat_child.get,
          payload: res.data,
        });
      } else {
        dispatch({
          type: faoliyat_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: faoliyat_child.request,
      });
      const res = await apiClientWithFetch.get(`faoliyat/${id}`);
      if (res.status === 200) {
        dispatch({
          type: faoliyat_child.getById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: faoliyat_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body, successCallback, errorCallback) {
    return async (dispatch) => {
      dispatch({
        type: faoliyat_child.request,
      });
      const res = await apiClientWithFetch.add("faoliyat_data/add", body, true);
      if (res.status === 200) {
        dispatch({
          type: faoliyat_child.post,
          payload: res.data,
        });
        successCallback();
      } else {
        dispatch({
          type: faoliyat_child.error,
          payload: res?.status ? res.status : res,
        });
        errorCallback();
      }
    };
  }

  updateData(id, body, successCallback, errorCallback) {
    return async (dispatch) => {
      dispatch({
        type: faoliyat_child.request,
      });
      const res = await apiClientWithFetch.update(
        `faoliyat_data/${id}`,
        body,
        true
      );
      if (res.status === 200) {
        dispatch({
          type: faoliyat_child.put,
          payload: res.data,
        });
        successCallback(res);
      } else {
        dispatch({
          type: faoliyat_child.error,
          payload: res?.status ? res.status : res,
        });
        errorCallback(res);
      }
    };
  }

  deleteData(id, successCallback, errorCallback) {
    return async (dispatch) => {
      dispatch({
        type: faoliyat_child.request,
      });
      const res = await apiClientWithFetch.delete(`faoliyat_data/${id}`);
      if (res.status === 200) {
        dispatch({
          type: faoliyat_child.delete,
          payload: res.data,
        });
        successCallback(res);
      } else {
        dispatch({
          type: faoliyat_child.error,
          payload: res?.status ? res.status : res,
        });
        errorCallback(res);
      }
    };
  }
}
