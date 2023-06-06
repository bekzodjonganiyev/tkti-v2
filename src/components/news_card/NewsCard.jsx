import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import "./NewsCard.css";

import { CalendarIcon } from "../../assets/icons";



const ShortInfoCard = ({
  endpoint,
  category,
  img,
  dateProps,
  title,
  body,
}) => {
  const {t} = useTranslation()
  return (
    <Link to={`/${i18next.language}/news/details/${category}/${endpoint}`}>
      <div className={`flex p-5 rounded-xl ${ "gap-5 sm:flex-row    w-[100%] md:w-56 lg:w-72 xl:w-[380] 2xl:w-[430px]"}`}>
        <div className={`mx-auto`}>
          <img src={img} alt={`Image Alt`}   className={`img-lazy  "sm:w-60 sm:h-44 w-full h-auto" : "w-full h-full "} rounded-xl`} />
      
         
        </div>
        <div className={` "w-4/6" : ""}`}>
          <div className="flex items-center gap-2 ">
            <CalendarIcon />{" "}
            <span>{dateProps}</span>
          </div>
          <p className={`font-bold mt-2  "xl:text-xl lg:text-lg text-sm" : "news-title"} `}>
            {t("NewsCard.title", {news_card_title: title})}
          </p>
        </div>
        {}
      </div>
    </Link>
  );
};

export default ShortInfoCard;
