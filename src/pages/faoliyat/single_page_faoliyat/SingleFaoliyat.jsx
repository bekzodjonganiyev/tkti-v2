import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import "./SingleFaoliyat.css";

import { Context } from "../../../context";
import { AccordionComponent } from "../../../components/accordion";

const SingleFaoliyat = () => {
  const key = useLocation();
  const id = useParams();
  const { globalUrl } = useContext(Context);

  const [data, setData] = useState([]);
  const [activityData, setActivityData] = useState([]);

  const activityContent = data?.filter((i) => id.id in i);

  async function getData(id) {
    fetch(`${globalUrl}/faoliyat/${id}`, {
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.child);
        setActivityData(res.data.child);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    function getActivities() {
      fetch(`${globalUrl}/faoliyat/all`, {
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          //   console.log(res);
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
    getActivities();
  }, []);
  return (
    <div>
      <div className="activity">
        {activityContent.length !== 0 ? (
          <>
            <div className="left">
              {activityContent.map((i) => (
                <button onClick={() => getData(i._id)}>{i.title_uz}</button>
              ))}
            </div>
            <div className="right">
              {activityData.map((i) => (
                <div className="right-inner">
                  <h1>{i.title_uz}</h1>
                  <div
                    className=""
                    dangerouslySetInnerHTML={{ __html: i.description_uz }}
                  ></div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h1>Hech qanday faoliyat topilmadi</h1>
        )}
      </div>
      {/* <AccordionComponent /> */}
    </div>
  );
};

export default SingleFaoliyat;
