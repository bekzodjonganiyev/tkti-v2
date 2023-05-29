import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { EditForm } from "../../../components";
import { EducationChildActions, EducationParentActions } from "./actions";

export const EducationChildEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectorFuncParent = (state) => state.educationParent;
  const selectorFuncChild = (state) => state.educationChild;
  const parentState = useSelector(selectorFuncParent);
  const childState = useSelector(selectorFuncChild);

  const parentAction = new EducationParentActions();
  const childAction = new EducationChildActions();

  useEffect(() => {
    dispatch(childAction.getDataById(id));
    dispatch(parentAction.getData());
  }, [id]);
  return (
    <div>
      <EditForm
        childById={childState?.dataById}
        parents={parentState?.data}
        putChild={(e) => {
          dispatch(childAction.updateData(id, e));
        }}
        loading={childState?.loading}
      />
    </div>
  );
};
