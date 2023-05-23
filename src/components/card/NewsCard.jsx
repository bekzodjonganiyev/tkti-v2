import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { CalendarIcon } from '../../assets/icons';



export const NewsCard = ({
    img, dateProps, title, body
}) => {
    const {t} = useTranslation()
  return (
 
    <div className={`flex p-5 rounded-xl ${ "gap-5 sm:flex-row    w-[100%] md:w-56 lg:w-72 xl:w-[380] 2xl:w-[430px]"}`}>
      <div className={`mx-auto`}>
        <img
          src={img}
          alt={`Image Alt`}
          
          
        />
         <div className="flex items-center gap-2 ">
          <CalendarIcon />{" "}
          <span>{dateProps}</span>
        </div>
        <p className={`font-semibold mt-2 line-clamp-2 ${ "xl:text-xl lg:text-lg text-sm news-title"} `}>
          {t("NewsCard.title", {news_card_title: title})}
        </p>
    
      
        
      </div>
      
      
      
  
    </div>
 
  )
}
