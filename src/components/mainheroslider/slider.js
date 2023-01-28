import React, { useContext, useEffect, useState } from "react";

import "./slider.css";

import slide_5 from "../../files/slide1.jpg";
import slide_2 from "../../files/slide2.jpg";
import slide_3 from "../../files/slide3.jpg";
import slide_4 from "../../files/slide4.jpg";
import slide_1 from "../../files/Qabul22.jpg";
import slide_6 from "../../files/Toshkent_kimyo_texnologiya_instituti.jpg";
import { Context } from "../../context";

function MainSlider() {
  const { DataGetter, globalUrl } = useContext(Context);
  const [banner, setBanner] = useState({
    isFetched: false,
    error: false,
    data: {},
  });

  useEffect(() => {
    fetch(`http://backend.tkti.uz/banner/get/all`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (data) =>
          data.status ===200 && setBanner({ data: data.data, isFetched: true })
      )
      .catch(() => setBanner({ error: true }));
  }, []);

  console.log(banner);

  return (
    <>
      <div className="container-fluid">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* <div className="carousel-inner">
            {banner.isFetched && banner.data && banner.data.length > 0 ? (
              banner.data.map((e, index) => (
                <div key={index} className="carousel-item ">
                  <img
                    src={`${globalUrl}/${e.banner_img}`}
                    width="100%"
                    height="100%"
                    alt={e.name}
                  />
                </div>
              ))
            ) : (
              // <>
              // <div className="carousel-item active">
              //   <img
              //     src={slide_5}
              //     width="100%"
              //     height="100%"
              //     alt="Banner img"
              //   />
              // </div>
              // <div className="carousel-item active">
              //   <img
              //     src={slide_2}
              //     width="100%"
              //     height="100%"
              //     alt="Banner img"
              //   />
              // </div>
              // <div className="carousel-item active">
              //   <img
              //     src={slide_3}
              //     width="100%"
              //     height="100%"
              //     alt="Banner img"
              //   />
              // </div>
              // <div className="carousel-item active">
              //   <img
              //     src={slide_4}
              //     width="100%"
              //     height="100%"
              //     alt="Banner img"
              //   />
              // </div>
              // </>
              <></>
            )}
          </div> */}
          <div className="carousel-inner">
            <div className="carousel-item">
              <img
                className=""
                src={`${slide_5}`}
                width="100%"
                height="100%"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                className=""
                src={`${slide_2}`}
                width="100%"
                height="100%"
                alt=""
              />
            </div>{" "}
            <div className="carousel-item">
              <a href="http://www.double-degree.tcti.uz" target="_blank">
                {" "}
                <img
                  className=""
                  src={`${slide_6}`}
                  width="100%"
                  height="100%"
                  alt=""
                />
              </a>
            </div>
            <div className="carousel-item">
              <img
                className=""
                src={`${slide_3}`}
                width="100%"
                height="100%"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                className=""
                src={`${slide_4}`}
                width="100%"
                height="100%"
                alt=""
              />
            </div>
          </div>
          <button
            className="carousel-control-prev slider__btn"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next slider__btn"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default MainSlider;

