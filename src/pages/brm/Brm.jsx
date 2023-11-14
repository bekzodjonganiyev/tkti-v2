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

const content = {
    uz: {
        title: "Brm",
        longText: `
        Toshkent kimyo-texnologiya instituti o’z strategiyasiga muvofiq 2022-yildan boshlab Birlashgan Millatlar Tashkiloti Bosh Assambleyasining 2015-yil sentabr oyida BMTning Barqaror rivojlanish sammitida <a class="text-blue-700" href="https://sdgs.un.org/2030agenda" taget="_blank">qabul qilingan</a> 70-sonli rezolyutsiyasiga, shuningdek, 2030-yilgacha bo‘lgan davrda BMTning Global kun tartibining Barqaror rivojlanish maqsadlarini (keyingi o‘rinlarda – BRM) izchil amalga oshirish bo‘yicha tizimli ishlarni tashkil etish maqsadida Vazirlar Mahkamasi tomonidan 2018-yil 20-oktabrda 2030-yilgacha bo‘lgan davr uchun 16ta Barqaror rivojlanish milliy maqsadlari hamda ular bilan bog‘liq bo‘lgan 125ta vazifalar tasdiqlandi.

        <br />
        <br />

        Barqaror rivojlanish maqsadlari – kambag‘al, boy va o‘rtacha rivojlangan barcha mamlakatlar tomonidan harakatga chorlovchi o‘ziga xos da’vatdir. Ular bizning sayyoramizning farovonligi va himoyasini yaxshilashga qaratilgan. Dunyo mamlakatlari qashshoqlikni bartaraf etish choralari iqtisodiy o‘sishni kuchaytirish va ta’lim, sssog‘liqni saqlash, ijtimoiy himoya va bandlikni ta’minlash, shuningdek, iqlim o‘zgarishi hamda atrof-muhitni muhofaza qilish bo‘yicha sa’y-harakatlar bilan birgalikda qabul qilinishi zarurligini tan oladilar. TKTI amalga oshirish uchun harakat qilayotgan maqsadlar:
        `
    },
    ru: {
        title: "Цур",
        longText: `
        В соответствии с резолюцией Генеральной Ассамблеи Организации Объединенных Наций № 70, <a class="text-blue-700" href="https://sdgs.un.org/2030agenda" taget="_blank">принятой</a> на Саммите ООН по устойчивому развитию в сентябре 2015 года, а также в целях организации системной работы по последовательной реализации Целей устойчивого развития Глобальной повестки дня ООН до 2030 года (далее — ЦУР) Кабинет Министров 20 октября 2018 года утвердил 16 Национальных целей в области устойчивого развития и 127 связанных с ними задач на период до 2030 года.

        <br />
        <br />

        Цели в области устойчивого развития являются своеобразным призывом к действию, исходящим от всех стран — бедных, богатых и среднеразвитых. Они нацелены на улучшение благосостояния и защиту нашей планеты. Страны мира признают, что меры по ликвидации бедности должны приниматься совместно с усилиями по наращиванию экономического роста и решению целого ряда вопросов в области образования, здравоохранения, социальной защиты и трудоустройства, а также борьбе с изменением климата и защите окружающей среды. Цели, над которыми ТХТИ работает в Узбекистане:
        `
    },
    en: {
        title: "Sdg",
        longText: `
        In accordance with the Resolution of the United Nations General Assembly No. 70 <a class="text-blue-700" href="https://sdgs.un.org/2030agenda" taget="_blank">adopted</a> at the UN Summit on Sustainable Development in September 2015, as well as to organize systematic work for the consistent implementation of the Sustainable Development Goals of the UN Global Agenda until 2030 (hereinafter - the SDGs) On October 20, 2018, the Ministers approved 16 National Sustainable Development Goals and 127 related tasks for the period until 2030.

        <br />
        <br />

        The Sustainable Development Goals are a kind of call to action emanating from all countries - poor, rich and moderately developed. They are aimed at improving the welfare and protection of our planet. The countries of the world recognize that measures to eradicate poverty must be taken in conjunction with efforts to increase economic growth and address a number of issues in the fields of education, health, social protection and employment, as well as combating climate change and environmental protection.  These are the goals the TICT is working on in Uzbekistan:
        `
    }
}

export const Brm = () => {
    const [brm, setBrm] = useState()

    useEffect(() => {
        getter("brm/all", setBrm)
    }, [])
    return (
        <div className='container py-10'>
            <h1 className="mb-5 xl:text-3xl lg:text-2xl md:text-xl text-base font-medium">{content[i18next.language].title}</h1>
            <div className='flex max-lg:flex-col gap-10 mb-10'>
                <p className='lg:w-1/2 w-full' dangerouslySetInnerHTML={{ __html: content[i18next.language].longText }} />
                <iframe
                    width="100%"
                    height="400"
                    className='lg:w-1/2 w-full'
                    src="https://www.youtube.com/embed/4gxNzakrrK4"
                    title="Barqaror rivojlanish maqsadlari: hech kim chetda qolmasin"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>

                </iframe>
            </div>
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
