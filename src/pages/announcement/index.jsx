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
  const { getData, getDataById} = new AnnouncementActions();

  const getAnnouncement = (state) => state.announcement;
  const { data, dataById, loading, error } = useSelector(getAnnouncement);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (error) return <h1>{error}</h1>;
  return (
    <div className="container mx-auto w-[80%] my-4">
  
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <>
               <Link className="news__card mx-auto" key={item} to={`/elon/${item._id}`}>
                <NewsCard
                  key={item._id}
                  id={item}
                  dateProps={item.date}
                  img={`https://tkti-backend-g6pbz.ondigitalocean.app/${item.photo}`}
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
