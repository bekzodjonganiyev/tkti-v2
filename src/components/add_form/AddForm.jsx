import { useState } from "react";
import TextEditor from "../text_editor/TextEditor";
import { Button, Form, Input, Select, Upload, Modal } from "antd";
import {
  UploadOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

/* eslint-disable no-template-curly-in-string */
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
/* eslint-enable no-template-curly-in-string */

export const AddForm = ({ parents, postParent, loading, postChild }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [parentId, setParentId] = useState("");

  const [editor, setEditor] = useState({
    uz: "",
    ru: "",
    en: "",
  });
  const submitChild = (value) => {
    
    const fmData = new FormData();
    fmData.append("title_uz", value.title_uz);
    fmData.append("title_ru", value.title_ru);
    fmData.append("title_en", value.title_en);
    fmData.append("body_uz", editor?.uz);
    fmData.append("body_ru", editor?.ru);
    fmData.append("body_en", editor?.en);
    fmData.append("nameId", parentId);

    value.file?.length > 0
      ? value.file.forEach((item) => {
          fmData.append("file", item.originFileObj);
        })
      : null;
    value.faq?.length > 0
      ? fmData.append("faq", JSON.stringify(value.faq))
      : null;

    postChild(fmData);
  };
  const submitParent = (value) => {
    postParent(value);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <>
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
          rules={[{ required: true}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="title_ru"
          label="Name"
          rules={[{ required: true}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="title_en"
          label="Name"
          rules={[{ required: true}]}
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

        <Form.Item label="Qo'shish" className="my-8">
          <Select value={parentId} onChange={(e) => setParentId(e)}>
            {parents.map((item) => (
              <Option key={item._id} value={item._id}>
                {item.title_uz}
              </Option>
            ))}
          </Select>{" "}
          <Button
            className="my-8 bg-blue-600 text-white"
            onClick={() => setIsModalOpen(true)}
          >
            + Bo'lim qo'shish
          </Button>
        </Form.Item>
        <Form.Item
          name="file"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload name="logo" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.List name="faq" className="my-8">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div key={key}>
                  <div className="w-full flex justify-between">
                    <Form.Item
                      {...restField}
                      name={[name, "question_uz"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing first name",
                        },
                      ]}
                      className="w-[40%]"
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "answer_uz"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing last name",
                        },
                      ]}
                      className="w-[40%]"
                    >
                      <Input.TextArea placeholder="Last Name" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </div>
                  <div className="w-full flex justify-between">
                    <Form.Item
                      {...restField}
                      name={[name, "question_ru"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing first name",
                        },
                      ]}
                      className="w-[40%]"
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "answer_ru"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing last name",
                        },
                      ]}
                      className="w-[40%]"
                    >
                      <Input.TextArea placeholder="Last Name" />
                    </Form.Item>
                    <span></span>
                  </div>
                  <div className="w-full flex justify-between">
                    <Form.Item
                      {...restField}
                      name={[name, "question_en"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing first name",
                        },
                      ]}
                      className="w-[40%]"
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "answer_en"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing last name",
                        },
                      ]}
                      className="w-[40%]"
                    >
                      <Input.TextArea placeholder="Last Name" />
                    </Form.Item>
                    <span></span>
                  </div>
                </div>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  className="bg-blue-600 text-white"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Accardion qo'shish
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button htmlType="submit" className="bg-blue-600 text-white">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
