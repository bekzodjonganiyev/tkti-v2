import { Popconfirm, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { EducationParentActions } from "./actions";
import { AddIcon, DeleteIcon, EditIcon, ViewIcon } from "../../../assets/icons";
export { educationParentReducer, educationChildReducer } from "./reducers";
export const Education = () => {
  const dispatch = useDispatch();

  const { getData, deleteData } =
    new EducationParentActions();
  const selectorFunc = (state) => state.educationParent;
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
      dataIndex: "icon",
      render: (_, p) => (
        <div className="flex gap-4">
          <Link to={`/adminPanel/education/view/${p.id}`}>
            <ViewIcon />
          </Link>
          <Link to="#">
            <EditIcon />
          </Link>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => dispatch(deleteData(p.id))}
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
    name: item.title_uz,
    id: item._id,
  }));

  return (
    <div>
      <Link to={"/adminPanel/education/add"} className="float-right ">
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