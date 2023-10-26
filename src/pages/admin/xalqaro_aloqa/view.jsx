import { Popconfirm, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { slug } from "../../../services/slug";

import { XalqaroChildActions } from "./actions";
import { DeleteIcon, EditIcon } from "../../../assets/icons";

export const  XalqaroView= () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const childAction = new XalqaroChildActions();

  const selectorFuncChild = (state) => state.xalqaroChild;
  const childState = useSelector(selectorFuncChild);

  useEffect(() => { dispatch(childAction.getData())}, [id]);

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
          <Link to={`/adminPanel/int_connections/edit/${slug(p.name)}/${p.id}`}>
            <EditIcon />
          </Link>
          <Popconfirm
            title="Rostdan o'chirishni xoxlaysizmi?"
            description="O'chirilgan malumotlar qayta tiklanmaydi"
            onConfirm={() => dispatch(childAction.deleteData(p.id))}
            onCancel={() => {}}
            okText="Yes"
            cancelText="No"
            okButtonProps={{ style: { background: "red" } }}
          >
            <button >
              <DeleteIcon/>
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