import React, { useEffect, useState } from "react";

import "./Faoliyat.css";
import FaoliyatData from "../../../components/faoliyat/faoliyat_data/FaoliyatData";
import FaoliyatForm from "../../../components/faoliyat/FaoliyatForm";
import FormHeader from "./form_header/FormHeader";
import { memo } from "react";


const Faoliyat = () => {


  return (
    <div>
      <FormHeader title="Faoliyat" buttonName="Faoliyat Qo'shish" />
      <h1>--------------------------------------------</h1>
      <FaoliyatForm catogoryId="markaz_id" url="markaz_data/all" categoryLabel="Qayerda chaqirilsa shu joyni nomi"/>
      <h1>--------------------------------------------</h1>
      <FaoliyatData />
      <h1>------------------------------------------</h1>
      <div>
      </div>
    </div>
  );
};

export default memo(Faoliyat);
