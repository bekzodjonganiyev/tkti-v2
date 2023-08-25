import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Popconfirm, Select, Table } from "antd";
import { AddIcon, DeleteIcon, EditIcon, ViewIcon } from "../../../assets/icons";
import { simplifyDateTime } from "../../../helpers";
import { FaoliyatParentActions } from "./actions";
import { useState } from "react";
import { slug } from "../../../services/slug";

export const Faoliyat = () => {
  const dispatch = useDispatch();

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

  const { getData, deleteData } = new FaoliyatParentActions();
  const selectorFunc = (state) => state.faoliyatParent;
  const { data, loading } = useSelector(selectorFunc);

  const fetchData = async () => {
  };

  useEffect(() => {
    dispatch(getData());
    fetchData();
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
      title: "Qisqacha",
      dataIndex: "about",
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
          <Link to={`/adminPanel/faoliyat/view/${slug(p?.name)}/${p?.id}`}>
            <ViewIcon />
          </Link>
          <Link to={`/adminPanel/faoliyat/edit/${p?.id}`}>
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

  const dataSource = data?.filter((item) => hodim?.id in item).map((item, id) => ({
    order: id + 1,
    name: item?.title_uz,
    date: item?.date,
    about: item?.about_uz,
    id: item?._id,
  }))

  const onSelect = (value) => {
    const selectedOption = selectOptions1.find(
      (option) => option.value === value
    );
    setHodim(selectedOption);
  };

  return (
    <div>
      <Select
        defaultValue={hodim?.value}
        value={hodim?.value}
        style={{
          width: "200px",
        }}
        onChange={(value) => onSelect(value)}
        options={selectOptions1}
      />
      <Link to={"/adminPanel/faoliyat/add"} className="float-right ">
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

export { faoliyatChildReducer, faoliyatParentReducer } from "./reducers";
