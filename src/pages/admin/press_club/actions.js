export const pressclub_parent = {
  request: "REQ_PRESS_CLUB",
  error: "ERR_PRESS_CLUB",
  post: "POST_PRESS_CLUB",
  get: "GET_PRESS_CLUB",
  getById: "GETONE_PRESS_CLUB",
  put: "PUT_PRESS_CLUB",
  delete: "DELETE_PRESS_CLUB",
};

import apiClientWithFetch from "../../../services/apiClientWithFetch";

export class PressclubParentActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: pressclub_parent.request,
      });
      const res = await apiClientWithFetch.get("xalqaro_aloqa/all");
      if (res.status === 200) {
        dispatch({
          type: pressclub_parent.get,
          payload: res.data,
        });
      } else {
        dispatch({
          type: pressclub_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: pressclub_parent.request,
      });
      const res = await apiClientWithFetch.get(`xalqaro_aloqa/${id}`);
      if (res.status === 200) {
        dispatch({
          type: pressclub_parent.getById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: pressclub_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: pressclub_parent,
      });
      const res = await apiClientWithFetch.add("xalqaro_aloqa/add", body);
      if (res.status === 200) {
        dispatch({
          type: pressclub_parent.post,
          payload: res.data,
        });
      } else {
        dispatch({
          type: pressclub_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: pressclub_parent.request,
      });
      const res = await apiClientWithFetch.update(`xalqaro_aloqa/${id}`, body);
      if (res.status === 200) {
        dispatch({
          type: pressclub_parent.put,
          payload: res.data,
        });
      } else {
        dispatch({
          type: pressclub_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  
  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: pressclub_parent.request,
      });
      const res = await apiClientWithFetch.delete(`xalqaro_aloqa/${id}`);
      if (res.status === 200) {
        dispatch({
          type: pressclub_parent.delete,
          payload: res.data,
        });
      } else {
        dispatch({
          type: pressclub_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}

export const pressclub_child = {
  request: "REQ_PRESS_CLUB",
  error: "ERR_PRESS_CLUB",
  post: "POST_PRESS_CLUB",
  get: "GET_PRESS_CLUB",
  getById: "GETONE_PRESS_CLUB",
  put: "PUT_PRESS_CLUB",
  delete: "DELETE_PRESS_CLUB",
};

export class PressclubChildActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: pressclub_child.request,
      });
      const res = await apiClientWithFetch.get("xalqaro_aloqa_child/all");
      if (res.status === 200) {
        dispatch({
          type: pressclub_child.get,
          payload: res.data,
        });
      } else {
        dispatch({
          type: pressclub_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: pressclub_child.request,
      });
      const res = await apiClientWithFetch.get(`xalqaro_aloqa_child/${id}`);
      if (res.status === 200) {
        dispatch({
          type: pressclub_child.getById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: pressclub_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: pressclub_child,
      });
      const res = await apiClientWithFetch.add("xalqaro_aloqa_child/add", body, true);
      if (res.status === 200) {
        dispatch({
          type: pressclub_child.post,
          payload: res.data,
        });
      } else {
        dispatch({
          type: pressclub_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: pressclub_child.request,
      });
      const res = await apiClientWithFetch.update(`xalqaro_aloqa_child/${id}`, body, true);
      if (res.status === 200) {
        dispatch({
          type: pressclub_child.put,
          payload: res.data,
        });
      } else {
        dispatch({
          type: pressclub_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: pressclub_child.request,
      });
      const res = await apiClientWithFetch.delete(`xalqaro_aloqa_child/${id}`);
      if (res.status === 200) {
        dispatch({
          type: pressclub_child.delete,
          payload: res.data,
        });
      } else {
        dispatch({
          type: pressclub_child.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
