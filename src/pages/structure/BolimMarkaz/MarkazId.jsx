import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import { Link, useParams } from "react-router-dom";

const MarkazId = () => {
  const { lang } = useContext(Context);
  const [hero] = useState({
    uz: {
      title: "Fakultetlar haqida",
      desc:"Maqsad va vazifalari",
     

    },
    ru: {
      title: "об отделе",
      desc:"Цели и задачи",
     
      },
    en: {
      title: "about the department",
      desc:"Goals and objectives",
     
      },
  });
  const { id } = useParams();
  const [bolimId, setBolimId] = useState([]);
  const [activeButton, setActiveButton] = useState(1);
  useEffect(() => {
    fetch(`http://backend.tkti.uz/markaz_data/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setBolimId(data.data));
  }, []);
  console.log(bolimId);
 
  
  return (
    <div className="container">
      <div className="facultetDesc">
        nghhkjl;
      {
                <div
                  className="fakultet-inner"
                  dangerouslySetInnerHTML={{
                    __html: bolimId[`title_${lang}`],
                   
                  }}
                />
                
              }

</div>
      <div className="btnGroup">
      <button onClick={() => setActiveButton(1)}>{hero[lang].title}</button>
      <button onClick={() => setActiveButton(2)}>{hero[lang].desc}</button>
      
      
      {activeButton === 1 && <div>
        {
                <div
                  className="fakultet-inner"
                  dangerouslySetInnerHTML={{
                    __html: bolimId[`haqida_${lang}`],
                   
                  }}
                />
                
              }
        </div>}
      {activeButton === 2 && <div>
        
        {
                 <div
                 className="fakultet-inner"
                 dangerouslySetInnerHTML={{
                   __html: bolimId[`maqsad_${lang}`],
                  
                 }}
               />
              }
        </div>}
     
    </div>
     
     
    
      
    </div>
  );
};

export default MarkazId;
