import { useDispatch, useSelector } from "react-redux";

import { AddForm } from "../../../components";
import { NewsActions } from "./actions";

export const NewsCreate = () => {
  const dispatch = useDispatch();
  const selectorFuncParent = (state) => state.news;
  const newsState = useSelector(selectorFuncParent);
  const newsAction = new NewsActions();

  return (
    <div>
      <AddForm
        newsForm={true}
        loading={newsState.loading}
        postChild={(e) => dispatch(newsAction.postData(e))}
      />
    </div>
  );
};
