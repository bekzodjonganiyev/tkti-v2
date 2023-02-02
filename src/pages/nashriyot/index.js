import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Context } from "../../context";
import Table from '../../components/admin/table/Table'

const NashriyotComponent = () =>{
    const {DataGetter, lang,time} = useContext(Context);
    const [hero] = useState({
      uz: {
        title: "Nashriyot",
        placeholder:" Nashriyot qidirish"
       
      },
      ru: {
        title: "Издатель",
        placeholder:" Поиск издателя"
       
      },
      en: {
        title: "Publisher",
        placeholder:" Publisher search"
        
      },
    });
    const [about]= useState({
      uz:[`№`,`Sana`,`Ismi`,`Yuklash`],
      ru:[`№`, `Дата`, `Имя`, `Скачать`],
      en:[`№`, `Date`, `Name`, `Download`]
    })

    const [nashriyot, setNashriyot] = useState({
        isFetched: false,
        error: false,
        data: {},
      });

      useEffect(()=>{
        DataGetter(setNashriyot, 'matbuot/all')
      },[]);

      const [search, setSearch] = useState()


      const TableHead = about[lang];
      const TableContent = (item, index) => <th key={index}>{item}</th> 
      const TableBody = nashriyot.data;
      const TableRender = (item,index) => {
        return(
          <tr key={index}>
            <th>{index+1}</th>
            <th>{item[`name_${lang}`]}</th>
            <th>{time(item.date)}</th>
            <th><a download href={item.link}><i className="fa-2x fa-solid fa-file-pdf"></i></a></th>
          </tr>

        )
      }    
    console.log(nashriyot);
    return(
        <div className="container mb-5">
          <h2 className="cardTitleComp">{hero[lang].title}</h2>
           {
            nashriyot.isFetched && nashriyot.data ? (
              <>
              <input  placeholder={hero[lang].placeholder} type="text" className="search-input" value={search} onChange={(e) => setSearch(e.target.value)} />
              <Table headData={TableHead} renderHead={TableContent} renderBody={TableRender} bodyData={TableBody} search={search} limit={10} />
              </>
            ):(
              <></>
            )
           }
        </div> 
    )
}

export default NashriyotComponent;