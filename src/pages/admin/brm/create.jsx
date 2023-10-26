import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddForm } from "../../../components";
import { BrmChildActions, BrmParentActions } from "./actions";

export const BrmCreate = () => {
  const dispatch = useDispatch();
  const selectorFuncParent = (state) => state.brmParent;
  const parentState = useSelector(selectorFuncParent);

  const childAction = new BrmChildActions();
  const parentAction = new BrmParentActions();

  useEffect(() => {
    dispatch(parentAction.getData());
  }, []);

  const fmData = new FormData()
  return (
    <div>
      <div>
        <AddForm
          parents={parentState?.data}
          postParent={(e) => {
            Object.entries(e).forEach(([key, value]) => {
              fmData.append(key, value)
            })
            dispatch(parentAction.postData(fmData));
          }}
          loading={parentState.loading}
          postChild={(e) => dispatch(childAction.postData(e))}
          isBrm={true}
        />

      </div>
    </div>
  );
};
