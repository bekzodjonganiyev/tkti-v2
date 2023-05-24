import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddForm } from "../../../components";
import { StudentChildActions, StudentParentActions } from "./actions";

export const StudentCreate = () => {
  const dispatch = useDispatch();
  const selectorFuncParent = (state) => state.studentParent;
  const parentState = useSelector(selectorFuncParent);

  const childAction = new StudentChildActions();
  const parentAction = new StudentParentActions();

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
