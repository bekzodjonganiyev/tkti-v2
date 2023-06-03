import { useEffect } from "react";
import i18next from "i18next";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import "./style.css";

import { UniversalComponentActions } from "./action";

export { genericComReducer } from "./reducer";
export const UniversalComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { getData } = new UniversalComponentActions();
  const genericCom = (state) => state.genericCom;
  const { data, loading } = useSelector(genericCom);

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

  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold mb-10">
        {data[`title_${i18next.language}`]}
      </h1>

      {path.page.split("_")[2] === "child" ? (
        <div
          dangerouslySetInnerHTML={{
            __html: t("MoreDetails.body", {
              more_details_body: `${data?.[`body_${i18next.language}`]}`,
            }),
          }}
        />
      ) : (
        data?.child?.map((item) => (
          <div
            dangerouslySetInnerHTML={{
              __html: t("MoreDetails.body", {
                more_details_body: `${item?.[`body_${i18next.language}`]}`,
              }),
            }}
          />
        ))
      )}
    </div>
  );
};
