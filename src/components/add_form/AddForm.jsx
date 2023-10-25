import { useState } from "react";
import TextEditor from "../text_editor/TextEditor";
import { Button, Form, Input, Select, Upload, Modal, DatePicker, message } from "antd";
import { UploadOutlined, MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { DeleteIcon } from "../../assets/icons";

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

const typesOfNews = [
  { value: "yangilik", label: "Yangilik" },
  { value: "elon", label: "Elon" },
  { value: "video", label: "Video galeriya" },
]

export const AddForm = ({ parents, postParent, loading, postChild, newsForm, ifCreateSuccessWhereTo, isBrm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [parentId, setParentId] = useState("");
  const [dateOfNew, setDateOfNew] = useState("");
  const [category, setCategory] = useState("");
  const [state, setState] = useState([]);

  const [editor, setEditor] = useState({
    uz: "",
    ru: "",
    en: "",
  });

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

  const submitChild = (value) => {
    const fmData = new FormData();
    fmData.append("title_uz", value.title_uz);
    fmData.append("title_ru", value.title_ru);
    fmData.append("title_en", value.title_en);
    fmData.append("body_uz", editor?.uz);
    fmData.append("body_ru", editor?.ru);
    fmData.append("body_en", editor?.en);


    value.file?.length > 0
      ? value.file.forEach((item) => {
        fmData.append(`${newsForm ? "photo" : "file"}`, item.originFileObj);
      })
      : null;
    value.faq?.length > 0
      ? fmData.append("faq", value.faq)
      : null;

    if (newsForm) {
      fmData.append("date", dateOfNew)
      fmData.append("category", category)
    } else {
      fmData.append("nameId", parentId)
    }

    postChild(fmData,
      (res) => {
        openMessage(() => {
          setTimeout(() => {
            messageApi.open({
              key,
              type: "success",
              content: res?.message,
            });
            setTimeout(() => {
              window.location.href = `/adminPanel/${ifCreateSuccessWhereTo}`
            }, 500)
          }, 1000);
        });
      },
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
    );
  };
  
  const submitParent = (value) => {
    value.icon = value.icon[0]?.originFileObj
    postParent(value);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onChange = (date, dateString) => {
    setDateOfNew(date.$d)
  };

  const handleChange = (value) => {
    setCategory(value);
  };
  return (
    <>
      {contextHolder}
      <Modal
        title="Parent qo'shish"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
        className="border-sky-950"
      >
        <Form className="pt-10" onFinish={submitParent}>
          <Form.Item name={"title_uz"}>
            <Input placeholder="Parent(UZ)" />
          </Form.Item>
          <Form.Item name={"title_ru"}>
            <Input placeholder="Parent(RU)" />
          </Form.Item>
          <Form.Item name={"title_en"}>
            <Input placeholder="Parent(EN)" />
          </Form.Item>
          {
            isBrm
              ? <>
                <Form.Item
                  name="icon"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Upload maxCount={1} name="logo" listType="picture">
                    <Button type="default" icon={<UploadOutlined className="text-2xl" />} className="bg-red-700 text-white text-lg h-12">Rasm yuklash</Button>
                  </Upload>
                </Form.Item>
                <Form.Item name={"color"}>
                  <Input placeholder="Yo'nalish rangi" />
                </Form.Item>
                <Form.Item name={"order"}>
                  <Input placeholder="Yo'nalish raqami" type="number" />
                </Form.Item>
              </>
              : null
          }
          <Form.Item>
            <Button
              className="bg-blue-600 text-white"
              htmlType="submit"
              style={{ width: "100%" }}
              loading={loading}
            >
              Saqlash769tgtu7
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Form
        onFinish={submitChild}
        style={{
          maxWidth: "100%",
          padding: "20px",
        }}
        className="my-8 mx-4"
        validateMessages={validateMessages}
      >
        <Form.Item
          name="title_uz"
          label="Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="title_ru"
          label="Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="title_en"
          label="Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <TextEditor
          title={{
            uz: "haqida batafsil UZB",
            ru: "haqida batafsil RUS",
            en: "haqida batafsil ING",
          }}
          value={{
            uz: editor.uz,
            ru: editor.ru,
            en: editor.en,
          }}
          handleValue={{
            uz: (e) => setEditor({ ...editor, uz: e }),
            ru: (e) => setEditor({ ...editor, ru: e }),
            en: (e) => setEditor({ ...editor, en: e }),
          }}
        />
        <hr />

        {
          newsForm
            ? <div className="flex gap-10 w-full">
              <Form.Item className="mt-10 w-10/12" >
                <Select
                  placeholder="Yangilikning turini tanlang"
                  options={typesOfNews}
                  onChange={handleChange}
                  allowClear
                />
              </Form.Item>
              <Form.Item className="mt-10 w-2/12" >
                <DatePicker onChange={onChange} className="w-full" />
              </Form.Item>
            </div>
            : <Form.Item className="my-8">
              <span className="text-lg">Bo'limni tanlang</span>
              <div className="flex items-center gap-10">
                <Select value={parentId} onChange={(e) => setParentId(e)} placeholder="Bo'limni tanlang">
                  {parents.map((item) => (
                    <Option key={item._id} value={item._id}>
                      {item.title_uz}
                    </Option>
                  ))}
                </Select>
                <Button
                  className="my-8 bg-blue-600 text-white"
                  onClick={() => setIsModalOpen(true)}
                >
                  + Bo'lim qo'shish
                </Button>
              </div>
            </Form.Item>
        }

        <Form.Item
          name="file"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload name="logo" listType="picture">
            <Button type=" " icon={<UploadOutlined className="text-2xl" />} className="bg-red-700 text-white text-lg h-12">Rasm yuklash</Button>
          </Upload>
        </Form.Item>

        <div className="mb-10">
          {state.map((item) => (
            <div
              className="flex justify-between items-center gap-10 mb-10"
              key={item}
            >
              <div className="flex flex-col gap-2 w-1/3">
                <input
                  placeholder="Savol uz"
                  className="form-control"
                  type="text"
                  name={`savol_uz${item}`}
                />
                <textarea
                  placeholder="Javob uz"
                  className="form-control"
                  name={`javob_uz${item}`}
                  cols="5"
                  rows="5"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2 w-1/3">
                <input
                  placeholder="Savol ru"
                  className="form-control"
                  type="text"
                  name={`savol_ru${item}`}
                />
                <textarea
                  placeholder="Javob ru"
                  className="form-control"
                  name={`javob_ru${item}`}
                  cols="5"
                  rows="5"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2 w-1/3">
                <input
                  placeholder="Savol en"
                  className="form-control"
                  type="text"
                  name={`savol_en${item}`}
                />
                <textarea
                  placeholder="Javob en"
                  className="form-control"
                  name={`javob_en${item}`}
                  cols="5"
                  rows="5"
                ></textarea>
              </div>
              <span
                className="cursor-pointer"
                onClick={() => {
                  const arr = state.filter((a) => a !== item);
                  setState(arr);
                }}
              >
                <DeleteIcon />
              </span>
            </div>
          ))}
          <div
            className="py-2 px-[22px] bg-red-800 text-white inline mt-10 cursor-pointer rounded-md"
            onClick={() => setState([...state, state.length + 1])}
          >
            Savol javob qo'shish
          </div>
        </div>

        <Form.Item>
          <Button block htmlType="submit" className="bg-blue-600 text-white h-8">
            <p className="h-10">Saqlash</p>
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};