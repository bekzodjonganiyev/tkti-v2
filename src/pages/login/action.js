export const authTypes = {
  req: "REQ_AUTH",
  err: "ERR_AUTH",
  success: "SUCCESS_AUTH",
  hasUser: "CHECK_USER_AUTH",
};

import apiClientWithFetch from "../../services/apiClientWithFetch";

export class AuthActions {
  login(body) {
    return async (dispatch) => {
      dispatch({
        type: authTypes.req,
      });

      const res = await apiClientWithFetch.add("auth/login", body);
      if (res?.status === 200) {
        dispatch({
          type: authTypes.success,
          payload: res.data,
        });
      } else {
        dispatch({
          type: authTypes.fail,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }

  checkStatus() {
    return async (dispatch) => {
      dispatch({
        type: authTypes.req,
      });

      const res = apiClientWithFetch.get("kafedra_hodim/all");
      if (res?.status === 200) {
        dispatch({
          type: authTypes.hasUser,
          payload: true,
        });
      } else {
        dispatch({
          type: authTypes.err,
          payload: res?.status ? res.status : res,
        });
      }
    };
  }
}
