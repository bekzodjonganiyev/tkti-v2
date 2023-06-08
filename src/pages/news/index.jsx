import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { NewsActions } from "./actions";
import { Link } from "react-router-dom";
import { NewsCard } from "../../components/card/NewsCard";

export { newsReducer } from "./reducer";

export const News = ({ home }) => {
  const { t } = useTranslation();
  const { getData, getDataById, deleteData } = new NewsActions();

  const getNews = (state) => state.news;
  const { data, dataById, loading, error } = useSelector(getNews);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (error) return <h1>{error}</h1>;
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Yangiliklar</h1>
        <Link to={"news"}>Barchasi</Link>
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <NewsCard
              key={item._id}
              id={item._id}
              dateProps={item.date}
              img={`https://backend.tkti.uz/${item.photo}`}
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
