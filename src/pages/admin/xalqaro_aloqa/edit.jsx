import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { EditForm } from "../../../components";

import { XalqaroChildActions, XalqaroParentActions } from "./actions";
import { useState } from "react";

export const XalqaroChildEdit = () => {
  const { page, id } = useParams();
  const dispatch = useDispatch();
  const [ refresh, setRefresh ] = useState(false)

  const selectorFuncParent = (state) => state.xalqaroParent;
  const selectorFuncChild = (state) => state.xalqaroChild;
  const parentState = useSelector(selectorFuncParent);
  const childState = useSelector(selectorFuncChild);

  const parentAction = new XalqaroParentActions();
  const childAction = new XalqaroChildActions();

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
        ifUpdateSuccessWhereTo={"int_connections"}
      />
    </div>
  );
};
