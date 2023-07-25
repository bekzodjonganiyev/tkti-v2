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
          name="name_ru"
          label="Nomi RUS"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name_en"
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

  console.log(dataById);
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

  useEffect(() => {
    setAbout({
      uz: dataById?.haqida_uz,
      ru: dataById?.haqida_ru,
      en: dataById?.haqida_en,
    })
    setAim({
      uz: dataById?.maqsad_uz,
      ru: dataById?.maqsad_ru,
      en: dataById?.maqsad_en,
    })
    setFacultyId(dataById?.fakultet_id)
    setRektoratId(dataById?.rektorat)
  }, [dataById])

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

          <button className="bg-blue-500 my-16 flex items-center justify-center w-full text-white py-2 font-bold">
            Saqlash
          </button>
        </form>
      </Spin>
    </div>
  );
};


export const EmployeesEditForm = ({ hasSelect, selectUrl, url, bolim }) => {
  const selectorFunc = (state) => state.form2;
  const dispatch = useDispatch();
  const { dataById, loading, options, success, error, updated } =
    useSelector(selectorFunc);
  const { getOptions, putData, getDataById } = new From2Actions();


  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      name_uz: e.target.name_uz.value,
      name_ru: e.target.name_ru.value,
      name_en: e.target.name_en.value,
      job_uz: e.target.job_uz.value,
      job_ru: e.target.job_ru.value,
      job_en: e.target.job_en.value,
      tell: e.target.tel.value,
      email: e.target.email.value,
      kafedra_id: dataById?.kafedra_id
    };

    const body = JSON.stringify(obj);

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
            <label htmlFor="name_uz">Sarlavha (UZ)</label>
            <input
              type="text"
              id="name_uz"
              name="name_uz"
              defaultValue={dataById?.name_uz}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="name_ru">Sarlavha (RU)</label>
            <input
              type="text"
              id="name_ru"
              name="name_ru"
              defaultValue={dataById?.name_ru}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="name_en">Sarlavha (EN)</label>
            <input
              type="text"
              id="name_en"
              name="name_en"
              defaultValue={dataById?.name_en}
            />
          </div>
          {/* TITLES */}


          {/* JOB */}
          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="job_uz">Lavozimi (UZ)</label>
            <input
              type="text"
              id="job_uz"
              name="job_uz"
              defaultValue={dataById?.job_uz}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="job_ru">Lavozimi (RU)</label>
            <input
              type="text"
              id="job_ru"
              name="job_ru"
              defaultValue={dataById?.job_ru}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="job_en">Lavozimi (EN)</label>
            <input
              type="text"
              id="job_en"
              name="job_en"
              defaultValue={dataById?.job_en}
            />
          </div>
          {/* JOB */}

           {/* OTHERS */}
           <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="tel">Telefon raqami</label>
            <input
              type="text"
              id="tel"
              name="tel"
              defaultValue={dataById?.tell}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={dataById?.email}
            />
          </div>

          {/* OTHERS */}

         

          <button type="submit" className="bg-blue-500 my-16 flex items-center justify-center w-full text-white py-2 font-bold">
            Saqlash
          </button>
        </form>
      </Spin>
    </div>
  );
};

export const EmployeesAddForm = ({ hasSelect, selectUrl, url, bolim }) => {
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
          name="name_ru"
          label="Nomi RUS"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name_en"
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

export const LidershipEditForm = ({ hasSelect, selectUrl, url, bolim }) => {
  const selectorFunc = (state) => state.form2;
  const dispatch = useDispatch();
  const { dataById, loading, options, success, error, updated } =
    useSelector(selectorFunc);
  const { getOptions, putData, getDataById } = new From2Actions();

  const [asosiyVazifa, setAsosiyVazifa] = useState({
    uz: dataById?.asosiy_vazifa_uz,
    ru: dataById?.asosiy_vazifa_ru,
    en: dataById?.asosiy_vazifa_en,
  });

  const [ilmiyYonalish, setIlmiyYonalish] = useState({
    uz: dataById?.ilmiy_yonlaish_uz,
    ru: dataById?.ilmiy_yonlaish_ru,
    en: dataById?.ilmiy_yonlaish_en,
  });

  const [mehnatFaoliyat, setMehnatFaoliyat] = useState({
    uz: dataById?.mehnat_faoliyat_uz,
    ru: dataById?.mehnat_faoliyat_ru,
    en: dataById?.mehnat_faoliyat_en,
  });

  const [qisqacha, setQisqacha] = useState({
    uz: dataById?.qisqacha_uz,
    ru: dataById?.qisqacha_ru,
    en: dataById?.qisqacha_en,
  });

  console.log(dataById);
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
      name_en: e.target.name_en.value,
      name_uz: e.target.name_uz.value,
      name_ru: e.target.name_ru.value,
      address_en: e.target.address_en.value,
      address_uz: e.target.address_uz.value,
      address_ru: e.target.address_ru.value,
      job_en: e.target.job_en.value,
      job_uz: e.target.job_uz.value,
      job_ru: e.target.job_ru.value,
      link: e.target.link.value,
      tel: e.target.tel.value,
      asosiy_vazifa_en: asosiyVazifa?.en,
      asosiy_vazifa_uz: asosiyVazifa?.uz,
      asosiy_vazifa_ru: asosiyVazifa?.ru,
      ilmiy_yonlaish_en: ilmiyYonalish?.en,
      ilmiy_yonlaish_uz: ilmiyYonalish?.uz,
      ilmiy_yonlaish_ru: ilmiyYonalish?.ru,
      mehnat_faoliyat_en: mehnatFaoliyat?.en,
      mehnat_faoliyat_uz: mehnatFaoliyat?.uz,
      mehnat_faoliyat_ru: mehnatFaoliyat?.ru,
      qisqacha_en: qisqacha?.en,
      qisqacha_uz: qisqacha?.uz,
      qisqacha_ru: qisqacha?.ru,
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


  useEffect(() => {
      setQisqacha({ 
        uz: dataById?.qisqacha_uz,
        ru: dataById?.qisqacha_ru,
        en: dataById?.qisqacha_en,
      })
      setAsosiyVazifa({
        uz: dataById?.asosiy_vazifa_uz,
        ru: dataById?.asosiy_vazifa_ru,
        en: dataById?.asosiy_vazifa_en,
      })
      setIlmiyYonalish({
        uz: dataById?.ilmiy_yonlaish_uz,
        ru: dataById?.ilmiy_yonlaish_ru,
        en: dataById?.ilmiy_yonlaish_en,
      })
      setMehnatFaoliyat({
        uz: dataById?.mehnat_faoliyat_uz,
        ru: dataById?.mehnat_faoliyat_ru,
        en: dataById?.mehnat_faoliyat_en,
      })
  }, [dataById])

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
            <label htmlFor="name_uz">F.I.Sh (UZ)</label>
            <input
              type="text"
              id="name_uz"
              name="name_uz"
              defaultValue={dataById?.name_uz}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="name_ru">F.I.Sh (RU)</label>
            <input
              type="text"
              id="name_ru"
              name="name_ru"
              defaultValue={dataById?.name_ru}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="name_en">F.I.Sh (EN)</label>
            <input
              type="text"
              id="name_en"
              name="name_en"
              defaultValue={dataById?.name_en}
            />
          </div>
          {/* TITLES */}

          {/* JOB */}
          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="job_uz">Lavozim (UZ)</label>
            <input
              type="text"
              id="job_uz"
              name="job_uz"
              defaultValue={dataById?.job_uz}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="job_ru">Lavozim (RU)</label>
            <input
              type="text"
              id="job_ru"
              name="job_ru"
              defaultValue={dataById?.job_ru}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="job_en">Lavozim (EN)</label>
            <input
              type="text"
              id="job_en"
              name="job_en"
              defaultValue={dataById?.job_en}
            />
          </div>
          {/* JOB */}

          {/* ADDRESS */}
          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="address_uz">Manzil (UZ)</label>
            <input
              type="text"
              id="address_uz"
              name="address_uz"
              defaultValue={dataById?.address_uz}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="address_ru">Manzil (RU)</label>
            <input
              type="text"
              id="address_ru"
              name="address_ru"
              defaultValue={dataById?.address_ru}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="address_en">Manzil (EN)</label>
            <input
              type="text"
              id="address_en"
              name="address_en"
              defaultValue={dataById?.address_en}
            />
          </div>
          {/* ADDRESS */}


          {/* TELL */}
          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="tel">Telefon raqami</label>
            <input
              type="text"
              id="tel"
              name="tel"
              defaultValue={dataById?.tel}
            />
          </div>

           {/* LINK */}
           <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="link">Link</label>
            <input
              type="text"
              id="link"
              name="link"
              defaultValue={dataById?.link}
            />
          </div>

          {/* QISQACHA */}
          <div className="mt-10">
            <span> Qisqacha (UZ)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.qisqacha_uz}
              onEditorChange={(e) => setQisqacha({ ...qisqacha, uz: e })}
            />
          </div>

          <div className="mt-10">
            <span>Qisqacha (RU)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.qisqacha_ru}
              onEditorChange={(e) => setQisqacha({ ...qisqacha, ru: e })}
            />
          </div>

          <div className="mt-10">
            <span>Qisqacha (EN)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.qisqacha_en}
              onEditorChange={(e) => setQisqacha({ ...qisqacha, en: e })}
            />
          </div>
          {/* QISQACHA */}

          {/* ASOSIY VAZIFA */}
          <div className="mt-10">
            <span> Asosiy Vazifa (UZ)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.asosiy_vazifa_uz}
              onEditorChange={(e) => setAsosiyVazifa({ ...asosiyVazifa, uz: e })}
            />
          </div>

          <div className="mt-10">
            <span>Asosiy Vazifa (RU)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.asosiy_vazifa_ru}
              onEditorChange={(e) => setAsosiyVazifa({ ...asosiyVazifa, ru: e })}
            />
          </div>

          <div className="mt-10">
            <span>Asosiy Vazifa (EN)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.asosiy_vazifa_en}
              onEditorChange={(e) => setAsosiyVazifa({ ...asosiyVazifa, en: e })}
            />
          </div>
          {/* ASOSIY VAZIFA */}

          {/* ILMIY */}
          <div className="mt-10">
            <span>Ilmiy yo'nalish (UZ)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.ilmiy_yonlaish_uz}
              onEditorChange={(e) => setIlmiyYonalish({ ...ilmiyYonalish, uz: e })}
            />
          </div>

          <div className="mt-10">
            <span>Ilmiy yo'nalish (RU)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.ilmiy_yonlaish_ru}
              onEditorChange={(e) => setIlmiyYonalish({ ...ilmiyYonalish, ru: e })}
            />
          </div>

          <div className="mt-10">
            <span>Ilmiy yo'nalish (EN)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.ilmiy_yonlaish_en}
              onEditorChange={(e) => setIlmiyYonalish({ ...ilmiyYonalish, en: e })}
            />
          </div>
          {/* ILMIY */}

           {/* ILMIY */}
           <div className="mt-10">
            <span>Mehnat faoliyat (UZ)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.mehnat_faoliyat_uz}
              onEditorChange={(e) => setMehnatFaoliyat({ ...mehnatFaoliyat, uz: e })}
            />
          </div>

          <div className="mt-10">
            <span>Mehnat faoliyat (RU)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.mehnat_faoliyat_ru}
              onEditorChange={(e) => setMehnatFaoliyat({ ...mehnatFaoliyat, ru: e })}
            />
          </div>

          <div className="mt-10">
            <span>Mehnat faoliyat (EN)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.mehnat_faoliyat_en}
              onEditorChange={(e) => setMehnatFaoliyat({ ...mehnatFaoliyat, en: e })}
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

          <button className="bg-blue-500 my-16 flex items-center justify-center w-full text-white py-2 font-bold">
            Saqlash
          </button>
        </form>
      </Spin>
    </div>
  );
};

export const ParentEditForm = ({ url, id }) => {
  const selectorFunc = (state) => state.form2;
  const dispatch = useDispatch();
  const { dataById, loading, options, success, error, updated } =
    useSelector(selectorFunc);
  const { getOptions, putData, getDataById } = new From2Actions();

  let filterData = []

  console.log(dataById);

try {
  filterData = dataById ? dataById?.filter(item => item?._id === id) : []
} catch (e) {
  console.log(e);
}


  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      title_uz: e.target.title_uz.value,
      title_ru: e.target.title_ru.value,
      title_en: e.target.title_en.value,
    };

    const body = JSON.stringify(obj); 

    dispatch(putData(url, body));
  };

  useEffect(() => {
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
        <form onSubmit={handleSubmit}>
          {/* TITLES */}
          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="title_uz">Sarlavha (UZ)</label>
            <input
              type="text"
              id="title_uz"
              name="title_uz"
              defaultValue={filterData[0]?.title_uz}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="title_ru">Sarlavha (RU)</label>
            <input
              type="text"
              id="title_ru"
              name="title_ru"
              defaultValue={filterData[0]?.title_ru}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="title_en">Sarlavha (EN)</label>
            <input
              type="text"
              id="title_en"
              name="title_en"
              defaultValue={filterData[0]?.title_en}
            />
          </div>
          {/* TITLES */}

          <button className="bg-blue-500 mt-8 mb-4 flex items-center justify-center w-full text-white py-2 font-bold">
            Saqlash
          </button>
        </form>
      </Spin>
    </div>
  );
};

export { form2Reducer } from "./reducer";
