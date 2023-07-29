import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { EditForm } from "../../../components";
import { ResearchParentActions, ResearchChildActions } from "./actions";

export const ResearchChildEdit = () => {
  const { page, id } = useParams();
  const dispatch = useDispatch();

  const selectorFuncParent = (state) => state.researchParent;
  const selectorFuncChild = (state) => state.researchChild;
  const parentState = useSelector(selectorFuncParent);
  const childState = useSelector(selectorFuncChild);

  const parentAction = new ResearchParentActions();
  const childAction = new ResearchChildActions();

  useEffect(() => {
    dispatch(childAction.getDataById(page));
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