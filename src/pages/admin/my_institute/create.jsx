import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddForm } from "../../../components";
import { MyInstituteChildActions, MyInstituteParentActions } from "./actions";

export const MyInstituteCreate = () => {
  const dispatch = useDispatch();
  const selectorFuncParent = (state) => state.myInstituteParent;
  const parentState = useSelector(selectorFuncParent);

  const childAction = new MyInstituteChildActions();
  const parentAction = new MyInstituteParentActions();

  useEffect(() => {
    dispatch(parentAction.getData());
  }, []);
  return (
    <div>
      <div>
        <AddForm
          parents={parentState?.data}
          postParent={(e) => {
            console.log(e);
            dispatch(parentAction.postData(JSON.stringify(e)));
          }}
          loading={parentState.loading}
          postChild={(e) => dispatch(childAction.postData(e))}
        />
      </div>
    </div>
  );
};
