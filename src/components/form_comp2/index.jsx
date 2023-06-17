import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Input, Select, Alert, Spin } from "antd";
import { Editor } from "@tinymce/tinymce-react";

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

const editorInit = {
  min_height: 400,
  plugins: [
    "advlist autolink lists link image charmap print preview anchor",
    "searchreplace visualblocks code fullscreen",
    "insertdatetime media table paste wordcount",
    "codesample code",
    "autoresize",
  ],
  codesample_languages: [
    { text: "HTML/XML", value: "markup" },
    { text: "JavaScript", value: "javascript" },
    { text: "CSS", value: "css" },
    { text: "PHP", value: "php" },
  ],
  toolbar:
    "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | codesample code",
};

export const AddForm2 = ({ hasSelect, selectUrl, url, bolim }) => {
  const selectorFunc = (state) => state.form2;
  const dispatch = useDispatch();
  const form2State = useSelector(selectorFunc);
  const { getOptions, postData } = new From2Actions();

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
  const [rektoratId, setRektoratId] = useState("");

  const handleChange = (value) => {
    bolim ? setRektoratId(value) : setFacultyId(value);
  };

  const selectFunc = () => {
   return bolim ? { rektorat: rektoratId } : { fakultet_id: facultyId}
  }

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
      ? JSON.stringify({ ...obj, ...selectFunc()})
      : JSON.stringify(obj);

    dispatch(postData(url, body));
    // console.log(JSON.parse(body));
  };

  useEffect(() => {
    hasSelect ? dispatch(getOptions(selectUrl)) : null;
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

export const EditForm2 = ({ hasSelect, selectUrl, url, bolim }) => {
  const selectorFunc = (state) => state.form2;
  const dispatch = useDispatch();
  const { dataById, loading, options, success, error, updated } =
    useSelector(selectorFunc);
  const { getOptions, putData, getDataById } = new From2Actions();

  const [about, setAbout] = useState({
    uz: dataById?.haqida_uz,
    ru: dataById?.haqida_ru,
    en: dataById?.haqida_en,
  });
  const [aim, setAim] = useState({
    uz: dataById?.maqsad_uz,
    ru: dataById?.maqsad_ru,
    en: dataById?.maqsad_en,
  });
  const [facultyId, setFacultyId] = useState(dataById?.fakultet_id);
  const [rektoratId, setRektoratId] = useState(dataById?.rektorat);

  const selectFunc = () => {
    return bolim
      ? {
          rektorat: rektoratId,
        }
      : {
          fakultet_id: facultyId,
        };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      title_uz: e.target.title_uz.value,
      title_ru: e.target.title_ru.value,
      title_en: e.target.title_en.value,
      haqida_uz: about?.uz,
      haqida_ru: about?.ru,
      haqida_en: about?.en,
      maqsad_uz: aim?.uz,
      maqsad_ru: aim?.ru,
      maqsad_en: aim?.en,
    };

    const body = hasSelect
      ? JSON.stringify({ ...obj, ...selectFunc() })
      : JSON.stringify(obj);

    dispatch(putData(url, body));
    // console.log(JSON.parse(body));
  };

  // window.location.reload(false)
  useEffect(() => {
    hasSelect ? dispatch(getOptions(selectUrl)) : null;
    dispatch(getDataById(url));
  }, [url]);

  // TODO - edit button bozilib yangi pageda getById bo'ladi va initialValuelar set bo'ladi
  // shu joyida birorta ham filedni o'zgartirmayt form submit qilinsa xato chiqaradi
  return (
    <div className="relative">
      {(updated && !loading) || (error && !loading) ? (
        <div className={`fixed top-5 right-12 w-96 z-50 duration-300`}>
          <Alert
            message={`${success ? "Saqlandi" : "Xatoli yuz berdi"}`}
            description=""
            type={`${success ? "success" : "error"}`}
            closable
            showIcon
          />
        </div>
      ) : null}
      <Spin spinning={loading}>
        <form onSubmit={handleSubmit} className="pb-10">
          {/* TITLES */}
          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="title_uz">Sarlavha (UZ)</label>
            <input
              type="text"
              id="title_uz"
              name="title_uz"
              defaultValue={dataById?.title_uz}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="title_ru">Sarlavha (RU)</label>
            <input
              type="text"
              id="title_ru"
              name="title_ru"
              defaultValue={dataById?.title_ru}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="title_en">Sarlavha (EN)</label>
            <input
              type="text"
              id="title_en"
              name="title_en"
              defaultValue={dataById?.title_en}
            />
          </div>
          {/* TITLES */}

          {/* ABOUT */}
          <div className="mt-10">
            <span>Haqida (UZ)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.haqida_uz}
              onEditorChange={(e) => setAbout({ ...about, uz: e })}
            />
          </div>

          <div className="mt-10">
            <span>Haqida (RU)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.haqida_ru}
              onEditorChange={(e) => setAbout({ ...about, ru: e })}
            />
          </div>

          <div className="mt-10">
            <span>Haqida (EN)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.haqida_en}
              onEditorChange={(e) => setAbout({ ...about, en: e })}
            />
          </div>
          {/* ABOUT */}

          {/* AIM */}
          <div className="mt-10">
            <span>Haqida (UZ)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.maqsad_uz}
              onEditorChange={(e) => setAim({ ...aim, uz: e })}
            />
          </div>

          <div className="mt-10">
            <span>Haqida (RU)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.maqsad_ru}
              onEditorChange={(e) => setAim({ ...aim, ru: e })}
            />
          </div>

          <div className="mt-10">
            <span>Haqida (EN)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.maqsad_en}
              onEditorChange={(e) => setAim({ ...aim, en: e })}
            />
          </div>
          {/* AIM */}

          {/* SELECT FAKULTET */}
          {hasSelect ? (
            <div className="my-10">
              <label htmlFor="fakultet_id"></label>
              <select
                name="fakultet_id"
                id="fakultet_id"
                defaultValue={
                  bolim ? dataById?.rektorat : dataById?.fakultet_id
                }
                onChange={(e) =>
                  bolim
                    ? setRektoratId(e.target.value)
                    : setFacultyId(e.target.value)
                }
              >
                {options?.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          ) : null}

          <button className="bg-blue-500 flex items-center justify-center w-full text-white py-2 font-bold">
            Saqlash
          </button>
        </form>
      </Spin>
    </div>
  );
};

export { form2Reducer } from "./reducer";
