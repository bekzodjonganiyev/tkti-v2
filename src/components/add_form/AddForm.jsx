import { Button, Form, Input, Select, Upload, Modal } from "antd";
import {
  UploadOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useState } from "react";

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

  const submitChild = (values) => {
    const fmData = new FormData();
    fmData.append("title_uz", values.title_uz);
    fmData.append("title_ru", values.title_ru);
    fmData.append("title_en", values.title_en);
    fmData.append("body_uz", values.body_uz);
    fmData.append("body_ru", values.body_ru);
    fmData.append("body_en", values.body_en);
    fmData.append("nameId", parentId);

    values.file?.length > 0 ? values.file.forEach((item) => { fmData.append("file", item.originFileObj) }) : null;
    values.faq?.length > 0 ? fmData.append("faq", JSON.stringify(values.faq)) : null;

    postChild(fmData);
  };
  const submitParent = (values) => {
    postParent(values);
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
              htmlType="submit"
              style={{ width: "100%" }}
              loading={loading}
            >
              Saqlash
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
        validateMessages={validateMessages}
      >
        <Form.Item
          name="title_uz"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="title_ru"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="title_en"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="body_uz" label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="body_ru" label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="body_en" label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Select">
          <Select value={parentId} onChange={(e) => setParentId(e)}>
            {parents.map((item) => (
              <Option key={item._id} value={item._id}>
                {item.title_uz}
              </Option>
            ))}
          </Select>{" "}
          <Button onClick={() => setIsModalOpen(true)}>+</Button>
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
        <Form.List name="faq">
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
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};
