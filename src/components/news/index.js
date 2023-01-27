import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";
import NewsLang from "../news/lang";
import "./style.css";

function YangiliklarComp({ home, myKey }) {
  const { lang, time, globalUrl, textSytles } = useContext(Context);

  const [news, setNews] = useState({
    isFetched: false,
    error: false,
    data: {},
  });

  useEffect(() => {
    fetch(`${globalUrl}/${myKey}/all`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (data) =>
          data.success &&
          setNews({
            data: home ? data.data.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)
              : data.data.sort((a, b) => new Date(b.date) - new Date(a.date)),
            isFetched: true,
          })
      )
      .catch(() => setNews({ error: true }));
  }, []);

  return (
    <>
      <div className="news__list">
        {news.isFetched && news.data && news.data.length > 0 ? (
          news.data.map((e, index) => (
            <>
              <Link className="news__card" key={index} to={`/${myKey}/${e._id}`}>
                <img
                  className="news_photo"
                  src={`${globalUrl}/${e.photo}`}
                  alt=""
                />
                <div className="news__body">
                  <h4
                    dangerouslySetInnerHTML={{
                      __html: e[`title_${lang}`]
                        .split(" ")
                        .slice(0, 10)
                        .join(" "),
                    }}
                  ></h4>

                  <br />
                  <p>
                    <i className="fa-solid fa-calendar-days">
                      <time className="ms-3">{time(e.date)}</time>{" "}
                    </i>
                  </p>
                </div>
              </Link>
            </>
          ))
        ) : news.isFetched && news.data && news.data.length === 0 ? (
          <h2>Yangilik hali joylanmagan</h2>
        ) : news.error ? (
          <h2>Xatolik</h2>
        ) : (
          <h2>Yangiliklar yuklanmoqda ...</h2>
        )}
      </div>
    </>
  );
}

export default YangiliklarComp;
