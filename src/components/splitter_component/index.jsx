import { useEffect } from "react";
import i18next from "i18next";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { SplitterComponentActions } from "./action";

export { splitterCompReducer } from "./reducer";
export const SplitterComponent = ({ children }) => {
  const dispatch = useDispatch();

  const { getData } = new SplitterComponentActions();
  const selectorFunc = (state) => state.splitterComp;
  const { data, loading } = useSelector(selectorFunc);

  const path = useParams();

  useEffect(() => {
    dispatch(getData(`${path?.page}/${path.id}`));
  }, [path?.page, path?.id]);

  if (loading)
    return (
      <div className="max-w-3xl mx-auto px-4 py-6 ">
        <div className="animate-pulse space-y-6">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-8 bg-gray-200 rounded"></div>
          <div className="h-6 bg-gray-200 rounded"></div>
        </div>
      </div>
    );

  if (data?.child?.length > 1) {
    return (
      <div className="container mx-auto">
        <ul className="grid grid-cols-3  gap-10">
          {data?.child?.map((item) => (
            <Link
              key={item._id}
              to={`/${path.page}_child/${item._id}`}
              className="bg-stone-100 rounded-md py-2 px-4"
            >
              {item[`title_${i18next.language}`]}
            </Link>
          ))}
        </ul>
      </div>
    );
  } else {
    return children;
  }
};
