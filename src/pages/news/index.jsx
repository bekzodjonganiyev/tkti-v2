import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Spinner, Pagination } from "flowbite-react";

import { NewsActions } from "./actions";
import { Link } from "react-router-dom";
import { NewsCard } from "../../components/card/NewsCard";
import { LeftArrow } from "../../assets/icons";

import { baseURL } from "../../services/http";
import { time } from "../../services/dateFormatter.js";

export { newsReducer } from "./reducer";

export const News = ({ home }) => {
  const { t } = useTranslation();
  const { getData, getDataById, deleteData } = new NewsActions();

  const getNews = (state) => state.news;
  const { data, dataById, loading, error } = useSelector(getNews);
  const dispatch = useDispatch();

  const [category, setCategory] = useState(
    localStorage.getItem("category") || "yangilik"
  );

  const [currentPage, setCurrentPage] = useState(
    +localStorage.getItem("page") || 1
  );
  const onPageChange = (page) => {
    localStorage.setItem("page", page);
    setCurrentPage(page);
  };

  const categorySetter = (value) => {
    localStorage.setItem("category", value);
    setCategory(value);
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(getData(category, currentPage));
  }, [category, currentPage]);

  const cutter = home ? 6 : undefined;

  if (error) return null;
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">{t("HomePage.1.name")}</h1>
        <Link
          to={`/${i18next.language}/news`}
          className="flex items-center gap-1"
        >
          {t("HomePage.6.name")} <LeftArrow />
        </Link>
      </div>
      <div className="flex gap-4 mb-5">
        <button
          onClick={() => categorySetter("yangilik")}
          className={`${
            category === "yangilik" ? "text-white bg-indigo-900" : " "
          } border border-indigo-900 hover:bg-indigo-900 hover:text-white transition-colors py-2 px-4 rounded-2xl `}
        >
          {t("HomePage.1.name")}
        </button>
        <button
          onClick={() => categorySetter("elon")}
          className={`${
            category === "elon" ? "text-white bg-indigo-900" : " "
          } border border-indigo-900 hover:bg-indigo-900 hover:text-white transition-colors py-2 px-4 rounded-2xl `}
        >
          {t("HomePage.2.name")}
        </button>
        <button
          onClick={() => categorySetter("video")}
          className={`${
            category === "video" ? "text-white bg-indigo-900" : " "
          } border border-indigo-900 hover:bg-indigo-900 hover:text-white transition-colors py-2 px-4 rounded-2xl `}
        >
          {t("HomePage.5.name")}
        </button>
      </div>

      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner
            aria-label="Extra large spinner example"
            size="xl"
            className=""
          />
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.data?.slice(0, cutter).map((item) => (
              <NewsCard
                key={item._id}
                id={item.title_uz}
                dateProps={time(item.date)}
                img={`${baseURL}${item.photo}`}
                title={t("NewsCard.title", {
                  news_card_title: `${item?.[`title_${i18next.language}`]}`,
                })}
              />
            ))}
          </div>
          {data?.total ? (
            <Pagination
              className={`${home ? "hidden" : ""} mt-10 text-center`}
              currentPage={currentPage}
              onPageChange={onPageChange}
              totalPages={Math.round(data.total / 10)}
            />
          ) : null}
        </>
      )}
    </div>
  );
};
