import React, { useContext, useState } from "react";
import BedroomLAng from "./lang";
import {AccordionBest} from '../../../components/accordion'

import './Bedroom.css'
import { useEffect } from "react";
import { Context } from "../../../context";
const Bedroom = () => {
     
     const { lang, refresh } = useContext(Context);
     const [data, setData] = useState([
      {id:0, status:true, title: BedroomLAng[lang].data[0].title,content: BedroomLAng[lang].data[0].content},
      { id:1, status:false, title: BedroomLAng[lang].data[1].title,content: BedroomLAng[lang].data[1].content}
     ])

     useEffect(() =>{
        if(refresh){
          window.location.reload(true)
        }
     }, [lang])
  return (
    <div className="wrapped mb-5">
     <div className="row">
            <div className="col-12">
              <div className="badroom__header">
                <h1 className="text-center">{BedroomLAng[lang].title}</h1>
                <p>{BedroomLAng[lang].hero}</p>
              </div>
            </div>

            <div className="study_on_tktu">
              <AccordionBest arr={data}  setarr={setData} />
           </div>
          </div>
    </div>
  );
};

export default Bedroom;