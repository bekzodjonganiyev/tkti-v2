import { useState, useRef, useContext, useEffect } from "react";
import copy from "copy-to-clipboard";

import Button from "../../../components/admin/button/Button";
import FormHeader from "../../../components/admin/form_header/FormHeader";

import { Fetchers } from "../../../services/fetchRequests";
import { Context } from "../../../context";

import "./Media.css";

function FileDisplay({ file }) {
  const { globalUrl } = useContext(Context);
  const [copied, setCopied] = useState(false);
  const fileUrl = `${globalUrl}/${file.link}`;
  const imgUrl = file.link.split(".")[1];
  const isImg = imgUrl === "png" || imgUrl === "jpg";
  const handleCopy = () => {
    copy(fileUrl);
    setCopied(true);
  };

  const handleDelete = (id) => {
    fetch(`${globalUrl}/media/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          alert(res.message + "❌");
        } else {
          alert("Malumotlar o'chirildi");
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log(err);
        window.localStorage.setItem("token", "sss");
      });
  };
  setTimeout(() => {
    setCopied(false);
  }, 1000);

  return (
    <div className="show-media">
      <span>{file.name}</span>
      {isImg ? (
        <img
          src={`${globalUrl}/${file.link}`}
          alt={file.name}
          className="media-img"
        />
      ) : (
        <i className="fa fa-file" style={{ fontSize: "100px" }}></i>
      )}
      <div className="media-events hidden-events">
        <i onClick={handleCopy} className="fa fa-copy icon" title="Copy"></i>
        <i onClick={handleCopy} className="fa fa-edit icon" title="Edit"></i>
        <i
          onClick={() => handleDelete(file._id)}
          className="fa fa-trash icon"
          title="Delete"
        ></i>
      </div>
    </div>
  );
}

const Media = () => {
  const fileRef = useRef();
  const nameRef = useRef();
  const [type, setType] = useState("all");
  const [media, setMedia] = useState([]);
  let content = null;
  function addMedia(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("file", fileRef.current.files[0]);

    Fetchers.addData(`media/add`, formData, true).then((res) => {
      if (!res.success) {
        alert(res.message + " ❌");
      } else if (res.status === 498) {
      } else {
        alert("Malumotlar qo'shildi");
        window.location.reload(true);
      }
    });
  }

  function getMedia() {
    Fetchers.getData("media/all", true).then((data) => {
      if (!data.success) {
        alert(data.message + " ❌");
      } else {
        setMedia(data.data);
      }
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
      <div style={{ display: "flex", flexWrap: "wrap", gap: "50px" }}>
        {media?.length !== 0 && media?.map((i) => <FileDisplay file={i} key={i._id} />)}
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
