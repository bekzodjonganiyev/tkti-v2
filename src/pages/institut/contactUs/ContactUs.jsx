import React from "react";
import { useTranslation } from "react-i18next";
import { PhoneFilled, MailFilled } from "@ant-design/icons";
import { LoacationSvg } from "../../../assets/icons";
import './style.css'
export const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <div className="container  mx-auto w-full py-5">
      <h2 className="flex justify-center items-center mx-auto  lg:text-3xl  max-sm:text-2xl lg:my-8 my-6 font-semibold ">
      {t("Institute.9.name")}
      </h2>
      <div className="lg:grid grid-cols-2">
        {/* 32-uy */}
        <A
          img="https://backend.tkti.uz//uploads/file-1686549024609.JPG"
          title={t("ContactUs.2.name")}
          phone={"+99871 244 92 35"}
          email={"info@tkti.uz"}
          location={{
            href: "https://goo.gl/maps/8heumXFm2mcfHGNR7",
            title: t("ContactUs.2.manzil"),
          }}
          className="w-full"
        />

        {/* 36-uy */}
        <A
          img="https://backend.tkti.uz//uploads/file-1686548995205.JPG"
          title={t("ContactUs.0.name")}
          phone={"+99871 244 19 72"}
          email={"info@tkti.uz"}
          location={{
            href: "https://goo.gl/maps/5nPSvvNnu1WZQeVr6",
            title: t("ContactUs.0.manzil"),
          }}
        />

        {/* Samarqand darvoza  */}
        <A
          img="https://backend.tkti.uz//uploads/file-1686549011995.JPG"
          title={t("ContactUs.1.name")}
          phone={"+99871 273 64 60"}
          email={"info@tkti.uz"}
          location={{
            href: "https://goo.gl/maps/H5oS7v4veRXVHszw8",
            title: t("ContactUs.1.manzil"),
          }}
        />

        {/* Maksim gorki */}
        <A
          img="https://backend.tkti.uz//uploads/file-1686549003735.JPG"
          title={t("ContactUs.3.name")}
          phone={" +998 71 267 98 32"}
          email={"info@tkti.uz"}
          location={{
            href: "https://goo.gl/maps/gMXxgUjw5gwkokru5",
            title: t("ContactUs.3.manzil"),
          }}
        />

        {/* Qibray */}
        <A
          img="https://backend.tkti.uz//uploads/file-1686549019230.JPG"
          title={t("ContactUs.4.name")}
          phone={" +998 71 254 58 87"}
          email={"info@tkti.uz"}
          location={{
            href: "https://goo.gl/maps/8yH7uRobbgHp15Xu9",
            title: t("ContactUs.4.manzil"),
          }}
        />
      </div>
    </div>
  );
};

const A = ({
  title,
  img = "https://backend.tkti.uz//uploads/file-1686521977385.jpg",
  phone,
  email,
  location,
}) => {
  return (
    <div className="mb-12">
      
      <div className="w-[90%] mx-auto">
      <div class="image">
				<div className="animation">
					<figure>
          <a href={img} target="_blank">
          <img src={img} alt="bog'lanish bo'limiga rasm" className="mb-5 rounded-lg hover:scale- w-full " loading="lazy"/>
        </a>
					</figure>
				
        </div>
			</div>
       
        <h1 className="leading-5 font-medium mb-4 text-2xl">{title}</h1>
        <div className="flex flex-col gap-1">
          <p>
            <span >
              <PhoneFilled /> {phone}
            </span>
          </p>
          <p>
            <span>
              <MailFilled /> {email}
            </span>
          </p>
          <a
            href={location.href}
            target="_blank"
            className="flex items-center text-blue-500"
          >
            <span>
              <LoacationSvg />
            </span>{" "}
            {location.title}
          </a>
        </div>
      </div>
    </div>
  );
};
