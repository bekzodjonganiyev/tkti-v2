import React from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { PhoneIcon } from "../../../assets/icons";
export const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <div className="container  mx-auto w-[90%]">
      <h2 className="flex justify-center items-center mx-auto  text-3xl lg:my-8 my-6 font-semibold ">
        Bog'lanish
      </h2>
    
<div className="container mx-auto w-[90%] grid lg:grid-cols-2 ">
      <div className="">
        <div>
          <span className="text-2xl">
          {t("ContactUs.0.name")}
          </span>
         
          <span>
          <PhoneIcon color="#000"/> +998 71 273 64 60
          </span>
         
        </div>
        <div className="w-[35px]  h-[250] ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1451.247693284386!2d69.21430996657398!3d41.304948152838854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE4JzE3LjYiTiA2OcKwMTInNTMuMCJF!5e0!3m2!1sru!2s!4v1685345582343!5m2!1sru!2s"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className=" ">
        <div>
          <span className="text-2xl">
          {t("ContactUs.1.name")}
          </span>
          <span>
          <PhoneIcon />  +998 71 267 98 32
          </span>
         
        </div>
        <div className="w-[35px]  h-[250] ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2996.460932053506!2d69.31637407583443!3d41.32058937130837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE5JzE0LjEiTiA2OcKwMTknMDguMiJF!5e0!3m2!1sru!2s!4v1685345679663!5m2!1sru!2s"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className=" ">
        <div>
          <span className="text-2xl">
          {t("ContactUs.2.name")}
          </span>
          <span>
          <PhoneIcon /> +99871 244 92 35
          </span>
         
        </div>
        <div className="w-[35px]  h-[250] ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2996.358301570982!2d69.24381487583457!3d41.32282147130823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE5JzIyLjIiTiA2OcKwMTQnNDcuMCJF!5e0!3m2!1sru!2s!4v1685345802537!5m2!1sru!2s"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className=" ">
        <div>
          <span className="text-2xl">
          {t("ContactUs.3.name")}
          </span>
          <span>
          <PhoneIcon /> +998 71 254 58 87

          </span>
         
        </div>
        <div className="w-[35px]  h-[250] ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.6439677794037!2d69.36870917467044!3d1.3901797985966895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMjMnMjQuNyJOIDY5wrAyMicxNi42IkU!5e0!3m2!1sru!2s!4v1685345908693!5m2!1sru!2s"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className=" ">
        <div>
          <span className="text-2xl">
          {t("ContactUs.4.name")}
          </span>
          <span>
          <PhoneIcon />+99871 244 19 72
          </span>
         
        </div>
        <div className="w-[35px]  h-[250] ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.6439677794037!2d69.36870917467044!3d1.3901797985966895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMjMnMjQuNyJOIDY5wrAyMicxNi42IkU!5e0!3m2!1sru!2s!4v1685346490064!5m2!1sru!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      </div>
    </div>
  );
};
