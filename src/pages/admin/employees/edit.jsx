import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { EditForm } from "../../../components";
import { EmploeyeesChildActions, EmployeesParentActions } from "./actions";

export const EmployeesEdit = () => {
  const { page, id } = useParams();
  const dispatch = useDispatch();

  const selectorFuncParent = (state) => state.employeesParent;
  const selectorFuncChild = (state) => state.employeesChild;

  const parentState = useSelector(selectorFuncParent);
  const childState = useSelector(selectorFuncChild);

  const parentAction = new EmployeesParentActions();
  const childAction = new EmploeyeesChildActions();

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
