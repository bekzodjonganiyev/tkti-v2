import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Accordion, Spinner } from "flowbite-react";
import Slider from "react-slick";
import i18next from "i18next";

import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Loader } from "../loader/Loader";

import { UniversalComponentActions } from "./action";
import { useAppContext } from "../../context/app.context";
import { baseURL } from "../../services/http";

export { genericComReducer } from "./reducer";
export const UniversalComponent = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const genericCom = (state) => state.genericCom;
  const { data, loading } = useSelector(genericCom);
  const { getData } = new UniversalComponentActions();

  // route da mongodb ning id sini olib tashlashlandi va id context orqali olib kelindi
  const { idForFetch } = useAppContext();

  const { page } = useParams();

  useEffect(() => {
    dispatch(getData(`${page}/${idForFetch}`));
  }, [page, idForFetch]);

  console.log(data);

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto max-md:px-5 py-10 uni-comp-wrapper">
      {page.split("_")[1] === "child" ? (
        <div>
          <h1 className="text-3xl font-bold mb-5">
            {data[`title_${i18next.language}`]}
          </h1>
          <Slider
            {...settings}
            autoplay={true}
            cssEase="linear"
            autoplaySpeed={4000}
            // fade={true}
            pauseOnHover={false}
          >
            {data?.file?.map((item) => (
              <div
                className="w-full h-[700px] max-md:h-auto relative -z-30 bg-black"
                key={item}
              >
                <div className="absolute md:top-1/3 left-1/2 md:-translate-x-1/2 z-50 max-md:bottom-20 max-md:left-0 max-md:px-4">
                  <h1 className="text-5xl font-bold text-white text-center shadow-md max-md:hidden">
                    YANGIYER FLOUR{" "}
                    <span className="text-primary_color">TRADING</span>
                  </h1>
                  {/* <p className="text-xl text-white text-center mt-10">
                  {item.title}
                </p> */}
                </div>
                <LazyLoadImage
                  style={{
                    opacity: "0.5",
                  }}
                  src={baseURL + item}
                  alt={"qabul rasmlari"}
                  effect={"blur"}
                  placeholder={
                    <Spinner
                      color="info"
                      aria-label="Extra large spinner example"
                      size="xl"
                    />
                  }
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            ))}
          </Slider>
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
        </div>
      ) : (
        data?.child?.map((item) => (
          <div key={item._id}>
            <h1
              className="text-3xl font-bold mb-5"
              onClick={() => console.log(item.file)}
            >
              {item[`title_${i18next.language}`]}
            </h1>
            {item?.file?.length > 0 ? (
              <Slider
                {...settings}
                autoplay={true}
                cssEase="linear"
                autoplaySpeed={4000}
                // fade={true}
                pauseOnHover={false}
              >
                {item?.file?.map((subItem) => (
                  <div
                    className="w-full h-[700px] max-md:h-auto relative -z-30 bg-black"
                    key={subItem}
                  >
                    <div className="absolute md:top-1/3 left-1/2 md:-translate-x-1/2 z-50 max-md:bottom-20 max-md:left-0 max-md:px-4">
                      <h1 className="text-5xl font-bold text-white text-center shadow-md max-md:hidden">
                        YANGIYER FLOUR{" "}
                        <span className="text-primary_color">TRADING</span>
                      </h1>
                      {/* <p className="text-xl text-white text-center mt-10">
                        {item.title}
                      </p> */}
                    </div>
                    <LazyLoadImage
                      style={{
                        opacity: "0.5",
                      }}
                      src={baseURL + subItem}
                      alt={"qabul rasmlari"}
                      effect={"blur"}
                      placeholder={
                        <Spinner
                          color="info"
                          aria-label="Extra large spinner example"
                          size="xl"
                        />
                      }
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              null
            )}
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
                    <Accordion.Title>
                      {subItem[`question_${i18next.language}`]}
                    </Accordion.Title>
                    <Accordion.Content>
                      {subItem[`answer_${i18next.language}`]}
                    </Accordion.Content>
                  </Accordion.Panel>
                ))}
              </Accordion>
            )}
          </div>
        ))
      )}
      <Slider
        {...settings}
        autoplay={true}
        cssEase="linear"
        autoplaySpeed={4000}
        // fade={true}
        pauseOnHover={false}
      >
        {data?.child?.file?.map((item) => (
          <div
            className="w-full h-[700px] max-md:h-auto relative -z-30 bg-black"
            key={item}
          >
            <div className="absolute md:top-1/3 left-1/2 md:-translate-x-1/2 z-50 max-md:bottom-20 max-md:left-0 max-md:px-4">
              <h1 className="text-5xl font-bold text-white text-center shadow-md max-md:hidden">
                YANGIYER FLOUR{" "}
                <span className="text-primary_color">TRADING</span>
              </h1>
              {/* <p className="text-xl text-white text-center mt-10">
                  {item.title}
                </p> */}
            </div>
            <LazyLoadImage
              style={{
                opacity: "0.5",
              }}
              src={baseURL + item}
              alt={"qabul rasmlari"}
              effect={"blur"}
              placeholder={
                <Spinner
                  color="info"
                  aria-label="Extra large spinner example"
                  size="xl"
                />
              }
              width={"100%"}
              height={"100%"}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
