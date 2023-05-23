export const student_parent={
    request: "REQ_STD_PARENT",
    error: "ERR_INT_PARENT",
    post: "POST_STD_PARENT",
    get: "GET_STD_PARENT",
    getById: "GETONE_STD_PARENT",
    put: "PUT_STD_PARENT",
    delete: "DELETE_STD_PARENT",
};

import apiClientWithFetch from "../../../services/apiClientWithFetch";

export class StudentParentActions{
    getData() {
        return async (dispatch) => {
          dispatch({
            type: student_parent.request,
          });
          const res = await apiClientWithFetch.get("student/all");
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
          const res = await apiClientWithFetch.get(`student/${id}`);
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
          const res = await apiClientWithFetch.add("student/add", body);
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
          const res = await apiClientWithFetch.update(`student/${id}`, body);
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
          const res = await apiClientWithFetch.delete(`student/${id}`);
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
    request: "REQ_STD_CHILD",
    error: "ERR_INT_CHILD",
    post: "POST_STD_CHILD",
    get: "GET_STD_CHILD",
    getById: "GETONE_STD_CHILD",
    put: "PUT_STD_CHILD",
    delete: "DELETE_STD_CHILD",
  };
  
  export class StudentChildActions {
    getData() {
      return async (dispatch) => {
        dispatch({
          type: student_child.request,
        });
        const res = await apiClientWithFetch.get("student_bolim/all");
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
        const res = await apiClientWithFetch.get(`student_bolim/${id}`);
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
        const res = await apiClientWithFetch.add("student_bolim/add", body);
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
        const res = await apiClientWithFetch.update(`student_bolim/${id}`, body);
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
        const res = await apiClientWithFetch.delete(`student_bolim/${id}`);
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
  