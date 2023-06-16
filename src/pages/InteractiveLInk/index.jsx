import React, {useState} from 'react'
import { useTranslation } from "react-i18next";
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
export const InteractiveLink = () => {
     const { t } = useTranslation();

      const data = [
  {id: 0,

     label: t("havola.0.name"),
href: logo,
nameId:"https://student.tcti.uz/dashboard/diploma"
},
{id: 1, label: t("havola.1.name"),
href: "https://backend.tkti.uz/uploads/2-1686836609107.png",
nameId:"https://my.mehnat.uz/login"

},
{id: 2, label:  t("havola.2.name"),
href: "https://backend.tkti.uz/uploads/download (1)-1686838056391.png",
nameId:"https://my.gov.uz/oz/service/323"
},
{id: 3, label: t("havola.3.name"),
href: "https://backend.tkti.uz/uploads/download (1)-1686838056391.png",
nameId:"https://my.gov.uz/oz/service/259"
},
{id: 4, label: t("havola.4.name"),
href: "https://backend.tkti.uz/uploads/5 8 9 10 15 16-1686836847607.png",
nameId:"https://magistr.edu.uz"
},
{id: 5, label:  t("havola.5.name"),
href: "https://backend.tkti.uz/uploads/6-1686837023067.png",
nameId:"https://vacancy.argos.uz/vacancies/vacancy-list"
},
{id: 6, label: t("havola.6.name"),
href: "https://backend.tkti.uz/uploads/7-1686837588256.png",
nameId:"https://phd.mininnovation.uz/login"
},
{id: 7, label: t("havola.7.name"),
href: "https://backend.tkti.uz/uploads/5 8 9 10 15 16-1686836847607.png",

nameId:"https://ikkinchitalim.edu.uz"
},
{id: 8, label:  t("havola.8.name"),
href: "https://backend.tkti.uz/uploads/5 8 9 10 15 16-1686836847607.png",
nameId:"https://kontrakt.edu.uz"
},
{id: 9, label: t("havola.9.name"),
href: "https://backend.tkti.uz/uploads/5 8 9 10 15 16-1686836847607.png",
nameId:"https://edu.uz/uz"
},
{id: 10, label: t("havola.10.name"),
href: "https://backend.tkti.uz/uploads/download (1)-1686838056391.png",
nameId:"https://my.gov.uz/oz/service/369"
},
{id: 11, label:  t("havola.11.name"),
href: "https://backend.tkti.uz/uploads/12-1686837453888.png",
nameId:"https://unilibrary.uz"
}
,
{id: 12, label:  t("havola.12.name"),
href: "https://backend.tkti.uz/uploads/download-1686837772059.png",
nameId:"https://tktiyf.uz"
},
{id: 13, label: t("havola.13.name"),
href: "https://backend.tkti.uz/uploads/691b79fc-7c80-4235-81e8-e716041ee96b-1686837904918.jpg",
nameId:"https://stict.uz"
},
{id: 14, label: t("havola.14.name"),
href: "https://backend.tkti.uz/uploads/5 8 9 10 15 16-1686836847607.png",
nameId:"transfer.edu.uz"
},
{id: 15, label:  t("havola.15.name"),
href: "https://backend.tkti.uz/uploads/5 8 9 10 15 16-1686836847607.png",
nameId:"https://gov.uz/uz"
},
{id: 16, label:  t("havola.16.name"),
href: "https://backend.tkti.uz/uploads/17-1686837410035.png",
nameId:"https://meningfikrim.uz/uz"
},
{id: 18, label: t("havola.18.name"),
href: "https://backend.tkti.uz/uploads/19-1686837258580.png",
nameId:"https://new.akbt.uz"
}
];
  return (
    <div className='container w-80% mx-auto'>
        <h1 className='text-3xl my-5'>{t("headerTop.3.name")}</h1>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
       
        <tbody>
              {data?.map((i, index) => (
                 <tr class="bg-white dark:bg-gray-900 dark:border-gray-700" key="index">
                                <th scope="row" class="px-6 py-4 ">

                                <img className='w-16' src={i.href} alt="" />
</th> 
                    <th scope="row" class="px-6 text-[17px] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <Link className='font-medium text-blue-600 dark:text-blue-500 hover:underline' to={i.nameId}>
                
                   {i.label}
                   </Link>
                </th>
                      </tr>
                    ))}
        </tbody>
    </table>
</div>

    </div>
  )
}
