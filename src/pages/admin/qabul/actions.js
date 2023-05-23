export const qabul_parent = {
    request: "REQ_ADM_PARENT",
    error: "ERR_ADM_PARENT",
    post: "POST_ADM_PARENT",
    get: "GET_ADM_PARENT",
    getById: "GETONE_ADM_PARENT",
    put: "PUT_ADM_PARENT",
    delete: "DELETE_ADM_PARENT",
  };
  
  import apiClientWithFetch from "../../../services/apiClientWithFetch";
  
  export class QabulParentActions {
    getData() {
      return async (dispatch) => {
        dispatch({
          type: qabul_parent.request,
        });
        const res = await apiClientWithFetch.get("xalqaro_aloqa/all");
        if (res.status === 200) {
          dispatch({
            type: qabul_parent.get,
            payload: res.data,
          });
        } else {
          dispatch({
            type: qabul_parent.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    getDataById(id) {
      return async (dispatch) => {
        dispatch({
          type: qabul_parent.request,
        });
        const res = await apiClientWithFetch.get(`xalqaro_aloqa/${id}`);
        if (res.status === 200) {
          dispatch({
            type: qabul_parent.getById,
            payload: res.data,
          });
        } else {
          dispatch({
            type: qabul_parent.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    postData(body) {
      return async (dispatch) => {
        dispatch({
          type: qabul_parent.request,
        });
        const res = await apiClientWithFetch.add("xalqaro_aloqa/add", body);
        if (res.status === 200) {
          dispatch({
            type: qabul_parent.post,
            payload: res.data,
          });
        } else {
          dispatch({
            type: qabul_parent.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    updateData(id, body) {
      return async (dispatch) => {
        dispatch({
          type: qabul_parent.request,
        });
        const res = await apiClientWithFetch.update(`xalqaro_aloqa/${id}`, body);
        if (res.status === 200) {
          dispatch({
            type: qabul_parent.put,
            payload: res.data,
          });
        } else {
          dispatch({
            type: qabul_parent.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    deleteData(id) {
      return async (dispatch) => {
        dispatch({
          type: qabul_parent.request,
        });
        const res = await apiClientWithFetch.delete(`xalqaro_aloqa/${id}`);
        if (res.status === 200) {
          dispatch({
            type: qabul_parent.delete,
            payload: res.data,
          });
        } else {
          dispatch({
            type: qabul_parent.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  }
  
  export const qabul_child = {
    request: "REQ_ADM_CHILD",
    error: "ERR_ADM_CHILD",
    post: "POST_ADM_CHILD",
    get: "GET_ADM_CHILD",
    getById: "GETONE_ADM_CHILD",
    put: "PUT_ADM_CHILD",
    delete: "DELETE_ADM_CHILD",
  };
  
  export class QabulChildActions {
    getData() {
      return async (dispatch) => {
        dispatch({
          type: qabul_child.request,
        });
        const res = await apiClientWithFetch.get("xalqaro_aloqa_child/all");
        if (res.status === 200) {
          dispatch({
            type: qabul_child.get,
            payload: res.data,
          });
        } else {
          dispatch({
            type: qabul_child.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    getDataById(id) {
      return async (dispatch) => {
        dispatch({
          type: qabul_child.request,
        });
        const res = await apiClientWithFetch.get(`xalqaro_aloqa_child/${id}`);
        if (res.status === 200) {
          dispatch({
            type: qabul_child.getById,
            payload: res.data,
          });
        } else {
          dispatch({
            type: qabul_child.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    postData(body) {
      return async (dispatch) => {
        dispatch({
          type: qabul_child,
        });
        const res = await apiClientWithFetch.add("xalqaro_aloqa_child/add", body, true);
        if (res.status === 200) {
          dispatch({
            type: qabul_child.post,
            payload: res.data,
          });
        } else {
          dispatch({
            type: qabul_child.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    updateData(id, body) {
      return async (dispatch) => {
        dispatch({
          type: qabul_child.request,
        });
        const res = await apiClientWithFetch.update(`xalqaro_aloqa_child/${id}`, body);
        if (res.status === 200) {
          dispatch({
            type: qabul_child.put,
            payload: res.data,
          });
        } else {
          dispatch({
            type: qabul_child.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    deleteData(id) {
      return async (dispatch) => {
        dispatch({
          type: qabul_child.request,
        });
        const res = await apiClientWithFetch.delete(`xalqaro_aloqa_child/${id}`);
        if (res.status === 200) {
          dispatch({
            type: qabul_child.delete,
            payload: res.data,
          });
        } else {
          dispatch({
            type: qabul_child.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  }
  