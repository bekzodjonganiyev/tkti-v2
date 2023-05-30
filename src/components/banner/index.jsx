import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BannerActions } from "./actions";
import "./slider.css";

import { Carousel } from "flowbite-react";
export * from "./reducer";
export const Banner = () => {
  const { getData } = new BannerActions();

  const getBanner = (state) => state.banner;
  const { data, loading, error } = useSelector(getBanner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (error) return <h1>{error}</h1>;

  return (
    <>
     {loading ? (
        <h1>Loading...</h1>
      ) :(
<div className="container-fluid w-[100%] h-[100vh]">
  <Carousel>
    {data?.map((item)=>(
      <div key={item._id} className="h-[100vh] bg-cover">
      <img
        src={`https://backend.tkti.uz/${item.banner_img}`}
        width="100%"
        height="100%"
        alt={item.name}
        className="bg-cover bg-center"
      />
    </div>
    ))}

  </Carousel>
</div>)}
  
    </>
  );
};

export default Banner;
