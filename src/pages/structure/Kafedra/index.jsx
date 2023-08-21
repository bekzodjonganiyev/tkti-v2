import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import { Link } from "react-router-dom";
import {DoorDashFavorite, ThreeDots} from "../../../components/animjs";
import AnimateCard from '../../../components/animateCard'
import i18next from "i18next";

const KafedraComponent = () => {
  const { lang, DataGetter,textSytles } = useContext(Context);
  const [hero] = useState({
    uz: "Kafedralar",
    ru: "Департаменты",
    en: "Departments", 
  });
  const [rektorat, setRektorat] = useState({
    isFetched: false,
    error: false,
    data: {},
  });


  useEffect(() => {
    setTimeout(()=>{
      DataGetter(setRektorat, 'kafedra_data/all')
    },700)
  }, []);

  return (
    <div className="container">
      <div className="facultetInfo">
        {
            rektorat.isFetched && rektorat.data ? (
                rektorat?.data?.map((item, index) => (
                  <AnimateCard refLink={`${i18next.language}/institut/structute/kafedra`} refTitle={item?.title_uz} refId={item._id} key={index} mainTitle={item[`title_${lang}`]} />
                ))
            ): rektorat.error ?(
               <></>
            ):(
              <div style={{marginTop:'-70px'}} className="loodaer__wrapper">
                <DoorDashFavorite width='400px'/>
                <DoorDashFavorite width='400px'/>
                <DoorDashFavorite width='400px'/>
              </div>
            )
        }
      </div>
    </div>
  );
};

export default KafedraComponent;