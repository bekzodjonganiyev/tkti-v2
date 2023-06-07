import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Pagination, message, Button, Space, Upload } from "antd";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import copy from "copy-to-clipboard";

import { MediaActions } from "./action";
import { AddIcon } from "../../../assets/icons";
import { useState } from "react";

export { mediaReducer } from "./reducer";
export const Media = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.media);
  const { getData, postData, deleteData } = new MediaActions();

  const [modalOpen, setModalOpen] = useState(false);
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    setCurrent(page);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    dispatch(postData(formData));
  };
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div>
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={() => setModalOpen(true)}
        footer={[]}
      >
        <form onSubmit={submitForm} className="pt-10">
          <h1 className="text-xl font-bold text-center mb-5">
            Media fayl yuklash
          </h1>
          <div className="flex flex-col mb-5">
            <label htmlFor="name">Media fayl uchun nom</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="link">Media fayl uchun nom</label>
            <input type="file" name="file" id="link" multiple />
          </div>

          <button
            className="w-full py-2 px-4 rounded-sm bg-[#063F58] text-white mt-10 font-bold"
            disabled={loading}
          >
            {loading ? "Loading..." : "Saqlash"}
          </button>
        </form>
      </Modal>
      <button className="float-right" onClick={() => setModalOpen(true)}>
        <AddIcon />
      </button>
      <br /> <br /> <br />
      <div className="grid grid-cols-4 gap-10">
        {data?.map((item) => (
          <FileDisplay file={item} key={item?._id} />
        ))}
      </div>
      {/* <Pagination
        current={current}
        onChange={onChange}
        total={Number(data.length)}
      /> */}
    </div>
  );
};

function FileDisplay({ file }) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.media);
  const { deleteData } = new MediaActions();
  const imgPrefix = "https://tkti-backend-g6pbz.ondigitalocean.app/";
  return (
    <div className="">
      {loading ? (
        <LoadingOutlined spin />
      ) : (
        <LazyLoadImage
          src={imgPrefix + file?.link}
          alt={file?.name}
          className="h-[400px] w-[300px]"
          effect="opacity"
        />
      )}
      <p className="bg-gray-100 p-2">{file?.name}</p>
      <div className="flex justify-between w-full">
        <button
          className="py-2 px-4 bg-green-500 hover:bg-green-400 text-white text-sm"
          onClick={() => {
            copy(imgPrefix + file?.link);
            alert("COPIED✔" + imgPrefix + file?.link);
          }}
        >
          Move the link
        </button>{" "}
        <button
          className="py-2 px-4 bg-red-500  hover:bg-red-400 text-white text-sm"
          onClick={() => {
            const deleteConfirm = confirm("O'chirishni xoxlaysizmi? ⚡");
            deleteConfirm && dispatch(deleteData(file?._id));
          }}
        >
          {loading ? "Loading..." : "O'chirish"}
        </button>
      </div>
      <br />
    </div>
  );
}
