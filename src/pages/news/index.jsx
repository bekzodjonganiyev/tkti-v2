import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { NewsActions } from "./actions";
import { Link } from "react-router-dom";
import { NewsCard } from "../../components/card/NewsCard";
import {CalendarIcon, FacebookIcon, LeftArrow, Linkedin, Talim, TelegramIcon} from "../../assets/icons";

import { baseURL } from "../../services/http";
import {time} from "../../services/dateFormatter.js";

export { newsReducer } from "./reducer";

export const News = ({ home }) => {
  const { t } = useTranslation();
  const { getData, getDataById, deleteData } = new NewsActions();

  const getNews = (state) => state.news;
  const { data, dataById, loading, error } = useSelector(getNews);
  const dispatch = useDispatch();

  const [category, setCategory] = useState("yangilik")




  useEffect(() => {
    dispatch(getData(category));
  }, [category]);

  const cutter = home ? 6 : undefined

  if (error) return <h1>{error}</h1>;
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">{t("HomePage.1.name")}</h1>
        <Link  to={`/${i18next.language}/news`} className="flex items-center gap-1">{t("HomePage.6.name")} <LeftArrow /></Link>
      </div>
      <div className="flex gap-4 mb-5">
        <button onClick={() => setCategory("yangilik")} className="border border-indigo-900 hover:bg-indigo-900 hover:text-white transition-colors py-2 px-4 rounded-2xl ">
        {t("HomePage.1.name")}
        </button>
        <button onClick={() => setCategory("elon")} className="border border-indigo-900 hover:bg-indigo-900 hover:text-white transition-colors py-2 px-4 rounded-2xl ">
        {t("HomePage.2.name")}
        </button>
        <button onClick={() => setCategory("video")} className="border border-indigo-900 hover:bg-indigo-900 hover:text-white transition-colors py-2 px-4 rounded-2xl ">
        {t("HomePage.5.name")}
        </button>
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.slice(0,cutter).map((item) => (
            <NewsCard
              key={item._id}
              id={item.title_uz}
              dateProps={item.date}
              img={`${baseURL}${item.photo}`}
              title={t("NewsCard.title", {
                news_card_title: `${item?.[`title_${i18next.language}`]}`,
              })}
            />
          ))}
        </div>
      )}

    </div>
  );
};
