import { useContext, useState } from "react";
import CountUp from "react-countup";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.css'
import teacher from '../../assets/images/teacher.png'

export const UsefulLinks = () => {
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
      src: teacher,
      alt: "Image 1",
      CountUp: "35",
      title: "talabalar",
    },
    {
      src: teacher,
      alt: "Image 1",
      CountUp: "35",
      title: "talabalar",
    },
    {
      src: teacher,
      alt: "Image 1",
      CountUp: "35",
      title: "talabalar",
    },
    {
      src: teacher,
      alt: "Image 1",
      CountUp: "35",
      title: "talabalar",
    },
    {
      src: teacher,
      alt: "Image 1",
      CountUp: "35",
      title: "talabalar",
    },
  ];

  return (
    <>
      <div className="container w-[80vw] mx-auto  py-10  ">
        <h3 className="text-4xl text-center p-10"> Statistik ma’lumotlar</h3>
      
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
              <div className="mx-auto text-center " key={image.src}>
               <div className="w-36 h-36 bg-[#E6EDFA] mx-10 rounded-[50%] ">
                
                  <img
                    className="w-[60%]  mx-auto py-5 items-start "
                    src={image.src}
                    alt={image.alt}
                  />
               </div>
               <div>
                
               </div>
                 <div className="text-3xl  font-semibold">
                  <CountUp end={image.CountUp} duration={5} />
                </div>
                <p className="text-xl  ">{image.title}</p>
              </div>
            ))}
          
          </Carousel>
        </div>
      
      </div>
    </>
  );
};
