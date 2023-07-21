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

  const [socialColor, setSocialColor] = useState({
    fb: "#666",
    lki: "#666",
    wk: "#666",
    tg: "#666",
  });


  useEffect(() => {
    dispatch(getData(category));
  }, [category]);

  const cutter = home ? 6 : undefined

  if (error) return <h1>{error}</h1>;
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">{t("HomePage.1.name")}</h1>
        <Link  to={`${i18next.language}/news`} className="flex items-center gap-1">{t("HomePage.6.name")} <LeftArrow /></Link>
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
      {/* Share social networks
      <div className="flex justify-between items-center mt-10">
        <div className="lg:w-9/12 w-full flex flex-wrap gap-2 ">
          <CalendarIcon />
          <span className="font-medium">{time(data.date)}</span>
        </div>
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
      </div> */}
    </div>
  );
};
