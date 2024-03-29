import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Accordion, Spinner } from "flowbite-react";
import i18next from "i18next";

import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Loader } from "../loader/Loader";
import { Error } from "../error/Error";

import { UniversalComponentActions } from "./action";
import { useAppContext } from "../../context/app.context";
import { baseURL } from "../../services/http";
import { time } from "../../services/dateFormatter";
import {
  CalendarIcon,
  FacebookIcon,
  Linkedin,
  Talim,
  TelegramIcon,
} from "../../assets/icons";
import { ImageGallary } from "../image_gallary/ImageGalary";

export const UniversalComponent = () => {
  const { t } = useTranslation();
  const { page, id } = useParams();

  const dispatch = useDispatch();
  const genericCom = (state) => state.genericCom;
  const { data, loading, error } = useSelector(genericCom);
  const { getData } = new UniversalComponentActions();

  // route da mongodb ning id sini olib tashlashlandi va id context orqali olib kelindi
  const { idForFetch } = useAppContext();

  const [socialColor, setSocialColor] = useState({
    fb: "#666",
    lki: "#666",
    wk: "#666",
    tg: "#666",
  });

  useEffect(() => {
    dispatch(getData(`${page}/${id}`));
  }, [page, id]);

  if (loading) return <Loader />;
  if (error) return <Error error={error}/>;

  return (
    <div className="container mx-auto w-[95%] max-md:px-5 py-10 uni-comp-wrapper">
      {page.split("_")[2] === "child" ? (
        <div>
          <h1 className="lg:text-3xl  max-sm:text-2xl font-bold mb-5 ">
            {data[`title_${i18next.language}`]}
          </h1>
          <div
            className="uni-comp-body mb-10"
            dangerouslySetInnerHTML={{
              __html: t("MoreDetails.body", {
                more_details_body: `${data[`body_${i18next.language}`]}`,
              }),
            }}
          />
          {data?.faq?.length > 0 && (
            <Accordion>
              {JSON.parse(data?.faq)?.map((item) => (
                <Accordion.Panel key={item._id}>
                  <Accordion.Title>
                    {item[`question_${i18next.language}`]}
                  </Accordion.Title>
                  <Accordion.Content>
                    {item[`answer_${i18next.language}`]}
                  </Accordion.Content>
                </Accordion.Panel>
              ))}
            </Accordion>
          )}
          {data?.file?.length > 0 ? (
            <ImageGallary imgSrcs={data?.file} />
          ) : null}
        </div>
      ) : (
        data?.child?.map((item) => (
          <div key={item._id}>
            <h1
              className="lg:text-3xl   max-sm:text-2xl font-bold mb-5"
              onClick={() => console.log(item.file)}
            >
              {item[`title_${i18next.language}`]}
            </h1>








            <div
              className="uni-comp-body mb-10"
              dangerouslySetInnerHTML={{
                __html: t("MoreDetails.body", {
                  more_details_body: `${item[`body_${i18next.language}`]}`,
                }),
              }}
            />
            {item?.faq?.length > 0 && (
              <Accordion>
                {JSON.parse(item?.faq)?.map((subItem) => (
                  <Accordion.Panel key={item._id}>
                    <Accordion.Title className="text-xl  font-semibold">
                      {subItem[`question_${i18next.language}`]}
                    </Accordion.Title>
                    <Accordion.Content className="text-xl">
                      {subItem[`answer_${i18next.language}`]}
                    </Accordion.Content>
                  </Accordion.Panel>
                ))}
              </Accordion>
            )}
            {item?.file?.length > 0 ? (
              <ImageGallary imgSrcs={item?.file} />
            ) : null}
          </div>
        ))
      )}

      {/* Share social networks */}
      <div className="flex justify-between items-center mt-10">
        <div className="lg:w-9/12 w-full flex flex-wrap gap-2 ">
          <CalendarIcon />
          <span className="font-medium">{time(data.date)}</span>
        </div>
        <div className="flex gap-5">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&quote=Assalomu alaykum yangiliini o'qidingzimi?`}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setSocialColor({ ...socialColor, fb: "blue" })}
            onMouseLeave={() => setSocialColor({ ...socialColor, fb: "#666" })}
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
            onMouseLeave={() => setSocialColor({ ...socialColor, lki: "#666" })}
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
            onMouseLeave={() => setSocialColor({ ...socialColor, wk: "#666" })}
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
            onMouseLeave={() => setSocialColor({ ...socialColor, tg: "#666" })}
          >
            <TelegramIcon color={socialColor.tg} />
          </a>
        </div>
      </div>
    </div>
  );
};

export { genericComReducer } from "./reducer";
