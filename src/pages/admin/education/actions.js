export const education_parent = {
  request: "REQ_EDUCATION",
  error: "ERR_EDUCATION",
  post: "POST_EDUCATION",
  get: "GET_EDUCATION",
  getById: "GETONE_EDUCATION",
  put: "PUT_EDUCATION",
  delete: "DELETE_EDUCATION",
};

import apiClientWithFetch from "../../../services/apiClientWithFetch";

export class EducationParentActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: education_parent.request,
      });
      const res = await apiClientWithFetch.get("xalqaro_aloqa/all");
      if (res.status === 200) {
        dispatch({
          type: education_parent.get,
          payload: res.data,
        });
      } else {
        dispatch({
          type: education_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: education_parent.request,
      });
      const res = await apiClientWithFetch.get(`xalqaro_aloqa/${id}`);
      if (res.status === 200) {
        dispatch({
          type: education_parent.getById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: education_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: education_parent,
      });
      const res = await apiClientWithFetch.add("xalqaro_aloqa/add", body);
      if (res.status === 200) {
        dispatch({
          type: education_parent.post,
          payload: res.data,
        });
      } else {
        dispatch({
          type: education_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: education_parent.request,
      });
      const res = await apiClientWithFetch.update(`xalqaro_aloqa/${id}`, body);
      if (res.status === 200) {
        dispatch({
          type: education_parent.put,
          payload: res.data,
        });
      } else {
        dispatch({
          type: education_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: education_parent.request,
      });
      const res = await apiClientWithFetch.delete(`xalqaro_aloqa/${id}`);
      if (res.status === 200) {
        dispatch({
          type: education_parent.delete,
          payload: res.data,
        });
      } else {
        dispatch({
          type: education_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}

export const education_child = {
  request: "REQ_EDUCATION_CHILD",
  error: "ERR_EDUCATION_CHILD",
  post: "POST_EDUCATION_CHILD",
  get: "GET_EDUCATION_CHILD",
  getById: "GETONE_EDUCATION_CHILD",
  put: "PUT_EDUCATION_CHILD",
  delete: "DELETE_EDUCATION_CHILD",
};

export class EducationChildActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: education_child.request,
      });
      const res = await apiClientWithFetch.get("xalqaro_aloqa_child/all");
      if (res.status === 200) {
        dispatch({
          type: education_child.get,
          payload: res.data,
        });
      } else {
        dispatch({
          type: education_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: education_child.request,
      });
      const res = await apiClientWithFetch.get(`xalqaro_aloqa_child/${id}`);
      if (res.status === 200) {
        dispatch({
          type: education_child.getById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: education_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: education_child,
      });
      const res = await apiClientWithFetch.add("xalqaro_aloqa_child/add", body);
      if (res.status === 200) {
        dispatch({
          type: education_child.post,
          payload: res.data,
        });
      } else {
        dispatch({
          type: education_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: education_child.request,
      });
      const res = await apiClientWithFetch.update(`xalqaro_aloqa_child/${id}`, body);
      if (res.status === 200) {
        dispatch({
          type: education_child.put,
          payload: res.data,
        });
      } else {
        dispatch({
          type: education_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: education_child.request,
      });
      const res = await apiClientWithFetch.delete(`xalqaro_aloqa_child/${id}`);
      if (res.status === 200) {
        dispatch({
          type: education_child.delete,
          payload: res.data,
        });
      } else {
        dispatch({
          type: education_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
