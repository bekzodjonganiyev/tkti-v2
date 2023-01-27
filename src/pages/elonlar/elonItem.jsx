import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../../context";

const ElonItem = () => {
  const { lang, time, globalUrl, textSytles } = useContext(Context);
  const { id } = useParams();

  const [elon, setElon] = useState({
    isFetched: false,
    error: false,
    data: {},
  });

  useEffect(() => {
    fetch(`${globalUrl}/elon/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setElon(data.data));
  }, [setElon]);

  const [newOne, setNewOne] = useState({
    isFetched: false,
    error: false,
    data: {},
  });

  const [toggle, setToggle] = useState({
    display: false,
    link: "",
  });

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    window.location.href = "/elon";
  }
  useEffect(() => {
    fetch(`${globalUrl}/elon/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (data) =>
          data.success && setNewOne({ data: data.data, isFetched: true })
      )
      .catch(() => setNewOne({ error: true }));
  }, []);

  useEffect(() => {
    if (newOne.isFetched && newOne.data) {
      fetch(`${globalUrl}/elon/all`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(
          (data) =>
            data.success &&
            setElon({
              data: data.data
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .slice(0, 5)
                .filter((a) => a._id !== id),
              isFetched: true,
            })
        );
    }
  }, [newOne]);

  const te = () => {
    setToggle({ display: false });
  };

  const closeModal = () => {
    setToggle({ display: false });
  };

  return (
    <>
      <div className="wrapped">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 bakalavr__container elonDesc">
              <div className="news__item__card">
                {newOne.isFetched && newOne.data ? (
                  <>
                    <div className="news__item__body">
                      <h2>{newOne.data[`title_${lang}`]} </h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: newOne.data[`body_${lang}`],
                        }}
                      />
                    </div>
                    <div className="news__item__body">
                      <div className="card__control">
                        <i className="fa-solid fa-calendar-days">
                          <span>{time(newOne.data.date)}</span>
                        </i>

                        <i
                          onClick={() =>
                            setToggle({
                              display: true,
                              link: window.location.href,
                            })
                          }
                          className="fas fa-share"
                        >
                          <span>Ulashish</span>
                        </i>
                      </div>
                    </div>
                  </>
                ) : (
                  <h2>Yangilik yuklanmoqda</h2>
                )}
              </div>

              <div className="mt-5 news__nav">
                {elon.isFetched && elon.data && elon.data.length > 0 ? (
                  elon.data.map((e, index) => (
                    <Link
                      className="news__nav__card"
                      key={index}
                      to={`/elon/${e._id}`}
                    >
                      <i
                        style={textSytles(14, 500)}
                        className="fa-solid fa-calendar-days"
                      >
                        <span style={textSytles(13, 500)} className="ms-3">
                          {time(e.date)}
                        </span>
                      </i>
                      <h4 style={textSytles(16, 600)}> {e[`title_${lang}`]}</h4>
                    </Link>
                  ))
                ) : elon.error ? (
                  <h2>Xatolik</h2>
                ) : (
                  <h2>Boshqa yangiliklar yuklanmoqda ...</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {toggle.display ? (
        <div onClick={closeModal} className="modal__wrapper">
          <div className="modal__content">
            <a
              onClick={te}
              href={`https://telegram.me/share/url?url=${toggle.link}&text=Assalomu alaykum yangilikni o'qidingzimi?`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-telegram"></i> Telegram
            </a>
            <a
              onClick={te}
              href={`https://www.facebook.com/sharer/sharer.php?u=${toggle.link}&quote=Assalomu alaykum yangiliini o'qidingzimi?`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              onClick={te}
              href={`https://vk.com/share.php?url=${toggle.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-vk"></i> VK
            </a>

            <a
              onClick={te}
              href={`https://twitter.com/share?text=Assalomu alaykum yangilikni ko'rdingizmi&url=${toggle.link}&text=Toshkent kimyo texnologiya instituti yangiliklari`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i> Twitter
            </a>

            <a
              onClick={te}
              href={`https://api.whatsapp.com/send?text=Assalomu alaykum yangilikni ko'rdingizmi%20-%20${toggle.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i> Whatsapp
            </a>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ElonItem;
