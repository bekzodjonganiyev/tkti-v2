import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";
import NewsLang from "../news/lang";
import "./style.css";

function ElonlarComp({ home }) {
  const { lang, time, globalUrl,textSytles} = useContext(Context);

  const [news, setNews] = useState({
    isFetched: false,
    error: false,
    data: {},
  });

  const [ofset, setOfset] = useState(1);

  useEffect(() => {
    fetch(`${globalUrl}/elon/all`)
      .then((res) => res.json())
      .then(
        (data) =>
          data.success &&
          setNews({
            data: home
              ? data.data
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .slice(0, 4)
              : data.data
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .slice(0, ofset * 30),
            isFetched: true,
          })
      )
      .catch(() => setNews({ error: true }));
  }, [ofset]);

  console.log(news);

  return (
    <>
      <div className="news__list">
        {news.isFetched && news.data && news.data.length > 0 ? (
          news.data.map((e, index) => (
            <>
              <Link className="news__card" key={index} to={`/elon/${e._id}`}>
                <img
                  className="news_photo"
                  src={globalUrl + "/" + e.photo[0]}
                  alt=""
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
                      {" "}
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

      {home ? (
        <></>
      ) : (
        <button
          className="hj"
          style={textSytles(30, 600)}
          onClick={() => setOfset(ofset + 1)}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      )}
    </>
  );
}

export default ElonlarComp;
