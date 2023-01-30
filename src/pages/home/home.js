import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About_us from "../../components/aboutus";
import MainSlider from "../../components/mainheroslider/slider";
import YangiliklarComp from "../../components/news";
import Filter from "../../components/searchsillabus";
import UsefulLinks from "../../components/usefullinks";
import { Context } from "../../context";

import './home.css'
const HomePage = () =>{
    const {lang, globalUrl} = useContext(Context);
    const [about] = useState({
        uz:{
          new:`Yangiliklar`,
          elon:`E'lonlar`,
          more:`Barchasini ko'rish`
        },
        ru:{
          new:`Новости`,
          elon:`Объявления`,
          more:`Посмотрить все`
        },
        en:{
          new:`News`,
          elon:`Announcements`,
          more:`See all`
        },
      })
    const [yili, setYili] = useState([]);
    useEffect(() => {
      fetch(`${globalUrl}/daraja/all`)
        .then((res) => res.json())
        .then((res) => {
          const newArr = res.data.map((i) => i.yili);
          setYili(Array.from(new Set(newArr)));
        });
    }, []);

    return(
        <div className="home"> 
            <MainSlider  />
            <Filter yili={yili} />

            <div className="p-5">
                <div className="news__info">
                <h3>{about[lang].new}</h3>
                </div>

                <YangiliklarComp home={true} myKey='news'/>

                <Link to="/news" className="news__info-link">
                {about[lang].more} <i className="mx-3 fa-solid fa-right-long"></i>
                </Link>
            </div>

            <div className="p-5 elonlar">
              <div className="news__info">
                <h3>{about[lang].elon}</h3>
              </div>
              <YangiliklarComp home={true} myKey='elon'/>
              <Link to="/elon" className="news__info-link">
                {about[lang].more} <i className="mx-3 fa-solid fa-right-long"></i>
              </Link>
            </div>

            <About_us />

            <UsefulLinks />
        </div>
    )
}

export default HomePage;