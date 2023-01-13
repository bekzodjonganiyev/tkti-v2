import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";

import "./style.css";

function Filter({yili}) {
  const { lang, globalUrl, setSearchedData } = useContext(Context);
  const navigate = useNavigate()
  
  const getSyllabus = async (params) => {
    try {
      const res = (await fetch(`${globalUrl}/daraja/${params}`)).json();
      return res;
    } catch (err) {
      console.log(err);
    }
  };

//   useEffect(() => {
//     getSyllabus(`${globalUrl}/daraja/all`).then((res) => {
//       // const newArr = 
//       console.log(res)
//     });
//   }, []);

  const [syllabus, setSyllabus] = useState({});

 const [about] = useState({
  uz:[`Darajani tanlang`,`Yilni tanlang`,`Ta'lim turini tanlang`,`Ta'lim darajasini tanlang`,`Fakultetni tanlang`,`Kafedrani tanlang`,`Yo'nalishni tanlang`,`Qidirish`],
  ru:[`Выберите уровень`,`Выберите год`,`Выберите тип образования`,`Выберите уровень образования`,`Выберите факультет`,`Выберите отдел`,`Выберите направление`,`Поиск`],
  en:[`Select a level`,`Select a year`,`Select the type of education`,`Select the level of education`,`Choose a faculty`,`Select a department`,`Choose a direction`,`Search`]
 })

  const [types, setTypes] = useState([]);

  const [degrees, setDegrees] = useState([]);

  const [faculties, setFaculties] = useState([]);

  const [kafedras, setKafedras] = useState([]);

  const [directions, setDirection] = useState([]);


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
  return (
    <div className=" search-section">
      <h2 className="select-title">{about[lang][0]}</h2>
      <form className="container-fluid select-form" onSubmit={submitForm}>
        <div className="select__wrapper ">
          {/* Years */}
          <select
            required
            className="select"
            onChange={(e) => getTypes(e.target.value)}
          >
            <option value="">{about[lang][1]}</option>
            {yili.map((i, idx) => (
              <option value={i} key={idx}>
                {i}
              </option>
            ))}
          </select>

          {/* Types */}
          <select
            required
            className="select"
            onChange={(e) => getDegrees(e.target.value)}
            disabled={!syllabus?.year?.isSelected}
            value={syllabus?.type?.value}
          >
            <option value="">{about[lang][2]}</option>
            {types.map((i, idx) => (
              <option value={i} key={idx}>
                {i}
              </option>
            ))}
          </select>

          {/* Degrees */}
          <select
            required
            className="select"
            onChange={(e) => getFaculties(e.target.value)}
            disabled={!syllabus?.type?.isSelected}
            value={syllabus?.degree?.value}
          >
            <option value="">{about[lang][3]}</option>
            {degrees.map((i, idx) => (
              <option value={i} key={idx}>
                {i}
              </option>
            ))}
          </select>

          {/* Faculty */}
          <select
            required
            className="select"
            onChange={(e) => getKafedras(e.target.value)}
            disabled={!syllabus?.degree?.isSelected}
            value={syllabus?.faculty?.value}
          >
            <option value="">{about[lang][4]}</option>
            {faculties.map((i, idx) => (
              <option key={idx} value={i}>
                {i}
              </option>
            ))}
          </select>

          {/* Kafedra */}
          <select
            required
            className="select"
            onChange={(e) => getDirection(e.target.value)}
            disabled={!syllabus?.faculty?.isSelected}
            value={syllabus?.kafedra?.value}
          >
            <option value="">{about[lang][5]}</option>
            {kafedras.map((i, idx) => (
              <option key={idx} value={i}>
                {i}
              </option>
            ))}
          </select>

          {/* Direction */}
          <select
            required
            className="select"
            onChange={(e) => getSelectedData(e.target.value)}
            disabled={!syllabus?.kafedra?.isSelected}
            value={syllabus?.direction?.value}
          >
            <option value="">{about[lang][6]}</option>
            {directions.map((i, idx) => (
              <option key={idx} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="select-btn">
        {about[lang][7]}
        </button>
      </form>
    </div>
  );
}

export default Filter;