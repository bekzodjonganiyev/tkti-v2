import { useEffect } from "react";
import { Popconfirm, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AddIcon, DeleteIcon, EditIcon, ViewIcon } from "../../../assets/icons";
import { BrmParentActions } from "./actions";
import { slug } from "../../../services/slug"

export const Brm = () => {
  const dispatch = useDispatch();

  const { getData, deleteData } = new BrmParentActions();

  const selectorFunc = (state) => state.brmParent;
  const { data, loading } = useSelector(selectorFunc);

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
          <Link to={`/adminPanel/brm/view/${slug(p.name)}/${p.id}`}>
            <ViewIcon />
          </Link>
          <Link to={"#"}>
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

  const dataSource = data.map((item, id) => ({
    order: id + 1,
    name: item.title_uz,
    id: item._id,
  }));

  return (
    <div>
      <Link
        to={"/adminPanel/brm/add"}
        className="float-right bg-cyan-500 my-2"
      >
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

export { brmChildReducer, brmParentReducer } from "./reducers";
