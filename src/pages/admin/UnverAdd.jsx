import React, { useEffect, useState } from 'react';
import { Select, Button, Modal, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux';

import TextEditor from './TextEditor';
import { ActionUniver } from './institust/actions'
import { ActionFakulet } from './institust/childAction';
import { fakultetUsReducer } from './institust/childReducer';

import { REQUEST_UNIVER, POST_UNIVER, ERROR_UNIVER } from './institust/actions';
export const UnverAdd = ({ defaultValues }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editor, setEditor] = useState({
        uz: defaultValues ? defaultValues.uz : "",
        ru: defaultValues ? defaultValues.ru : "",
        en: defaultValues ? defaultValues.en : "",
    });

    const getUnver = (state) => state.univer;
    const { data, dataById, loading, error } = useSelector(getUnver)
    const { postData, updateData, getData } = new ActionUniver()

    const getFak =(state) =>state.fakultet
    const fakRespons = useSelector(getFak)
    const fac = new ActionFakulet()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getData())
    }, [])

    const submitForm = (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append("title_uz", e.target.title_uz.value);
        formData.append("title_ru", e.target.title_ru.value);
        formData.append("title_en", e.target.title_en.value);
        formData.append("body_uz", editor?.uz);
        formData.append("body_ru", editor?.ru);
        formData.append("body_en", editor?.en);
        formData.append("category", e.target.category.value);
        formData.append("photo", e.target.photo.files[0]);
        formData.append("date", e.target.date.value);
        formData.append()

        dispatch(fac.postData(formData))

    }

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };


    const showModal = () => {
        setIsModalOpen(true);
    };


    const handleOk = (e) => {
        e.preventDefault()
        const obj = {
            title_uz: e.target.title_uz.value,
            title_ru: e.target.title_ru.value,
            title_en: e.target.title_en.value,
            haqida_uz: "String",
            haqida_ru: "String",
            haqida_en: "String",
            maqsad_uz: "String",
            maqsad_en: "String",
            maqsad_ru: "String",
        }
        dispatch(postData(  JSON.stringify(obj) ))
        loading  ? '' : setIsModalOpen(false)
        
        console.log(data);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <form
                action=""
                className="w-[500px] flex flex-col gap-2"
                onSubmit={submitForm}
            >
                <input
                    type="text"
                    name="title_uz"
                    defaultValue={defaultValues ? defaultValues.title_uz : ""}
                />
                <input
                    type="text"
                    name="title_ru"
                    defaultValue={defaultValues ? defaultValues.title_ru : ""}
                />
                <input
                    type="text"
                    name="title_en"
                    defaultValue={defaultValues ? defaultValues.title_en : ""}
                />
                <TextEditor
                    title={{
                        uz: "Yangilik haqida batafsil UZB",
                        ru: "Yangilik haqida batafsil RUS",
                        en: "Yangilik haqida batafsil ING",
                    }}
                    name={{ uz: "body_uz", ru: "body_ru", en: "body_en" }}
                    value={{
                        uz: editor.uz,
                        ru: editor.ru,
                        en: editor.en,
                    }}
                    handleValue={{
                        uz: (e) => setEditor({ ...editor, uz: e }),
                        ru: (e) => setEditor({ ...editor, ru: e }),
                        en: (e) => setEditor({ ...editor, en: e }),
                    }}
                />
                <input type="file" name="photo" />
                <div className='flex justify-between'>
                    <Select
                        defaultValue="Fakultet tanlash"
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        options={data.map(item => {
                            return (
                                {
                                    value: item._id,
                                    label: item.title_uz
                                }
                            )
                        })}
                    />
                    <Button className='bg-indigo-400 ' type="primary" onClick={showModal}>
                        Open Modal
                    </Button>
                    <Modal footer={[]} title="Basic Modal" open={isModalOpen} >
                        <form action="" onSubmit={handleOk}>
                            <Input name="title_uz" className='my-2' placeholder='title uz' />
                            <Input name="title_ru" className='my-2' placeholder='title ru' />
                            <Input name="title_en" className='my-2' placeholder="title en" />
                            <Button onClick={handleCancel}>cancel</Button>
                            <Button htmlType='submit' className=' text-white bg-indigo-400 mx-2 '>{loading ? 'loading' : "send"}</Button>
                        </form>
                    </Modal>
                </div>
                <button className="p-1 bg-indigo-400">Submit</button>
            </form>
        </div>
    );
}


