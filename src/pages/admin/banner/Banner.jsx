import React, { useContext, useRef } from "react";

import "./Banner.css";

import Button from "../../../components/admin/button/Button";
import { Context } from "../../../context";

const Banner = () => {
  const inputRef = useRef();
  const imageRef = useRef();
  const { globalUrl } = useContext(Context);

  function addBanner(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", inputRef.current.value);
    formdata.append("banner_img", imageRef.current.files[0]);

    console.log(formdata);

    fetch(`${globalUrl}/banner/add`, {
      method: "POST",
      headers: {
        Token: localStorage.getItem("token"),
      },
      body: formdata,
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          alert(res.message + " ❌");
        } else {
          alert(res.message);
          window.location.reload(true);
        }
      });
  }

  return (
    <form encType="multipart/formdata" onSubmit={addBanner}>
      <div>
        <label htmlFor="fortitle">
          <input type="text" id="fortitle" name="title" ref={inputRef} />
        </label>
      </div>

      <div>
        <label htmlFor="forimage">
          <input type="file" id="forimage" name="banner_img" ref={imageRef} />
        </label>
      </div>

      <Button name="Sqalash" />
    </form>
  );
};

export default Banner;
