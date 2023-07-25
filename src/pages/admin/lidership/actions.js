export const lidership_parent = {
  request: "REQ_LIDERSHIP",
  error: "ERR_LIDERSHIP",
  post: "POST_LIDERSHIP",
  get: "GET_LIDERSHIP",
  getById: "GETONE_LIDERSHIP",
  put: "PUT_LIDERSHIP",
  delete: "DELETE_LIDERSHIP", 
};

import apiClientWithFetch from "../../../services/apiClientWithFetch";

export class LidershipParentActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: lidership_parent.request,
      });
      const res = await apiClientWithFetch.get("rektorat/all");
      if (res.status === 200) {
        dispatch({
          type: lidership_parent.get,
          payload: res.data,
        });
      } else {
        dispatch({
          type: lidership_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: lidership_parent.request,
      });
      const res = await apiClientWithFetch.get(`rektorat/${id}`);
      if (res.status === 200) {
        dispatch({
          type: lidership_parent.getById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: lidership_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: lidership_parent.request,
      });
      const res = await apiClientWithFetch.add("rektorat/add", body);
      if (res.status === 200) {
        dispatch({
          type: lidership_parent.post,
          payload: res.data,
        });
      } else {
        dispatch({
          type: lidership_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: lidership_parent.request,
      });
      const res = await apiClientWithFetch.update(`rektorat/${id}`, body);
      if (res.status === 200) {
        dispatch({
          type: lidership_parent.put,
          payload: res.data,
        });
      } else {
        dispatch({
          type: lidership_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: lidership_parent.request,
      });
      const res = await apiClientWithFetch.delete(`rektorat/${id}`);
      if (res.status === 200) {
        dispatch({
          type: lidership_parent.delete,
          payload: res.data,
        });
      } else {
        dispatch({
          type: lidership_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}

export const lidership_child = {
  request: "REQ_LIDERSHIP_CHILD",
  error: "ERR_LIDERSHIP_CHILD",
  post: "POST_LIDERSHIP_CHILD",
  get: "GET_LIDERSHIP_CHILD",
  getById: "GETONE_LIDERSHIP_CHILD",
  put: "PUT_LIDERSHIP_CHILD",
  delete: "DELETE_LIDERSHIP_CHILD",
};

export class LidershipChildActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: lidership_child.request,
      });
      const res = await apiClientWithFetch.get("rektorat_data_child/all");
      if (res.status === 200) {
        dispatch({
          type: lidership_child.get,
          payload: res.data,
        });
      } else {
        dispatch({
          type: lidership_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: lidership_child.request,
      });
      const res = await apiClientWithFetch.get(`rektorat_data_child/${id}`);
      if (res.status === 200) {
        dispatch({
          type: lidership_child.getById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: lidership_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: lidership_child.request,
      });
      const res = await apiClientWithFetch.add("rektorat_data_child/add", body, true);
      if (res.status === 200) {
        dispatch({
          type: lidership_child.post,
          payload: res.data,
        });
      } else {
        dispatch({
          type: lidership_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: lidership_child.request,
      });
      const res = await apiClientWithFetch.update(`rektorat_data_child/${id}`, body, true);
      if (res.status === 200) {
        dispatch({
          type: lidership_child.put,
          payload: res.data,
        });
      } else {
        dispatch({
          type: lidership_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: lidership_child.request,
      });
      const res = await apiClientWithFetch.delete(`rektorat_data_child/${id}`);
      if (res.status === 200) {
        dispatch({
          type: lidership_child.delete,
          payload: res.data,
        });
      } else {
        dispatch({
          type: lidership_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
