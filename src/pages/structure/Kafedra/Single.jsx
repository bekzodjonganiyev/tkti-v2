import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context";
import { Link, useParams } from "react-router-dom";
import { XodimCard } from "../../../components/xodim_card/XodimCard";


const KafedraSingle = () => {
  const { lang, globalUrl, DataGetter,textSytles } = useContext(Context);
  const [hero] = useState({
    uz: {
      title: "Kafedralar haqida",
      desc: "Maqsad va vazifalari",
      info:"Faoliyatlar",
      type:`Ta'lim yo'nalishlari`

    },
    ru: {
        title: "О Отделы",
        desc: "Цели и задачи",
       info:"Деятельность",
       type:`Образовательные направления`

    },
    en: {
        title: "About Departments",
        desc: "Aims and Objectives",
        info:"Activities",
        type:`Educational directions`

    },
  });
  const { id } = useParams();

  const [newOne, setNewOne] = useState({
    isFetched: false,
    error: false,
    data: {},
  });
  const refId = id.substring(id.lastIndexOf("-") + Number(1));
  const [activeButton, setActiveButton] = useState(1);

  useEffect(() => {
    if(refId.length ===24){
        DataGetter(setNewOne, `kafedra_data/${refId}`)
    }
  }, []);


  return (
    <div className="container">
      <div className="facultetDesc">
        {
          newOne.isFetched && newOne.data ? (
            <>
                <div className="fakultetName">{newOne.data[`title_${lang}`]}</div>

                <div className="btnGroup">
                    <button onClick={() => setActiveButton(1)}>{hero[lang].title}</button>
                    <button onClick={() => setActiveButton(2)}>{hero[lang].desc}</button>
                    <button onClick={() => setActiveButton(3)}>{hero[lang].type}</button>
                    <button onClick={() => setActiveButton(4)}>{hero[lang].info}</button>

                    {
                        activeButton ===1?(
                            <div className="fakultet-inner" dangerouslySetInnerHTML={{__html:newOne.data[`haqida_${lang}`]}} ></div>
                        ):activeButton ===2 ?(
                            <div className="fakultet-inner" dangerouslySetInnerHTML={{__html: newOne.data[`maqsad_${lang}`]}} ></div>
                        ) : activeButton ===4 ?(
                            <div>
                                {
                                newOne.data?.faoliyatlar && newOne.data.faoliyatlar.map((item, index) => (
                                    <div key={index} className='faoliyat__wrapper'>
                                        <Link style={textSytles(20,700)}  to={`/faoliyatlar/${item.title_uz.toLowerCase().split(' ').map(str => str.split('').filter(char => /[a-zA-Z]/.test(char)).join('')).join('-')}-${item._id}`}>{item[`title_${lang}`]}</Link>
                                    </div>
                                ))
                                }
                            </div>
                        ): activeButton ===3 ? (
                          <div>
                            {
                              newOne.data?.yonalishlar && newOne.data.yonalishlar.map((e, ind) =>(
                                <h2 key={ind} style={textSytles(20,700)}>{e[`title_${lang}`]}</h2>
                              ))
                            }
                          </div>
                        ):(
                            <></>
                        )
                    }
                </div>
            </>
          ):(
            <></>
          )
        }
      </div>
      <div className="cardHodim">
          {newOne.data?.hodimlar?.map((e, index) => (
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

export default KafedraSingle;