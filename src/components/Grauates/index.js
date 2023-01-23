import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";

import Card from "../card/Card";
const Famous = () => {
  const { lang } = useContext(Context);
    const [student, setStudent] = useEffect()
    useEffect(()=>{
        fetch(`localhost:5000/Fak_data/all`,
        {headers:{
          "Content-type":"aplication/json",}
        })
        .then((res)=> res.json()).then((data) =>{
          
            setStudent(data)
            console.log(data);
        })
    }, [])
    console.log("ndndn")
  return (
    <div>
      
      {
        student.map((i)=>(
          <Card   
          isRectorat={false}
          isFamousSt={true}
          img={i`[photo]`}
          name={i[`name_${lang}`]}
          job={i[`job_${lang}`]}
          ishJoyi={i[`ish_joyi_${lang}`]}
          bitirganKafedra={i[`kafedra_name_${lang}`]}
          tugatganYili={i[`finished_year`]}
          />
        ))
      }
    </div>
  )
}

export default Famous