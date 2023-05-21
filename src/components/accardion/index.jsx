import React from "react";
import { Accordion } from "flowbite-react";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

export const Accardion = ({ title, body }) => {
  const { t } = useTranslation();
  return (
    <div className="container w-[80%] mx-auto ">
      <Accardion>
        <Accordion.Panel>
          <Accordion.Title>
            {t("NewsCard.title", { news_card_title: title })}
          </Accordion.Title>
          <Accordion.Content>
            <div
              className="mb-2 text-gray-500 dark:text-gray-400"
              dangerouslySetInnerHTML={{
                __html: t("NewsCard.body", {
                  news_card_body: body,
                }),
              }}
            />
          </Accordion.Content>
        </Accordion.Panel>
      </Accardion>
    </div>
  );
};
