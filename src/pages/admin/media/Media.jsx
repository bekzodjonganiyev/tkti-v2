import { useState, useRef, useContext, useEffect } from "react";
import copy from "copy-to-clipboard";

import Button from "../../../components/admin/button/Button";
import FormHeader from "../../../components/admin/form_header/FormHeader";
import { Context } from "../../../context";

import "./Media.css";

function FileDisplay({ file }) {
  const { globalUrl } = useContext(Context);
  const [copied, setCopied] = useState(false);
  const fileUrl = `${globalUrl}/${file.link}`;
  const imgUrl = file.link.split(".")[1];
  const isImg = imgUrl === "png" || imgUrl === "jpg";
  console.log(isImg);
  const handleCopy = () => {
    copy(fileUrl);
    setCopied(true);
  };

  setTimeout(() => {
    setCopied(false)
  }, 2000);

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      width:"300px",
      alignItems:"center"
    }}>
      {isImg ? (
        <img src={`${globalUrl}/${file.link}`} alt={file.name} />
      ) : (
        <i className="fa fa-file" style={{fontSize:"100px"}}></i>
      )}

      <br />
      <button onClick={handleCopy}><i className="fa fa-copy"></i></button>
      {copied && <div>{fileUrl}</div>}
    </div>
  );
}

const Media = () => {
  const fileRef = useRef();
  const nameRef = useRef();
  const { globalUrl } = useContext(Context);
  const [type, setType] = useState("all");
  const [media, setMedia] = useState([]);
  let content = null;
  function addMedia(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("file", fileRef.current.files[0]);

    fetch(`${globalUrl}/media/add`, {
      method: "POST",
      headers: {
        Token: localStorage.getItem("token"),
      },
      body: formData,
    });
  }

  function getMedia() {
    fetch(`${globalUrl}/media/all`, {
      headers: {
        "Content-type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMedia(data.data);
      });
  }

  useEffect(() => {
    getMedia();
  }, []);
  content =
    type === "add" ? (
      <form onSubmit={addMedia} className="media-form">
        <div>
          <label htmlFor="forName">
            File nomini kiriting <br />
            <input type="text" id="forName" ref={nameRef} />
          </label>
        </div>
        <div>
          <label htmlFor="forFile">
            Fileni kiriting <br />
            <input type="file" id="forFile" ref={fileRef} />
          </label>
        </div>
        <Button name="Saqlash" />
      </form>
    ) : (
      <div style={{display:"flex", flexWrap:"wrap", gap:"50px"}}>
        {media.length !== 0 && media?.map((i) => <FileDisplay file={i} />)}
      </div>
    );
  return (
    <div className="media">
      <FormHeader
        title="Media"
        event1="Barchasi"
        handleEvent1={() => setType("all")}
        event2="Qo'shish"
        handleEvent2={() => setType("add")}
      />
      {content}
    </div>
  );
};

export default Media;
