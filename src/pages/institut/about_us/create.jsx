import React from "react";
import { useDispatch } from "react-redux";

import { AboutUsActions } from "./actions";

export const AboutUsCreate = ({ defaultValues }) => {
  const { postData, updateData } = new AboutUsActions();

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

    const fmData = new FormData();
    fmData.append("title_uz", e.target.title_uz.value);
    fmData.append("title_ru", e.target.title_ru.value);
    fmData.append("title_en", e.target.title_en.value);

    fmData.append("body_uz", e.target.body_uz.value);
    fmData.append("body_ru", e.target.body_ru.value);
    fmData.append("body_en", e.target.body_en.value);

    fmData.append("date", e.target.date.value);
    fmData.append("photo", e.target.photo.files[0]);

    defaultValues
      ? dispatch(updateData(defaultValues._id, fmData))
      : dispatch(postData(fmData))
  };
  return (
    <div>
      <h1>Elon qo'shish</h1>
      <form
        action=""
        className="w-[500px] flex flex-col gap-2"
        onSubmit={submitForm}
      >
        <input
          type="text"
          name="title_uz"
          defaultValue={defaultValues ? defaultValues.title_uz : ""}
        />
        <input
          type="text"
          name="title_ru"
          defaultValue={defaultValues ? defaultValues.title_ru : ""}
        />
        <input
          type="text"
          name="title_en"
          defaultValue={defaultValues ? defaultValues.title_en : ""}
        />

        <input
          type="text"
          name="body_uz"
          defaultValue={defaultValues ? defaultValues.body_uz : ""}
        />
        <input
          type="text"
          name="body_ru"
          defaultValue={defaultValues ? defaultValues.body_ru : ""}
        />
        <input
          type="text"
          name="body_en"
          defaultValue={defaultValues ? defaultValues.body_en : ""}
        />

        <input type="date" name="date" defaultValue={defaultValues ? defaultValues.date : ""}  />
        <input type="file" name="photo" />

        <button className="p-1 bg-indigo-400">Submit</button>
      </form>
    </div>
  );
};
