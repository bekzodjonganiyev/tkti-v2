import React, { useEffect, useState } from "react";
import TextEditor from "../text_editor/TextEditor";
import { Button, Form, Input, Select, Upload } from "antd";
export const EditForm = ({ childById, parents, putChild, loading }) => {
  console.log(childById);
  console.log(parents);
  // useEffect(() => {}, [])
 
  const [editor, setEditor] = useState({
    uz: "",
    ru: "",
    en: "",
  });

  useEffect(() => {
    setEditor({
      uz: childById?.body_uz,
      ru: childById?.body_ru,
      en: childById?.body_en,
    });
  }, []);
  console.log(editor)
  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <Form 
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
          <button type="submit">
            Saqlash
          </button>
        </Form>
      )}
    </div>
  );
};
