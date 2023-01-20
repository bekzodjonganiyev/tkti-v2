import React, { useEffect, useState, useRef } from "react";

import "./Syllabus.css";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import Button from "../../../components/admin/button/Button";

import { Context } from "../../../context";

const Syllabus = () => {
  const photoRef = useRef();
  const { globalUrl } = useState(Context);
  const [inputValue, setInputValue] = useState();
  const [fakultet, setFakultet] = useState();
  const [kafedra, setKafedra] = useState();
  const [yonalish, setYonalish] = useState();
  const year = [
    { id: 2020, name: "2020-2021" },
    { id: 2021, name: "2021-2022" },
    { id: 2022, name: "2022-2023" },
  ];
  const educationType = ["Kechki", "Kunduzgi", "Sirtqi"];
  const educationDegree = ["Bakalavr", "Magistr", "Doktarantura"];

  function handleInputValue(e) {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  }

  function fetchKafedra(id) {
    const fakultetId = id.split(",")[0];
    fetch(`http://backend.tkti.uz/Fak_data/${fakultetId}`, {
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => setKafedra(res.data.kafedralar))
      .catch((err) => console.log(err));
  }

  function fetchYonalish(id) {
    const kafedraId = id.split(",")[0];
    fetch(`http://backend.tkti.uz/kafedra_data/${kafedraId}`, {
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => setYonalish(res.data[0].yonalishlar))
      .catch((err) => console.log(err));
  }

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", inputValue?.title);
    formData.append("yili", inputValue?.yili);
    formData.append("talim_turi", inputValue?.talim_turi);
    formData.append("talim_darajasi", inputValue?.talim_darajasi);
    formData.append("Fakultet", inputValue?.Fakultet.split(",")[1]);
    formData.append("Kafedra", inputValue?.Kafedra.split(",")[1]);
    formData.append(
      "talim_yonalishi",
      inputValue?.talim_yonalishi
    );
    for (let i = 0; i < photoRef.current.files.length; i++) {
      formData.append("photo", photoRef.current.files[i]);
    }

    fetch(`http://backend.tkti.uz/daraja/add`, {
      method: "POST",
      headers: {
        "Token": localStorage.getItem("token"),
      },
      body: formData
    })
    .then(res => res.json())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

    console.log(photoRef.current.files);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  }

  useEffect(() => {
    async function fetchFakultet() {
      fetch(`http://backend.tkti.uz/Fak_data/all`, {
        headers: { "Content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((res) => setFakultet(res.data))
        .catch((err) => console.log(err));
    }
    fetchFakultet();
  }, []);
  return (
    <div className="syllabus-page">
      <FormHeader title="Syllabus" buttonName="Syllabus Qo'shish" />
      <form className="syllabus-form" onSubmit={onSubmit}>
        <label htmlFor="title">
          Syllabus Nomi <br />
          <input
            type="text"
            required
            name="title"
            id="title"
            onChange={handleInputValue}
          />
        </label>

        <div className="year-type-degree">
          <label htmlFor="yili">
            Talim Yili <br />
            <select id="yili" required name="yili" onChange={handleInputValue}>
              <option value=" " hidden>
                ...
              </option>
              {year.map((i) => (
                <option value={i.id} key={i.id}>
                  {i.name}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="talim_turi">
            Talim Turi <br />
            <select
              id="talim_turi"
              required
              name="talim_turi"
              onChange={handleInputValue}
            >
              <option value=" " hidden>
                ...
              </option>
              {educationType.map((i) => (
                <option value={i} key={i}>
                  {i}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="talim_darajasi">
            Talim Darajasi <br />
            <select
              id="talim_darajasi"
              required
              name="talim_darajasi"
              onChange={handleInputValue}
            >
              <option value=" " hidden>
                ...
              </option>
              {educationDegree.map((i) => (
                <option value={i} key={i}>
                  {i}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label htmlFor="Fakultet">
          Fakultet <br />
          <select
            required
            name="Fakultet"
            onChange={(e) => {
              handleInputValue(e);
              fetchKafedra(e.target.value);
            }}
          >
            <option value=" " hidden>
              ...
            </option>
            {fakultet?.map((i) => (
              <option value={[i._id, i.title_uz]} key={i._id}>
                {i.title_uz}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="Kafedra">
          Kafedra <br />
          <select
            id="Kafedra"
            required
            name="Kafedra"
            onChange={(e) => {
              handleInputValue(e);
              fetchYonalish(e.target.value);
            }}
          >
            <option value="" hidden>
              ...
            </option>
            {kafedra?.map((i) => (
              <option value={[i._id, i.title_uz]} key={i._id}>
                {i.title_uz}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="talim_yonalishi">
          Talim Yo'nalishi <br />
          <select
            id="talim_yonalishi"
            required
            name="talim_yonalishi"
            onChange={handleInputValue}
          >
            <option value="" hidden>
              ...
            </option>
            {yonalish?.map((i) => (
              <option value={i.title_uz} key={i._id}>
                {i.title_uz}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="photo">
          File Biriktirish <br />
          <input
            type="file"
            id="photo"
            required
            name="photo"
            multiple
            ref={photoRef}
          />
        </label>

        <Button name="Qo'shish" onClick={() => {}} />
      </form>
    </div>
  );
};

export default Syllabus;
