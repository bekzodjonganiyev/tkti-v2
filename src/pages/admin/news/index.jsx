import { useEffect, useState } from "react";
import { Popconfirm, Table, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AddIcon, DeleteIcon, EditIcon } from "../../../assets/icons";
import { NewsActions } from "./actions";
import { simplifyDateTime } from "../../../helpers";

export const News = () => {
  const dispatch = useDispatch();
  const { getData, getDataById, postData, updateData, deleteData } = new NewsActions();
  const selectorFunc = (state) => state.news;
  const { data, dataById, loading, error } = useSelector(selectorFunc);

  const [category, setCategory] = useState("yangilik")

  const columns = [
    {
      title: "T/r",
      dataIndex: "order",
    },
    {
      title: "Nomi",
      dataIndex: "name",
    },
    {
      title: "Sana",
      dataIndex: 'date',
      render: (_, p) => (
        <span>{simplifyDateTime(p?.date)}</span>
      )
    },
    {
      dataIndex: "icon",
      render: (_, p) => (
        <div className="flex gap-4">
          <Link to={"#"}>
            <EditIcon />
          </Link>
          <Popconfirm
            title="O'chirishni xoxlaysizmi?"
            description="Malumot o'chiriladi va uni tiklab bo'lmaydi"
            onConfirm={() => dispatch(deleteData(p.id))}
            onCancel={() => {}}
            okText="Yes"
            cancelText="No"
            okButtonProps={{ style: { background: "red" } }}
          >
            <button type="link">
              <DeleteIcon />
            </button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const dataSource = data.map((item, id) => ({
    order: id + 1,
    name: item.title_uz,
    date: item?.date,
    id: item._id,
  }));

  const typesOfNews = [
    { value: "yangilik", label: "Yangilik" },
    { value: "elon", label: "Elon" },
    { value: "video", label: "Video galeriya" },
  ];

  useEffect(() => {
    dispatch(getData(category));
  }, [category]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <Select options={typesOfNews} className="w-72" placeholder="Yangilikni turi" allowClear onChange={(value) => setCategory(value)}/>
        <Link to={"/adminPanel/news/add"} className="float-right my-2">
          <AddIcon />
        </Link>
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        size="large"
        loading={loading}
      />
    </div>
  );
};

export { newsReducer } from "./reducer";
