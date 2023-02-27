import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import TextEditor from "../../../components/admin/text_editor/TextEditor";
import "./XalqaroAloqa.css";

const ToDoList = () => {
  const [sections, setSections] = useState([]);
  const [id, setId] = useState();
  const [titleUz, setTitleUz] = useState();
  const [titleRu, setTitleRu] = useState();
  const [titleEn, setTitleEn] = useState();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: id,
      title_uz: titleUz,
      title_en: titleRu,
      title_ru: titleEn,
    };
    (titleUz || titleRu || titleEn) && setSections([...sections, newTodo]);
    console.log(sections);
    setId("");
    setTitleUz("");
    setTitleRu("");
    setTitleEn("");
  };

  const removeTask = (index) => {
    const newTasks = [...sections];
    newTasks.splice(index, 1);
    setSections(newTasks);
  };

  return (
    <div className="w-100">
      <form onSubmit={handleSubmit} className="form-control form__section">
        <input
          type="text"
          name="id"
          value={id}
          placeholder="Enter a title for this task…"
          onChange={(e) => setId(e.target.value)}
          className="form-control "
        />

        <Editor
          value={titleUz}
          onEditorChange={(e) => {
            setTitleUz(e);
          }}
          init={editorInit}
        />
        <Editor
          value={titleRu}
          onEditorChange={(e) => {
            setTitleRu(e);
          }}
          init={editorInit}
        />
        <Editor
          value={titleEn}
          onEditorChange={(e) => {
            setTitleEn(e);
          }}
          init={editorInit}
        />

        <button type="submit" className="form-control">
          <i class="fas fa-plus"></i>
        </button>
      </form>
      {sections.map((task, index) => (
        <div className="todo" key={index}>
          <div className="d-flex gap-5">
            <div>{task.id}</div>
            <div dangerouslySetInnerHTML={{ __html: task.title_uz }} />
            <button onClick={() => removeTask(index)}>
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const XalqaroAloqa = () => {
  const [bolim, setBolim] = useState(true);
  return (
    <div className="container">
      <div className="bolim-wrapper">
        <div className="w-30">
          <input
            onChange={() => setBolim(!bolim)}
            type="checkbox"
            class="form-check-input"
            id="exampleInputEmail1"
          />
          <label for="exampleInputEmail1" class="form-label">
            Malumotni bo'limlardan iborat
          </label>
        </div>
        {bolim && <ToDoList />}
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"></label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

export default XalqaroAloqa;
