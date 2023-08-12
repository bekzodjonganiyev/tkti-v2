import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddForm } from "../../../components";
import {  XalqaroChildActions, XalqaroParentActions} from "./actions";
import { useState } from "react";

export const XalqaroCreate = () => {
  const dispatch = useDispatch();
  const [ refresh, setRefresh ] = useState(false)

  const selectorFuncParent = (state) => state.xalqaroParent;
  const parentState = useSelector(selectorFuncParent);

  const childAction = new XalqaroChildActions();
  const parentAction = new XalqaroParentActions();

  useEffect(() => {
    dispatch(parentAction.getData());
  }, []);

  const childCreate = (e, successCallback, errorCallback) => {
    dispatch(childAction.postData(e,
      (res) => {
        successCallback(res)
      },
      // =------------------ ERROR CALLBACK ------------------=
      (res) => {
        errorCallback(res)
      }
      ))
      setRefresh(!refresh)
  }

  return (
    <div>
      <AddForm
        parents={parentState?.data}
        postParent={(e) => {console.log(e); dispatch(parentAction.postData(JSON.stringify(e)))}}
        loading={parentState.loading}
        postChild={childCreate}
        ifCreateSuccessWhereTo={"int_connections"}
      />
    </div>
  );
};
