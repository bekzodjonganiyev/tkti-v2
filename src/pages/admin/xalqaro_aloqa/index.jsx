import { Button, message, Modal, Popconfirm, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AddIcon, DeleteIcon, EditIcon, ViewIcon } from "../../../assets/icons";
import { XalqaroParentActions } from "./actions";
import { slug } from "../../../services/slug"
import { simplifyDateTime } from "../../../helpers";
import { ParentEditForm } from "../../../components/form_comp2";
import { useState } from "react";

export const XalqaroAloqa = () => {
  const dispatch = useDispatch();

  
  const [ parentId, setParentId ] = useState(undefined)

  const { getData, getDataById, postData, updateData, deleteData } =
    new XalqaroParentActions();
  const selectorFunc = (state) => state.xalqaroParent;
  const { data, dataById, loading, error } = useSelector(selectorFunc);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (id) => {
    setParentId(id)
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
          <Link to={`/adminPanel/int_connections/view/${slug(p.name)}/${p.id}`}>
            <ViewIcon />
          </Link>
          <div  onClick={() => showModal(p.id)}>
            <EditIcon />
          </div>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => dispatch(deleteData(p.id))}
            onCancel
            okText="Yes"
            cancelText="No"
            okButtonProps={{style: {background: "red"}}}
          >
            <button type="link"><DeleteIcon/></button>
          </Popconfirm>
          <Modal 
            title="Taxrirlash" 
            open={isModalOpen} 
            onOk={handleOk} 
            onCancel={handleCancel}
            footer={false}
          >
             <ParentEditForm setModal={setIsModalOpen} getUrl={`xalqaro/all`} postUrl={`xalqaro/${parentId}`} id={parentId} />
          </Modal>
        </div>
      ),
    },
  ];

  const dataSource = data.map((item, id) => ({
    order: id + 1,
    name: item.title_uz,
    date: item?.date,
    id: item._id,
  }));

  return (
    <div>
      <Link
        to={"/adminPanel/int_connections/add"}
        className="float-right "
      >
         <AddIcon/>
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

export { xalqaroParentReducer, xalqaroChildReducer } from "./reducers";
