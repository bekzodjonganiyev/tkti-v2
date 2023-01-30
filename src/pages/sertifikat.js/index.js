import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Context } from "../../context";
import Table from '../../components/admin/table/Table'

const SertifikatComponent = () =>{
    const {DataGetter, lang, textSytles} = useContext(Context);
    const [hero] = useState({
      uz: {
        title: "Sertifikat",
       
      },
      ru: {
        title: "Cертификат",
       
      },
      en: {
        title: "Certificate",
        
      },
    });
    const [about]= useState({
      uz:[`№`,`Kod`,`Ismi`,`Yuklash`],
      ru:[`№`, `Код`, `Имя`, `Скачать`],
      en:[`№`, `Code`, `Name`, `Download`]
    })

    const [sertifikat, setSertifikat] = useState({
        isFetched: false,
        error: false,
        data: {},
      });

      useEffect(()=>{
        DataGetter(setSertifikat, 'sertifikat/all')
      },[]);
      const [search, setSearch] = useState()
      const TableHead = about[lang];
      const TableContent = (item, index) => <th key={index}>{item}</th> 
      const TableBody = sertifikat.data;
      const TableRender = (item,index) => {
        return(
          <tr key={index}>
            <th>{index+1}</th>
            <th>{item.kod}</th>
            <th>{item[`name_${lang}`]}</th>
            <th><a download href={item.link}><i className="fa-2x fa-solid fa-file-pdf"></i></a></th>
          </tr>

        )
      }    
    return(
        <div className="container mb-5">
          <h2 className="cardTitleComp">{hero[lang].title}</h2>
           {
            sertifikat.isFetched && sertifikat.data ? (
              <>
              <input type="text" className="form-control" value={search} onChange={(e) => setSearch(e.target.value)} />
              <Table headData={TableHead} renderHead={TableContent} renderBody={TableRender} bodyData={TableBody} search={search} />

              </>
            ):(
              <></>
            )
           }
        </div> 
    )
}

export default SertifikatComponent;