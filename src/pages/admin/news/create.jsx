import { useDispatch, useSelector } from "react-redux";

import { AddForm } from "../../../components";
import { NewsActions } from "./actions";
import { useState } from "react";

export const NewsCreate = () => {
  const dispatch = useDispatch();
  const [ refresh, setRefresh ] = useState(false)

  const selectorFuncParent = (state) => state.news;
  const newsState = useSelector(selectorFuncParent);
  const newsAction = new NewsActions();

  const childCreate = (e, successCallback, errorCallback) => {
    dispatch(newsAction.postData(e,
      (res) => {
        successCallback(res)
      },
      // =------------------ ERROR CALLBACK ------------------=
      (res) => {
        errorCallback(res)
      }
      ))
      setRefresh(!refresh)
  }

  return (
    <div>
      <AddForm
        newsForm={true}
        loading={newsState.loading}
        postChild={childCreate}
        ifCreateSuccessWhereTo={"news"}
      />
    </div>
  );
};
