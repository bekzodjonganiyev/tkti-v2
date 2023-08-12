import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { EditForm } from "../../../components";
import { StudentChildActions, StudentParentActions } from "./actions";
import { useState } from "react";

export const StudentChildEdit = () => {
  const { page, id } = useParams();
  const dispatch = useDispatch();
  const [ refresh, setRefresh ] = useState(false)

  const selectorFuncParent = (state) => state.studentParent;
  const selectorFuncChild = (state) => state.studentChild;
  const parentState = useSelector(selectorFuncParent);
  const childState = useSelector(selectorFuncChild);

  const parentAction = new StudentParentActions();
  const childAction = new StudentChildActions();

  useEffect(() => {
    dispatch(childAction.getDataById(page));
    dispatch(parentAction.getData());
  }, [id, refresh]);

  useEffect(() => {
    setRefresh(!refresh)
  }, [])

  const childUpdate = (e, successCallback, errorCallback) => {
    dispatch(childAction.updateData(id, e,
      // =------------------ SUCCESS CALLBACK ----------------=
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
      <EditForm
        childById={childState?.dataById}
        parents={parentState?.data}
        putChild={childUpdate}
        loading={childState?.loading}
        ifUpdateSuccessWhereTo={"student"}
      />
    </div>
  );
};
