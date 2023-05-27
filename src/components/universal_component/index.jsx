import { useEffect } from "react";
import i18next from "i18next";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { UniversalComponentActions } from "./action";

export { genericComReducer } from "./reducer";
export const UniversalComponent = () => {
  const dispatch = useDispatch();

  const { getData } = new UniversalComponentActions();
  const genericCom = (state) => state.genericCom;
  const { data, loading } = useSelector(genericCom);

  const path = useParams();

  useEffect(() => {
    dispatch(getData(`${path?.page}/${path.id}`));
  }, [path?.page, path?.id]);

  if (loading) return <h1 className="text-2xl">Loading...</h1>;

  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold mb-10">
        {data[`title_${i18next.language}`]}
      </h1>

      {path.page.split("_")[2] === "child"
        ? <div dangerouslySetInnerHTML={{ __html: data.body_uz }}/>
        : data?.child?.map((item) => (
            <div dangerouslySetInnerHTML={{ __html: item.body_uz }} />
          ))}
    </div>
  );
};
