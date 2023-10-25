import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import i18next from 'i18next'

import apiClientWithFetch from "../../services/apiClientWithFetch"
import { Loader } from '../../components'
import { baseURL } from '../../services/http'
import { slug } from '../../services/slug'

export const getter = async (url, setState) => {
    try {
        setState({ loading: true })
        const res = await apiClientWithFetch.get(`${url}`)
        if (res.success) {
            setState({ loading: false, data: res.data, error: null })
        } else {
            setState({ loading: false, data: null, error: "Xatolik yuz berdi, birozdan so'ng urinib ko'ring" })
        }
    } catch (error) {
        setState({ loading: false, data: null, error: "Xatolik yuz berdi, birozdan so'ng urinib ko'ring" })
        return new Error("Server error")
    }
}

export const Brm = () => {
    const [brm, setBrm] = useState()

    useEffect(() => {
        getter("brm/all", setBrm)
    }, [])
    return (
        <div className='container py-10'>

            <div className='grid lg:grid-cols-4 md:grid-cols- grid-cols-2 gap-10'>
                {
                    brm?.loading
                        ? <Loader />
                        : brm?.data?.map(item => (
                            <Link to={`/${i18next.language}/institut/brm/${slug(item.title_uz)}`} style={{ background: item.color }} className='flex flex-col items-center text-white border-[10px] border-white p-2'>
                                <div className="flex items-start">
                                    <span className='md:text-8xl text-6xl '>{item.order}</span>
                                    <h3 className='md:text-2xl text-lg font-bold uppercase leading-[25px] pt-2'>{item[`title_${i18next.language}`]}</h3>
                                </div>
                                <img src={baseURL + item.icon} alt={item.title_uz} />
                            </Link>
                        ))
                }
            </div>
        </div>
    )
}
