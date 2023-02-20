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
          <div>
            <a
              href={`https://telegram.me/share/url?url=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&quote=Assalomu alaykum yangiliini o'qidingzimi?`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <div>
            <a
              href={`https://api.whatsapp.com/send?${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href={`https://vk.com/share.php?url=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-vk"></i>
            </a>

            <a
              href={`https://twitter.com/share?text=Assalomu alaykum yangilikni ko'rdingizmi&url=${window.location.href}&text=Toshkent kimyo texnologiya instituti yangiliklari`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

const SingleFaoliyat = () => {
  const { time, DataGetter } = useContext(Context);
  const { ref } = useParams();
  const { globalUrl, lang } = useContext(Context);
  const [data, setData] = useState({
    isFetched: false,
    error: false,
    data: {},
  });
  const navigate = useNavigate();
  const id = ref.substring(ref.lastIndexOf("-") + Number(1));

  useEffect(() => {
    if (id.length === 24) {
      DataGetter(setData, `faoliyat/${id}`);
    }
  }, []);

  useEffect(() => {
    if (id.length != 24) {
      navigate(-1);
    }
  }, []);

  return (
    <div>
      <div className="activity">
        {data.isFetched && !data.error ? (
          <>
            <div className="left">{data.data[`title_${lang}`]}</div>
            <div className="right">
              {data.data.child?.map((i, index) => (
                <div key={index} className="right-inner">
                  <h1>{i.title_uz}</h1>
                  <div style={{ margin: "30px 10px" }}>
                    {i?.hashtag?.map((item) => (
                      <span style={{ color: "blue", marginRight: "15px" }}>
                        #{item.value}
                      </span>
                    ))}
                  </div>
                  <div
                    className="card__html__content"
                    dangerouslySetInnerHTML={{
                      __html: i[`description_${lang}`],
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <SocialShare />
                    {/* <span style={{fontSize:"20px"}}><i style={{fontSize:"20px", backgroundColor:"black", color:"white", padding:"10px", borderRadius:"50%", width:"40px", height:"40px", textAlign:"center"}} className="fa fa-map-marker"></i>{i[`location_${lang}`]}</span> */}
                    <span style={{ fontWeight: "700", fontSize: "20px" }}>
                      {time(i.date)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SingleFaoliyat;
