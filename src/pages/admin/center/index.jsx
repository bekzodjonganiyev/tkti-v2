import { useEffect, useState } from "react";
import { Popconfirm, Table } from "antd";
import { Link } from "react-router-dom";

import apiClientWithFetch from "../../../services/apiClientWithFetch";
import { simplifyDateTime } from "../../../helpers";
import { DeleteIcon, EditIcon } from "../../../assets/icons";

export const Center = () => {
  const [data, setData] = useState({ loading: true, data: [], error: null });

  const getData = async () => {
    const res = await apiClientWithFetch.get("markaz_data/all");
    if (res.status === 200) {
      setData({
        loading: false,
        data: res.data,
        error: "",
      });
    } else {
      setData({
        loading: false,
        data: [],
        error: res?.status ? res.status : res,
      });
    }
  };

  const deleteData = async (id) => {
    setData({...data, loading: true});
    const res = await apiClientWithFetch.delete(`markaz_data/${id}`);
    if (res.status === 200) {
      const filtered = data.data.filter(item => item._id !== res.data?._id)
      setData({
        loading: false,
        error: "",
        data: filtered
      });
    } else {
      setData({
        ...data,
        loading: false,
        error: res?.status ? res.status : res,
      });
    }
  };

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
          <Link to={`/adminPanel/center/edit/${p.id}`}><EditIcon /></Link>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => deleteData(p.id)}
            onCancel
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

  const dataSource = data?.data?.map((item, id) => ({
    order: id + 1,
    name: item.title_uz,
    date: item?.date,
    id: item._id,
  }));

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Link
        to={"/adminPanel/center/add"}
        className="float-right bg-cyan-500 my-2"
      >
        add user
      </Link>
      <Table
        columns={columns}
        dataSource={dataSource}
        size="large"
        loading={data.loading}
      />
    </div>
  );
};
