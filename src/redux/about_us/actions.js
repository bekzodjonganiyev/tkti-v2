import axios from "axios";

import { ABOUT_US } from "./types";
import clientApi from "../../services/clientApi";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    clientApi
      .getAll("/about_us")
      .then((response) => {
        // response.data is the users
        dispatch(fetchUsersSuccess(response));
      })
      .catch((error) => {
        // error.mssage is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const fetchUsersRequest = () => {
  return {
    type: ABOUT_US.request,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: ABOUT_US.add,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: ABOUT_US.error,
    payload: error,
  };
};

