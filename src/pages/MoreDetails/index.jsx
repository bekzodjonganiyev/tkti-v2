import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { NewsActions } from "../news/actions";
import { Link } from "react-router-dom";
import { NewsCard } from "../../components/card/NewsCard";
import { Accardion } from "../../components/accardion";
export { newsReducer } from "../news/reducer";

export const MoreNews = ({title, body}) => {
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
    <div className="container mx-auto w-[80%]">
      <h1 className="text-3xl">news</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid  justify-between grid-cols-3 gap-5 w-[full]">
          {data.map((item) => (
            <>
              <Link className="news__card mx-auto" key={item} to={``}>
                <NewsCard
                  key={item._id}
                  id={item}
                 
                  title={t("NewsCard.title", {
                      news_card_title: `${item?.[`title_${i18next.language}`]}`,
                    })}
                    dateProps={item.date}
                />
                 <div
           dangerouslySetInnerHTML={{
            __html: t("NewsCard.body", {
                news_card_body: `${data?.[`body_${i18next.language}`]}`,
            }),
          }}
          />
              </Link>
            </>
          ))}
        </div>
      )}
      {loading ? <h1>Loading...</h1> : <span></span>}

      <Accardion 
      
      />
    </div>
  );
};
