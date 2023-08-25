import { useEffect, useState } from "react";
import { Avatar, Popconfirm, Select, Table } from "antd";
import { Link } from "react-router-dom";

import apiClientWithFetch from "../../../services/apiClientWithFetch";
import { simplifyDateTime } from "../../../helpers";
import { AddIcon, DeleteIcon, EditIcon } from "../../../assets/icons";
import { baseURL } from "../../../services/http";

export const Employees = () => {
  const [data, setData] = useState({ loading: true, data: [], error: null });

  const selectOptions1 = [
    {
      id: "kafedra_id",
      value: "Kafedra",
      url: "Kafedra_data/all",
      get: "kafedra_hodim/all",
      delete: "kafedra_hodim",
    },
    {
      id: "markaz_id",
      value: "Markaz",
      url: "markaz_data/all",
      get: "markaz_hodim/all",
      delete: "markaz_hodim",
    },
    {
      id: "bolim_id",
      value: "Bo'lim",
      url: "bm_data/all",
      get: "bm_hodim/all",
      delete: "bm_hodim",
    },
    {
      id: "fakultet_id",
      value: "Fakultet",
      url: "Fak_data/all",
      get: "Fak_hodim/all",
      delete: "Fak_hodim",
    },
  ];
  const [hodim, setHodim] = useState(selectOptions1[3]);

  const handleChange = (value) => {
    const selectedOption = selectOptions1.find(
      (option) => option.value === value
    );
    setHodim(selectedOption);
    sessionStorage.setItem("hodim", JSON.stringify(selectedOption));
  };

  const getData = async () => {
    ``;
    const res = await apiClientWithFetch.get(hodim?.get);
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
    setData({ ...data, loading: true });
    const res = await apiClientWithFetch.delete(`${hodim?.delete}/${id}`);
    if (res.status === 200) {
      const filtered = data.data.filter((item) => item._id !== res.data?._id);
      setData({
        loading: false,
        error: "",
        data: filtered,
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
      title: "Rasmi",
      dataIndex: "photo",
      render: (_, p) => <Avatar src={<img src={p?.photo} alt="avatar" />} />,
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
      title: "Telefon raqami",
      dataIndex: "tel",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Sana",
      dataIndex: "date",
      render: (_, p) => <span>{simplifyDateTime(p?.date)}</span>,
    },
    {
      dataIndex: "icon",
      render: (_, p) => (
        <div className="flex gap-4">
          <Link to={`/adminPanel/employees/edit/${p?.id}`}>
            <EditIcon />
          </Link>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => deleteData(p?.id)}
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

  const dataSource = data?.data?.map((item, id) => ({
    order: id + 1,
    name: item?.name_uz,
    job: item?.job_uz,
    tel: item?.tell,
    email: item?.email,
    date: item?.date,
    photo: baseURL + "/" + item?.photo,
    id: item._id,
  }));

  useEffect(() => {
    setHodim(selectOptions1[3]);
  }, []);

  useEffect(() => {
    getData();
  }, [hodim?.url]);

  useEffect(() => {
    sessionStorage.setItem(
      "hodim",
      JSON.stringify({
        id: "fakultet_id",
        value: "Fakultet",
        url: "Fak_data/all",
        get: "Fak_hodim/all",
        delete: "Fak_hodim",
      })
    );
  }, []);

  return (
    <div>
      <Select
        defaultValue={hodim?.value}
        value={hodim?.value}
        style={{
          width: "200px",
        }}
        onChange={(value) => handleChange(value)}
        options={selectOptions1}
      />
      <Link to={"/adminPanel/employees/add"} className="float-right my-2">
        <AddIcon />
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
