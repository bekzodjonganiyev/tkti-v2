import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { VideoNewsActions } from "./actions";
import "./style.css";

export { videoNewsReducer } from "./recucer";
export const VideoNews = () => {
  const { t } = useTranslation();
  const [isModal, setIsModal] = useState(false);
  const [visible, setVisible] = useState(false);

  const { getData, getDataById, deleteData } = new VideoNewsActions();

  const getVideoNews = (state) => state.announcement;
  const { data, dataById, loading, error } = useSelector(getVideoNews);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="container-fluid h-[700px] mx-auto w-[100%] my-8 bg-sky-900 text-white">
      <h1 className="text-3xl my-10 flex mx-auto justify-center">Toshkent kimyo-texnologiya instituti 30 yoshda</h1>

      <div 
        onClick={() => setIsModal(true)}
        className={` h-[500px] max-md:w-full cursor-pointer max-md:h-96 rounded-2xl ${
          !isModal ? "relative" : ""
        }`}
        style={{
          borderRadius:"50px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "container",
          backgroundImage: `url("https://backend.tkti.uz/uploads/file-1682455807124.png")`,
        }}
      >
        <span className="glightbox_video">
          <span className={"play-btn"} href="#"></span>
        </span>
        {isModal && (
          <div
            className="mx-auto w-screen h-screen absolute top-0 right-0 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setIsModal(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-2/3 max-md:w-full relative bg-black"
              onMouseEnter={() => {
                setVisible(true);
                console.log("enter");
              }}
              onMouseLeave={() => {
                setVisible(false);
                console.log("leave");
              }}
            >
              {visible && (
                <button
                  className="bg-red-600 w-16 h-16 absolute right-2 top-2 z-50 text-white font-bold text-xl rounded-full"
                  onClick={() => setIsModal(false)}
                >
                  X
                </button>
              )}
              <iframe
                width="300px"
                height="506"
                src="https://www.youtube.com/embed/G0zm9TybxpU"
                title="Firma uchun video"
                frameborder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
