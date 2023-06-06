import { useContext, useState } from "react";
import CountUp from "react-countup";
import Carousel from "react-multi-carousel";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import "react-multi-carousel/lib/styles.css";
import fakultetImg from '../../assets/images/university.png'
import studentImg from '../../assets/images/student.png'

import partnerImg from '../../assets/images/partners.png'
import directionalImg from '../../assets/images/directional.png'
import doubleImg from '../../assets/images/global-education.png'
import teacher from '../../assets/images/teacher.png'

export const UsefulLinks = () => {
  const {t} = useTranslation()
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 300 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const images = [
    {
      src: fakultetImg,
      alt: "Image 1",
      CountUp: "5",
      title:  t("Statistic.facultet"),
    },
    {
      src: studentImg,
      alt: "Image 1",
      CountUp: "7300",
      title:  t("Statistic.student"),
    },
    {
      src: partnerImg,
      alt: "Image 1",
      CountUp: "47",
      title:  t("Statistic.Partners"),
    },
    {
      src: directionalImg,
      alt: "Image 1",
      CountUp: "25",
      title:  t("Statistic.OurPartners"),
    },
    {
      src: teacher,
      alt: "Image 1",
      CountUp: "500",
      title:  t("Statistic.Teacher"),
    },
      {
      src:doubleImg,
      alt: "Image 1",
      CountUp: "7",
      title:  t("Statistic.Education"),
    },
  ];

  return (
    <>
      <div className="container w-full mx-auto  py-10  ">
        <h3 className="text-4xl text-center p-10 font-semibold"> {t("HomePage.3.name")}</h3>
      
        <div className="about_us">
          <Carousel
            autoplay={true}
            effect="fade"
            draggable
            pauseOnDotsHover={true}
            swipeable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-10-px"
          >
              {images.map((image) => (
              <div className="mx-auto text-center capitalize " key={image.src}>
               <div className="w-36 h-36 mx-auto bg-[#E6EDFA] rounded-[50%] ">
                
                  <img
                    className="w-[60%]  mx-auto flex-col justify-center items-center  py-5 "
                    src={image.src}
                    alt={image.alt}
                  />
               </div>
              
                 <div className="text-3xl  font-semibold">
                  <CountUp end={image.CountUp} duration={5} />
                </div>
                <p className="text-xl capitalize">{image.title}</p>
              </div>
            ))}
          
          </Carousel>
        </div>
      
      </div>
    </>
  );
};
