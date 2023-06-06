import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Accordion } from "flowbite-react";
import i18next from "i18next";

import "./style.css";

import { Loader } from "../loader/Loader";

import { UniversalComponentActions } from "./action";
import { useAppContext } from "../../context/app.context";

import './style.css'

export { genericComReducer } from "./reducer";
export const UniversalComponent = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const genericCom = (state) => state.genericCom;
  const { data, loading } = useSelector(genericCom);
  const { getData } = new UniversalComponentActions();

  // route da mongodb ning id sini olib tashlashlandi va id context orqali olib kelindi
  const { idForFetch } = useAppContext();

  const { page } = useParams();

  useEffect(() => {
    dispatch(getData(`${page}/${idForFetch}`));
  }, [page, idForFetch]);

  if (loading)
    return (
      <Loader />
    );

  return (
    <div className="container mx-auto max-md:px-5 py-10 uni-comp-wrapper">
      {page.split("_")[1] === "child" ? (
        <div>
          <h1 className="text-3xl font-bold mb-5">
            {data[`title_${i18next.language}`]}
          </h1>
          <div
            className="uni-comp-body mb-10"
            dangerouslySetInnerHTML={{
              __html: t("MoreDetails.body", {
                more_details_body: `${data[`body_${i18next.language}`]}`,
              }),
            }}
          />
          {data?.faq?.length > 0 && (
            <Accordion>
              {JSON.parse(data?.faq)?.map((item) => (
                <Accordion.Panel key={item._id}>
                  <Accordion.Title>
                    {item[`question_${i18next.language}`]}
                  </Accordion.Title>
                  <Accordion.Content>
                    {item[`answer_${i18next.language}`]}
                  </Accordion.Content>
                </Accordion.Panel>
              ))}
            </Accordion>
          )}
        </div>
      ) : (
        data?.child?.map((item) => (
          <div  key={item._id}>
            <h1 className="text-3xl font-bold mb-5">
              {item[`title_${i18next.language}`]}
            </h1>
            <div
              className="uni-comp-body mb-10"
              dangerouslySetInnerHTML={{
                __html: t("MoreDetails.body", {
                  more_details_body: `${item[`body_${i18next.language}`]}`,
                }),
              }}
            />
            {item?.faq?.length > 0 && (
              <Accordion>
                {JSON.parse(item?.faq)?.map((subItem) => (
                  <Accordion.Panel key={item._id}>
                    <Accordion.Title>
                      {subItem[`question_${i18next.language}`]}
                    </Accordion.Title>
                    <Accordion.Content>
                      {subItem[`answer_${i18next.language}`]}
                    </Accordion.Content>
                  </Accordion.Panel>
                ))}
              </Accordion>
            )}
          </div>
        ))
      )}
    </div>
  );
};
