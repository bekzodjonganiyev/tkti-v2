import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { EditForm } from "../../../components";
import { LidershipChildActions, LidershipParentActions } from "./actions";
import { LidershipEditForm } from "../../../components/edit_form/LidershipEditForm";

export const LidershipEdit = () => {
  const { page, id } = useParams();
  const dispatch = useDispatch();

  const selectorFuncParent = (state) => state.lidershipParent;
  const selectorFuncChild = (state) => state.lidershipChild;

  const parentState = useSelector(selectorFuncParent);
  const childState = useSelector(selectorFuncChild);

  const parentAction = new LidershipParentActions();
  const childAction = new LidershipChildActions();

  useEffect(() => {
    dispatch(childAction.getDataById(page));
    dispatch(parentAction.getData());
  }, [id]);


  
  return (
    <div>
      <LidershipEditForm
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
