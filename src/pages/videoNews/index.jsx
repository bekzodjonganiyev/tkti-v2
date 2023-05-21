import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {VideoNewsActions} from './actions';
import { NewsCard } from "../../components/card/NewsCard";

export {videoNewsReducer} from './recucer'
export const VideoNews = () => {
  const { t } = useTranslation();
  const { getData, getDataById, deleteData } = new VideoNewsActions();

  const getVideoNews = (state) => state.announcement;
  const { data, dataById, loading, error } = useSelector(getVideoNews);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (error) return <h1>{error}</h1>;
  return (
    <div className="container mx-auto w-[80%]">
      <h1 className="text-3xl">video gallary</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid   justify-between lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 w-[full]">
          {data.slice(0, 3).map((item) => (
            <>
             
                <NewsCard
                  key={item._id}
                  id={item}
                  dateProps={item.date}
                  img={`https://backend.tkti.uz/${item.photo}`}
                  title={t("NewsCard.title", {
                    news_card_title: `${item?.[`title_${i18next.language}`]}`,
                  })}
                />
           
            </>
          ))}
        </div>
      )}
      {loading ? <h1>Loading...</h1> : <span></span>}
    </div>
  );
};
