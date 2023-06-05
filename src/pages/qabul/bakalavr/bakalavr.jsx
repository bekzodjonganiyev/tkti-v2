import React from "react";
import { useContext } from "react";

import "./bakalavr.css";

import { bakalavr } from "./lang";
import { AccordionComponent } from "../../../components/accordion";
import { useEffect } from "react";
import { Context } from "../../../context";

function Bakalavr() {
  const { lang } = useContext(Context);

  const [data, setData] = React.useState([
    {
      id: 1,
      status: true,
      title: bakalavr[lang].questions[0].title,
      content: bakalavr[lang].questions[0].content,
    },
    {
      id: 2,
      status: false,
      title: bakalavr[lang].questions[1].title,
      content: bakalavr[lang].questions[1].content,
    },
    {
      id: 3,
      status: false,
      title: bakalavr[lang].questions[2].title,
      content: bakalavr[lang].questions[2].content,
    },
    {
      id: 4,
      status: false,
      title: bakalavr[lang].questions[3].title,
      content: bakalavr[lang].questions[3].content,
    },
    {
      id: 5,
      status: false,
      title: bakalavr[lang].questions[4].title,
      content: bakalavr[lang].questions[4].content,
    },
    {
      id: 6,
      status: false,
      title: bakalavr[lang].questions[5].title,
      content: bakalavr[lang].questions[5].content,
    },
    {
      id: 7,
      status: false,
      title: bakalavr[lang].questions[6].title,
      content: bakalavr[lang].questions[6].content,
    },
    {
      id: 8,
      status: false,
      title: bakalavr[lang].questions[7].title,
      content: bakalavr[lang].questions[7].content,
    },
    {
      id: 9,
      status: false,
      title: bakalavr[lang].questions[8].title,
      content: bakalavr[lang].questions[8].content,
    },
    {
      id: 10,
      status: false,
      title: bakalavr[lang].questions[9].title,
      content: bakalavr[lang].questions[9].content,
    },
    {
      id: 11,
      status: false,
      title: bakalavr[lang].questions[10].title,
      content: bakalavr[lang].questions[10].content,
    },
  ]);

  useEffect(() => {
    const filter = data.filter(
      (a, index) => (
        (a.title = bakalavr[lang].questions[index].title),
        (a.content = bakalavr[lang].questions[index].content)
      )
    );
    setData(filter);
  }, [lang]);

  return (
    <div className="wrapped">
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 bakalavr__container ijno">
          <div className=" container mx-auto w-[80%] lg:flex my-4 justify-between items-center ">
            <div>


          <a className="font-medium text-2xl" href="https://backend.tkti.uz/uploads/file-1685964934385.docx">2021-2022 qabul kvotalari va o'tish ballari</a>
            </div>
            <div>
              
          <a className="font-medium text-2xl" href="https://backend.tkti.uz/uploads/file-1685964970393.xlsx">2022-2023 qabul kvotalari va o'tish ballari</a>
              </div>
</div>
            <h1>{bakalavr[lang].about}</h1>
            <br />
            {bakalavr[lang].aboutData.map((i, idx) => (
              <React.Fragment key={idx}>
                {typeof i === "object" ? (
                  <>
                  <a href={i.link}>
                    &nbsp; &nbsp; {i.text}
                  </a>
                 
                  </>
                ) : (
                  <p > &nbsp; &nbsp; {i}</p>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className=" study__on__tktu">
            <h1>{bakalavr[lang].question}</h1>
            <AccordionComponent arr={data} setarr={setData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bakalavr;
