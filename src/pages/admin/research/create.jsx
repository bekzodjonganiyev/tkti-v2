import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddForm } from "../../../components";
import {  ResearchChildActions, ResearchParentActions } from "./actions";
export const ResearchCreate = () => {
  const dispatch = useDispatch();
  const selectorFuncParent = (state) => state.researchParent;
  const parentState = useSelector(selectorFuncParent);

  const childAction = new ResearchChildActions();
  const parentAction = new ResearchParentActions();

  useEffect(() => {
    dispatch(parentAction.getData());
  }, []);
  return (
    <div>
      <AddForm
        parents={parentState?.data}
        postParent={(e) => {console.log(e); dispatch(parentAction.postData(JSON.stringify(e)))}}
        loading={parentState.loading}
        postChild={(e) => dispatch(childAction.postData(e))}
      />
    </div>
  );
};
