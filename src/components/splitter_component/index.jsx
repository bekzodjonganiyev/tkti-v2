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

  if (loading) return <h1>Loading</h1>;

  if (data?.child?.length > 0) {
    return (
      <div className="container mx-auto">
        <ul className="grid grid-cols-3  gap-10">
          {data?.child?.map((item) => (
            <Link
              key={item._id}
              to={`/${path.page}_child/${item._id}/${item.title_uz}`}
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
