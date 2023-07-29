import { useEffect } from "react";
import { Carousel } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import "./slider.css";
import { BannerActions } from "./actions";
import { baseURL } from "../../services/http";

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
      ) : (
        <div className="w-full h-[500px]">
          <Carousel slideInterval={5000}>
            {data.map((item) => (
              <div key={item?._id} className="h-[500px]">
                <img
                  src={`${baseURL}${item?.banner_img}`}
                  alt={item?.title}
                  loading="lazy"
                  className="object-cover h-full w-full"
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export * from "./reducer";
