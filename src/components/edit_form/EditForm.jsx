import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Form, Input, message, Select, Upload } from "antd";

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

export const EditForm = ({
  childById,
  parents,
  putChild,
  loading,
}) => {
  const [editorUz, setEditorUz] = useState("");
  const [editorRu, setEditorRu] = useState("");
  const [editorEn, setEditorEn] = useState("");
  const [parentId, setParentId] = useState("");

  const submitChild = (value) => {
    const fmData = new FormData();
    fmData.append("title_uz", value.title_uz);
    fmData.append("title_ru", value.title_ru);
    fmData.append("title_en", value.title_en);
    fmData.append("body_uz", editorUz);
    fmData.append("body_ru", editorRu);
    fmData.append("body_en", editorEn);
    fmData.append("nameId", parentId);

    console.log(value)

    // value.file?.length > 0
    //   ? value.file.forEach((item) => {
    //       fmData.append("file", item.originFileObj);
    //     })
    //   : null;
    // value.faq?.length > 0
    //   ? fmData.append("faq", JSON.stringify(value.faq))
    //   : null;
    for (var pair of fmData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }

    putChild(fmData);
  };

  useEffect(() => {
    if (childById) {
      setEditorUz(childById.body_uz);
      setEditorRu(childById.body_ru);
      setEditorEn(childById.body_en);
    }
  }, [childById]);

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <Form
          onFinish={submitChild}
          initialValues={{
            title_uz: childById?.title_uz,
            title_ru: childById?.title_ru,
            title_en: childById?.title_en,
          }}
        >
          <label>User Name</label>
          <Form.Item name="title_uz">
            <Input />
          </Form.Item>
          <Form.Item name="title_ru">
            <Input />
          </Form.Item>
          <Form.Item name="title_en">
            <Input />
          </Form.Item>
          <span>Batafsi malumot (UZ)</span>
          <Editor
            init={editorInit}
            value={editorUz}
            onEditorChange={(e) => setEditorUz(e)}
          />
          <br /> <br />
          <span>Batafsi malumot (RU)</span>
          <Editor
            init={editorInit}
            value={editorRu}
            onEditorChange={(e) => setEditorRu(e)}
          />
          <br /> <br />
          <span>Batafsi malumot (EN)</span>
          <Editor
            init={editorInit}
            value={editorEn}
            onEditorChange={(e) => setEditorEn(e)}
          />
          <Form.Item className="my-8">
            <span>Bo'lini tanlang</span>
            <Select
              allowClear
              placeholder="Bo'limni tanlang"
              value={parentId}
              onChange={(e) => setParentId(e)}
            >
              {parents.map((item) => (
                <Option key={item._id} value={item._id}>
                  {item.title_uz}
                </Option>
              ))}
            </Select>{" "}
          </Form.Item>
          {/* <Form.List name="faq" className="my-8" initialValue={childById?.faq}>
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
          </Form.List> */}
          <Button htmlType="submit" type=" " className="bg-rose-300">
            Saqlash
          </Button>
        </Form>
      )}
    </div>
  );
};
