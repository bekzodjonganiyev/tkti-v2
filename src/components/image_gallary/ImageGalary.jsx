import { useState, useEffect } from "react";
import PhotoAlbum from "react-photo-album";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import { Spinner } from "flowbite-react";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { baseURL } from "../../services/http";
export const ImageGallary = ({ imgSrcs }) => {
  const [photos, setPhotos] = useState({
    data: [],
    isLoading: true,
    error: null,
  });

  const [index, setIndex] = useState(-1);
  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
  
  const whMaker = (string) => {
    const imgName = string.split("/")[1]
    const imgSize = imgName.split("-")[0]
    const width = Number(imgSize.split("x")[0])
    const height = Number(imgSize.split("x")[1])
    return {width: width, height: height}
  }
  console.log(whMaker("uploads/6000x4001-1686650393207 (5454)-jsj.JPG"), "from test")
  const images = imgSrcs.map((photo) => ({
    src: baseURL + photo,
    width: whMaker(photo).width,
    height: whMaker(photo).height,
    sliderImages: breakpoints.map((breakpoint) => {
      const height = Math.round(( whMaker(photo).width / whMaker(photo).height) * breakpoint);
      return {
        src: baseURL + photo,
        width: +breakpoint,
        height,
      };
    }),
  }));
  
  console.log(imgSrcs)
  console.log(images)

  const slides = images?.map(({ src, width, height, sliderImages }) => ({
    src,
    width,
    height,
    srcSet: sliderImages.map((image) => ({
      src: image.src,
      width: image.width,
      height: image.height,
    })),
  }));

  return (
    <div className="mb-24 container mx-auto">
      <PhotoAlbum
        photos={images}
        layout="rows"
        spacing={20}
        targetRowHeight={300}
        onClick={({ index }) => setIndex(index)}
        columns={(containerWidth) => {
          if (containerWidth < 400) return 1;
          if (containerWidth < 800) return 3;
          return 4;
        }}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};
