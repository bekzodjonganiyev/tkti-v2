import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Popconfirm, Table } from "antd";
import { AddIcon, DeleteIcon, EditIcon, ViewIcon } from "../../../assets/icons";
import { slug } from  "../../../services/slug"
import { simplifyDateTime } from "../../../helpers";
import { baseURL } from "../../../services/http";
import { FaoliyatActions } from "./actions";

export const Faoliyat = () => {
  const dispatch = useDispatch();

  const { getData, deleteData } = new FaoliyatActions();
  const selectorFunc = (state) => state.faoliyat;
  const { data, loading, error } = useSelector(selectorFunc);

  useEffect(() => {
    dispatch(getData());
  }, []);

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
      title: "Qisqacha",
      dataIndex: "about",
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
          {/* <Link to={`/adminPanel/lidership/view/${slug(p?.name)}/${p?.id}`}>
            <ViewIcon />
          </Link> */}
          <Link to={`/adminPanel/faoliyat/edit/${p?.id}`}>
            <EditIcon />
          </Link>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => dispatch(deleteData(p?.id))}
            onCancel
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

  const dataSource = data?.map((item, id) => ({
    order: id + 1,
    name: item?.title_uz,
    date: item?.date,
    about: item?.about_uz,
    id: item?._id,
  }));

  return (
    <div>
      <Link to={"/adminPanel/faoliyat/add"} className="float-right ">
        <AddIcon />
      </Link>
      <Table
        columns={columns}
        dataSource={dataSource}
        size="large"
        loading={loading}
      />
    </div>
  );
};

export { faoliyatReducer } from "./reducers";
