import apiClientWithFetch from "../../../services/apiClientWithFetch";

export const brm_parent = {
  request: "REQ_BRM_PARENT",
  error: "ERR_BRM_PARENT",
  post: "POST_BRM_PARENT",
  get: "GET_BRM_PARENT",
  getById: "GETONE_BRM_PARENT",
  put: "PUT_BRM_PARENT",
  delete: "DELETE_BRM_PARENT",
};

export class BrmParentActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: brm_parent.request,
      });
      const res = await apiClientWithFetch.get("brm/all");
      if (res.status === 200) {
        dispatch({
          type: brm_parent.get,
          payload: res.data,
        });
      } else {
        dispatch({
          type: brm_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: brm_parent.request,
      });
      const res = await apiClientWithFetch.get(`brm/${id}`);
      if (res.status === 200) {
        dispatch({
          type: brm_parent.getById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: brm_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    console.log(body)
    return async (dispatch) => {
      dispatch({
        type: brm_parent.request,
      });
      const res = await apiClientWithFetch.add("brm/add", body, true);
      if (res.status === 200) {
        dispatch({
          type: brm_parent.post,
          payload: res.data,
        });
      } else {
        dispatch({
          type: brm_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: brm_parent.request,
      });
      const res = await apiClientWithFetch.update(`brm/${id}`, body);
      if (res.status === 200) {
        dispatch({
          type: brm_parent.put,
          payload: res.data,
        });
      } else {
        dispatch({
          type: brm_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: brm_parent.request,
      });
      const res = await apiClientWithFetch.delete(`brm/${id}`);
      if (res.status === 200) {
        dispatch({
          type: brm_parent.delete,
          payload: res.data,
        });
      } else {
        dispatch({
          type: brm_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}

export const brm_child = {
  request: "REQ_BRM_CHILD",
  error: "ERR_BRM_CHILD",
  post: "POST_BRM_CHILD",
  get: "GET_BRM_CHILD",
  getById: "GETONE_BRM_CHILD",
  put: "PUT_BRM_CHILD",
  delete: "DELETE_BRM_CHILD",
};

export class BrmChildActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: brm_child.request,
      });
      const res = await apiClientWithFetch.get("brm_data_child/all");
      if (res.status === 200) {
        dispatch({
          type: brm_child.get,
          payload: res.data,
        });
      } else {
        dispatch({
          type: brm_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: brm_child.request,
      });
      const res = await apiClientWithFetch.get(`brm_data_child/${id}`);
      if (res.status === 200) {
        dispatch({
          type: brm_child.getById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: brm_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: brm_child.request,
      });
      const res = await apiClientWithFetch.add(
        "brm_data_child/add",
        body,
        true
      );
      if (res.status === 200) {
        dispatch({
          type: brm_child.post,
          payload: res.data,
        });
      } else {
        dispatch({
          type: brm_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: brm_child.request,
      });
      const res = await apiClientWithFetch.update(
        `brm_data_child/${id}`,
        body,
        true
      );
      if (res.status === 200) {
        dispatch({
          type: brm_child.put,
          payload: res.data,
        });
      } else {
        dispatch({
          type: brm_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: brm_child.request,
      });
      const res = await apiClientWithFetch.delete(`brm_data_child/${id}`);
      if (res.status === 200) {
        dispatch({
          type: brm_child.delete,
          payload: res.data,
        });
      } else {
        dispatch({
          type: brm_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
