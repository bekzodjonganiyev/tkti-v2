import React, { useState, useRef, useContext, useEffect } from "react";

import { Context } from "../../context";

const EditXodim = ({ xodim, endpoint, setOnEdit }) => {
  const imageRef = useRef();
  const { globalUrl } = useContext(Context);
  const [selectValue, setSelectValue] = useState();
  
  delete xodim.__v  
  delete xodim.date
  delete xodim._id  
  const [inputValue, setInputValue] = useState(xodim);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  }

  function editEmployer() {
    const formData = new FormData();
    Object.keys(inputValue).forEach((i) => formData.append(i, inputValue[i]));
    formData.append("photo", imageRef.current.files[0]);

    fetch(`${globalUrl}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-type": "appliaction/json",
        Token: localStorage.getItem("token"),
      },
      body: formData,
    });
  }

  useEffect(() => {
    fetch(`${globalUrl}/bm_data/all`, {
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setSelectValue(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <tr
      key={xodim.name_uz}
      style={{ cursor: "pointer", userSelect: "none" }}
      className="edit-table-row"
    >
      <td>
        <input
          className="table-edit-input"
          type="text"
          name="name_uz"
          defaultValue={inputValue.name_uz}
          onChange={handleChange}
        />
        <input
          className="table-edit-input"
          type="text"
          name="name_ru"
          defaultValue={inputValue.name_ru}
          onChange={handleChange}
        />
        <input
          className="table-edit-input"
          type="text"
          name="name_en"
          defaultValue={inputValue.name_en}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          className="table-edit-input"
          type="text"
          name="job_uz"
          defaultValue={inputValue.job_uz}
          onChange={handleChange}
        />
        <input
          className="table-edit-input"
          type="text"
          name="job_ru"
          defaultValue={inputValue.job_ru}
          onChange={handleChange}
        />
        <input
          className="table-edit-input"
          type="text"
          name="job_en"
          defaultValue={inputValue.job_en}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          className="table-edit-input"
          type="text"
          name="tell"
          defaultValue={inputValue.tell}
          onChange={handleChange}
        />
        <input
          required
          className="table-edit-input"
          type="text"
          name="email"
          defaultValue={inputValue.email}
          onChange={handleChange}
        />
        <input className="table-edit-input" type="file" ref={imageRef} />
      </td>

      <td>
        <select
          className=""
          name="bolim_id"
          value={inputValue.bolim_id}
          onChange={handleChange}
          style={{ width: "200px", padding: "5px", marginTop: "-50px" }}
        >
          <option value="" hidden>
            ...
          </option>
          {selectValue?.map((i) => (
            <option value={i._id}>{i.title_uz}</option>
          ))}
        </select>
        <div style={{ marginTop: "40px" }}>
          <button
            className="event-btn edit"
            onClick={() => {
              editEmployer();
            }}
          >
            <i className="fa fa-check"></i>
          </button>
          <button
            className="event-btn delete"
            onClick={() =>
              setOnEdit({
                open: false,
                id: false,
              })
            }
          >
            <i className="fa fa-x"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EditXodim;
