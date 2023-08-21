import { useEffect } from "react";
import { Carousel, Spinner } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import "./slider.css";
import { BannerActions } from "./actions";
import { baseURL } from "../../services/http";
import { Error } from "../../components"

export const Banner = () => {
  const { getData } = new BannerActions();
  const getBanner = (state) => state.banner;
  const { data, loading, error } = useSelector(getBanner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (error) return <Error error={error} />;

  return (
    <>
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner
            aria-label="Extra large spinner example"
            size="xl"
            className=""
          />
        </div>
      ) : (
        <div className="w-full max-xl:h-[450px] 2xl:h-[80vh]">
          <Carousel slideInterval={5000}>
            {data.map((item) => (
              <div key={item?._id} className="h-full">
                <img
                  src={`${baseURL}${item?.banner_img}`}
                  alt={item?.title}
                  loading="lazy"
                  className="object-cover max-md:h h-full w-full object-center"
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
