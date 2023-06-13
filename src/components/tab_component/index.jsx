import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from "flowbite-react";
import i18next from "i18next";

import { Loader } from "../loader/Loader";
import { XodimCard } from "../xodim_card/XodimCard";

import { getById } from "./action";
import { baseURL } from "../../services/http";
import { RectorateItem } from "../rectorate_item";

export const TabComponent = () => {
  const dispatch = useDispatch();
  const selectorFunc = (state) => state.tabComp;
  const { dataById, loading, error } = useSelector(selectorFunc);

  const params = useParams();
  const location = useLocation();
  console.log(params, location);

  // TODO - shu qilgan ishimni react qanday qabul qiladi, hooklardan foydalanishim kerakmidi?
  const [url, setUrl] = useState("");
  const [hasPage, setHasPage] = useState(true);

  const initialtabItems = [
    {
      title: "Haqida",
      content: dataById[`haqida_${i18next.language}`],
    },
    {
      title: "Maqsad",
      content: dataById[`maqsad_${i18next.language}`],
    },
    {
      title: "Xodimlar",
      content: dataById?.hodimlar?.map((item) => item),
    },
    {
      title: "Faoliyat",
      content: dataById?.faoliyatlar?.map((item) => item),
    },
  ];

  const tabItems =
    params.element !== "faculty"
      ? initialtabItems
      : [
          ...initialtabItems,
          {
            title: "Kafedralar",
            content: dataById?.kafedralar?.map((item) => ({
              name: item[`title_${i18next.language}`],
              link: `/institute/structute/kafedra/${
                item[`title_${i18next.language}`]
              }/${item._id}`,
            })),
          },
        ];

  useEffect(() => {
    if (params.element === "faculty") {
      setUrl("Fak_data");
      setHasPage(true);
    } else if (params.element === "kafedra") {
      setUrl("Kafedra_data");
      setHasPage(true);
    } else if (params.element === "department_and_center") {
      setUrl("bm_data");
      setHasPage(true);
    } else {
      setUrl(undefined);
      setHasPage(false);
    }
  }, [params.element]);
  useEffect(() => {
    // TODO - backenddan getById ga o'xshagan api chiqarish kerak, name bo'yicha data kelsin
    // id bo'yicha get qilish atmen bo'ladi
    dispatch(getById(`${url}/${params.id}`));
  }, [url, params?.id]);

  console.log(url);

  if (loading) return <Loader />;

  if (params.element === "rectorate") return <RectorateItem />;

  return (
    <div className="container mx-auto py-5">
      <h1 className="text-xl font-semibold mb-5">{dataById[`title_${i18next.language}`]}</h1>
      <Tabs.Group
        aria-label="Tabs with icons"
        style="underline"
      >
        {tabItems.map((item) => (
          <Tabs.Item title={item.title} className="">
            {item.title === "Xodimlar" ? (
              item.content?.map((employerItem) => (
                <XodimCard
                  key={employerItem._id}
                  img={baseURL + employerItem.photo}
                  job={employerItem[`job_${i18next.language}`]}
                  name={employerItem[`name_${i18next.language}`]}
                  email={employerItem.email}
                  tel={employerItem.tell}
                />
              ))
            ) : item.title === "Faoliyat" ? (
              "Faoliyat"
            ) : item.title === "Kafedralar" ? (
              <div className="flex flex-col gap-2">
                {item.content?.map((kafedraItem) => (
                  <Link to={kafedraItem.link}>{kafedraItem.name}</Link>
                ))}
              </div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            )}
          </Tabs.Item>
        ))}
      </Tabs.Group>
    </div>
  );
};

export { tabCompReducer } from "./reducer";