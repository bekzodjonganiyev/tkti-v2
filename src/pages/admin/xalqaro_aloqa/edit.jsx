import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { EditForm } from "../../../components";

import { XalqaroChildActions, XalqaroParentActions } from "./actions";

export const XalqaroChildEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectorFuncParent = (state) => state.xalqaroParent;
  const selectorFuncChild = (state) => state.xalqaroChild;
  const parentState = useSelector(selectorFuncParent);
  const childState = useSelector(selectorFuncChild);

  const parentAction = new XalqaroParentActions();
  const childAction = new XalqaroChildActions();

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
