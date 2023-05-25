export const my_institute_parent = {
    request: "REQ_INS_PARENT",
    error: "ERR_INS_PARENT",
    post: "POST_INS_PARENT",
    get: "GET_INS_PARENT",
    getById: "GETONE_INS_PARENT",
    put: "PUT_INS_PARENT",
    delete: "DELETE_INS_PARENT",
  };
  
  import apiClientWithFetch from "../../../services/apiClientWithFetch";
  
  export class MyInstituteParentActions {
    getData() {
      return async (dispatch) => {
        dispatch({
          type: my_institute_parent.request,
        });
        const res = await apiClientWithFetch.get("my_tkti/all");
        if (res.status === 200) {
          dispatch({
            type: my_institute_parent.get,
            payload: res.data,
          });
        } else {
          dispatch({
            type: my_institute_parent.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    getDataById(id) {
      return async (dispatch) => {
        dispatch({
          type: my_institute_parent.request,
        });
        const res = await apiClientWithFetch.get(`my_tkti/${id}`);
        if (res.status === 200) {
          dispatch({
            type: my_institute_parent.getById,
            payload: res.data,
          });
        } else {
          dispatch({
            type: my_institute_parent.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    postData(body) {
      return async (dispatch) => {
        dispatch({
          type: my_institute_parent,
        });
        const res = await apiClientWithFetch.add("my_tkti/add", body);
        if (res.status === 200) {
          dispatch({
            type: my_institute_parent.post,
            payload: res.data,
          });
        } else {
          dispatch({
            type: my_institute_parent.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    updateData(id, body) {
      return async (dispatch) => {
        dispatch({
          type: my_institute_parent.request,
        });
        const res = await apiClientWithFetch.update(`my_tkti/${id}`, body);
        if (res.status === 200) {
          dispatch({
            type: my_institute_parent.put,
            payload: res.data,
          });
        } else {
          dispatch({
            type: my_institute_parent.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    deleteData(id) {
      return async (dispatch) => {
        dispatch({
          type: my_institute_parent.request,
        });
        const res = await apiClientWithFetch.delete(`my_tkti/${id}`);
        if (res.status === 200) {
          dispatch({
            type: my_institute_parent.delete,
            payload: res.data,
          });
        } else {
          dispatch({
            type: my_institute_parent.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  }
  
  export const my_institute_child = {
    request: "REQ_INS_CHILD",
    error: "ERR_INS_CHILD",
    post: "POST_INS_CHILD",
    get: "GET_INS_CHILD",
    getById: "GETONE_INS_CHILD",
    put: "PUT_INS_CHILD",
    delete: "DELETE_INS_CHILD",
  };
  
  export class MyInstituteChildActions {
    getData() {
      return async (dispatch) => {
        dispatch({
          type: my_institute_child.request,
        });
        const res = await apiClientWithFetch.get("my_tkti_child/all");
        if (res.status === 200) {
          dispatch({
            type: my_institute_child.get,
            payload: res.data,
          });
        } else {
          dispatch({
            type: my_institute_child.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    getDataById(id) {
      return async (dispatch) => {
        dispatch({
          type: my_institute_child.request,
        });
        const res = await apiClientWithFetch.get(`my_tkti_child/${id}`);
        if (res.status === 200) {
          dispatch({
            type: my_institute_child.getById,
            payload: res.data,
          });
        } else {
          dispatch({
            type: my_institute_child.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    postData(body) {
      return async (dispatch) => {
        dispatch({
          type: my_institute_child,
        });
        const res = await apiClientWithFetch.add("my_tkti_child/add", body, true);
        if (res.status === 200) {
          dispatch({
            type: my_institute_child.post,
            payload: res.data,
          });
        } else {
          dispatch({
            type: my_institute_child.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    updateData(id, body) {
      return async (dispatch) => {
        dispatch({
          type: my_institute_child.request,
        });
        const res = await apiClientWithFetch.update(`my_tkti_child/${id}`, body, true);
        if (res.status === 200) {
          dispatch({
            type: my_institute_child.put,
            payload: res.data,
          });
        } else {
          dispatch({
            type: my_institute_child.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    deleteData(id) {
      return async (dispatch) => {
        dispatch({
          type: my_institute_child.request,
        });
        const res = await apiClientWithFetch.delete(`my_tkti_child${id}`);
        if (res.status === 200) {
          dispatch({
            type: my_institute_child.delete,
            payload: res.data,
          });
        } else {
          dispatch({
            type: my_institute_child.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  }
  