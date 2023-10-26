import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddForm } from "../../../components";
import { QabulChildActions, QabulParentActions } from "./actions";
import { useState } from "react";

export const QabulCreate = () => {
  const dispatch = useDispatch();
  const [ refresh, setRefresh ] = useState(false)

  const selectorFuncParent = (state) => state.qabulParent;
  const parentState = useSelector(selectorFuncParent);

  const childAction = new QabulChildActions();
  const parentAction = new QabulParentActions();

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
        postParent={(e) => {dispatch(parentAction.postData(JSON.stringify(e)))}}
        loading={parentState.loading}
        postChild={childCreate}
        ifCreateSuccessWhereTo={"admission"}
      />
    </div>
  );
};