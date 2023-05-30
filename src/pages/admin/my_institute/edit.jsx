import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { EditForm } from "../../../components";
import { MyInstituteChildActions, MyInstituteParentActions } from "./actions";

export const MyInstituteChildEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectorFuncParent = (state) => state.myInstituteParent;
  const selectorFuncChild = (state) => state.myInstituteChild;
  const parentState = useSelector(selectorFuncParent);
  const childState = useSelector(selectorFuncChild);

  const parentAction = new MyInstituteParentActions();
  const childAction = new MyInstituteChildActions();

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
