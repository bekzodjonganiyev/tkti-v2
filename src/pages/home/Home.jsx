import { useState, useEffect } from "react";
import {Banner} from "../../components/banner";

import { News } from "../news";

import { UsefulLinks } from "../usefulLinks";
import { Statistics } from "../statistics";
import { Sillabus } from "../../components/sillabus";
import { baseURL } from "../../services/http";

export const Home = () => {
  const [yili, setYili] = useState([]);
  useEffect(() => {
    fetch(`${baseURL}/daraja/all`)
      .then((res) => res.json())
      .then((res) => {
        const newArr = res.data.map((i) => i.yili);
        setYili(Array.from(new Set(newArr)));
      });
  }, []);


  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);
      },
      (error) => {
        console.error('Error getting location:', error.message);
      }
    );
  }, []);



  return (
    <div>
      <Banner />
      <Sillabus yili={yili} />
      <News home={true}/>
      <UsefulLinks />
      <Statistics />
    </div>
  );
};
