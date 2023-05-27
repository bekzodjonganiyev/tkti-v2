import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddForm } from "../../../components";
import { EducationChildActions, EducationParentActions } from "./actions";
export const EducationCreate = () => {
  const dispatch = useDispatch();
  const selectorFuncParent = (state) => state.educationParent;
  const parentState = useSelector(selectorFuncParent);

  const childAction = new EducationChildActions();
  const parentAction = new EducationParentActions();

  useEffect(() => {
    dispatch(parentAction.getData());
  }, []);
  return (
    <div>
      <AddForm
        parents={parentState?.data}
        postParent={(e) => {
          dispatch(parentAction.postData(JSON.stringify(e)));
        }}
        loading={parentState.loading}
        postChild={(e) => dispatch(childAction.postData(e))}
      />
    </div>
  );
};
