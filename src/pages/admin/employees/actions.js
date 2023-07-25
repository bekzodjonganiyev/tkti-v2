export const employees_parent = {
  request: "REQ_EMPLOYEES",
  error: "ERR_EMPLOYEES",
  post: "POST_EMPLOYEES",
  get: "GET_EMPLOYEES",
  getById: "GETONE_EMPLOYEES",
  put: "PUT_EMPLOYEES",
  delete: "DELETE_EMPLOYEES", 
};

import apiClientWithFetch from "../../../services/apiClientWithFetch";

export class EmployeesParentActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: employees_parent.request,
      });
      const res = await apiClientWithFetch.get("rektorat/all");
      if (res.status === 200) {
        dispatch({
          type: employees_parent.get,
          payload: res.data,
        });
      } else {
        dispatch({
          type: employees_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: employees_parent.request,
      });
      const res = await apiClientWithFetch.get(`xodimlar/${id}`);
      if (res.status === 200) {
        dispatch({
          type: employees_parent.getById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: employees_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: employees_parent.request,
      });
      const res = await apiClientWithFetch.add("xodimlar/add", body);
      if (res.status === 200) {
        dispatch({
          type: employees_parent.post,
          payload: res.data,
        });
      } else {
        dispatch({
          type: employees_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: employees_parent.request,
      });
      const res = await apiClientWithFetch.update(`xodimlar/${id}`, body);
      if (res.status === 200) {
        dispatch({
          type: employees_parent.put,
          payload: res.data,
        });
      } else {
        dispatch({
          type: employees_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: employees_parent.request,
      });
      const res = await apiClientWithFetch.delete(`xodimlar/${id}`);
      if (res.status === 200) {
        dispatch({
          type: employees_parent.delete,
          payload: res.data,
        });
      } else {
        dispatch({
          type: employees_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}

export const employees_child = {
  request: "REQ_EMPLOYEES_CHILD",
  error: "ERR_EMPLOYEES_CHILD",
  post: "POST_EMPLOYEES_CHILD",
  get: "GET_EMPLOYEES_CHILD",
  getById: "GETONE_EMPLOYEES_CHILD",
  put: "PUT_EMPLOYEES_CHILD",
  delete: "DELETE_EMPLOYEES_CHILD",
};

export class EmploeyeesChildActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: employees_child.request,
      });
      const res = await apiClientWithFetch.get("xodimlar_data_child/all");
      if (res.status === 200) {
        dispatch({
          type: employees_child.get,
          payload: res.data,
        });
      } else {
        dispatch({
          type: employees_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: employees_child.request,
      });
      const res = await apiClientWithFetch.get(`xodimlar_data_child/${id}`);
      if (res.status === 200) {
        dispatch({
          type: employees_child.getById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: employees_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: employees_child.request,
      });
      const res = await apiClientWithFetch.add("xodimlar_data_child/add", body, true);
      if (res.status === 200) {
        dispatch({
          type: employees_child.post,
          payload: res.data,
        });
      } else {
        dispatch({
          type: employees_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: employees_child.request,
      });
      const res = await apiClientWithFetch.update(`xodimlar_data_child/${id}`, body, true);
      if (res.status === 200) {
        dispatch({
          type: employees_child.put,
          payload: res.data,
        });
      } else {
        dispatch({
          type: employees_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: employees_child.request,
      });
      const res = await apiClientWithFetch.delete(`xodimlar_data_child/${id}`);
      if (res.status === 200) {
        dispatch({
          type: employees_child.delete,
          payload: res.data,
        });
      } else {
        dispatch({
          type: employees_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
