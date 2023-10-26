import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddForm } from "../../../components";
import {  PressclubChildActions, PressclubParentActions } from "./actions";

export const PressclubCreate = () => {
  const dispatch = useDispatch();
  const selectorFuncParent = (state) => state.pressclubParent;
  const parentState = useSelector(selectorFuncParent);

  const childAction = new PressclubChildActions();
  const parentAction = new PressclubParentActions();

  useEffect(() => {
    dispatch(parentAction.getData());
  }, []);
  return (
    <div>
      <div>
        <AddForm
          parents={parentState?.data}
          postParent={(e) => {
            console.log(e);
            dispatch(parentAction.postData(JSON.stringify(e)));
          }}
          loading={parentState.loading}
          postChild={(e) => dispatch(childAction.postData(e))}
        />
      </div>
    </div>
  );
};