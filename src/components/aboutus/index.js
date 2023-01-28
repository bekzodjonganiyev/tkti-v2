import React,{ useContext, useState} from 'react';
import CountUp from "react-countup";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.css'

import fakultetImg from '../../files/university.png'
import studentImg from '../../files/student.png'
import teacherImg from '../../files/teacher.png'
import partnerImg from '../../files/partners.png'
import directionalImg from '../../files/directional.png'
import doubleImg from '../../files/global-education.png'
import { Context } from '../../context';

function About_us() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 5, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };

    const [about] = useState({
        uz:['Statistik ma’lumotlar','FAKULTETLAR','TALABALAR',`O'QITUVCHILAR`,'HAMKORLAR','BIZNING HAMKORLAR',`TA'LIM YO'NALISHLARI`,`QO'SHMA TA'LIM`],
        ru:['Статистические данные','ФАКУЛЬТЕТЫ','СТУДЕНТЫ','УЧИТЕЛЯ','ПАРТНЕРЫ','НАШИ ПАРТНЕРЫ','НАПРАВЛЕНИЯ ОБРАЗОВАНИ','СОВМЕСТНЫЕ ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ'],
        en:['Statistical data','FACULTIES','STUDENTS','TEACHERS','PARTNERS','OUR PARTNERS','AREAS OF EDUCATION','JOINT EDUCATIONAL PROGRAMS']
    })
    const { lang } = useContext(Context);
    return (
      <div className="container">
        <h2 className="about__us__text">{about[lang][0]}</h2>
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
            <div className="list-info">
              <div className="list-item ">
                <img src={`${fakultetImg}`} alt="" width="100" height="100" />
                <h3>
                  <CountUp end={5} duration={5} />
                </h3>
                <p>{about[lang][1]}</p>
              </div>
            </div>

            <div className="list-info">
              <div className="list-item">
                <img src={`${studentImg}`} alt="" width="100" height="100" />
                <h3>
                  <CountUp end={7300} duration={5} />
                </h3>
                <p>{about[lang][2]}</p>
              </div>
            </div>
            <div className="list-info">
              <div className="list-item">
                <img src={`${teacherImg}`} alt="" width="100" height="100" />
                <h3>
                  <CountUp end={500} duration={5} />
                </h3>
                <p>{about[lang][3]}</p>
              </div>
            </div>
            <div className="list-info">
              <div className="list-item">
                <img src={`${partnerImg}`} alt="" width="100" height="100" />
                <h3>
                  <CountUp end={47} duration={5} />
                </h3>
                <p>{about[lang][4]}</p>
              </div>
            </div>
            <div className="list-info">
              <div className="list-item">
                <img
                  src={`${directionalImg}`}
                  alt=""
                  width="100"
                  height="100"
                />
                <h3>
                  <CountUp end={25} duration={5} />
                </h3>
                <p>{about[lang][5]}</p>
              </div>
            </div>
            <div className="list-info">
              <div className="list-item">
                <img src={`${doubleImg}`} alt="" width="100" height="100" />
                <h3>
                  <CountUp end={7} duration={5} />
                </h3>
                <p>{about[lang][6]}</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    );
}

export default About_us;