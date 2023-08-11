export const faoliyat_parent = {
  request: "REQ_FAOLIYAT",
  error: "ERR_FAOLIYAT",
  post: "POST_FAOLIYAT",
  get: "GET_FAOLIYAT",
  getById: "GETONE_FAOLIYAT",
  put: "PUT_FAOLIYAT",
  delete: "DELETE_FAOLIYAT", 
};

import apiClientWithFetch from "../../../services/apiClientWithFetch";

export class FaoliyatActions {
  getData() {
    return async (dispatch) => {
      dispatch({
        type: faoliyat_parent.request,
      });
      const res = await apiClientWithFetch.get("faoliyat/all");
      if (res.status === 200) {
        dispatch({
          type: faoliyat_parent.get,
          payload: res.data,
        });
      } else {
        dispatch({
          type: faoliyat_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  getDataById(id) {
    return async (dispatch) => {
      dispatch({
        type: faoliyat_parent.request,
      });
      const res = await apiClientWithFetch.get(`faoliyat/${id}`);
      if (res.status === 200) {
        dispatch({
          type: faoliyat_parent.getById,
          payload: res.data,
        });
      } else {
        dispatch({
          type: faoliyat_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  postData(body) {
    return async (dispatch) => {
      dispatch({
        type: faoliyat_parent.request,
      });
      const res = await apiClientWithFetch.add("faoliyat/add", body);
      if (res.status === 200) {
        dispatch({
          type: faoliyat_parent.post,
          payload: res.data,
        });
      } else {
        dispatch({
          type: faoliyat_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  updateData(id, body) {
    return async (dispatch) => {
      dispatch({
        type: faoliyat_parent.request,
      });
      const res = await apiClientWithFetch.update(`faoliyat/${id}`, body);
      if (res.status === 200) {
        dispatch({
          type: faoliyat_parent.put,
          payload: res.data,
        });
      } else {
        dispatch({
          type: faoliyat_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  deleteData(id) {
    return async (dispatch) => {
      dispatch({
        type: faoliyat_parent.request,
      });
      const res = await apiClientWithFetch.delete(`faoliyat/${id}`);
      if (res.status === 200) {
        dispatch({
          type: faoliyat_parent.delete,
          payload: res.data,
        });
      } else {
        dispatch({
          type: faoliyat_parent.error,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
