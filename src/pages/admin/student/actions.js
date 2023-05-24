export const student_parent = {
  request: "REQ_STUDENT",
  error: "ERR_STUDENT",
  post: "POST_STUDENT",
  get: "GET_STUDENT",
  getById: "GETONE_STUDENT",
  put: "PUT_STUDENT",
  delete: "DELETE_STUDENT",
};

import apiClientWithFetch from "../../../services/apiClientWithFetch";

export class StudentParentActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: student_parent.request,
      });
      const res = await apiClientWithFetch.get("xalqaro_aloqa/all");
      if (res.status === 200) {
        dispatch({
          type: student_parent.get,
          payload: res.data,
        });
      } else {
        dispatch({
          type: student_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: student_parent.request,
      });
      const res = await apiClientWithFetch.get(`xalqaro_aloqa/${id}`);
      if (res.status === 200) {
        dispatch({
          type: student_parent.getById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: student_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: student_parent,
      });
      const res = await apiClientWithFetch.add("xalqaro_aloqa/add", body);
      if (res.status === 200) {
        dispatch({
          type: student_parent.post,
          payload: res.data,
        });
      } else {
        dispatch({
          type: student_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: student_parent.request,
      });
      const res = await apiClientWithFetch.update(`xalqaro_aloqa/${id}`, body);
      if (res.status === 200) {
        dispatch({
          type: student_parent.put,
          payload: res.data,
        });
      } else {
        dispatch({
          type: student_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: student_parent.request,
      });
      const res = await apiClientWithFetch.delete(`xalqaro_aloqa/${id}`);
      if (res.status === 200) {
        dispatch({
          type: student_parent.delete,
          payload: res.data,
        });
      } else {
        dispatch({
          type: student_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}

export const student_child = {
  request: "REQ_STUDENT_CHILD",
  error: "ERR_STUDENT_CHILD",
  post: "POST_STUDENT_CHILD",
  get: "GET_STUDENT_CHILD",
  getById: "GETONE_STUDENT_CHILD",
  put: "PUT_STUDENT_CHILD",
  delete: "DELETE_STUDENT_CHILD",
};

export class StudentChildActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: student_child.request,
      });
      const res = await apiClientWithFetch.get("xalqaro_aloqa_child/all");
      if (res.status === 200) {
        dispatch({
          type: student_child.get,
          payload: res.data,
        });
      } else {
        dispatch({
          type: student_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: student_child.request,
      });
      const res = await apiClientWithFetch.get(`xalqaro_aloqa_child/${id}`);
      if (res.status === 200) {
        dispatch({
          type: student_child.getById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: student_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: student_child,
      });
      const res = await apiClientWithFetch.add("xalqaro_aloqa_child/add", body);
      if (res.status === 200) {
        dispatch({
          type: student_child.post,
          payload: res.data,
        });
      } else {
        dispatch({
          type: student_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: student_child.request,
      });
      const res = await apiClientWithFetch.update(`xalqaro_aloqa_child/${id}`, body);
      if (res.status === 200) {
        dispatch({
          type: student_child.put,
          payload: res.data,
        });
      } else {
        dispatch({
          type: student_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: student_child.request,
      });
      const res = await apiClientWithFetch.delete(`xalqaro_aloqa_child/${id}`);
      if (res.status === 200) {
        dispatch({
          type: student_child.delete,
          payload: res.data,
        });
      } else {
        dispatch({
          type: student_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
