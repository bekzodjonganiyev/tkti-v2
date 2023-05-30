import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { EditForm } from "../../../components";
import { StudentChildActions, StudentParentActions } from "./actions";

export const StudentChildEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectorFuncParent = (state) => state.studentParent;
  const selectorFuncChild = (state) => state.studentChild;
  const parentState = useSelector(selectorFuncParent);
  const childState = useSelector(selectorFuncChild);

  const parentAction = new StudentParentActions();
  const childAction = new StudentChildActions();

  useEffect(() => {
    dispatch(childAction.getDataById(id));
    dispatch(parentAction.getData());
  }, [id]);

  return (
    <div>
      <EditForm
        childById={childState?.dataById}
        parents={parentState?.data}
        putChild={(e) => dispatch(childAction.updateData(id, e))}
        loading={childState?.loading}
      />
    </div>
  );
};
