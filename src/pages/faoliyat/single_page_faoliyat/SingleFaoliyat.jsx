import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
  const { ref } = useParams();
  const { globalUrl, lang } = useContext(Context);
  const [data, setData] = useState({get:false,error:false,data:false});
  const navigate = useNavigate()
  const id = ref.substring(ref.lastIndexOf('-')+Number(1))
  useEffect(() => {
    if(id.length ===24){
      fetch(`${globalUrl}/faoliyat/${id}`, {
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if(res.status ===200){
            setData({get:true, error:false, data:res.data});
          }
        })
        .catch(() => setData({get:false, error:true}));
    }
  }, []);

  useEffect(()=>{
    if(id.length != 24){
      navigate(-1)
    }
  },[])

  return (
    <div>
      <div className="activity">
        {
          data.get && !data.error ? (
            <>
              <div className="left">{data.data[`title_${lang}`]}</div>
              <div className="right">
              
                {
                data.data.child?.map((i, index) => (
                  <div key={index} className="right-inner">
                    <h1>{i.title_uz}</h1>
                    <div dangerouslySetInnerHTML={{ __html: i.description_uz }} />
                    <div style={{ display: "flex", justifyContent:"space-between",  }}>
                      <SocialShare />
                      <span>{time(i.date)}</span>
                    </div>
                  </div>
                ))
                }

            </div>
            </>
          ):(
           <></>
          )
        }
        
      </div>
    </div>
  );
};

export default SingleFaoliyat;
