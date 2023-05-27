import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import NavLinks from "./NavLinks";
import { TopHeader } from "../header/TopHeader";
import { useDispatch, useSelector } from "react-redux";
import { SET_OPEN_NAVBAR } from "../../../pages/news/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.news);
  return (
    <nav className=" bg-white">
      <TopHeader />
      <div className="container mx-auto w-[95%] flex items-center font-medium ">
        <Link to="/" className="py-7 px-3 inline-block">
          <div className="flex  justify-between items-center">
            <img src={Logo} alt="" width={"90"} height={"20"} className="" />
            <div className={`text-[#02307d] font-bold`}>
              <div className="text-[15px] my-3 mx-3">
                <div>TOSHKENT </div>
                <div>KIMYO-TEXNOLOGIYA</div>
                <div>INSTITUTI</div>
              </div>
            </div>
          </div>
        </Link>

        <div className="z-50 p-5 lg:w-auto w-full flex justify-end">
          <div
            className="text-3xl lg:hidden"
            onClick={() =>
              dispatch({
                type: SET_OPEN_NAVBAR,
                payload: !open,
              })
            }
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>

        <ul className="lg:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <NavLinks />
        </ul>

        {/* Mobile nav */}
        <ul
          className={`
        lg:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 z-20 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              <div className="flex  justify-center items-center">
                <img
                  src={Logo}
                  alt=""
                  width={"90"}
                  height={"20"}
                  className=""
                />
                <div className={`text-[#02307d] font-bold`}>
                  <div className="text-[15px] my-3 mx-3">
                    <div>TOSHKENT </div>
                    <div>KIMYO-TEXNOLOGIYA</div>
                    <div>INSTITUTI</div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
