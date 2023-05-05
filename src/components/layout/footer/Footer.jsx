import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";



const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
   
      <footer className={` bg-[#063F58] w-full `}>
        <div className="container mx-auto w-[90%] my-[20px]">

        <div className="container  flex justify-between">
            <div className="">
              <Link to="/" className="my-4 block  ">
                <div className="flex items-center ">
                  {/* <img src={logo} alt="Main logo" className="w-24 h-24" /> */}
                  <div
                    className={`text-white lg:text-2xl xl:text-xl md:text-lg  md:w-[70%] font-bold`}
                  >
                       <div className="text-[15px] my-3 mx-3">
              <div> name</div>
              <div>name</div>
              <div> name</div>
            </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className=" lg:block  hidden ">
              <div
                className={` mx-auto my-12  flex items-center justify-end text-white font-bold xl:text-base `}
              >
                <NavLink to={`${i18next.language}/`}>
                  <span className="mx-3">name</span>{" "}
                </NavLink>
                <NavLink to={`${i18next.language}/`}>
                  <span className="mx-3">name</span>{" "}
                </NavLink>

                <NavLink to={`${i18next.language}/`}>
                  <span className="mx-3">name</span>
                </NavLink>
                <NavLink to={`${i18next.language}/`}>
                  <span className="mx-3">name</span>
                </NavLink>
              </div>
            </div>
          </div>
          <hr />

          <div className="flex gap-4    items-end justify-between ">
            
            <div className="lg:flex lg:flex-col flex-row-reverse   max-md:flex-col max-md:gap-10 ">
              <div className="flex items-center gap-2 my-3">
                {/* <PhoneIcon /> */}
                <span className="text-white"> +998934497434</span>
              </div>

              <div className="flex items-center gap-2 my-3">
                {/* <Global /> */}
                <span className="text-white"> Link</span>
              </div>
             
              <div className="flex lg:gap-4 gap-10">
                Icons
              </div>
              
            </div>
            <div
              className="text-[#F2F2F2] my-[55px] lg:block hidden w-[70%]"
             
            ></div>
          </div>title
        </div>
      </footer>
    </>
  );
};

export default Footer;
