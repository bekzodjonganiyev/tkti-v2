import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./SingleFaoliyat.css";

import { Context } from "../../../context";

function SocialShare() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="social-share"
      onMouseEnter={() => setIsOpen(!isOpen)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="share-button">
        <i className="fas fa-share-alt"></i>
      </div>
      {isOpen && (
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      )}
    </div>
  );
}

const SingleFaoliyat = () => {
  const {time} = useContext(Context)
  const { id } = useParams();
  const { globalUrl } = useContext(Context);

  const [data, setData] = useState([]);
  const [activityData, setActivityData] = useState();

  let actiovityPreloadData = null;

  let key = "";
  if (+id === 1) key = "rektorat_id";
  if (+id === 2) key = "fakultet_id";
  if (+id === 3) key = "kafedra_id";
  if (+id === 4) key = "bolim_id";
  if (+id === 5) key = "markaz_id";
  const activityContent = data?.filter((i) => key in i);
  
  console.log(activityData)
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
  
  function getActivities() {
    fetch(`${globalUrl}/faoliyat/all`, {
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }

  function checkParamsId(id) {
    if (id === 1 || id === 2 || id === 3 || id === 4 || id === 5) {
      console.log("jdjdj");
    } else {
      window.location.href = "/barcha-faoliyat";
    }
  }

  useEffect(() => {
    checkParamsId(+id);
    getActivities();
  }, []);
  return (
    <div>
      <div className="activity">
        {activityContent.length !== 0 ? (
          <>
            <div className="left">
              {activityContent.map((i) => (
                <b onClick={() => getData(i._id)}>{i.title_uz}</b>
              ))}
            </div>
            <div className="right">
             
              {activityData?.map((i) => (
                <div className="right-inner">
                  <h1>{i.title_uz}</h1>
                  <div dangerouslySetInnerHTML={{ __html: i.description_uz }} />
                  <div style={{ display: "flex", justifyContent:"space-between",  }}>
                    <SocialShare />
                    <span>{time(i.date)}</span>
                  </div>
                </div>
              ))}

            </div>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      {/* <AccordionComponent /> */}
    </div>
  );
};

export default SingleFaoliyat;
