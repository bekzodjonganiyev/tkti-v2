import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddForm } from "../../../components";
import { StudentChildActions, StudentParentActions } from "./actions";

export const StudentCreate = () => {
  const dispatch = useDispatch();
  const [ refresh, setRefresh ] = useState(false)
  const selectorFuncParent = (state) => state.studentParent;
  const parentState = useSelector(selectorFuncParent);

  const childAction = new StudentChildActions();
  const parentAction = new StudentParentActions();

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
        ifCreateSuccessWhereTo={"student"}
      />
    </div>
  );
};
