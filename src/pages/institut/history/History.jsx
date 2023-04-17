import React, { useEffect } from 'react'
import PhotoAlbum from "react-photo-album";

const History = () => {
  const imageArray = [
    { id: "1681724100858", width: "1000", height: "900" },
    { id: "1681724058110", width: "1000", height: "900" },
    { id: "1681724028891", width: "1000", height: "900" },
    { id: "1681723978779", width: "1000", height: "900" },
    { id: "1681723953213", width: "1000", height: "900" },
    { id: "1681723928868", width: "1000", height: "900" },
    { id: "1681723912165", width: "1000", height: "900" },
    { id: "1681723892233", width: "1000", height: "900" },
    { id: "1681723869652", width: "1000", height: "900" },
    { id: "1681723849595", width: "1000", height: "900" },
    { id: "1681723833284", width: "1000", height: "900" },
    { id: "1681723816001", width: "1000", height: "900" },
    { id: "1681723686110", width: "1000", height: "900" },
  ]
  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

  const photos = imageArray.map((photo) => ({
    src: `https://backend.tkti.uz/uploads/file-${photo.id}.jpg`,
    width: photo.width,
    height: photo.height,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: `https://backend.tkti.uz/uploads/file-${photo.id}.jpg`,
        width: breakpoint,
        height,
      };
    }),
  }));

  return (
    <div>
      <h1 className='text-center font-bold text-3xl mb-10'>Institutimizning tarixi va merosi haqida suratlar so`zlaydi</h1>
      <PhotoAlbum photos={photos} layout="rows" />;
    </div>
  )
}

export default History