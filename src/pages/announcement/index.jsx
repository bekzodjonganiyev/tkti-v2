import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {AnnouncementActions} from './actions';
import { NewsCard } from "../../components/card/NewsCard";

export {announcementReducer} from './recucer'
export const Announcement = () => {
  const { t } = useTranslation();
  const { getData, getDataById, deleteData } = new AnnouncementActions();

  const getAnnouncement = (state) => state.announcement;
  const { data, dataById, loading, error } = useSelector(getAnnouncement);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (error) return <h1>{error}</h1>;
  return (
    <div className="container mx-auto w-[80%]">
      <h1 className="text-3xl">elon</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="ggrid   justify-between lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 w-[full]">
          {data.slice(0, 3).map((item) => (
            <>
              <Link className="news__card" key={item} to={`/${i18next.language}/news/${item._id}`}>
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
