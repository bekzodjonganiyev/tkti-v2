import React, { useState, useEffect, useContext } from "react";
import ContactLang from "../lang";
import "./rectorat.css";
import { Context } from "../../../context";
import apiClientWithFetch from "../../../services/apiClientWithFetch";
import { baseURL } from "../../../services/http";
import { EmailIcon2, LocationIcon2, PhoneIcon2 } from "../../../assets/icons";
import i18next from "i18next";
import { Link } from "react-router-dom";

function Rectorat() {
  const { lang, refresh } = useContext(Context);
  const [data, setData] = useState({ loading: true });
  const [rectors, setRectors] = useState([]);


  useEffect(() => {
    const newRectors = data?.data?.map((item, index) => {
      return (
        {
          id: item?._id,
          status: index === 0 ? true : false,
          title: item[`job_${lang}`],
          content: {
            name: item[`name_${lang}`],
            img: baseURL + item?.photo,
            job: item[`job_${lang}`]
          },
          body: [
            {
              class: <LocationIcon2/>,
              text: item[`address_${i18next.language}`],
            },
            {
              class: <PhoneIcon2/>,
              text: item?.tel,
              href: item?.tel,
            },
            {
              class: <EmailIcon2/>,
              text: item?.link,
              href: item?.link,
            }
          ]
        }
      )
    })
    setRectors(newRectors)
  }, [data])

  const test = (id) => {
    rectors.map((a) => (a.status = false));
    const find = rectors.find((e) => e.id === id);
    find.status = !find.status;
    return setRectors([...rectors]);
  };

  const getData = async () => {
    const res = await apiClientWithFetch.get(`rektorat/all`);
    if (res.status === 200) {
      setData({
        loading: false,
        data: res.data,
        error: "",
      });
    } else {
      setData({
        loading: false,
        data: {},
        error: res?.status ? res.status : res,
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (refresh) {
      window.location.reload(true);
    }
  }, [lang]);

  return (
    <div className="container wrapped mb-5 mt-10">
              <div className="rectorat__list">
                <div className="rectorat__menu">
                  {rectors?.map((a) => (
                    <>
                      <li
                        onClick={() => test(a.id)}
                        className={`accordion__item ${
                          a.status ? "active__accordion" : ""
                        }`}
                      >
                        {" "}
                        <h4>{a.title}</h4>{" "}
                        <span
                          className={
                            a.status
                              ? "fa-solid fa-angle-down"
                              : "fa-solid fa-angle-right"
                          }
                        ></span>
                      </li>

                      <div
                        className={
                          a.status
                            ? "accordion__secret__item rectorat__secret__key"
                            : "hidden"
                        }
                      >
                        <a
                          className="rectorat__item"
                          href={`rektorat/${a.id}`}
                        >
                          <img src={a.content.img} alt="img" loading="lazy" />
                          <div className="rectorat__item__body">
                            <h2>{a.content.name}</h2>
                            <span>{a.content.job}</span>
                            {a.body.map((a, index) =>
                              a.href ? (
                                <a key={index} href={a.href}>
                                  {" "}
                                  <i className={a.class}></i> {a.text}
                                </a>
                              ) : (
                                <p key={index}>
                                  <i className={a.class}></i> {a.text}
                                </p>
                              )
                            )}
                          </div>
                        </a>
                      </div>
                    </>
                  ))}
                </div>

                

                <div className="rectorat__right">
                  {rectors?.map((a) => (
                    <>
                      {/* begin::Person card */}
                      <Link to={`${a.id}`} className={ a.status ? "accordion__secret__key__desk rectorat__secret__key__desk" : "hidden " + " flex flex-col max-lg:w-full"} >
                        {/* Avatar */}
                        <div className="w-full">
                          <img
                            loading="lazy"
                            src={a?.content?.img}
                            alt={a?.title}
                            className="w-full h-full object-cover bg-center"
                          />
                        </div>
                        {/* Info section */}
                        <div className="flex flex-col gap-4 p-4 bg-[#26597E] text-white">
                           <h2>{a.content.name}</h2>
                            <span>{a.content.job}</span>
                          {
                            a?.body?.map((item, i) => 
                              <p key={i} className="flex items-center gap-2">
                                {item?.class} {item?.text}
                              </p>
                            )
                          }
                        </div>
                      </Link>
                      {/* end::Person card */}
                    </>
                  ))}
                </div>
              </div>
            </div>
  );
}

export default Rectorat;
