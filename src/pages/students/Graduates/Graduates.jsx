import React, { useContext } from "react";
import "react-multi-carousel/lib/styles.css";
import './Graduates.css'
import GiftedStudents from "./GiftedStudents";

import { Context } from "../../../context";
import studentInfo from "./lang";

const Graduates = () => {
  const { lang } = useContext(Context);
  return (
    <div className="wrapped">
      <div className="graduates-info">
              <p>{studentInfo[lang].graduates.first}</p>
            </div>
              <GiftedStudents />  
    </div>
  );
};

export default Graduates;