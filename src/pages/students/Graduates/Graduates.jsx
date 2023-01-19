import React, { useContext, useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import './Graduates.css'
import GiftedStudents from "./GiftedStudents";

import { Context } from "../../../context";
import studentInfo from "./lang";

const Graduates = () => {
  const { lang } = useContext(Context);
  const [student, setStudent] = useState({
    isFetched: false,
    error: false,
    data: {},
  });
  useEffect(() => {
    fetch(`http://localhost:5000/student/all`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
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