import React, { useState, useContext} from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { baseURL } from "../../services/http";
import { useAppContext } from "../../context/app.context";
export const Sillabus = ({yili}) => {
  const {  setSearchedData } = useAppContext();
  const navigate = useNavigate()
  const [syllabus, setSyllabus] = useState({});
  const [types, setTypes] = useState([]);

  const [degrees, setDegrees] = useState([]);

  const [faculties, setFaculties] = useState([]);

  const [kafedras, setKafedras] = useState([]);

  const [directions, setDirection] = useState([]);

 

  const getSyllabus = async (params) => {
    try {
      const res = (await fetch(`${baseURL}/daraja/${params}`)).json();
      return res;
    } catch (err) {
      console.log(err);
    }
  };



  const getTypes = (params) => {
    if (params) {
      getSyllabus(`query?yili=${params}`).then((res) => {
        const newArr = res.data.map((i) => i.talim_turi);
        setTypes(Array.from(new Set(newArr)));
      });

      setSyllabus({
        year: {
          isSelected: true,
          value: params,
        },
        type: {
          isSelected: false,
          value: "",
        },
        degree: {
          isSelected: false,
          value: "",
        },
        faculty: {
          isSelected: false,
          value: "",
        },
        kafedra: {
          isSelected: false,
          value: "",
        },
        direction: {
          isSelected: false,
          value: "",
        },
      });
    }
  };

  const getDegrees = (params) => {
    if (params) {
      getSyllabus(
        `query?yili=${syllabus?.year?.value}&talim_turi=${params}`
      ).then((res) => {
        const newArr = res.data.map((i) => i.talim_darajasi);
        setDegrees(Array.from(new Set(newArr)));
      });
    }
    setSyllabus({
      ...syllabus,
      type: {
        isSelected: true,
        value: params,
      },
    });
  };

  const getFaculties = (params) => {
    if (params) {
      getSyllabus(
        `query?yili=${syllabus?.year?.value}&talim_turi=${syllabus?.type?.value}&talim_darajasi=${params}`
      ).then((res) => {
        const newArr = res.data.map((i) => i.Fakultet);
        setFaculties(Array.from(new Set(newArr)));
      });
    }
    setSyllabus({
      ...syllabus,
      degree: {
        isSelected: true,
        value: params,
      },
    });
  };

  const getKafedras = (params) => {
    if (params) {
      getSyllabus(
        `query?yili=${syllabus?.year?.value}&talim_turi=${syllabus?.type?.value}&talim_darajasi=${syllabus?.degree?.value}&Fakultet=${params}`
      ).then((res) => {
        const newArr = res.data.map(i => i.Kafedra)
        setKafedras(Array.from(new Set(newArr)))
      });
    }
    setSyllabus({
      ...syllabus,
      faculty: {
        isSelected: true,
        value: params,
      },
    });
  };

  const getDirection = (params) => {
    if (params) {
      getSyllabus(
        `query?yili=${syllabus?.year?.value}&talim_turi=${syllabus?.type?.value}&talim_darajasi=${syllabus?.degree?.value}&Fakultet=${syllabus?.faculty?.value}&Kafedra=${params}`
      ).then((res) => {
        const newArr = res.data.map(i => i.talim_yonalishi)
        setDirection(Array.from(new Set(newArr)))
      });
    }
    setSyllabus({
      ...syllabus,
      kafedra: {
        isSelected: true,
        value: params,
      },
    });
  };

  const getSelectedData = (params) => {
    if (params) {
      getSyllabus(
        `query?yili=${syllabus?.year?.value}&talim_turi=${syllabus?.type?.value}&talim_darajasi=${syllabus?.degree?.value}&Fakultet=${syllabus?.faculty?.value}&Kafedra=${syllabus?.kafedra?.value}&talim_yonalishi=${params}`
      ).then((res) => {
      setSearchedData(res.data)
      });
    }
    setSyllabus({
      ...syllabus,
      direction: {
        isSelected: true,
        value: params,
      },
    });
  }
  const submitForm = (e) => {
    e.preventDefault();
    navigate("/filter/result")
  };
  const { t } = useTranslation();
  return (
    <div className="container mx-auto w-[90%] my-24">
      <h2 className="flex justify-center items-center mx-auto  lg:text-3xl  max-sm:text-2xl lg:my-8 my-6 font-semibold">{t("HomePage.0.name")}</h2>

      <form action="" className="container mx-auto " onSubmit={submitForm}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" max-sm:w-full w-full">
            <label
              for="large"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
               {t("Syllabus.0.name")}
            </label>
            <select
              id="large"
              onChange={(e) => getTypes(e.target.value)}
              className="max-sm:w-full  block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
               <option value="">name</option>
            {yili.map((i, idx) => (
              <option value={i} key={idx}>
                {i}
              </option>
            ))}
            </select>
          </div>

          <div>
            <label
              for="large"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
                {t("Syllabus.1.name")}
            </label>
            <select
              id="large"
              required
              onChange={(e) => getDegrees(e.target.value)}
              disabled={!syllabus?.year?.isSelected}
              value={syllabus?.type?.value}
              className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>{t("Syllabus.13.name")}</option>
              {types.map((i, idx) => (
              <option value={i} key={idx}>
                {i}
              </option>
            ))}
            </select>
          </div>
          <div>
            <label
              for="large"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
                {t("Syllabus.2.name")}
            </label>
            <select
              id="large"
              required
              onChange={(e) => getFaculties(e.target.value)}
              disabled={!syllabus?.type?.isSelected}
              value={syllabus?.degree?.value}
              className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>{t("Syllabus.14.name")}</option>
              {degrees.map((i, idx) => (
              <option value={i} key={idx}>
                {i}
              </option>
            ))}
            </select>
          </div>
          <div>
            <label
              for="large"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
                {t("Syllabus.3.name")}
            </label>
            <select
              id="large"
              required
              onChange={(e) => getKafedras(e.target.value)}
              disabled={!syllabus?.degree?.isSelected}
              value={syllabus?.faculty?.value}
              className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>{t("Syllabus.9.name")}</option>
              {faculties.map((i, idx) => (
              <option key={idx} value={i}>
                {i}
              </option>
            ))}
            </select>
          </div>
          <div>
            <label
              for="large"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              {t("Syllabus.4.name")}
            </label>
            <select
              id="large"
              required
              onChange={(e) => getDirection(e.target.value)}
              disabled={!syllabus?.faculty?.isSelected}
              value={syllabus?.kafedra?.value}
              className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>  {t("Syllabus.10.name")} </option>
              {kafedras.map((i, idx) => (
              <option key={idx} value={i}>
                {i}
              </option>
            ))}
            </select>
          </div>
          <div>
            <label
              for="large"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
                {t("Syllabus.5.name")}
            </label>
            <select
              id="large"
              required
              onChange={(e) => getSelectedData(e.target.value)}
              disabled={!syllabus?.kafedra?.isSelected}
              value={syllabus?.direction?.value}
              className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>{t("Syllabus.11.name")}</option>
              {directions.map((i, idx) => (
              <option key={idx} value={i}>
                {i}
              </option>
            ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="flex justify-center  mx-auto  text-white my-5 bg-blue-700   items-center hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-20 py-4 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {t("Syllabus.15.name")}
        </button>
      </form>
    </div>
  );
};
