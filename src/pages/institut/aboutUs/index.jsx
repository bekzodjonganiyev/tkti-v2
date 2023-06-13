import React from "react";
import { Photo } from "./Photo";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
export const AboutUS = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto w-[90%]  lg:my-10 my-3">
      <h2 className="flex justify-center items-center mx-auto  text-3xl lg:my-8 my-6 font-semibold ">
        {t("aboutUs.0.name")}
      </h2>
      <div className="text-lg">
        <p>{t("aboutUs.1.name")}</p>
        <br />
        <p>{t("aboutUs.2.name")}</p>
        <br />
        <p>{t("aboutUs.3.name")}</p>
        <br />
        <p>{t("aboutUs.4.name")}</p>
        <br />
        <p>{t("aboutUs.5.name")}</p>
        <br />
      </div>
      <Photo />
    </div>
  );
};
