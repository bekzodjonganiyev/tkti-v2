import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import {TopHeader} from '../header/TopHeader'
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
<TopHeader />
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className=" p-3 md:w-auto w-full flex justify-between items-center">
        <Link
            to="/"
          >
            <div className="flex  justify-center items-center">

           
            <img src={Logo} alt="" width={"70"} height={"20"} className="" />
            <div className={` font-bold`}>
                    <div className="text-[15px] my-3 mx-3">
                      <div>TOSHKENT </div>
                      <div>KIMYO-TEXNOLOGIYA</div>
                      <div>INSTITUTI</div>
                    </div>
                  </div>
                  </div>
          </Link>

          <div className="z-50 text-3xl xl:hidden " onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="xl:flex z-[3000] hidden uppercase items-center gap-8 font-[Poppins]">
         
          <NavLinks />
        </ul>
        
        <ul
          className={`
        xl:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          
          <NavLinks />
          
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
