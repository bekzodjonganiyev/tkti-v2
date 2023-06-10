import { useEffect } from "react";
import { Popconfirm, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { MyInstituteParentActions } from "./actions";
import { AddIcon, DeleteIcon, EditIcon, ViewIcon } from "../../../assets/icons";

export { myInstituteParentReducer, myInstituteChildReducer } from "./reducers";
export const MyInstitute = () => {
  const dispatch = useDispatch();

  const { getData, getDataById, postData, updateData, deleteData } =
    new MyInstituteParentActions();

  const selectorFunc = (state) => state.myInstituteParent;
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
          <Link to={`/adminPanel/my-tkti/view/${p.id}`}>
            <ViewIcon />
          </Link>
          <Link to={"#"}>
            <EditIcon />
          </Link>
          <Popconfirm
            title="O'chirishni xoxlaysizmi?"
            description="Malumot o'chiriladi va uni tiklab bo'lmaydi"
            onConfirm={() => dispatch(deleteData(p.id))}
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

  const dataSource = data.map((item, id) => ({
    order: id + 1,
    name: item.title_uz,
    id: item._id,
  }));

  return (
    <div>
      <Link
        to={"/adminPanel/my-tkti/add"}
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
