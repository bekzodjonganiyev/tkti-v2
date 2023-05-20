import { useContext, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./style.css";
import Slider from "react-slick";
import uzEdu from "../../assets/images/eduuz.jpg";
import dtm from "../../assets/images/DTM.jpg";
import { Link } from "react-router-dom";

const images = [
  {
    src: dtm,
    alt: "Image 1",
  },
  {
    src: dtm,
    alt: "Image 3",
  },
];

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
      href: "https://edu.uz/uz",
    },
    {
      src: dtm,
      alt: "Image 3",
      href: "https://edu.uz/uz",
    },
    {
      src: dtm,
      alt: "Image 1",
      href: "https://edu.uz/uz",
    },
    {
      src: dtm,
      alt: "Image 3",
      href: "https://edu.uz/uz",
    },
    {
      src: dtm,
      alt: "Image 1",
      href: "https://edu.uz/uz",
    },
    {
      src: dtm,
      alt: "Image 3",
      href: "https://edu.uz/uz",
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
      <div className="container-fluid w-[100vw]  py-10  ">
        <h3 className="text-4xl text-center p-10">Foydali havolalar</h3>
        <div className="container w-[80%] mx-auto">
          <Carousel
            autoplay={true}
            effect="fade"
            // draggable
            // pauseOnDotsHover={true}
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
          >
            {images.map((image) => (
              <div className="useful-item " key={image.src}>
                <Link to={image.href} target="_blank">
                  <img
                    className="w-[80%] rounded-md cursor-pointer"
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
