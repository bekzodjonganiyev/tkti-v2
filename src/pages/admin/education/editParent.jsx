import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EducationParentActions } from "./actions";


export const EducationParentEdit = ({ parentId }) => {
  const dispatch = useDispatch();

  const selectorFuncParent = (state) => state.educationParent;
  const selectorFuncChild = (state) => state.educationChild;

  const parentState = useSelector(selectorFuncParent);
  const childState = useSelector(selectorFuncChild);

  const parentAction = new EducationParentActions();

  useEffect(() => {
    dispatch(parentAction.getData());
  }, [parentId]);

  return (
    <div>
      <ParentEditForm
        childById={childState?.dataById}
        parents={parentState?.data?.filter((item) => item?._id === parentId)}
        putChild={(e) => {
          dispatch(parentAction.updateData(parentId, e));
        }}
        loading={parentState?.loading}
      />
    </div>
  );
};


export const ParentEditForm = ({ childById, parents, putChild, loading }) => {
    const [editorUz, setEditorUz] = useState("");
    const [editorRu, setEditorRu] = useState("");
    const [editorEn, setEditorEn] = useState("");
    const [state, setState] = useState([]);

    console.log(parents);

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
      toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | codesample code",
    };
  
    const submit = (e) => {
      e.preventDefault();
  
      const fmData = new FormData();
      fmData.append("title_uz", e.target.title_uz.value);
      fmData.append("title_ru", e.target.title_ru.value);
      fmData.append("title_en", e.target.title_en.value);
  
      putChild(fmData);
    };
  
    const func = (e) => {
      e.preventDefault();
      state.forEach((a) =>
        console.log(
          `${a}) ${e.target[`savol_uz${a}`].value} - ${
            e.target[`javob_uz${a}`].value
          }`
        )
      );
    };
  
    return (
      <div>
        {loading ? (
          "Loading"
        ) : (
          <>
            <form onSubmit={submit} className="pb-10">
              <div className="flex flex-col gap-1 mb-5">
                <label htmlFor="title_uz">Sarlavha (UZ)</label>
                <input
                  type="text"
                  id="title_uz"
                  name="title_uz"
                  defaultValue={parents[0]?.title_uz}
                />
              </div>
              <div className="flex flex-col gap-1 mb-5">
                <label htmlFor="title_ru">Sarlavha (RU)</label>
                <input
                  type="text"
                  id="title_ru"
                  name="title_ru"
                  defaultValue={parents[0]?.title_ru}
                />
              </div>
              <div className="flex flex-col gap-1 mb-5">
                <label htmlFor="title_en">Sarlavha (EN)</label>
                <input
                  type="text"
                  id="title_en"
                  name="title_en"
                  defaultValue={parents[0]?.title_en}
                />
              </div>
              <button className="bg-blue-500 flex items-center justify-center w-full text-white py-2 font-bold">
                Saqlash
              </button>
            </form>
          </>
        )}
      </div>
    );
  };
  
