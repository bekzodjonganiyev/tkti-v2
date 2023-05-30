import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { NewsActions } from "./actions";
import { Link } from "react-router-dom";
import { NewsCard } from "../../components/card/NewsCard";
import { LeftArrow } from "../../assets/icons";
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
      
      <div className="flex justify-between items-center mb-8">
          <h1 className="text-secondary_color text-2xl md:text-4xl font-semibold  ">
          Yangiliklar
          </h1>
          <Link
            to={"/news"}
            className="bg-primary_color py-2 px-6 rounded-md  flex items-center gap-2 max-md:hidden"
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
