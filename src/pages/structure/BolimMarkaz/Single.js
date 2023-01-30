import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import { Link, useParams } from "react-router-dom";
import XodimCard from "../../../components/xodim_card/XodimCard";

const BolimMarkazSingle = ({myKey}) => {
  const { lang, globalUrl ,textSytles, DataGetter} = useContext(Context);
  const [hero] = useState({
    uz: {
      title: `${myKey ==='markaz' ? 'Markaz':`Bo'lim`} haqida`,
      desc: "Maqsad va vazifalari",
      info:"Faoliyatlar"
    },
    ru: {
      title: `об ${myKey ==='markaz' ? 'Центр':`Отделение`}`,
      desc: "Цели и задачи",
      info:"Деятельность"
    },
    en: {
      title: `about ${myKey ==='markaz' ? 'Center':`Department`}`,
      desc: "Goals and objectives",
      info:"Activities"
    },
  });
  const { id } = useParams();
  const refId = id.substring(id.lastIndexOf("-") + Number(1));

  const [newOne, setNewOne] = useState({
    isFetched: false,
    error: false,
    data: {},
  });

  const [activeButton, setActiveButton] = useState(1);

  useEffect(() => {
    DataGetter(setNewOne, `${myKey ==='markaz' ? 'markaz':'bm'}_data/${refId}`)
  }, []);

  return (
    <div className="container">
      
      <div className="facultetDesc">
        {
            newOne.isFetched && newOne.data ? (
                <>
                    <div>
                        <h2>{newOne.data[`title_${lang}`]}</h2>
                    </div>

                    <div className="btnGroup">
                        <button onClick={() => setActiveButton(1)}>{hero[lang].title}</button>
                        <button onClick={() => setActiveButton(2)}>{hero[lang].desc}</button>
                        <button onClick={() => setActiveButton(3)}>{hero[lang].info}</button>

                        <div>
                            {
                                activeButton ===1 ? (
                                    <div dangerouslySetInnerHTML={{__html: newOne.data[`haqida_${lang}`]}}></div>
                                    ) : activeButton ===2 ?(
                                    <div dangerouslySetInnerHTML={{__html: newOne.data[`maqsad_${lang}`]}}></div>
                                    ) : activeButton ===3 ?(
                                      <div>
                                        {
                                        newOne.data?.faoliyatlar && newOne.data.faoliyatlar.map((item, index) => (
                                          <div key={index} className='faoliyat__wrapper'>
                                            <Link style={textSytles(20,700)} to={`/faoliyatlar/${item.title_uz.toLowerCase().split(' ').map(str => str.split('').filter(char => /[a-zA-Z]/.test(char)).join('')).join('-')}-${item._id}`} key={index}>{item[`title_${lang}`]}</Link>
                                          </div>
                                        ))
                                        }
                                      </div>
                                    ) :(
                                    <></>
                                )
                            }
                        </div>
                    </div>
                </>
            ):(
                <></>
            )
        }
        
        </div>

      <div className="cardHodim">
        {newOne.isFetched && newOne.data?.hodimlar?.map((e, index) => (
          <XodimCard
            key={index}
            img={`${globalUrl}/${e.photo}`}
            job={e[`job_${lang}`]}
            name={e[`name_${lang}`]}
            email={e.email}
            tel={e.tell}
          />
        ))}
      </div>
    </div>
  );
};

export default BolimMarkazSingle;