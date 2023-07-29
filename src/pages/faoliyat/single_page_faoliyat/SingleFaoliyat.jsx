import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./SingleFaoliyat.css";

import { Context } from "../../../context";
import {
  FacebookIcon,
  Linkedin,
  Talim,
  TelegramIcon,
} from "../../../assets/icons";


const SingleFaoliyat = () => {
  const { time, DataGetter } = useContext(Context);
  const { id } = useParams();
  const { globalUrl, lang } = useContext(Context);
  const [data, setData] = useState({
    isFetched: false,
    error: false,
    data: {},
  });

  const [socialColor, setSocialColor] = useState({
    fb: "#666",
    lki: "#666",
    wk: "#666",
    tg: "#666",
  });

  useEffect(() => {
    if (id.length === 24) {
      DataGetter(setData, `faoliyat/${id}`);
    }
  }, []);

  return (
    <div>
      <div className="container activity mt-16">
        {data.isFetched && !data.error ? (
          <>
            <div className="flex justify-center left">
              {data.data[`title_${lang}`]}
            </div>
            <div>
              {data.data.child?.map((i, index) => (
                <div key={index}>
                  <h1>{i.title_uz}</h1>
                  <div style={{ margin: "30px 10px" }}>
                    {i?.hashtag?.map((item) => (
                      <span
                        key={item?.id}
                        style={{ color: "blue", marginRight: "15px" }}
                      >
                        #{item.value}
                      </span>
                    ))}
                  </div>
                  <div
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
                    <span
                      style={{
                        fontWeight: "700",
                        fontSize: "20px",
                        width: "90%",
                      }}
                    >
                      {time(i.date)}
                    </span>
                    {/* Share social networks */}
                    <div className="flex w-[90%] justify-end items-center my-16 ">
                      <div className="flex gap-5">
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&quote=Assalomu alaykum yangiliini o'qidingzimi?`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() =>
                            setSocialColor({ ...socialColor, fb: "blue" })
                          }
                          onMouseLeave={() =>
                            setSocialColor({ ...socialColor, fb: "#666" })
                          }
                        >
                          <FacebookIcon color={socialColor.fb} />
                        </a>
                        <a
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() =>
                            setSocialColor({ ...socialColor, lki: "green" })
                          }
                          onMouseLeave={() =>
                            setSocialColor({ ...socialColor, lki: "#666" })
                          }
                        >
                          <Linkedin color={socialColor.lki} />
                        </a>
                        <a
                          href={`https://vk.com/share.php?url=${window.location.href}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() =>
                            setSocialColor({ ...socialColor, wk: "yellow" })
                          }
                          onMouseLeave={() =>
                            setSocialColor({ ...socialColor, wk: "#666" })
                          }
                        >
                          <Talim color={socialColor.wk} />
                        </a>
                        <a
                          href={`https://telegram.me/share/url?url=${window.location.href}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() =>
                            setSocialColor({ ...socialColor, tg: "lightgreen" })
                          }
                          onMouseLeave={() =>
                            setSocialColor({ ...socialColor, tg: "#666" })
                          }
                        >
                          <TelegramIcon color={socialColor.tg} />
                        </a>
                      </div>
                    </div>
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
