import React, { useContext, useEffect, useState } from "react";
import { AccordionComponent } from "../../../components/accordion";
import { Context } from "../../../context";
import SelectLang from "./lang";
import './select.css'

const SelectStudent = () => {
  const {lang} = useContext(Context)
   const [state, setState] = useState([
    {id:0, status:true, title: SelectLang[lang][0].title, content:SelectLang[lang][0].content},
    {id:1, status:false, title: SelectLang[lang][1].title, content:SelectLang[lang][1].content},
    {id:2, status:false, title: SelectLang[lang][2].title, content:SelectLang[lang][2].content},
    {id:3, status:false, title: SelectLang[lang][3].title, content:SelectLang[lang][3].content}
   ]);

   useEffect(() => {
    const filter = state.filter(
      (a, index) => (
        (a.title = SelectLang[lang][index].title),
        (a.content = SelectLang[lang][index].content)
      )
    );
    setState(filter);
  }, [lang]);
  return (
    <div className="wrapped mb-5">
              <AccordionComponent arr={state} setarr={setState} />
    </div>
  );
};

export default SelectStudent;
