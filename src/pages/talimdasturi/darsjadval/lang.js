import yoqilgi1 from "../../../files/darsjadval/yoqilgi/1-курс.pdf"
import yoqilgi2 from "../../../files/darsjadval/yoqilgi/2-курс.pdf"
import yoqilgi3 from "../../../files/darsjadval/yoqilgi/3-курс.pdf"
import yoqilgi4 from "../../../files/darsjadval/yoqilgi/4-курс.PDF"

import vino1 from "../../../files/darsjadval/vino/1-курс.PDF"
import vino2 from "../../../files/darsjadval/vino/2-курс.PDF"
import vino3 from "../../../files/darsjadval/vino/3-курс.PDF"
import vino4 from "../../../files/darsjadval/vino/4-курс.PDF"

import oziqOvqat1 from "../../../files/darsjadval/oziq-ovqat/1-курс.pdf"
import oziqOvqat2 from "../../../files/darsjadval/oziq-ovqat/2-курс.pdf"
import oziqOvqat3 from "../../../files/darsjadval/oziq-ovqat/3-курс.pdf"
import oziqOvqat4 from "../../../files/darsjadval/oziq-ovqat/4-курс.PDF"

import menejment1 from "../../../files/darsjadval/menejment/1-курс.pdf"
import menejment2 from "../../../files/darsjadval/menejment/2-курс.PDF"
import menejment3 from "../../../files/darsjadval/menejment/3-курс.pdf"
import menejment4 from "../../../files/darsjadval/menejment/4-курс.pdf"

import noorganika1 from "../../../files/darsjadval/noorganika/1-курс.pdf"
import noorganika2 from "../../../files/darsjadval/noorganika/2-курс.pdf"
import noorganika3 from "../../../files/darsjadval/noorganika/3-курс.pdf"
import noorganika4 from "../../../files/darsjadval/noorganika/4-курс.pdf"

export const darsJadvali = {

    uz: {
        title:"Dars Jadvallari",
        course:"kurs",
        titles:{
            faculty:"Fakultetlar",
            course:"Kurslar"
        },
        sciences:[
            {
                title:"Yoqilg'i va organik birikmalar kimyoviy texnologiyasi fakulteti",
                file:[yoqilgi1, yoqilgi2, yoqilgi3, yoqilgi4]
            },
            {
                title:"Vinochilik texnologiyasi va sanoat uzumchligi fakulteti",
                file:[vino1, vino2, vino3, vino4]
            },
            {
                title:"Menejment va kasb ta'limi fakulteti",
                file:[menejment1, menejment2, menejment3, menejment4]
            },
            {
                title:"Noorganik moddalar kimyoviy texnologiyasi fakulteti",
                file:[noorganika1, noorganika2, noorganika3, noorganika4]
            },
            {
                title:"Oziq ovqat mahsulotlari texnologiyasi fakulteti",
                file:[oziqOvqat1, oziqOvqat2, oziqOvqat3, oziqOvqat4]
            }
        ]

    },
    ru:{
        title:"Расписание уроков",
        course:"курс",
        titles:{
            faculty:"Факультеты",
            course:"Курсы"
        },
        sciences:[
            {
                title:"Факультет Химической технологии топлива и органических соединений",
                file:[yoqilgi1, yoqilgi2, yoqilgi3, yoqilgi4]
            },
            {
                title:"Факультет технологии  виноделия и промышленного виноградарства",
                file:[vino1, vino2, vino3, vino4]
            },
            {
                title:"Факультет Менеджмента и профессионального образования",
                file:[menejment1, menejment2, menejment3, menejment4]
            },
            {
                title:"Факультет Технологии неорганических веществ",
                file:[noorganika1, noorganika2, noorganika3, noorganika4]
            },
            {
                title:"OФакультет Технологии пищевых продуктов",
                file:[oziqOvqat1, oziqOvqat2, oziqOvqat3, oziqOvqat4]
            }
        ]
    },
    en:{
        title:"Lesson Schedules",
        course:"courses",
        titles:{
            faculty:"Faculties",
            course:"Courses"
        },
        sciences:[
            {
                title:"Faculty of chemical technology of fuel and organic substances",
                file:[yoqilgi1, yoqilgi2, yoqilgi3, yoqilgi4]
            },
            {
                title:"Faculty of technology of winemaking and industrial viticulture",
                file:[vino1, vino2, vino3, vino4]
            },
            {
                title:"Faculty management and professional education",
                file:[menejment1, menejment2, menejment3, menejment4]
            },
            {
                title:"Faculty technology of production of inorganic substances",
                file:[noorganika1, noorganika2, noorganika3, noorganika4]
            },
            {
                title:"Faculty of technology of foodstuff products",
                file:[oziqOvqat1, oziqOvqat2, oziqOvqat3, oziqOvqat4]
            }
        ]
    }
}