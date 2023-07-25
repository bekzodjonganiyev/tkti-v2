import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Popconfirm, Table } from "antd";

import { AddIcon, DeleteIcon, EditIcon, ViewIcon } from "../../../assets/icons";
import { LidershipParentActions } from "./actions";
import { slug } from  "../../../services/slug"
import { simplifyDateTime } from "../../../helpers";

export const Lidership = () => {
  const dispatch = useDispatch();

  const { getData, deleteData } = new LidershipParentActions();
  const selectorFunc = (state) => state.lidershipParent;
  const { data, dataById, loading, error } = useSelector(selectorFunc);

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
      title: "Lavozimi",
      dataIndex: "job",
    },
    {
      title: "Tel",
      dataIndex: "tel"
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
          <Link to={`/adminPanel/lidership/edit/${slug(p?.name)}/${p?.id}`}>
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

  const dataSource = data.map((item, id) => ({
    order: id + 1,
    name: item?.name_uz,
    job: item?.job_uz,
    date: item?.date,
    tel: item?.tel,
    id: item?._id,
  }));

  return (
    <div>
      <Link to={"/adminPanel/lidership/add"} className="float-right ">
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

export { lidershipParentReducer, lidershipChildReducer } from "./reducers";
