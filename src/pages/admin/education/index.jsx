import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Popconfirm, Table } from "antd";
import { AddIcon, DeleteIcon, EditIcon, ViewIcon } from "../../../assets/icons";
import { EducationParentActions } from "./actions";
import { slug } from  "../../../services/slug";
import { EditForm } from "../../../components";
import { simplifyDateTime } from "../../../helpers";
import { ParentEditForm } from "../../../components/form_comp2";

export const Education = () => {

  const [ parentId, setParentId ] = useState(undefined)

  const dispatch = useDispatch();
  const { getData, deleteData } = new EducationParentActions();
  const selectorFunc = (state) => state.educationParent;
  const { data, dataById, loading, error } = useSelector(selectorFunc);

  console.log(dataById);

  useEffect(() => {
    dispatch(getData());
  }, []);

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
          <Link to={`/adminPanel/education/view/${slug(p.name)}/${p.id}`}>
            <ViewIcon />
          </Link>
          <div onClick={() => showModal(p.id)}>
            <EditIcon />
          </div>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => dispatch(deleteData(p.id))}
            onCancel
            okText="Yes"
            cancelText="No"
            okButtonProps={{ style: { background: "red" } }}
          >
            <button type="link">
              <DeleteIcon />
            </button>
          </Popconfirm>
          <Modal 
            title="Taxrirlash" 
            open={isModalOpen} 
            onOk={handleOk} 
            onCancel={handleCancel}
            footer={false}
          >
             <ParentEditForm setModal={setIsModalOpen} getUrl={`talim/all`} postUrl={`talim/${parentId}`} id={parentId} />
          </Modal>
        </div>
      ),
    },
  ];

  const dataSource = data?.map((item, id) => ({
    order: id + 1,
    name: item?.title_uz,
    date: item?.date,
    id: item?._id,
  }));



  return (
    <div>
      <Link to={"/adminPanel/education/add"} className="float-right ">
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

export { educationParentReducer, educationChildReducer } from "./reducers";



