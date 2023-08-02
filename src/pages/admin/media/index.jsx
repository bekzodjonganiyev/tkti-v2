import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Pagination, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import copy from "copy-to-clipboard";
import docsImg from "../../../assets/docs.png";

import { MediaActions } from "./action";
import { AddIcon } from "../../../assets/icons";
import { baseURL } from "../../../services/http";

export const Media = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.media);
  const { getData, postData } = new MediaActions();

  const [ totalItems, setTotalItems ] = useState(JSON.parse(sessionStorage.getItem('totalItems')))
  const [modalOpen, setModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    setCurrent(page);
  };

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const openMessage = (callback) => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    callback();
  };

  const submitForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    dispatch(
      postData(
        formData,
        // =---------- Success bo'lgandagi callback fuksiya -----------------=
        (res) => {
          setRefresh(!refresh);
          openMessage(() => {
            setTimeout(() => {
              messageApi.open({
                key,
                type: "success",
                content: res?.message,
              });
            }, 1000);
          });
          setModalOpen(false);
        },
        // =---------- / Success bo'lgandagi callback fuksiya /  -----------------=

        // =-------------- Error bo'lgandagi callback fuksiya -------------------=
        (res) => {
          openMessage(() => {
            setTimeout(() => {
              messageApi.open({
                key,
                type: "error",
                content: res?.message,
              });
            }, 1000);
          });
          setModalOpen(false);
        }
      )
    );
    // =-------------- / Error bo'lgandagi callback fuksiya / -------------------=
  };
  useEffect(() => {
    dispatch(getData(current));
  }, [refresh, current]);


  useEffect(() => {
    setTotalItems(JSON.parse(sessionStorage.getItem('totalItems')))
    !totalItems && window.location.reload()
  }, [])
  return (
    <div>
      {contextHolder}
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
      <div className="w-full flex justify-end">
        <Pagination
          current={current}
          onChange={onChange}
          total={totalItems}
          pageSize={10}
          // totalItems={1000}
          // totalPage={totalPage}
        />
      </div>
    </div>
  );
};


function FileDisplay({ file }) {
  const fileExtension = file?.link?.split(".").pop().toLowerCase();
  const isImage = ["png", "jpg", "jpeg", "gif", "svg"].includes(fileExtension);

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.media);
  const { deleteData } = new MediaActions();

  return (
    <div className="">
      {loading ? (
        <LoadingOutlined spin />
      ) : (
        <LazyLoadImage
          src={isImage ? `${baseURL}/${file?.link}` : docsImg}
          alt={file?.name}
          className="h-[400px] w-[300px]"
          effect="black-and-white"
        />
      )}
      <p className="bg-gray-100 p-2">{file?.name}</p>
      <div className="flex justify-between w-full">
        <button
          className="py-2 px-4 bg-green-500 hover:bg-green-400 text-white text-sm"
          onClick={() => {
            copy(`${baseURL}/${file?.link}`);
            alert("COPIED✔" + `${baseURL}/${file?.link}`);
          }}
        >
          Copy the link
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

export { mediaReducer } from "./reducer";
