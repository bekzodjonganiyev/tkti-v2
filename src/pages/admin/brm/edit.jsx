import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { EditForm } from "../../../components";
import { BrmChildActions, BrmParentActions } from "./actions";

export const BrmChildEdit = () => {
  const { page, id } = useParams();
  const dispatch = useDispatch();

  const selectorFuncParent = (state) => state.brmParent;
  const selectorFuncChild = (state) => state.brmChild;
  const parentState = useSelector(selectorFuncParent);
  const childState = useSelector(selectorFuncChild);

  const parentAction = new BrmParentActions();
  const childAction = new BrmChildActions();

  useEffect(() => {
    dispatch(childAction.getDataById(page));
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
