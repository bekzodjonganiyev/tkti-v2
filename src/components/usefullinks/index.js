import { useContext, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.css'


import uzEdu from '../../files/eduuz.jpg'
import lexUz from '../../files/lexuz.jpg'
import dtm from '../../files/DTM.jpg'
import yoshItt from '../../files/YI.jpg'
import scopus from '../../files/scopus.jpg'
import ziyoNetUz from '../../files/ziyonet.jpg'
import { Context } from '../../context';

function UsefulLinks() {
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
    const { lang} = useContext(Context);
    const [about] = useState({uz:'Foydali havolalar',ru:'Полезные ссылки',en:'Useful links'})
 
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="useful__info">
              <div className="useful">
                <h2>{about[lang]}</h2>
                <hr />
              </div>
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
              >
                <div className="useful-item ">
                  <a
                    href="https://edu.uz/uz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`${uzEdu}`}
                      href="https://edu.uz/uz"
                      className="useful_img"
                      alt="edu-uz"
                    />
                  </a>
                </div>
                <div className="useful-item ">
                  <a
                    href="https://lex.uz/uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={`${lexUz}`} className="useful_img" alt="lexuz" />
                  </a>
                </div>
                <div className="useful-item ">
                  <a
                    href="http://dtm.uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={`${dtm}`} className="useful_img" alt="DTM" />
                  </a>
                </div>
                <div className="useful-item ">
                  {" "}
                  <a
                    href="http://yi.uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`${yoshItt}`}
                      className="useful_img"
                      alt="Yosh-itt"
                    />
                  </a>
                </div>
                <div className="useful-item ">
                  <a
                    href="https://www.scopus.com/search/form.uri?display=basic#basic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`${scopus}`}
                      className="useful_img"
                      alt="scopus"
                    />
                  </a>
                </div>
                <div className="useful-item ">
                  <a
                    href="http://ziyonet.uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`${ziyoNetUz}`}
                      className="useful_img"
                      alt="ziyonet"
                    />
                  </a>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </>
    );
}

export default UsefulLinks;