import { useContext } from "react";
import { Context } from "../../../context";

import "./style.css"

import { darsJadvali } from "./lang";

function DarsJadval() {
  const { lang } = useContext(Context);
  return (
    <div className="wrapped">
    <h1>{darsJadvali[lang].title}</h1>
    <br />
    <table className="table-box">
      <thead>
         
        <tr className="first__child">
            <th>{darsJadvali[lang].titles.faculty}</th>
           
            <th className="kurslar">{darsJadvali[lang].titles.course}</th>
          
        </tr>
        
      </thead>
      <tbody>
        {darsJadvali[lang].sciences.map((data, key) => (
          <tr className="darsJAdval" key={key}>
            <td>{data.title}</td>
            <td className="aaal">
              {data.file.map((pdf, key) => (
                <a href={pdf} download={true} key={key}>
                  {key + 1}-{darsJadvali[lang].course}
                </a>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default DarsJadval;