import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Popconfirm, Table } from "antd";

import { AddIcon, DeleteIcon, EditIcon, ViewIcon } from "../../../assets/icons";
import { EmployeesParentActions } from "./actions";
import { slug } from  "../../../services/slug"
import { simplifyDateTime } from "../../../helpers";

export const Employees = () => {
  const dispatch = useDispatch();

  const { getData, deleteData } = new EmployeesParentActions();
  const selectorFunc = (state) => state.employeesParent;
  const { data, dataById, loading, error } = useSelector((state) => state.employeesParent);

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
      title: "Lavozimi",
      dataIndex: "job",
    },
    {
      title: "Sana",
      dataIndex: 'date',
      render: (_, p) => (
        <span>{simplifyDateTime(p?.date)}</span>
      )
    },
    {
      dataIndex: "icon",
      render: (_, p) => (
        <div className="flex gap-4">
          <Link to={`/adminPanel/employees/view/${slug(p?.name)}/${p?.id}`}>
            <ViewIcon />
          </Link>
          <Link to={`/adminPanel/employees/edit/${slug(p?.name)}/${p?.id}`}>
            <EditIcon />
          </Link>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => dispatch(deleteData(p?.id))}
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
    name: item?.name_uz,
    job: item?.job_uz,
    date: item?.date,
    id: item?._id,
  }));

  return (
    <div>
      <Link to={"/adminPanel/employees/add"} className="float-right ">
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

export { employeesParentReducer, employeesChildReducer } from "./reducers";
