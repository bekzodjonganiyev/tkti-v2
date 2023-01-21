import React, { useEffect, useState } from "react";

import "./Faoliyat.css";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import FaoliyatData from "../../../components/admin/faoliyat/faoliyat_data/FaoliyatData";

const Faoliyat = () => {


  return (
    <div>
      <FormHeader title="Faoliyat" buttonName="Faoliyat Qo'shish" />
      <FaoliyatData />
      <h1>------------------------------------------</h1>
      <div>
        
      </div>
    </div>
  );
};

export default Faoliyat;
