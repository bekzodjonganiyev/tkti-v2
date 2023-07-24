import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useSelector, useDispatch } from "react-redux";

import { DetailsActions } from "./actions";
import { DetailsElonActions } from "./actions";
import {CalendarIcon, FacebookIcon, Linkedin, Talim, TelegramIcon} from "../../assets/icons";
import {time} from "../../services/dateFormatter.js";
export { detailsReducer } from "./reducer";

export const Details = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { getDataById } = new DetailsActions();
  const dispatch = useDispatch();

  const [socialColor, setSocialColor] = useState({
    fb: "#666",
    lki: "#666",
    wk: "#666",
    tg: "#666",
  });

  const getNews = (state) => state.details;
  const { loading, error, dataById } = useSelector(getNews);

  useEffect(() => {
    dispatch(getDataById(id));
  }, []);

  if (error) return <h1>{error}</h1>;
  return (
    <div className="container mx-auto py-10 news-details">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="w-full">
          <div className="lg:w-9/12 w-full flex flex-wrap gap-5">
            <CalendarIcon />
           
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
      {/* Share social networks */}
      <div className="flex justify-end items-center mt-10">
        {/*<div className="lg:w-9/12 w-full flex flex-wrap gap-2 ">*/}
        {/*  <CalendarIcon />*/}
        {/*  <span className="font-medium">{time(data.date)}</span>*/}
        {/*</div>*/}
        <div className="flex gap-5">
          <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&quote=Assalomu alaykum yangiliini o'qidingzimi?`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setSocialColor({ ...socialColor, fb: "blue" })}
              onMouseLeave={() => setSocialColor({ ...socialColor, fb: "#666" })}
          >
            <FacebookIcon color={socialColor.fb} />
          </a>
          <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() =>
                  setSocialColor({ ...socialColor, lki: "green" })
              }
              onMouseLeave={() => setSocialColor({ ...socialColor, lki: "#666" })}
          >
            <Linkedin color={socialColor.lki} />
          </a>
          <a
              href={`https://vk.com/share.php?url=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() =>
                  setSocialColor({ ...socialColor, wk: "yellow" })
              }
              onMouseLeave={() => setSocialColor({ ...socialColor, wk: "#666" })}
          >
            <Talim color={socialColor.wk} />
          </a>
          <a
              href={`https://telegram.me/share/url?url=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() =>
                  setSocialColor({ ...socialColor, tg: "lightgreen" })
              }
              onMouseLeave={() => setSocialColor({ ...socialColor, tg: "#666" })}
          >
            <TelegramIcon color={socialColor.tg} />
          </a>
        </div>
      </div>
    </div>
  );
};
