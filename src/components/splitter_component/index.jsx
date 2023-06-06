import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import i18next from "i18next";

import { Loader } from "../loader/Loader";

import { SplitterComponentActions } from "./action";
import { useAppContext } from "../../context/app.context";
import { time } from "../../services/dateFormatter";

export { splitterCompReducer } from "./reducer";
export const SplitterComponent = ({ children }) => {
  const dispatch = useDispatch();
  const { getData } = new SplitterComponentActions();
  const selectorFunc = (state) => state.splitterComp;
  const { data, loading } = useSelector(selectorFunc);

  // route da mongodb ning id sini olib tashlashlandi va id context orqali olib kelindi
  const { idForFetch, setIdForFetch } = useAppContext();

  const { page } = useParams();

  useEffect(() => {
    dispatch(getData(`${page}/${idForFetch}`));
  }, [page, idForFetch]);

  if (loading) return <Loader />;

  if (data?.child?.length > 1) {
    return (
      <div className="container mx-auto py-10">
        <ul className="flex flex-col gap-10">
          {data?.child?.map((item) => (
            <li className="bg-stone-50 rounded border-2 border-stone-200 px-10 py-7" key={item._id}>
              <Link
                onClick={() => setIdForFetch(item._id)}
                to={`/${page}_child/${item.title_uz}`}
                className="w-full block text-2xl mb-5 font-semibold"
              >
                {item[`title_${i18next.language}`]}
              </Link>
              <span className="text-xl">{time(item.date)}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return children;
  }
};
