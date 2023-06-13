import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
// optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

const imageArray = [
  { id: "1686550782827", width: "6000", height: "4000" },
  { id: "1686550791803", width: "6000", height: "4000" },
  { id: "1686550929282", width: "6000", height: "4000" },
  { id: "1686550803192", width: "6000", height: "4000" },
  { id: "1686550912100", width: "6000", height: "4000" },
 
]
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photos = imageArray.map((photo) => ({
  src: `https://backend.tkti.uz//uploads/file-${photo.id}.JPG`,
  width: photo.width,
  height: photo.height,
  images: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: `https://backend.tkti.uz//uploads/file-${photo.id}.JPG`,
      width: breakpoint,
      height,
    };
  }),
}));

const slides = photos.map(({ src, width, height, images }) => ({
  src,
  width,
  height,
  srcSet: images.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
  })),
}));

export const Photo = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div className="my-10">

      <PhotoAlbum
        photos={photos}
        layout="columns"
        targetRowHeight={300}
        onClick={({ index }) => setIndex(index)}
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
