import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Context } from "../../context";
import Table from '../../components/admin/table/Table'

const SertifikatComponent = () =>{
    const {DataGetter, lang, textSytles} = useContext(Context);
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

      const TableHead = about[lang];
      const TableContent = (item, index) => <th key={index}>{item}</th> 
      const TableBody = sertifikat.data;
      const TableRender = (item,index) => {
        return(
          <tr key={index}>
            <th>{index+1}</th>
            <th>{item.kod}</th>
            <th>{item[`name_${lang}`]}</th>
            <th><a download href={item.link}><i className="fa-solid fa-file-pdf"></i></a></th>
          </tr>

        )
      }    
    return(
        <div className="container mb-5">
          
           {
            sertifikat.isFetched && sertifikat.data ? (
              <Table headData={TableHead} renderHead={TableContent} renderBody={TableRender} bodyData={TableBody} />
            ):(
              <></>
            )
           }
        </div> 
    )
}

export default SertifikatComponent;