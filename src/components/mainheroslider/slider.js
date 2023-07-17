import React, { useContext, useEffect, useState } from "react";

import "./slider.css";

import slide_5 from "../../files/slide1.jpg";
import { Context } from "../../context";

function MainSlider() {
  const { DataGetter, globalUrl } = useContext(Context);
  const [banner, setBanner] = useState({
    isFetched: false,
    error: false,
    data: {},
  });

  useEffect(()=>{
    fetch(`${globalUrl}/banner/get/all`, {
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
  
  },[]);
  useEffect(()=>{
    if(banner.isFetched && banner.data){
      document.querySelector('.carousel-item').classList.add('active')
    }
  },[banner])

  return (
    <>
      <div className="container-fluid">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {
              banner.isFetched && banner.data && banner.data.length >0 ?(
                banner.data.map((e,index) =>(
                  <div key={index} className="carousel-item">
                    <img src={`${globalUrl}/${e.banner_img}`} width="100%" height="70%" alt={e.name}/>
                  </div>
                ))
              ):(
                <div className="carousel-item active">
                    <img src={slide_5} width="100%" height="70%" alt='Banner img'/>
                  </div>
              )
            }
    
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

