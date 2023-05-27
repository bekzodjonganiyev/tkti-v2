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
      const res = await apiClientWithFetch.get("xalqaro_aloqa/all");
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
      const res = await apiClientWithFetch.get(`xalqaro_aloqa/${id}`);
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

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: xalqaro_parent,
      });
      const res = await apiClientWithFetch.add("xalqaro_aloqa/add", body);
      if (res.status === 200) {
        dispatch({
          type: xalqaro_parent.post,
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

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: xalqaro_parent.request,
      });
      const res = await apiClientWithFetch.update(`xalqaro_aloqa/${id}`, body);
      if (res.status === 200) {
        dispatch({
          type: xalqaro_parent.put,
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

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: xalqaro_parent.request,
      });
      const res = await apiClientWithFetch.delete(`xalqaro_aloqa/${id}`);
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
      const res = await apiClientWithFetch.get("xalqaro_aloqa_child/all");
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
      const res = await apiClientWithFetch.get(`xalqaro_aloqa_child/${id}`);
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

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: xalqaro_child,
      });
      const res = await apiClientWithFetch.add("xalqaro_aloqa_child/add", body, true);
      if (res.status === 200) {
        dispatch({
          type: xalqaro_child.post,
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

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: xalqaro_child.request,
      });
      const res = await apiClientWithFetch.update(`xalqaro_aloqa_child/${id}`, body, true);
      if (res.status === 200) {
        dispatch({
          type: xalqaro_child.put,
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

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: xalqaro_child.request,
      });
      const res = await apiClientWithFetch.delete(`xalqaro_aloqa_child/${id}`);
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