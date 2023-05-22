import { Button, message, Popconfirm, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { QabulChildActions, QabulParentActions } from "./actions";

export const QabulView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const parentAction = new QabulParentActions();
  const childAction = new QabulChildActions();

  const selectorFuncParent = (state) => state.qabulParent;
  const selectorFuncChild = (state) => state.qabulChild;
  const parentState = useSelector(selectorFuncParent);
  const childState = useSelector(selectorFuncChild);

  useEffect(() => {
    dispatch(parentAction.getDataById(id));
  }, [id]);
  console.log(parentState.data, "yiuyiugy");

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
          <Link to={`/adminPanel/admission/edit/${p.id}`}>edit</Link>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => childAction.deleteData(p.id)}
            onCancel
            okText="Yes"
            cancelText="No"
            okButtonProps={{ style: { background: "red" } }}
          >
            <button type="link">Delete</button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const dataSource = parentState.data?.child?.map((item, id) => ({
    order: id + 1,
    name: item.title_uz,
    id: item._id,
  }));



  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        size="large"
        loading={childState.loading}
      />
    </div>
  );
};
