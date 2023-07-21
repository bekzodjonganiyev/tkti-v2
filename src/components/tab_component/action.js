export const tabCompActionTypes = {
  loading: "TAB_COMP_LOADING",
  error: "TAB_COMP_ERROR",
  getById: "TAB_COMP_GET_BY_ID",
};

import apiClientWithFetch from "../../services/apiClientWithFetch";

export const getById = (url) => {
    return async (dispatch) => {
        dispatch({
            type: tabCompActionTypes.loading
        })
        const res = await apiClientWithFetch.get(url)
        if (res.status === 200) {
            dispatch({
                type: tabCompActionTypes.getById,
                payload: res.data
            })
        } else {
            dispatch({
                type: tabCompActionTypes.error,
                payload: res?.status ? res.status : res,
            })
        }
    }
};


