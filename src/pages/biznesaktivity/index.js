import React, { useContext, useState, useEffect } from "react";
import ActivityLang from "./lang";
import {AccordionComponent} from '../../components/accordion';
import { Context } from "../../context";

const BusinessActivity = () => {
  const { lang } = useContext(Context);

  const [data, setData] = useState([
    {id:0, status: true, title: ActivityLang[lang].data[0].title,content: ActivityLang[lang].data[0].content},
    {id:1, status: false, title: ActivityLang[lang].data[1].title,content: ActivityLang[lang].data[1].content},
    {id:2, status: false, title: ActivityLang[lang].data[2].title,content: ActivityLang[lang].data[2].content},
    {id:3, status: false, title: ActivityLang[lang].data[3].title,content: ActivityLang[lang].data[3].content},
    {id:4, status: false, title: ActivityLang[lang].data[4].title,content: ActivityLang[lang].data[3].content}
  ]);


  useEffect(() =>{
    const filter = data.filter((e, index) => (
      e.title = ActivityLang[lang].data[index].title,
      e.content = ActivityLang[lang].data[index].content
    ));

    setData(filter)
  }, [lang])
  return (
    <div className="wrapped mb-5">
              <div className="medPunkt__header">
                <h1>{ActivityLang[lang].title}</h1>
              </div>
              <p >{ActivityLang[lang].hero} </p>
                <br /> <br />
              <AccordionComponent arr={data} setarr={setData} />
    </div>
  );
};

export default BusinessActivity;