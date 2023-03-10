import React, { useContext, useEffect, useState } from "react";

import { AccordionComponent } from "../../../components/accordion";
import "./xalqaroAloqa.css";
import { Context } from "../../../context";

const Xalqaro = () => {
  const { lang, globalUrl } = useContext(Context);
  const [fetchedData, setFetchedData] = useState([]);

  const getData = async () => {
    const res = await fetch(`${globalUrl}/xalqaro_aloqa/all`, {
      headers: {
        "Content-type": "application/json",
        token: localStorage.getItem("token"),
      },
    });
    const parsed = await res.json();
    const filter = parsed.data.map((item) => ({
      id: item._id,
      status: false,
      title: item[`title_${lang}`],
      content: item[`body_${lang}`],
    }));
    setFetchedData(filter);
  };
  useEffect(() => {
    getData();
  }, [lang]);
  return (
    <div className="wrapped mt-5 mb-5">
      <AccordionComponent arr={fetchedData} setarr={setFetchedData} />
    </div>
  );
};

export default Xalqaro;
