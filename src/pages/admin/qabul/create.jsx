import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddForm } from "../../../components";
import { QabulChildActions, QabulParentActions } from "./actions";

export const QabulCreate = () => {
  const dispatch = useDispatch();
  const selectorFuncParent = (state) => state.qabulParent;
  const parentState = useSelector(selectorFuncParent);

  const childAction = new QabulChildActions();
  const parentAction = new QabulParentActions();

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
