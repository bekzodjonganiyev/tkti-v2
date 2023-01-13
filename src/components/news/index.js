import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";
import NewsLang from "./lang";
import "./style.css";

function YangiliklarComp({ home }) {
  const { lang, time, globalUrl} = useContext(Context);

  const [news, setNews] = useState({
    isFetched: false,
    error: false,
    data: {},
  });

  useEffect(() => {
    fetch(`${globalUrl}/news/all`)
      .then((res) => res.json())
      .then((data) => {
        data.success &&
          setNews({
            data: home
              ? data.data
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .slice(0, 4)
              : data.data
                  .sort((a, b) => new Date(b.date) - new Date(a.date)),
            isFetched: true,
          });
      })
      .catch(() => setNews({ error: true }));
  }, []);

  return (
    <>
      <div className="news__list">
        {news.isFetched && news.data && news.data.length > 0 ? (
          news.data.map((e, index) => (
            <>
              <Link className="news__card" key={index} to={`/news/${e._id}`}>
                <img
                  className="news_photo"
                  src={globalUrl + "/" + e.photo[0]}
                  alt="news img"
                />
                <div className="news__body">
                  <h4>
                    {e[`title_${lang}`].split(" ").slice(0, 10).join(" ")}
                    ...&#128279;
                  </h4>
                  {e[`body_${lang}`].map((a, ind) => (
                    <p key={ind}>{a}</p>
                  ))}
                  <br />
                  <p>
                    <i className="fa-solid fa-calendar-days">
                     
                      <time className="ms-3">{time(e.date)}</time>
                    </i>
                  </p>
                </div>
              </Link>
            </>
          ))
        ) : news.isFetched && news.data && news.data.length === 0 ? (
          <h2>{NewsLang[lang][2]}</h2>
        ) : news.error ? (
          <h2>{NewsLang[lang][1]}</h2>
        ) : (
          <h2>{NewsLang[lang][0]} ...</h2>
        )}
      </div>
    </>
  );
}

export default YangiliklarComp;