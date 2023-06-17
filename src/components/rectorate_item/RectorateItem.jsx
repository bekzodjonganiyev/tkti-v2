import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Accordion } from "flowbite-react";

import { Loader } from "../loader/Loader";

import apiClientWithFetch from "../../services/apiClientWithFetch";
import { baseURL } from "../../services/http";
import i18next from "i18next";
import { EmailIcon2, LocationIcon2, PhoneIcon2 } from "../../assets/icons";

export const RectorateItem = () => {
  const { id } = useParams();

  const [data, setData] = useState({ loading: true });

  const getData = async () => {
    const res = await apiClientWithFetch.get(`rektorat/${id}`);
    if (res.status === 200) {
      setData({
        loading: false,
        data: res.data,
        error: "",
      });
    } else {
      setData({
        loading: false,
        data: {},
        error: res?.status ? res.status : res,
      });
    }
  };

  console.log(data);

  useEffect(() => {
    getData();
  }, [id]);

  if (data.loading) return <Loader />;

  if (data.error) return <h1>Xatolik yuz beri</h1>;

  return (
    <div className="container mx-auto flex py-10 lg:flex-row flex-col max-md:px-5 max-md:gap-10">
      {/* begin::Bio */}
      <div className="md:w-10/12 md:pr-12 ">
        <h1 className="text-2xl max-md:text-xl font-semibold mb-5">
          {data?.data[`name_${i18next.language}`]}
        </h1>
        <p className="text-gray-600 text-xl max-md:text-lg mb-5 font-light">
          {data?.data[`job_${i18next.language}`]}
        </p>
        <div>
          <Accordion className=" ">
            <Accordion.Panel className="focus:border-none">
              <Accordion.Title>
                <h2>Qisqacha malumot</h2>
              </Accordion.Title>
              <Accordion.Content>
                <div
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: data?.data[`qisqacha_${i18next.language}`] ?? "",
                  }}
                />
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <h2>Ilmiy va pedagogik mehnat faoliyati</h2>
              </Accordion.Title>
              <Accordion.Content>
                <div
                  className=""
                  dangerouslySetInnerHTML={{
                    __html:
                      data?.data[`mehnat_faoliyat_${i18next.language}`] ?? "",
                  }}
                />
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <h2>Ilmiy yoʻnalishlari</h2>
              </Accordion.Title>
              <Accordion.Content>
                <div
                  className=""
                  dangerouslySetInnerHTML={{
                    __html:
                      data?.data[`ilmiy_yonlaish_${i18next.language}`] ?? "",
                  }}
                />
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <h2>Lavozimdagi asosiy vazifalari</h2>
              </Accordion.Title>
              <Accordion.Content>
                <div
                  className=""
                  dangerouslySetInnerHTML={{
                    __html:
                      data?.data[`asosiy_vazifa_${i18next.language}`] ?? "",
                  }}
                />
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
      {/* end::Bio */}

      {/* begin::Person card */}
      <div className="flex flex-col max-lg:w-full">
        {/* Avatar */}
        <div className="w-full lg:h-72">
          <img
            loading="lazy"
            src={baseURL + data?.data?.photo}
            alt={data?.data?.name_uz}
            className="w-full h-full object-cover bg-center"
          />
        </div>
        {/* Info section */}
        <div className="flex flex-col gap-4 p-4 bg-[#26597E] text-white">
          <p className="flex items-center gap-2">
            <LocationIcon2 /> {data?.data[`address_${i18next.language}`]}
          </p>
          <p className="flex items-center gap-2">
            <PhoneIcon2 /> {data?.data?.tel}
          </p>
          <p className="flex items-center gap-2">
            <EmailIcon2 /> {data?.data?.link}
          </p>
        </div>
      </div>
      {/* end::Person card */}
    </div>
  );
};
