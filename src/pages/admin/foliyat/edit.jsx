import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { From2Actions } from "../../../components/form_comp2/action";
import { useEffect, useState } from "react";
import { Spin, message } from "antd";
import { Editor } from "@tinymce/tinymce-react";

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

export const FaoliyatEdit = () => {
  const selectorFunc = (state) => state.form2;
  const dispatch = useDispatch();
  const { id } = useParams();
  const { dataById, loading } = useSelector(selectorFunc);
  const { getDataById, putData } = new From2Actions();
  const [refresh, setRefresh] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const openMessage = (callback) => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    callback();
  };

  const [qisqacha, setQisqacha] = useState({
    uz: dataById?.about_uz,
    ru: dataById?.about_ru,
    en: dataById?.about_en,
  });

  const [title, setTitle] = useState({
    uz: dataById?.title_uz,
    ru: dataById?.title_ru,
    en: dataById?.title_en,
  });

  console.log(dataById);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      title_uz: title?.uz,
      title_ru: title?.ru,
      title_en: title?.en,
      about_en: qisqacha?.en,
      about_ru: qisqacha?.ru,
      about_uz: qisqacha?.uz,
    };

    const endpointData = JSON.stringify(obj);

    // fetch(`${baseURL}/faoliyat/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     Token: localStorage.getItem("token"),
    //   },
    //   body: endpointData,
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (!res.success) {
    //       openMessage(() => {
    //         setTimeout(() => {
    //           messageApi.open({
    //             key,
    //             type: "error",
    //             content: res?.message,
    //           });
    //         }, 1000);
    //       });
    //     } else {
    //       openMessage(() => {
    //         setTimeout(() => {
    //           messageApi.open({
    //             key,
    //             type: "success",
    //             content: res?.message,
    //             duration: 2,
    //           });
    //           setTimeout(() => {
    //             window.location.href = "/adminPanel/faoliyat";
    //           }, 500);
    //         }, 1000);
    //       });
    //     }
    //   })
    //   .catch((err) => console.log(err));
    dispatch(
      putData(
        `/faoliyat/${id}`,
        endpointData,
        // =------------- SUCCESS CALLBACK ---------------------=
        (res) => {
          openMessage(() => {
            setTimeout(() => {
              messageApi.open({
                key,
                type: "success",
                content: res?.message,
              });
              setTimeout(() => {
                window.location.href = "/adminPanel/faoliyat";
              }, 500);
            }, 1000);
          });
        },
        // =------------------ ERROR CALLBACK ------------------=
        (res) => {
          openMessage(() => {
            setTimeout(() => {
              messageApi.open({
                key,
                type: "error",
                content: res?.message,
              });
            }, 1000);
          });
        }
      )
    );
    setRefresh(!refresh);
  };

  useEffect(() => {
    dispatch(getDataById(`faoliyat/${id}`));
  }, [refresh, id]);

  useEffect(() => {
    setQisqacha({
      uz: dataById?.about_uz,
      ru: dataById?.about_ru,
      en: dataById?.about_en,
    });

    setTitle({
      uz: dataById?.title_uz,
      ru: dataById?.title_ru,
      en: dataById?.title_en,
    });
  }, [dataById]);

  return (
    <div className="relative">
      {contextHolder}
      <Spin spinning={loading}>
        <form onSubmit={handleSubmit} className="pb-10">
          {/* TITLES */}
          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="title_uz">Nomi (UZ)</label>
            <input
              type="text"
              id="title_uz"
              name="title_uz"
              value={title?.uz}
              onChange={(e) => setTitle({ ...title, uz: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="title_ru">Nomi (RU)</label>
            <input
              type="text"
              id="title_ru"
              name="title_ru"
              value={title?.ru}
              onChange={(e) => setTitle({ ...title, ru: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="title_en">Nomi (EN)</label>
            <input
              type="text"
              id="title_en"
              name="title_en"
              value={title?.en}
              onChange={(e) => setTitle({ ...title, en: e.target.value })}
            />
          </div>
          {/* TITLES */}

          {/* QISQACHA */}
          <div className="mt-10">
            <span> Qisqacha (UZ)</span>
            <Editor
              init={editorInit}
              initialValue={qisqacha?.uz}
              onEditorChange={(e) => setQisqacha({ ...qisqacha, uz: e })}
            />
          </div>

          <div className="mt-10">
            <span>Qisqacha (RU)</span>
            <Editor
              init={editorInit}
              initialValue={qisqacha?.ru}
              onEditorChange={(e) => setQisqacha({ ...qisqacha, ru: e })}
            />
          </div>

          <div className="mt-10">
            <span>Qisqacha (EN)</span>
            <Editor
              init={editorInit}
              initialValue={qisqacha?.en}
              onEditorChange={(e) => setQisqacha({ ...qisqacha, en: e })}
            />
          </div>
          {/* QISQACHA */}

          <button className="bg-blue-500 my-16 flex items-center justify-center w-full text-white py-2 font-bold">
            Saqlash
          </button>
        </form>
      </Spin>
    </div>
  );
};