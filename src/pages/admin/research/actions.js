export const research_parent = {
    request: "REQ_RESERCH",
    error: "ERR_RESERCH",
    post: "POST_RESERCH",
    get: "GET_RESERCH",
    getById: "GETONE_RESERCH",
    put: "PUT_RESERCH",
    delete: "DELETE_RESERCH",
  };
  
  import apiClientWithFetch from "../../../services/apiClientWithFetch";
  
  export class ResearchParentActions {
    getData() {
      return async (dispatch) => {
        dispatch({
          type: research_parent.request,
        });
        const res = await apiClientWithFetch.get("ilmiy_tad/all");
        if (res.status === 200) {
          dispatch({
            type: research_parent.get,
            payload: res.data,
          });
        } else {
          dispatch({
            type: research_parent.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    getDataById(id) {
      return async (dispatch) => {
        dispatch({
          type: research_parent.request,
        });
        const res = await apiClientWithFetch.get(`ilmiy_tad/${id}`);
        if (res.status === 200) {
          dispatch({
            type: research_parent.getById,
            payload: res.data,
          });
        } else {
          dispatch({
            type: research_parent.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    postData(body) {
      return async (dispatch) => {
        dispatch({
          type: research_parent,
        });
        const res = await apiClientWithFetch.add("ilmiy_tad/add", body);
        if (res.status === 200) {
          dispatch({
            type: research_parent.post,
            payload: res.data,
          });
        } else {
          dispatch({
            type: research_parent.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    updateData(id, body) {
      return async (dispatch) => {
        dispatch({
          type: research_parent.request,
        });
        const res = await apiClientWithFetch.update(`ilmiy_tad/${id}`, body);
        if (res.status === 200) {
          dispatch({
            type: research_parent.put,
            payload: res.data,
          });
        } else {
          dispatch({
            type: research_parent.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    deleteData(id) {
      return async (dispatch) => {
        dispatch({
          type: research_parent.request,
        });
        const res = await apiClientWithFetch.delete(`ilmiy_tad/${id}`);
        if (res.status === 200) {
          dispatch({
            type: research_parent.delete,
            payload: res.data,
          });
        } else {
          dispatch({
            type: research_parent.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  }
  
  export const research_child = {
    request: "REQ_RESERCH_CHILD",
    error: "ERR_RESERCH_CHILD",
    post: "POST_RESERCH_CHILD",
    get: "GET_RESERCH_CHILD",
    getById: "GETONE_RESERCH_CHILD",
    put: "PUT_RESERCH_CHILD",
    delete: "DELETE_RESERCH_CHILD",
  };
  
  export class ResearchChildActions {
    getData() {
      return async (dispatch) => {
        dispatch({
          type: research_child.request,
        });
        const res = await apiClientWithFetch.get("ilmiy_tad_child/all");
        if (res.status === 200) {
          dispatch({
            type: research_child.get,
            payload: res.data,
          });
        } else {
          dispatch({
            type: research_child.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    getDataById(id) {
      return async (dispatch) => {
        dispatch({
          type: research_child.request,
        });
        const res = await apiClientWithFetch.get(`ilmiy_tad_child/${id}`);
        if (res.status === 200) {
          dispatch({
            type: research_child.getById,
            payload: res.data,
          });
        } else {
          dispatch({
            type: research_child.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    postData(body) {
      return async (dispatch) => {
        dispatch({
          type: research_child,
        });
        const res = await apiClientWithFetch.add("ilmiy_tad_child/add", body, true);
        if (res.status === 200) {
          dispatch({
            type: research_child.post,
            payload: res.data,
          });
        } else {
          dispatch({
            type: research_child.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    updateData(id, body) {
      return async (dispatch) => {
        dispatch({
          type: research_child.request,
        });
        const res = await apiClientWithFetch.update(`ilmiy_tad_child/${id}`, body, true);
        if (res.status === 200) {
          dispatch({
            type: research_child.put,
            payload: res.data,
          });
        } else {
          dispatch({
            type: research_child.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    deleteData(id) {
      return async (dispatch) => {
        dispatch({
          type: research_child.request,
        });
        const res = await apiClientWithFetch.delete(`ilmiy_tad_child/${id}`);
        if (res.status === 200) {
          dispatch({
            type: research_child.delete,
            payload: res.data,
          });
        } else {
          dispatch({
            type: research_child.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  }
  