import { Popconfirm, Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { QabulParentActions } from "./actions";
import { slug } from "../../../services/slug"

export const Qabul = () => {
  const dispatch = useDispatch();

  const { getData, getDataById, postData, updateData, deleteData } =
    new QabulParentActions();
  const selectorFunc = (state) => state.qabulParent;
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
          <Link to={`/adminPanel/admission/view/${slug(p.name)}/${p.id}`}>view</Link>
          <Link to={"#"}>edit</Link>
          <Popconfirm
            title="Rostdan o'chirishni xoxlaysizmi?"
            description="O'chirilgan malumotlar qayta tiklanmaydi"
            onConfirm={() => dispatch(deleteData(p.id))}
            onCancel={() => {}}
            okText="Yes"
            cancelText="No"
            okButtonProps={{ style: { background: "red" } }}
          >
            <button >Delete</button>
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
        to={"/adminPanel/admission/add"}
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

export { qabulParentReducer, qabulChildReducer } from "./reducers";
