import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { NewsActions } from "./actions";
import { Link } from "react-router-dom";
import { NewsCard } from "../../components/card/NewsCard";
export { newsReducer } from "./reducer";

export const NewsAll = ({ myKey }) => {
  const { t } = useTranslation();
  const { getData, getDataById, deleteData } = new NewsActions();

  const getNews = (state) => state.news;
  const { data, dataById, loading, error } = useSelector(getNews);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (error) return <h1>{error}</h1>;
  return (
    <div className="container mx-auto w-[80%] ">
      <div cassName="flex justify-between ">

      <h3 className="text-3xl  my-8">Yangiliklar</h3>
      <Link className="text-3xl " to={`/news`}>
        barchasini ko'rish
        <i className="mx-3 fa-solid fa-right-long"></i>
        </Link>
        </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 justify-between lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 w-[full]">
          {data.slice(0, 3).map((item) => (
            <>
              <Link className="news__card mx-auto" key={item} to={`/${myKey}/${item._id}`}>
                <NewsCard
                  key={item._id}
                  id={item}
                  dateProps={item.date}
                  img={`https://backend.tkti.uz/${item.photo}`}
                  title={t("NewsCard.title", {
                    news_card_title: `${item?.[`title_${i18next.language}`]}`,
                  })}
                />
                
              </Link>
            </>
          ))}
        </div>
      )}
      {loading ? <h1>Loading...</h1> : <span></span>}
    </div>
  );
};
