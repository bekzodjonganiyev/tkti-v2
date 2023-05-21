import { useContext, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import "./style.css";
import uzEdu from "../../assets/images/eduuz.jpg";

import lexUz from '../../assets/images/lexuz.jpg'

import yoshItt from '../../assets/images/YI.jpg'
import scopus from '../../assets/images/scopus.jpg'
import ziyoNetUz from '../../assets/images/ziyonet.jpg'
import dtm from "../../assets/images/DTM.jpg";


export const Statistics = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const images = [
    {
      src: dtm,
      alt: "Image 1",
      href: "https://edu.uz/",
    },
    {
      src: uzEdu,
      alt: "Image 3",
      href: "https://edu.uz/uz",
    },
    {
      src: lexUz,
      alt: "Image 1",
      href: "https://lex.uz/",
    },
    {
      src: yoshItt,
      alt: "Image 3",
      href: "http://yi.uz/",
    },
    {
      src: scopus,
      alt: "Image 1",
      href: "https://www.scopus.com/search/form.uri?display=basic#basic",
    },
    {
      src: ziyoNetUz,
      alt: "Image 3",
      href: "http://ziyonet.uz/",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-fluid w-[100%]  py-10  ">
        <h3 className="text-4xl text-center p-10">Foydali havolalar</h3>
        <div className="container w-[80%] mx-auto">
          <Carousel
            autoplay={true}
            effect="fade"
            swipeable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} 
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
          >
            {images.map((image) => (
              <div className="w-[90%] flex justify-center  bg-[#E6EDFA] cursor-pointer my-[10px] mx-3 useful-item p-4" key={image.src}>
                <Link to={image.href} target="_blank">
                  <img
                    className="w-[80%] mx-auto rounded-md cursor-pointer"
                    src={image.src}
                    alt={image.alt}
                  />
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};
