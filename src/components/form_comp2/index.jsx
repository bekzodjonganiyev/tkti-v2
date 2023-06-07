import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Input, Select, Alert, Spin, Modal, message } from "antd";

import TextEditor from "../text_editor/TextEditor";
import { From2Actions } from "./action";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export const AddForm2 = ({ hasSelect, selectUrl, url }) => {
  const selectorFunc = (state) => state.form2;
  const dispatch = useDispatch();
  const form2State = useSelector(selectorFunc);
  const { getOptions, getDataById, postData, putData } = new From2Actions();

  const [aboutUs, setAboutUs] = useState({
    uz: "",
    ru: "",
    en: "",
  });
  const [aim, setAim] = useState({
    uz: "",
    ru: "",
    en: "",
  });
  const [facultyId, setFacultyId] = useState("");

  const handleSubmit = (value) => {
    const obj = {
      ...value,
      haqida_uz: aboutUs?.uz,
      haqida_ru: aboutUs?.ru,
      haqida_en: aboutUs?.en,
      maqsad_uz: aim?.uz,
      maqsad_ru: aim?.ru,
      maqsad_en: aim?.en,
    };

    const body = hasSelect
      ? JSON.stringify({ ...obj, fakultet_id: facultyId })
      : JSON.stringify(obj);

    dispatch(postData(url, body));
    console.log(JSON.parse(body));
  };
  const handleChange = (value) => {
    setFacultyId(value);
  };

  useEffect(() => {
    hasSelect ? dispatch(getOptions(selectUrl)) : null
  }, []);

  return (
    <div className="relative">
      {(form2State.added && !form2State.loading) ||
      (form2State.error && !form2State.loading) ? (
        <div className={`fixed top-5 right-12 w-96 z-50 duration-300`}>
          <Alert
            message={`${form2State.success ? "Saqlandi" : "Xatoli yuz berdi"}`}
            description=""
            type={`${form2State.success ? "success" : "error"}`}
            closable
            showIcon
          />
        </div>
      ) : null}
      <Form
        onFinish={handleSubmit}
        style={{
          maxWidth: "100%",
          padding: "20px",
        }}
        className="my-8 mx-4"
        validateMessages={validateMessages}
      >
        <Form.Item
          name="title_uz"
          label="Nomi UZB"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="title_ru"
          label="Nomi RUS"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="title_en"
          label="Nomi ING"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <TextEditor
          title={{
            uz: "Haqida batafsil UZB",
            ru: "Haqida batafsil RUS",
            en: "Haqida batafsil ING",
          }}
          value={{
            uz: aboutUs.uz,
            ru: aboutUs.ru,
            en: aboutUs.en,
          }}
          handleValue={{
            uz: (e) => setAboutUs({ ...aboutUs, uz: e }),
            ru: (e) => setAboutUs({ ...aboutUs, ru: e }),
            en: (e) => setAboutUs({ ...aboutUs, en: e }),
          }}
        />

        <TextEditor
          title={{
            uz: "Maqsad batafsil UZB",
            ru: "Maqsad batafsil RUS",
            en: "Maqsad batafsil ING",
          }}
          value={{
            uz: aim.uz,
            ru: aim.ru,
            en: aim.en,
          }}
          handleValue={{
            uz: (e) => setAim({ ...aim, uz: e }),
            ru: (e) => setAim({ ...aim, ru: e }),
            en: (e) => setAim({ ...aim, en: e }),
          }}
        />

        <br />

        {hasSelect ? (
          <Select
            defaultValue="lucy"
            style={{
              width: "100%",
            }}
            onChange={handleChange}
            options={form2State.options}
          />
        ) : null}

        <br />
        <br />

        <Button
          htmlType="submit"
          loading={form2State.loading}
          type={" "}
          block
          className="bg-blue-500 text-white flex justify-center items-center py-6"
          classNames=""
        >
          <p className="text-lg">Saqlash</p>
        </Button>
      </Form>
    </div>
  );
};

export const EditForm2 = ({ hasSelect, selectUrl, url }) => {
  const [form] = Form.useForm();
  return (
    <div>
      <Form form={form} validateMessages={validateMessages}>
        <Form.Item
          name="title_uz"
          label="Nomi UZB"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="title_ru"
          label="Nomi RUS"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="title_en"
          label="Nomi ING"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        
      </Form>
    </div>
  );
};

export { form2Reducer } from "./reducer";
