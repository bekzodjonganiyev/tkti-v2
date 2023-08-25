import { Popconfirm, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { time } from "../../../services/dateFormatter";

import { slug } from "../../../services/slug";
import { DeleteIcon, EditIcon } from "../../../assets/icons";
import { FaoliyatChildActions } from "./actions";

export const FaoliyatView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { getDataById, deleteData } = new FaoliyatChildActions;

  const selectorFuncChild = (state) => state.faoliyatChild;
  const { data, loading, dataById } = useSelector(selectorFuncChild);


  console.log(dataById);
  useEffect(() => {
    dispatch(getDataById(id));
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
      title: "Vaqt",
      dataIndex: "date",
    },
    {
      dataIndex: "icon",
      render: (_, p) => (
        <div className="flex gap-4">
          <Link to={`/adminPanel/faoliyat/edit/child/${p.id}`}>
            <EditIcon />
          </Link>
          <Popconfirm
            title="Rostdan o'chirishni xoxlaysizmi?"
            description="O'chirilgan malumotlar qayta tiklanmaydi"
            onConfirm={() => dispatch(deleteData(p.id))}
            onCancel={() => { }}
            okText="Yes"
            cancelText="No"
            okButtonProps={{ style: { background: "red" } }}
          >
            <button>
              <DeleteIcon />
            </button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const dataSource = dataById?.child?.map((item, id) => ({
    order: id + 1,
    name: item.title_uz,
    date: time(item.date),
    id: item._id,
  }));

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        size="large"
        loading={loading}
      />
    </div>
  );
};
