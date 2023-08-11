import React, { useEffect, useState } from "react";
import "./Faoliyat.css";
import FaoliyatData from "../../../components/faoliyat/faoliyat_data/FaoliyatData";
import FaoliyatForm from "../../../components/faoliyat/FaoliyatForm";
import FormHeader from "./form_header/FormHeader";
import { memo } from "react";
import { Select, message } from "antd";
import { useContext } from "react";
import { Context } from "../../../context";


const FaoliyatCreate = () => {
  const { setRefresh, refresh } = useContext(Context);

  const selectOptions1 = [
    { id: 'kafedra_id', value: "Kafedralar", url: 'Kafedra_data/all', get: 'kafedra_hodim/all', delete: 'kafedra_hodim' },
    { id: 'markaz_id', value: "Markazlar", url: 'markaz_data/all', get: 'markaz_hodim/all',  delete: 'markaz_hodim'  },
    { id: 'bolim_id', value: "Bo'limlar", url: 'bm_data/all', get: 'bm_hodim/all',  delete: 'bm_hodim'  },
    { id: 'fakultet_id', value: "Fakultetlar", url: 'Fak_data/all', get: 'Fak_hodim/all',  delete: 'Fak_hodim'  },
  ]
  const [ hodim, setHodim ] = useState(selectOptions1[3])



  const handleChange = (value) => {
    const selectedOption = selectOptions1.find(option => option.value === value);
    setHodim(selectedOption);
    sessionStorage.setItem('faoliyat', JSON.stringify(selectedOption))
    setRefresh(!refresh)
  };

  return (
    <div>
      <Select
            defaultValue={hodim?.value}
            value={hodim?.value}
            style={{
              width: "200px",
            }}
            onChange={(value) => handleChange(value)}
            options={selectOptions1}
          />
      <FormHeader title="Faoliyat" buttonName="Faoliyat Qo'shish" />
      <h1>--------------------------------------------</h1>
      <FaoliyatForm catogoryId={hodim?.id} url={hodim?.url} categoryLabel={hodim?.value}/>
      <h1>--------------------------------------------</h1>
      <FaoliyatData />
      <h1>------------------------------------------</h1>
      <div>
      </div>
    </div>
  );
};

export default memo(FaoliyatCreate);
