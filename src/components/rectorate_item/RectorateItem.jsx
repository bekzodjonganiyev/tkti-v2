import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Loader } from "../loader/Loader";

import apiClientWithFetch from "../../services/apiClientWithFetch";
import { baseURL } from "../../services/http";
import i18next from "i18next";

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
    <div className="container mx-auto flex py-10 lg:flex-row flex-col">
      {/* begin::Bio */}
      <div className="w-10/12">
        <h1 className="text-2xl font-semibold mb-5">{data?.data[`name_${i18next.language}`]}</h1>
        <p className="text-gray-600 text-xl mb-5 font-light">{data?.data[`job_${i18next.language}`]}</p>
        <div>
          dropdownlar
        </div>
      </div>
      {/* end::Bio */}

      {/* begin::Person card */}
      <div className="flex flex-col max-lg:w-full">
        {/* Avatar */}
        <div className="lg:w-60 lg:h-72">
          <img
            loading="lazy"
            src={baseURL + data?.data?.photo}
            alt={data?.data?.name_uz}
            className="w-full h-full object-cover bg-center rounded-md"
          />
        </div>
        {/* Info section */}
        <div className="">
          <p>{}</p>
          <p>telefon</p>
          <p>pochta</p>
        </div>
      </div>
      {/* end::Person card */}

      
    </div>
  );
};
