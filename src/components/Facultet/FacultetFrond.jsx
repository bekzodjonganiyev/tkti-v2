import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../context'
import { Link, useParams } from "react-router-dom";
const FacultetFrond = () => {
    const { lang } = useContext(Context);
    const [facultet, setFacultet] = useState({
        success: false,
        data: {},
      });
      useEffect(() => {
        fetch(`http://localhost:5000/Fak_data/all`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => setFacultet(data));
          console.log();
      }, [setFacultet]);
    
  return (
    <div>Facultet</div>
  )
}

export default FacultetFrond