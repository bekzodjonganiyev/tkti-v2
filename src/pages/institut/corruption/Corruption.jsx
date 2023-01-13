import React, { useContext } from "react";
import { Context } from "../../../context";

import documentLang from "./lang";
const Corruption = () => {
   const { lang } = useContext(Context);
  return (
    <div className="wrapped mb-5">
       <h3 className="text-center my-3">{documentLang[lang].name.name3}</h3>
          <p>
            {documentLang[lang].name.name4}
            <a href="https://t.me/TctiAntiCorruptionBot">
              @TctiAntiCorruptionBot
            </a>
          </p>
          <p>
            {documentLang[lang].name.name5}
          </p>
          <p>
            {documentLang[lang].name.name6}
          </p>
          <p>{documentLang[lang].name.name7}: (+99871) 244-78-49;</p>
          <p>
            {documentLang[lang].name.name8}:{" "}
            <a href="http://rector.tcti.uz/">rector.tcti.uz</a>
          </p>
    </div>
  );
};

export default Corruption;
