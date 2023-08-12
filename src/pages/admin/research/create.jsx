import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddForm } from "../../../components";
import {  ResearchChildActions, ResearchParentActions } from "./actions";
import { useState } from "react";
export const ResearchCreate = () => {
  const dispatch = useDispatch();
  const [ refresh, setRefresh ] = useState(false)

  const selectorFuncParent = (state) => state.researchParent;
  const selectorFuncChild = (state) => state.researchChild;
  const parentState = useSelector(selectorFuncParent);
  const childState = useSelector(selectorFuncChild);

  const childAction = new ResearchChildActions();
  const parentAction = new ResearchParentActions();

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
        success={childState.success}
        ifCreateSuccessWhereTo={"research"}
      />
    </div>
  );
};
