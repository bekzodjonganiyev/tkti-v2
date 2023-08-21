import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import { Link } from "react-router-dom";
import { DoorDashFavorite, ThreeDots } from "../../../components/animjs";
import AnimateCard from "../../../components/animateCard";
import i18next from "i18next";

const BolimMarkaz = () => {
  const { lang, textSytles, DataGetter } = useContext(Context);
  const [hero] = useState({
    uz: {
      title: "Bo'limlar",
      title2: `Markazlar`,
    },
    ru: {
      title: "Разделы",
      title2: `Центры`,
    },
    en: {
      title: "Departments",
      title2: `Centers`,
    },
  });

  const [bolim, setBolim] = useState({
    isFetched: false,
    error: false,
    data: {},
  });

  const [markaz, setMarkaz] = useState({
    isFetched: false,
    error: false,
    data: {},
  });

  console.log("markaz: ", markaz);

  useEffect(() => {
    setTimeout(() => {
      DataGetter(setBolim, "bm_data/all");
      DataGetter(setMarkaz, "markaz_data/all");
    }, 800);
  }, []);

  return (
    <div className="container">
      <div className="facultetInfo">
        {bolim?.isFetched && bolim?.data ? (
          bolim?.data.map((item, index) => (
            <AnimateCard
              refLink={`${i18next.language}/institut/structute/department`}
              refTitle={item[`title_${i18next.language}`]}
              refId={item._id}
              key={index}
              mainTitle={item[`title_${i18next.language}`]}
            />
          ))
        ) : bolim.error ? (
          <></>
        ) : (
          <div style={{ marginTop: "-100px" }} className="loodaer__wrapper">
            <DoorDashFavorite width="400px" />
            <DoorDashFavorite width="400px" />
            <DoorDashFavorite width="400px" />
          </div>
        )}
      </div>

      <div className="facultetInfo">
        {markaz?.isFetched && markaz?.data ? (
          markaz.data.map((item, index) => (
            <AnimateCard
              refLink={`${i18next.language}/institut/structute/center`}
              key={index}
              refTitle={item[`title_${i18next.language}`]}
              refId={item._id}
              mainTitle={item[`title_${i18next.language}`]}
            />
          ))
        ) : markaz.error ? (
          <></>
        ) : (
          <div style={{ marginTop: "-100px" }} className="loodaer__wrapper">
            <DoorDashFavorite width="400px" />
            <DoorDashFavorite width="400px" />
            <DoorDashFavorite width="400px" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BolimMarkaz;
