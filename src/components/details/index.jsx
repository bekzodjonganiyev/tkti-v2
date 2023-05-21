import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useSelector, useDispatch } from "react-redux";

import { DetailsActions } from "./actions";
import { CalendarIcon } from "../../assets/icons";
export { detailsReducer } from "./reducer";

export const Details = (myKey) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { getDataById } = new DetailsActions();
  const dispatch = useDispatch();

  const getNews = (state) => state.details;
  const { loading, error, dataById } = useSelector(getNews);

  useEffect(() => {
    dispatch(getDataById(id));
  }, []);

  if (error) return <h1>{error}</h1>;
  return (
    <div className="container mx-auto w-[80%] ">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="w-full">
          <div className="lg:w-9/12 w-full flex flex-wrap gap-5">
            <CalendarIcon />
            salom
            <span className="font-bold">{dataById.date}</span>
          </div>
          <h1 className="text-4xl font-bold mb-8">
            {t("NewsCard.title", {
              news_card_title: `${dataById?.[`title_${i18next.language}`]}`,
            })}
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: t("NewsCard.body", {
                news_card_body: `${dataById?.[`body_${i18next.language}`]}`,
              }),
            }}
          />
        </div>
      )}
      {loading ? <h1>Loading...</h1> : <span></span>}
    </div>
  );
};
