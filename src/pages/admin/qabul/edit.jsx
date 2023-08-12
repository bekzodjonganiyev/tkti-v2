import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { EditForm } from "../../../components";
import { QabulChildActions, QabulParentActions } from "./actions";

export const QabulChildEdit = () => {
  const { page, id } = useParams();
  const dispatch = useDispatch();
  const [ refresh, setRefresh ] = useState(false)

  const selectorFuncParent = (state) => state.qabulParent;
  const selectorFuncChild = (state) => state.qabulChild;
  const parentState = useSelector(selectorFuncParent);
  const childState = useSelector(selectorFuncChild);

  const parentAction = new QabulParentActions();
  const childAction = new QabulChildActions();

  useEffect(() => {
    dispatch(childAction.getDataById(page));
    dispatch(parentAction.getData());
  }, [id]);

  const childUpdate = (e, successCallback, errorCallback) => {
    console.log("OK");
    dispatch(childAction.updateData(id, e,
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
        ifUpdateSuccessWhereTo={"admission"}
      />
    </div>
  );
};
