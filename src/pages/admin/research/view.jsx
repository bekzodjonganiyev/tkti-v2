import { Popconfirm, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { ResearchChildActions } from "./actions";
import { DeleteIcon, EditIcon } from "../../../assets/icons";
import { slug } from "../../../services/slug";

export const ResearchView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const childAction = new ResearchChildActions();

  const selectorFuncChild = (state) => state.researchChild;
  const childState = useSelector(selectorFuncChild);

  useEffect(() => {
    dispatch(childAction.getData());
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
          <Link to={`/adminPanel/research/edit/${slug(p.name)}`}>
            <EditIcon />
          </Link>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => dispatch(childAction.deleteData(p.id))}
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

  const dataSource = childState?.data
    .filter((item) => item.nameId === id)
    .map((item, id) => ({
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
