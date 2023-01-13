import React, { useContext } from "react";
import "./workPlan.css";

import workPlan from "./workPlanLang";
import { Context } from "../../../context";
const WorkPlan = () => {
  const { lang } = useContext(Context);
  return (
    <div className="wrapped ">
      <div className="row workplan__wrapper mb-5">
          <div className="workPlan">
            <h3 className=" my-3">{workPlan[lang].plan.title}</h3>
            <div>
              <sup className="mx-5">{workPlan[lang].plan.info}</sup>
            </div>
            <button className="workPlan__btn">
              <a
                target="_blank"
                href="https://www.dropbox.com/s/1bd0l3svbp5ky5d/0tm1.pdf?dl=0 "
              >
                <span>{workPlan[lang].plan.title3}</span>
                <i className=" fa-solid fa-file-pdf"></i>
              </a>
            </button>
          </div>
          <div className="workPlan">
            <h3 className="my-3">{workPlan[lang].plan.title2}</h3>
            <div>
              <sup className="mx-5">{workPlan[lang].plan.info}</sup>
            </div>

            <button className="workPlan__btn">
              <a
                target="_blank"
                href="https://www.dropbox.com/s/1bd0l3svbp5ky5d/0tm1.pdf?dl=0 "
              >
                <span> {workPlan[lang].plan.title4}</span>
                <i className=" fa-solid fa-file-pdf"></i>
              </a>
            </button>
          </div>
        </div>
    </div>
  );
};

export default WorkPlan;
