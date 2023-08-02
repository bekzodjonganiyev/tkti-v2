export const media_types = {
    request: "REQ_MEDIA",
    error: "ERR_MEDIA",
    post: "POST_MEDIA",
    get: "GET_MEDIA",
    getById: "GETONE_MEDIA",
    put: "PUT_MEDIA",
    delete: "DELETE_MEDIA",
  };
  
  import apiClientWithFetch from "../../../services/apiClientWithFetch";
  
  export class MediaActions {
    getData(page) {
      return async (dispatch) => {
        dispatch({
          type: media_types.request,
        });
        const res = await apiClientWithFetch.get(`media/get/all?page=${page}`);
        if (res.status === 200) {
          sessionStorage.setItem('totalItems', JSON.stringify(res?.totalItems))
          dispatch({
            type: media_types.get,
            payload: res.data,
          });
        } else {
          dispatch({
            type: media_types.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    getDataById(id) {
      return async (dispatch) => {
        dispatch({
          type: media_types.request,
        });
        const res = await apiClientWithFetch.get(`media/${id}`);
        if (res.status === 200) {
          dispatch({
            type: media_types.getById,
            payload: res.data,
          });
        } else {
          dispatch({
            type: media_types.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    postData(body, successCallback, errorCallback) {
      return async (dispatch) => {
        dispatch({
          type: media_types.request,
        });
        const res = await apiClientWithFetch.add("media/add", body, true);
        if (res.status === 200) {
          dispatch({
            type: media_types.post,
            payload: res.data,
          });
          successCallback(res)
        } else {
          dispatch({
            type: media_types.error,
            payload: res?.status ? res.status : res,
          });
          errorCallback(res)
        }
      };
    }
  
    updateData(id, body) {
      return async (dispatch) => {
        dispatch({
          type: media_types.request,
        });
        const res = await apiClientWithFetch.update(`media/${id}`, body);
        if (res.status === 200) {
          dispatch({
            type: media_types.put,
            payload: res.data,
          });
        } else {
          dispatch({
            type: media_types.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  
    deleteData(id) {
      return async (dispatch) => {
        dispatch({
          type: media_types.request,
        });
        const res = await apiClientWithFetch.delete(`media/${id}`);
        if (res.status === 200) {
          dispatch({
            type: media_types.delete,
            payload: res.data,
          });
        } else {
          dispatch({
            type: media_types.error,
            payload: res?.status ? res.status : res,
          });
        }
      };
    }
  }