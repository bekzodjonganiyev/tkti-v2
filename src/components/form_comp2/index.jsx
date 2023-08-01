import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Form,
  Input,
  Select,
  Alert,
  Spin,
  message,
} from "antd";
import { Editor } from "@tinymce/tinymce-react";

import TextEditor from "../text_editor/TextEditor";
import { From2Actions } from "./action";
import { useRef } from "react";
import { baseURL } from "../../services/http";
import {  useParams } from "react-router-dom";

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
    return bolim ? { rektorat: rektoratId } : { fakultet_id: facultyId };
  };

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
      ? JSON.stringify({ ...obj, ...selectFunc() })
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
  };

  useEffect(() => {
    hasSelect ? dispatch(getOptions(selectUrl)) : null;
    dispatch(getDataById(url));
  }, [url]);

  useEffect(() => {
    setAbout({
      uz: dataById?.haqida_uz,
      ru: dataById?.haqida_ru,
      en: dataById?.haqida_en,
    });
    setAim({
      uz: dataById?.maqsad_uz,
      ru: dataById?.maqsad_ru,
      en: dataById?.maqsad_en,
    });
    setFacultyId(dataById?.fakultet_id);
    setRektoratId(dataById?.rektorat);
  }, [dataById]);

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

  const selectOptions1 = [
    { id: 'kafedra_id', value: "Kafedra", url: 'Kafedra_data/all', add: 'kafedra_hodim', },
    { id: 'markaz_id', value: "Markaz", url: 'markaz_data/all', add: 'markaz_hodim' },
    { id: 'bm_id', value: "Bo'lim", url: 'bm_data/all', add: 'bm_hodim' },
    { id: 'kafultet_id', value: "Fakultet", url: 'Fak_data/all', add: 'Fak_hodim' },
  ]
  const [ hodim, setHodim ] = useState({ id: 'kafedra_id', title: "Kafedra", url: 'kafedra_data/all', add: 'kafedra_hodim/add'})
  const [ hodimChildId, setHodimChildId ] = useState(undefined)

  const selectorFunc = (state) => state.form2;
  const { id } = useParams()
  const dispatch = useDispatch();
  const { dataById, loading, options, success, error, updated } =
  useSelector(selectorFunc);
  const { getOptions, getDataById } = new From2Actions();
  
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = (callback) => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    callback()
  };

  const imgRef = useRef()
  const [ image, setImage ] = useState(undefined)

  const handleChange = (value) => {
    const selectedOption = selectOptions1.find(option => option.value === value);
    setHodim(selectedOption);
  };

  const handleChildChange = (id) => {
    setHodimChildId(id)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('name_uz', e.target.name_uz.value);
    formData.append('name_ru', e.target.name_ru.value);
    formData.append('name_en', e.target.name_en.value);
    formData.append('job_uz', e.target.job_uz.value);
    formData.append('job_ru', e.target.job_ru.value);
    formData.append('job_en', e.target.job_en.value);
    formData.append('tell', e.target.tel.value);
    formData.append('email', e.target.email.value);
    imgRef.current.files[0] && formData.append('photo', imgRef.current.files[0]);
    // formData.append(hodim?.id, hodimChildId);

    fetch(`${baseURL}/${hodim?.add}/${id}`, {
      method: "PUT",
      headers: {
        Token: localStorage.getItem("token"),
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          openMessage(() => {
            setTimeout(() => {
              messageApi.open({
                key,
                type: 'error',
                content: res?.message,
                duration: 2,
              });
            }, 1000)
          })
        } else {
          openMessage(() => {
            setTimeout(() => {
              messageApi.open({
                key,
                type: 'success',
                content: res?.message,
                duration: 2,
              });
              setTimeout(() => {
                window.location.href = "/adminPanel/employees";
              }, 500)
            }, 1000)
          })
        }
      })
      .catch((err) => console.log(err));
  };

  console.log(options);

  useEffect(() => {
    dispatch(getOptions(hodim?.url));
    setHodimChildId(null)
  }, [hodim]);
  
  useEffect(() => {
    // setKafedraId(dataById?.kafedra_id)
    setImage(dataById?.photo)
  }, [dataById])

  // TODO - edit button bozilib yangi pageda getById bo'ladi va initialValuelar set bo'ladi
  // shu joyida birorta ham filedni o'zgartirmayt form submit qilinsa xato chiqaradi
  return (
    <div className="relative">
      { contextHolder }
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

          <label htmlFor="image" >
            <img width={300} height={300} src={baseURL + '/' + image} alt="" />
            Rasm yuklash <br />
            <input className="mb-16" type="file" accept="image/*"  id="image" multiple ref={imgRef} />
          </label>

          <Select
            defaultValue={hodim?.value}
            value={hodim?.value}
            style={{
              width: "100%",
            }}
            onChange={(value) => handleChange(value)}
            options={selectOptions1}
          />

          {
            options?.length ? <Select
                          value={hodimChildId}
                          style={{
                            width: "100%",
                          }}
                          onChange={handleChildChange}
                          options={options}
                        /> : null
          }

          <button
            type="submit"
            className="bg-blue-500 my-16 flex items-center justify-center w-full text-white py-2 font-bold"
          >
            Saqlash
          </button>
        </form>
      </Spin>
    </div>
  );
};

export const EmployeesAddForm = ({ hasSelect, selectUrl, url, bolim }) => {

  const selectOptions1 = [
    { id: 'kafedra_id', value: "Kafedra", url: 'Kafedra_data/all', add: 'kafedra_hodim/add', },
    { id: 'markaz_id', value: "Markaz", url: 'markaz_data/all', add: 'markaz_hodim/add' },
    { id: 'bm_id', value: "Bo'lim", url: 'bm_data/all', add: 'bm_hodim/add' },
    { id: 'fakultet_id', value: "Fakultet", url: 'Fak_data/all', add: 'Fak_hodim/add' },
  ]
  const [ hodim, setHodim ] = useState(null)
  const [ hodimChildId, setHodimChildId ] = useState(undefined)
  const selectorFunc = (state) => state.form2;
  const dispatch = useDispatch();
  const form2State = useSelector(selectorFunc);
  const { getOptions } = new From2Actions();

  console.log(form2State);

  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = (callback) => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    callback()
  };

  const handleChange = (value) => {
      const selectedOption = selectOptions1.find(option => option.value === value);
      setHodim(selectedOption);
  };

  const handleChildChange = (id) => {
    setHodimChildId(id)
  }

  const imgRef = useRef()


  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name_uz', e.target.name_uz.value);
    formData.append('name_ru', e.target.name_ru.value);
    formData.append('name_en', e.target.name_en.value);
    formData.append('job_uz', e.target.job_uz.value);
    formData.append('job_ru', e.target.job_ru.value);
    formData.append('job_en', e.target.job_en.value);
    formData.append('tell', e.target.tel.value);
    formData.append('email', e.target.email.value);
    formData.append('photo', imgRef.current.files[0]);
    formData.append(hodim?.id, hodimChildId);

    fetch(`${baseURL}/${hodim?.add}`, {
      method: "POST",
      headers: {
        Token: localStorage.getItem("token"),
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          openMessage(() => {
            setTimeout(() => {
              messageApi.open({
                key,
                type: 'loading',
                content: res?.message,
              });
            }, 1000)
          })
        } else {
          openMessage(() => {
            setTimeout(() => {
              messageApi.open({
                key,
                type: 'success',
                content: res?.message,
                duration: 2,
              });
              setTimeout(() => {
                window.location.href = "/adminPanel/employees";
              }, 500)
            }, 1000)
          })
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    hodim !== null && dispatch(getOptions(hodim?.url))
    setHodimChildId(null)
  }, [hodim?.url])


  return (
    <div className="relative">
      { contextHolder }
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
      <form onSubmit={handleSubmit} className="pb-10">
        {/* TITLES */}
        <div className="flex flex-col gap-1 mb-5">
          <label htmlFor="name_uz">F.I.Sh (UZ)</label>
          <input
            type="text"
            id="name_uz"
            name="name_uz"
          />
        </div>

        <div className="flex flex-col gap-1 mb-5">
          <label htmlFor="name_ru">F.I.Sh (RU)</label>
          <input
            type="text"
            id="name_ru"
            name="name_ru"
          />
        </div>

        <div className="flex flex-col gap-1 mb-5">
          <label htmlFor="name_en">F.I.Sh (EN)</label>
          <input
            type="text"
            id="name_en"
            name="name_en"
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
          />
        </div>

        <div className="flex flex-col gap-1 mb-5">
          <label htmlFor="job_ru">Lavozimi (RU)</label>
          <input
            type="text"
            id="job_ru"
            name="job_ru"
          />
        </div>

        <div className="flex flex-col gap-1 mb-5">
          <label htmlFor="job_en">Lavozimi (EN)</label>
          <input
            type="text"
            id="job_en"
            name="job_en"
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
          />
        </div>

        <div className="flex flex-col gap-1 mb-5">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
          />
        </div>

        {/* OTHERS */}

        <label htmlFor="image">
          Rasm yuklash <br />
          <input className="mb-16" accept="image/*" type="file" id="image" multiple ref={imgRef} />
        </label>

          <Select
            defaultValue={hodim?.value}
            value={hodim?.value}
            style={{
              width: "100%",
            }}
            onChange={(value) => handleChange(value)}
            options={selectOptions1}
          />

          {
            form2State?.options?.length ? <Select
                          value={hodimChildId}
                          style={{
                            width: "100%",
                          }}
                          onChange={handleChildChange}
                          options={form2State?.options}
                        /> : null
          }
        <br />

        <button
          type="submit"
          className="bg-blue-500 my-16 flex items-center justify-center w-full text-white py-2 font-bold"
        >
          Saqlash
        </button>
      </form>
    </div>
  );
};

export const LidershipEditForm = ({ hasSelect, selectUrl, url, bolim }) => {
  const selectorFunc = (state) => state.form2;
  const dispatch = useDispatch();
  const { id } = useParams()
  const { dataById, loading, success, error, updated } =
    useSelector(selectorFunc);
  const { getOptions, getDataById } = new From2Actions();

  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = (callback) => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    callback()
  };

  const imgRef = useRef()
  const [ image, setImage ] = useState(undefined)

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



  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('name_en', e.target.name_en.value);
    formData.append('name_uz', e.target.name_uz.value);
    formData.append('name_ru', e.target.name_ru.value);
    formData.append('address_en', e.target.address_en.value);
    formData.append('address_uz', e.target.address_uz.value);
    formData.append('address_ru', e.target.address_ru.value);
    formData.append('job_en', e.target.job_en.value);
    formData.append('job_uz', e.target.job_uz.value);
    formData.append('job_ru', e.target.job_ru.value);
    formData.append('link', e.target.link.value);
    formData.append('tel', e.target.tel.value);
    formData.append('asosiy_vazifa_en', asosiyVazifa?.en);
    formData.append('asosiy_vazifa_uz', asosiyVazifa?.uz);
    formData.append('asosiy_vazifa_ru', asosiyVazifa?.ru);
    formData.append('ilmiy_yonlaish_en', ilmiyYonalish?.en);
    formData.append('ilmiy_yonlaish_uz', ilmiyYonalish?.uz);
    formData.append('ilmiy_yonlaish_ru', ilmiyYonalish?.ru);
    formData.append('mehnat_faoliyat_en', mehnatFaoliyat?.en);
    formData.append('mehnat_faoliyat_uz', mehnatFaoliyat?.uz);
    formData.append('mehnat_faoliyat_ru', mehnatFaoliyat?.ru);
    formData.append('qisqacha_en', qisqacha?.en);
    formData.append('qisqacha_uz', qisqacha?.uz);
    formData.append('qisqacha_ru', qisqacha?.ru);
    imgRef.current.files[0] && formData.append('photo', imgRef.current.files[0]);




    fetch(`${baseURL}/rektorat/${id}`, {
      method: "PUT",
      headers: {
        Token: localStorage.getItem("token"),
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          openMessage(() => {
            setTimeout(() => {
              messageApi.open({
                key,
                type: 'loading',
                content: res?.message,
              });
            }, 1000)
          })
        } else {
          openMessage(() => {
            setTimeout(() => {
              messageApi.open({
                key,
                type: 'success',
                content: res?.message,
                duration: 2,
              });
              setTimeout(() => {
                window.location.href = "/adminPanel/lidership";
              }, 500)
            }, 1000)
          })
        }
      })
      .catch((err) => console.log(err));

  };

  useEffect(() => {
    hasSelect ? dispatch(getOptions(selectUrl)) : null;
    dispatch(getDataById(url));
  }, [url]);

  useEffect(() => {
    setImage(dataById?.photo)
  }, [dataById])

  useEffect(() => {
    setQisqacha({
      uz: dataById?.qisqacha_uz,
      ru: dataById?.qisqacha_ru,
      en: dataById?.qisqacha_en,
    });
    setAsosiyVazifa({
      uz: dataById?.asosiy_vazifa_uz,
      ru: dataById?.asosiy_vazifa_ru,
      en: dataById?.asosiy_vazifa_en,
    });
    setIlmiyYonalish({
      uz: dataById?.ilmiy_yonlaish_uz,
      ru: dataById?.ilmiy_yonlaish_ru,
      en: dataById?.ilmiy_yonlaish_en,
    });
    setMehnatFaoliyat({
      uz: dataById?.mehnat_faoliyat_uz,
      ru: dataById?.mehnat_faoliyat_ru,
      en: dataById?.mehnat_faoliyat_en,
    });
  }, [dataById]);

  // TODO - edit button bozilib yangi pageda getById bo'ladi va initialValuelar set bo'ladi
  // shu joyida birorta ham filedni o'zgartirmayt form submit qilinsa xato chiqaradi
  return (
    <div className="relative">
      { contextHolder }
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
            <label htmlFor="link">Email</label>
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
              onEditorChange={(e) =>
                setAsosiyVazifa({ ...asosiyVazifa, uz: e })
              }
            />
          </div>

          <div className="mt-10">
            <span>Asosiy Vazifa (RU)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.asosiy_vazifa_ru}
              onEditorChange={(e) =>
                setAsosiyVazifa({ ...asosiyVazifa, ru: e })
              }
            />
          </div>

          <div className="mt-10">
            <span>Asosiy Vazifa (EN)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.asosiy_vazifa_en}
              onEditorChange={(e) =>
                setAsosiyVazifa({ ...asosiyVazifa, en: e })
              }
            />
          </div>
          {/* ASOSIY VAZIFA */}

          {/* ILMIY */}
          <div className="mt-10">
            <span>Ilmiy yo'nalish (UZ)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.ilmiy_yonlaish_uz}
              onEditorChange={(e) =>
                setIlmiyYonalish({ ...ilmiyYonalish, uz: e })
              }
            />
          </div>

          <div className="mt-10">
            <span>Ilmiy yo'nalish (RU)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.ilmiy_yonlaish_ru}
              onEditorChange={(e) =>
                setIlmiyYonalish({ ...ilmiyYonalish, ru: e })
              }
            />
          </div>

          <div className="mt-10">
            <span>Ilmiy yo'nalish (EN)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.ilmiy_yonlaish_en}
              onEditorChange={(e) =>
                setIlmiyYonalish({ ...ilmiyYonalish, en: e })
              }
            />
          </div>
          {/* ILMIY */}

          {/* ILMIY */}
          <div className="mt-10">
            <span>Mehnat faoliyat (UZ)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.mehnat_faoliyat_uz}
              onEditorChange={(e) =>
                setMehnatFaoliyat({ ...mehnatFaoliyat, uz: e })
              }
            />
          </div>

          <div className="mt-10">
            <span>Mehnat faoliyat (RU)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.mehnat_faoliyat_ru}
              onEditorChange={(e) =>
                setMehnatFaoliyat({ ...mehnatFaoliyat, ru: e })
              }
            />
          </div>

          <div className="mt-10">
            <span>Mehnat faoliyat (EN)</span>
            <Editor
              init={editorInit}
              initialValue={dataById?.mehnat_faoliyat_en}
              onEditorChange={(e) =>
                setMehnatFaoliyat({ ...mehnatFaoliyat, en: e })
              }
            />
          </div>
          {/* AIM */}

          
          <label htmlFor="image" >
            <img width={300} height={300} src={baseURL + '/' + image} alt="" />
            Rasm yuklash <br />
            <input className="mb-16" type="file" accept="image/*"  id="image" multiple ref={imgRef} />
          </label>

          {/* SELECT FAKULTET */}
          {/* {hasSelect ? (
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
          ) : null} */}

          <button className="bg-blue-500 my-16 flex items-center justify-center w-full text-white py-2 font-bold">
            Saqlash
          </button>
        </form>
      </Spin>
    </div>
  );
};

export const LidershipAddForm = ({ hasSelect, selectUrl, url, bolim }) => {
  const selectorFunc = (state) => state.form2;
  const dispatch = useDispatch();
  const form2State = useSelector(selectorFunc);
  const imgRef = useRef()
  const { getOptions } = new From2Actions();

  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = (callback) => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    callback()
  };


  const [asosiyVazifa, setAsosiyVazifa] = useState({
    uz: "",
    ru: "",
    en: "",
  });

  const [ilmiyYonalish, setIlmiyYonalish] = useState({
    uz: "",
    ru: "",
    en: "",
  });

  const [mehnatFaoliyat, setMehnatFaoliyat] = useState({
    uz: "",
    ru: "",
    en: "",
  });

  const [qisqacha, setQisqacha] = useState({
    uz: "",
    ru: "",
    en: "",
  });

  const handleSubmit = (e) => {
    const formData = new FormData();

    Object.keys(e).forEach((i) => formData.append(i, e[i]));
    formData.append("qisqacha_uz", qisqacha?.uz);
    formData.append("qisqacha_ru", qisqacha?.ru);
    formData.append("qisqacha_en", qisqacha?.en);
    formData.append("mehnat_faoliyat_uz", mehnatFaoliyat?.uz);
    formData.append("mehnat_faoliyat_ru", mehnatFaoliyat?.ru);
    formData.append("mehnat_faoliyat_en", mehnatFaoliyat?.en);
    formData.append("ilmiy_yonlaish_uz", ilmiyYonalish?.uz);
    formData.append("ilmiy_yonlaish_ru", ilmiyYonalish?.ru);
    formData.append("ilmiy_yonlaish_en", ilmiyYonalish?.en);
    formData.append("asosiy_vazifa_uz", asosiyVazifa?.uz);
    formData.append("asosiy_vazifa_ru", asosiyVazifa?.ru);
    formData.append("asosiy_vazifa_en", asosiyVazifa?.en);
    formData.append("photo", imgRef.current.files[0]);




    fetch(`${baseURL}/rektorat/add`, {
      method: "POST",
      headers: {
        Token: localStorage.getItem("token"),
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          openMessage(() => {
            setTimeout(() => {
              messageApi.open({
                key,
                type: 'loading',
                content: res?.message,
              });
            }, 1000)
          })
        } else {
          openMessage(() => {
            setTimeout(() => {
              messageApi.open({
                key,
                type: 'success',
                content: res?.message,
                duration: 2,
              });
              setTimeout(() => {
                window.location.href = "/adminPanel/lidership";
              }, 500)
            }, 1000)
          })
        }
      })
      .catch((err) => console.log(err));

  };

  useEffect(() => {
    hasSelect ? dispatch(getOptions(selectUrl)) : null;
  }, []);

  return (
    <div className="relative">
      { contextHolder }
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
        {/* =----------- NAME ---------------= */}
        <Form.Item
          name="name_uz"
          label="Ismi (UZ)"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name_ru"
          label="Ismi (Ru)"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name_en"
          label="Ismi (En)"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        {/* =------------------- JOB -----------------= */}
        <Form.Item
          name="job_uz"
          label="Lavozimi (UZ)"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="job_ru"
          label="Lavozimi (Ru)"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="job_en"
          label="Lavozimi (En)"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        {/* =------------------- ADDRESS -----------------= */}
        <Form.Item
          name="address_uz"
          label="Ish vaqti (UZ)"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address_ru"
          label="Ish vaqti (Ru)"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address_en"
          label="Ish vaqti (En)"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        {/* =------------ EMAIL -----------------= */}
        <Form.Item name="link" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        {/* =------------ TEL -----------------= */}
        <Form.Item
          name="tel"
          label="Telefon raqami"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        {/* =-------------- QISQACHA ------------------= */}
        <TextEditor
          title={{
            uz: "Qisqacha (Uz)",
            ru: "Qisqacha (Ru)",
            en: "Qisqacha (En)",
          }}
          value={{
            uz: qisqacha.uz,
            ru: qisqacha.ru,
            en: qisqacha.en,
          }}
          handleValue={{
            uz: (e) => setQisqacha({ ...qisqacha, uz: e }),
            ru: (e) => setQisqacha({ ...qisqacha, ru: e }),
            en: (e) => setQisqacha({ ...qisqacha, en: e }),
          }}
        />

        {/* =-------------- ASOSIY VAZIFA ------------------= */}
        <TextEditor
          title={{
            uz: "Asosiy vazifa (Uz)",
            ru: "Asosiy vazifa (Ru)",
            en: "Asosiy vazifa (En)",
          }}
          value={{
            uz: asosiyVazifa.uz,
            ru: asosiyVazifa.ru,
            en: asosiyVazifa.en,
          }}
          handleValue={{
            uz: (e) => setAsosiyVazifa({ ...asosiyVazifa, uz: e }),
            ru: (e) => setAsosiyVazifa({ ...asosiyVazifa, ru: e }),
            en: (e) => setAsosiyVazifa({ ...asosiyVazifa, en: e }),
          }}
        />

        {/* =-------------- ILMIY YO'NALISH ------------------= */}
        <TextEditor
          title={{
            uz: "Ilmiy yo'nalish (Uz)",
            ru: "Ilmiy yo'nalish (Ru)",
            en: "Ilmiy yo'nalish (En)",
          }}
          value={{
            uz: ilmiyYonalish?.uz,
            ru: ilmiyYonalish?.ru,
            en: ilmiyYonalish?.en,
          }}
          handleValue={{
            uz: (e) => setIlmiyYonalish({ ...ilmiyYonalish, uz: e }),
            ru: (e) => setIlmiyYonalish({ ...ilmiyYonalish, ru: e }),
            en: (e) => setIlmiyYonalish({ ...ilmiyYonalish, en: e }),
          }}
        />

        {/* =------------ Mehnat faoliyat ----------------= */}
        <TextEditor
          title={{
            uz: "Mehnat faoliyat (Uz)",
            ru: "Mehnat faoliyat (Ru)",
            en: "Mehnat faoliyat (En)",
          }}
          value={{
            uz: mehnatFaoliyat?.uz,
            ru: mehnatFaoliyat?.ru,
            en: mehnatFaoliyat?.en,
          }}
          handleValue={{
            uz: (e) => setMehnatFaoliyat({ ...mehnatFaoliyat, uz: e }),
            ru: (e) => setMehnatFaoliyat({ ...mehnatFaoliyat, ru: e }),
            en: (e) => setMehnatFaoliyat({ ...mehnatFaoliyat, en: e }),
          }}
        />

        <label htmlFor="image">
          Rasm yuklash <br />
          <input type="file" accept="image/*" id="image" multiple ref={imgRef} />
        </label>

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

export const NewsEditForm = ({ hasSelect, selectUrl, url, bolim, id }) => {
  const selectorFunc = (state) => state.form2;
  const dispatch = useDispatch();
  const { dataById, loading, options, success, error, updated } =
    useSelector(selectorFunc);
  const { getOptions, putData, getDataById } = new From2Actions();

  const filterData = dataById?.filter((item) => item?._id === id);

  console.log(filterData);

  const [body, setBody] = useState({
    uz: filterData[0]?.body_uz,
    ru: filterData[0]?.body_ru,
    en: filterData[0]?.body_en,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      title_en: e.target.title_en.value,
      title_uz: e.target.title_uz.value,
      title_ru: e.target.title_ru.value,
      body_en: body?.en,
      body_uz: body?.uz,
      body_ru: body?.ru,
    };

    const body = JSON.stringify(obj);

    dispatch(putData(url, body));
    // console.log(JSON.parse(body));
  };

  // window.location.reload(false)
  useEffect(() => {
    dispatch(getDataById(url));
  }, [url]);

  useEffect(() => {
    setBody({
      uz: filterData[0]?.body_uz,
      ru: filterData[0]?.body_ru,
      en: filterData[0]?.body_en,
    });
  }, [dataById]);

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
            <label htmlFor="title_uz">F.I.Sh (UZ)</label>
            <input
              type="text"
              id="title_uz"
              name="title_uz"
              defaultValue={filterData[0]?.title_uz}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="title_ru">F.I.Sh (RU)</label>
            <input
              type="text"
              id="title_ru"
              name="title_ru"
              defaultValue={filterData[0]?.title_ru}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="title_en">F.I.Sh (EN)</label>
            <input
              type="text"
              id="title_en"
              name="title_en"
              defaultValue={filterData[0]?.title_en}
            />
          </div>
          {/* TITLES */}

          {/* BODY */}
          <div className="mt-10">
            <span> Body (UZ)</span>
            <Editor
              init={editorInit}
              initialValue={body?.uz}
              onEditorChange={(e) => setBody({ ...body, uz: e })}
            />
          </div>

          <div className="mt-10">
            <span>Body (RU)</span>
            <Editor
              init={editorInit}
              initialValue={body?.ru}
              onEditorChange={(e) => setBody({ ...body, ru: e })}
            />
          </div>

          <div className="mt-10">
            <span>Body (EN)</span>
            <Editor
              init={editorInit}
              initialValue={body?.en}
              onEditorChange={(e) => setBody({ ...body, en: e })}
            />
          </div>
          {/* BODY */}

          <button className="bg-blue-500 my-16 flex items-center justify-center w-full text-white py-2 font-bold">
            Saqlash
          </button>
        </form>
      </Spin>
    </div>
  );
};

export const ParentEditForm = ({ getUrl, postUrl, id, setModal }) => {
  const selectorFunc = (state) => state.form2;
  const dispatch = useDispatch();
  const { dataById, loading, options, success, error, updated } =
    useSelector(selectorFunc);
  const { getOptions, putData, getDataById } = new From2Actions();

  let filterData = [];

  try {
    filterData = dataById ? dataById?.filter((item) => item?._id === id) : [];
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

    dispatch(putData(postUrl, body));
  };

  useEffect(() => {
    dispatch(getDataById(getUrl));
  }, [getUrl]);

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
