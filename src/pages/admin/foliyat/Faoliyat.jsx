import React, { useEffect, useState } from "react";

import "./Faoliyat.css";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import FaoliyatForm from "../../../components/admin/faoliyat/FaoliyatForm";
import FaoliyatData from "../../../components/admin/faoliyat/faoliyat_data/FaoliyatData";

const Faoliyat = () => {


  return (
    <div>
      <FormHeader title="Faoliyat" buttonName="Faoliyat Qo'shish" />
      <h1>--------------------------------------------</h1>
      <FaoliyatForm catogoryId="markaz_id" url="markaz_data/all" categoryLabel="Qayerda chaqirilsa shu joyni nomi"/>
      <h1>--------------------------------------------</h1>
      <FaoliyatData />
      <h1>------------------------------------------</h1>
      <br />
      <br />
      <br />
      <div>
        
      </div>
    </div>
  );
};

export default Faoliyat;
