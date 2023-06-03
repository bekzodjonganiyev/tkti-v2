import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import {AnnouncementActions} from './actions';
import { Link } from "react-router-dom";
import { LeftArrow } from "../../assets/icons";
import { NewsCard } from "../../components/card/NewsCard";
export {announcementReducer} from './recucer'

export const ElonAll = ({ myKey }) => {
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
    <div className="container mx-auto w-full ">
     <div className="flex justify-between items-center mb-8">
          <h1 className="text-secondary_color text-2xl md:text-4xl font-semibold">
         Elonlar
          </h1>
          <Link
            to={"/elon"}
            className="bg-primary_color py-2 rounded-md  flex items-center gap-2 max-md:hidden"
          >
             Barchasini ko'rish
            <span>
              <LeftArrow  />
            </span>
          </Link>
        </div>
        
      
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.slice(0, 3).map((item) => (
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
    </div>
  );
};
