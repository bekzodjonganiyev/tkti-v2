import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { EditForm } from "../../../components";
import { EducationChildActions, EducationParentActions } from "./actions";

export const EducationChildEdit = () => {
  const { page, id } = useParams();
  const dispatch = useDispatch();
  const [ refresh, setRefresh ] = useState(false)

  const selectorFuncParent = (state) => state.educationParent;
  const selectorFuncChild = (state) => state.educationChild;

  const parentState = useSelector(selectorFuncParent);
  const childState = useSelector(selectorFuncChild);

  const parentAction = new EducationParentActions();
  const childAction = new EducationChildActions();

  useEffect(() => {
    dispatch(childAction.getDataById(page));
    dispatch(parentAction.getData());
  }, [id, refresh]);


  const childUpdate = (e, successCallback, errorCallback) => {
    dispatch(childAction.updateData(id, e,
      // =------------------ SUCCESS CALLBACK ---------------=
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
        ifUpdateSuccessWhereTo={"education"}
      />
    </div>
  );
};
