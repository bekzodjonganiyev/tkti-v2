import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import "./workPlan.css";

const WorkPlan = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto w-full">
       <h2 className="flex justify-center items-center mx-auto  text-3xl lg:my-6 my-4 font-semibold ">{t("WorkPlan.0.name")}</h2>
      <div className="grid lg:grid-cols-2 workplan__wrapper mb-5">
          <div className="my-2">
           
            <div>
              <span className="mx-5">{t("WorkPlan.3.name")}</span>
            </div>
            <button className="workPlan__btn">
              <a
                target="_blank"
                href="https://www.dropbox.com/s/1bd0l3svbp5ky5d/0tm1.pdf?dl=0 "
              >
                <span>{t("WorkPlan.2.name")}</span>
                <i className=" fa-solid fa-file-pdf"></i>
              </a>
            </button>
          </div>
          <div className="my-2">
           
            <div>
              <span className="mx-5 "> {t("WorkPlan.4.name")}</span>
            </div>

            <button className="workPlan__btn">
              <a
                target="_blank"
                href="https://www.dropbox.com/s/1bd0l3svbp5ky5d/0tm1.pdf?dl=0 "
              >
                <span> {t("WorkPlan.2.name")}</span>
                <i className=" fa-solid fa-file-pdf"></i>
              </a>
            </button>
          </div>
        </div>
    </div>
  );
};

export default WorkPlan;
