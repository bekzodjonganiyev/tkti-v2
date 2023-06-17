import React, { useContext } from "react";
import PhotoAlbum from "react-photo-album";
import { useTranslation } from "react-i18next";
export const Corruption = () => {
    const { t } = useTranslation();
  const imageArray = [
    { id: "1681730278827", width: "1000", height: "900" },
    { id: "1681730235869", width: "1000", height: "900" },
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
    <div className="container mx-auto mb-5">
      <h3 className="text-center my-3 text-3xl font-bold">{t("Korruption.0.name")}</h3>
      <div className="text-xl w[80%] mx-auto">
        <p>
        {t("Korruption.1.name")}
          <a href="https://t.me/TctiAntiCorruptionBot">
            @TctiAntiCorruptionBot
          </a>
        </p>
        <p>
        {t("Korruption.2.name")}
        </p>
       
        <p>{t("Korruption.3.name")}: (+99871) 244-78-49;</p>
      </div>
      <PhotoAlbum photos={photos} layout="rows" />;
    </div>
  );
};
