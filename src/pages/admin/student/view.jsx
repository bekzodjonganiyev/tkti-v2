import { Button, message, Popconfirm, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import {  StudentChildActions, StudentParentActions} from "./actions";
import { DeleteIcon, EditIcon } from "../../../assets/icons";

export const StudentView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const parentAction = new StudentParentActions();
  const childAction = new StudentChildActions();

  const selectorFuncParent = (state) => state.studentParent;
  const selectorFuncChild = (state) => state.studentChild;
  const parentState = useSelector(selectorFuncParent);
  const childState = useSelector(selectorFuncChild);

  useEffect(() => {
    dispatch(parentAction.getDataById(id));
  }, [id]);

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
          <Link to={`/adminPanel/student/edit/${p.id}`}><EditIcon /></Link>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => dispatch( childAction.deleteData(p.id))}
            onCancel={() => {}}
            okText="Yes"
            cancelText="No"
            okButtonProps={{ style: { background: "red" } }}
          >
            <button type="link"><DeleteIcon /></button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const dataSource = parentState.dataById?.child?.map((item, id) => ({
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
        loading={parentState.loading}
      />
    </div>
  );
};
