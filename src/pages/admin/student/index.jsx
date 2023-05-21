import { Button, message, Popconfirm, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { StudentParentActions } from "./actions";

export { studentParentReducer, studentChildReducer } from "./reducers";
export const Student = () => {
  const dispatch = useDispatch();

  const { getData, getDataById, postData, updateData, deleteData } =
    new StudentParentActions();
  const selectorFunc = (state) => state.studentParent;
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
          <Link to={`/adminPanel/students/view/${p.id}`}>
            view
          </Link>
          <Link to={"#"}>
            edit
          </Link>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => deleteData(p.id)}
            onCancel
            okText="Yes"
            cancelText="No"
            okButtonProps={{style: {background: "red"}}}
          >
            <button type="link">Delete</button>
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
      <Link
        to={"/adminPanel/students/add"}
        className="float-right bg-cyan-500 my-2"
      >
        add user
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
