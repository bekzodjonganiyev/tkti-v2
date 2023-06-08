import React from "react";
import Tree from "react-d3-tree";
import { Link } from "react-router-dom";

import "./style.css";

import apiClientWithFetch from "../../services/apiClientWithFetch";

const myTreeData = [
  {
    name: "Rektorat",
    children: [
      {
        name: "Yoshlar masalalari va ma’naviy-ma’rifiy ishlar bo‘yicha birinchi prorektor",
        children: [
          {
            name: "Yoshlar bilan ishlash, ma’naviyat va ma’rifat bo‘limi",
          },
          {
            name: "Talabalarni turar joyi bilan ta’minlash ishlarini muvofiqlashtiruvchi bo‘limi",
          },
          {
            name: "Talabalar turar joylari",
          },
          {
            name: "Psixolog",
          },
        ],
      },
      {
        name: "O‘quv ishlari bo‘yicha prorektor",
        children: [
          {
            name: "Akademik faoliyat va registrator boshqarmasi",
          },
          {
            name: "Raqamli ta’lim texnologiyalari markazi",
          },
          {
            name: "Axborot-resurs markazi",
          },
          {
            name: "Sirtqi bo‘lim",
          },
          {
            name: "Qabul jarayonini tashkil etish bo‘limi",
          },
        ],
      },
      {
        name: "Ilmiy ishlar va innovatsiyalar bo‘yicha prorektor",
        children: [
          {
            name: "Ilmiy-tadqiqot, ilmiy-pedagog kadrlar tayyorlash bo‘limi",
          },
          {
            name: "Tahririy-nashriyot bo‘limi",
          },
          {
            name: "Iqtidorli talabalarning ilmiy-tadqiqot faoliyatini tashkil etish bo‘limi",
          },
          {
            name: "Magistratura bo‘limi",
          },
        ],
      },
      {
        name: "Iqtisodiy va tashkiliy masalalar bo‘yicha prorektor",
        children: [
          {
            name: "Reja-moliya bo‘limi",
          },
          {
            name: "Buxgalteriya",
          },
          {
            name: "Texnik foydalanish va xo‘jalik bo‘limi",
          },
          {
            name: "Xaridlar bo‘limi",
          },
          {
            name: "Fuqaro va mehnat muhofazasi bo‘limi",
          },
          {
            name: "Bosh muhandis",
          },
          {
            name: "Bosh energetik",
          },
        ],
      },
      {
        name: "Korxonalar va ta’lim muassasalari bilan ishlash bo‘yicha prorektor",
        children: [
          {
            name: "Marketing va talabalar amaliyoti bo‘limi",
          },
          {
            name: "Kasbiy ta’lim sektori",
          },
        ],
      },
      {
        name: "Xalqaro hamkorlik bo‘yicha prorektor",
        children: [
          {
            name: "Xalqaro aloqalar bo‘limi",
          },
          {
            name: "Xorijiy oliy ta’lim muassasalari bilan hamkorlikdagi qo‘shma ta’lim dasturlarini muvofiqlashtiruvchi bo‘lim",
          },
        ],
      },
      {
        name: "Talabalar orasida ijtimoiy-ma’naviy muhit barqarorligini ta’minlashga mas’ul bo‘lgan rektor maslahatchisi",
        children: [
          {
            name: "Axborot-tahlil markazi",
          },
          {
            name: "Jismoniy va yuridik shaxslarning murojaatlari bilan ishlash, nazorat va monitoring bo‘limi",
          },
          {
            name: "Ta’lim sifatini nazorat qilish bo‘limi",
          },
          {
            name: "Korrupsiyaga qarshi kurashish “Komplaens-nazorat” tizimini boshqarish bo‘limi",
          },
          {
            name: "Ichki audit xizmati",
          },
          {
            name: "Matbuot kotibi",
          },
          {
            name: "Katta yuriskonsult",
          },
        ],
      },
      {
        name: "FAKULTETLAR",
        children: [
          {
            name: "Yoqilg‘i va organik birikmalar kimyoviy texnologiyasi",
          },
          {
            name: "Noorganik moddalar kimyoviy texnologiyasi",
          },
          {
            name: "Oziq-ovqat mahsulotlari texnologiyasi",
          },
          {
            name: "Menejment va kasb ta’limi",
          },
          {
            name: "Vinochilik texnologiyasi va sanoat uzumchiligi",
          },
        ],
      },
    ],
  },
];

const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}) => (
  <foreignObject {...foreignObjectProps}>
    <div className="px-3">
      <div className="min-h-10 border border-blue-900 bg-white hover:bg-blue-900  hover:text-white py-2 px-4">
        <h3 className="text-xs font-bold">{nodeDatum.name}</h3>
        {nodeDatum.children ? (
          <div className="flex justify-between items-center mt-6 px-2">
            <button className="" onClick={toggleNode}>
              {nodeDatum.__rd3t.collapsed ? "Ko'proq" : "Kamroq"}
            </button>
            <Link to={"#"}>batafsil</Link>
          </div>
        ) : nodeDatum.link ? (
          <Link to={"#"} className="pt-10">
            batafsil
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  </foreignObject>
);

export default function App() {
  const nodeSize = { x: 200, y: 300 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -100 };

  //   const [url, setUrl] = useState({
  //     loading: true,
  //     res1: [],
  //     res2: [],
  //     res3: [],
  //     res4: [],
  //     res5: [],
  //   });

  //   const fetchData = useCallback(async () => {
  //     const urls = [
  //       "rektorat/all",
  //       "Fak_data/all",
  //       "Kafedra_data/all",
  //       "bm_data/all",
  //       "markaz_data/all",
  //     ];

  //     try {
  //       const responses = await Promise.all(
  //         urls.map((url) => apiClientWithFetch.get(url))
  //       );

  //       setUrl((prevState) => ({
  //         ...prevState,
  //         loading: false,
  //         res1: responses[0]?.data?.map((item) => ({
  //           name: item[`title_${i18next.language}`],
  //           link: `/my_tkti/${item.title_uz}`,
  //           id: item?._id,
  //         })),
  //         res2: responses[1]?.data?.map((item) => ({
  //           name: item[`title_${i18next.language}`],
  //           link: `/qabul/${item.title_uz}`,
  //           id: item?._id,
  //         })),
  //         res3: responses[2]?.data?.map((item) => ({
  //           name: item[`title_${i18next.language}`],
  //           link: `/talabalar/${item.title_uz}`,
  //           id: item?._id,
  //         })),
  //         res4: responses[3]?.data?.map((item) => ({
  //           name: item[`title_${i18next.language}`],
  //           link: `/talim/${item.title_uz}`,
  //           id: item?._id,
  //         })),
  //         res5: responses[4]?.data?.map((item) => ({
  //           name: item[`title_${i18next.language}`],
  //           link: `/ilmiy_tad/${item.title_uz}`,
  //           id: item?._id,
  //         })),
  //       }));
  //     } catch (error) {
  //       // Handle error
  //     }
  //   }, []);

  //   useEffect(() => {
  //     fetchData();
  //   }, [fetchData]);
  return (
    <div className="text-center">
      <div className="w-full h-screen">
        <Tree
          data={myTreeData}
          nodeSize={nodeSize}
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
          }
          pathFunc="step"
          orientation="vertical"
        />
      </div>
    </div>
  );
}
