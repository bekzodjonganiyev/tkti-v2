import React, { useState } from "react";
import FormHeader from "../../../components/admin/form_header/FormHeader";
import AddForm from "../../../components/admin/add_form/AddForm";
import Table from "../../../components/admin/table/Table";

import "./Fakultet.css";

const Fakultet = () => {
  const props = {
    inputNames: {
      nameUz: "fakultet nomi Uz",
      nameRu: "fakultet nomi Ru",
      nameEn: "fakultet nomi En",
    },
    textEditorNames1: {
      nameUz: "maqsad va vazifa Uz",
      nameRu: "maqsad va vazifa Ru",
      nameEn: "maqsad va vazifa En",
    },
    textEditorNames2: {
      nameUz: "fakultet haqida Uz",
      nameRu: "fakultet haqida Ru",
      nameEn: "fakultet haqida En",
    },
    selectName: "select name",
    buttonName: "buttob name",
    url: "Fak_data/add",
  };

  const analyseNameTableHead = [
    "AnalyseName.name",
    "AnalyseName.price",
    "AnalyseName.attachedWorker",
    "AnalyseName.date",
  ];

  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => {
    return (
      <tr key={index} style={{ cursor: "pointer", userSelect: "none" }}>
        <td>{item.name}</td>
        <td>{item.paymentAmount}</td>
        <td>{item.fullname}</td>
        <td>{item.createdDate}</td>
      </tr>
    );
  };

  return (
    <div>
      
      <span>Table component tasalyapti</span>
      <Table
        headData={analyseNameTableHead}
        renderHead={renderHead}
        bodyData={[
          {
            id: 1,
            name: "kxkxk",
            paymentAmount: 1212,
            fullname: "dswws",
            createdDate: "sdddd",
          },
          {
            id: 1,
            name: "kxkxk",
            paymentAmount: 1212,
            fullname: "dswws",
            createdDate: "sdddd",
          },
          {
            id: 1,
            name: "kxkxk",
            paymentAmount: 1212,
            fullname: "dswws",
            createdDate: "sdddd",
          },
          {
            id: 1,
            name: "kxkxk",
            paymentAmount: 1212,
            fullname: "dswws",
            createdDate: "sdddd",
          },
        ]}
        renderBody={renderBody}
      />
      <FormHeader title="Fakultet" buttonName="+" />
      <AddForm
        inputNames={props.inputNames}
        textEditorNames1={props.textEditorNames1}
        textEditorNames2={props.textEditorNames2}
        selectName={props.selectName}
        buttomName={props.buttonName}
        hasSelect={false}
        url={props.url}
      />
    </div>
  );
};

export default Fakultet;
