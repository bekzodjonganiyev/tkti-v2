import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import { Link } from "react-router-dom";
import {DoorDashFavorite, ThreeDots} from "../../../components/animjs";
import AnimateCard from '../../../components/animateCard'

const FacultetComponent = () => {
  const { lang, DataGetter, textSytles } = useContext(Context);
  const [hero] = useState({
    uz:"Fakultetlar",
    ru: "Факультеты",
    en:"Faculties"
  });
  const AboutTextFunction = num =>{
    const obj = {
      uz:`TKTI  bakalavriat, magistratura va bitta integratsiyalashgan o'quv dasturini, doktoranturada  o'qishni davom ettirish va o'qituvchi malakasini olish imkoniyatini taklif etadi. Bularning barchasi ${num} fakultetda amalga oshiriladi`,
      ru:`TKTI предлагает бакалавриат, магистратуру и одну интегрированную учебную программу, возможность продолжить обучение в докторантуре и получить квалификацию преподавателя. Все это делается на ${num} факультетах`,
      en:`TKTI offers bachelor's, master's and one integrated study program, the possibility to continue studying at the doctoral level and to obtain a teacher's qualification. All this is done in ${num} faculties`
    }
    return obj[lang]
  }
  const [facultet, setFacultet] = useState({
    isFetched: false,
    error: false,
    data: {},
  });

  useEffect(() => {
   setTimeout(()=>{
    DataGetter(setFacultet, 'Fak_data/all')
   },900)
  }, []);

  return (
    <div className="container">
      {
        facultet.isFetched && facultet.data.length >0 ?(
          <div>
            <h2 className="text-center" style={textSytles(30, 700)}>{hero[lang]}</h2>
            <span style={textSytles(18, 600)}>{AboutTextFunction(facultet.data.length)}</span>
          </div>
        ): facultet.error ?(
          <></>
        ):(
          <ThreeDots width='100%'/>
        )
      }
        
      <div className="facultetInfo">
        {
            facultet.isFetched && facultet.data ? (
                facultet.data.map((item, index) => (
                  <AnimateCard refLink='fakultetlar' refTitle={item?.title_uz} refId={item._id} key={index} mainTitle={item[`title_${lang}`]} />
                ))
            ): facultet.error ? (
              <div style={textSytles(30,800)}>Xatolik :(</div>
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

export default FacultetComponent;