import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { NewsActions } from "./actions";
import { Link } from "react-router-dom";
import { NewsCard } from "../../components/card/NewsCard";

export { newsReducer} from "./reducer";

export const News = () => {
  const { t } = useTranslation();
  const { getData, getDataById, deleteData } = new NewsActions();

  const getNews = (state) => state.news;
  const { data, dataById, loading, error } = useSelector(getNews);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData()); 
  }, []);

  if (error) return <h1>{error}</h1>;
  return (
    <div className="container mx-auto w-[80%] ">
      
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <>
              <Link className="news__card mx-auto" key={item} to={`/${item._id}`}>
                <NewsCard
                  key={item._id}
                  id={item}
                  dateProps={item.date}
                  img={`https://backend.tkti.uz/${item.photo}`}
                  title={t("NewsCard.title", {
                    news_card_title: `${item?.[`title_${i18next.language}`]}`,
                  })}
                />
                
              </Link>
            </>
          ))}
        </div>
      )}
      {loading ? <h1>Loading...</h1> : <span></span>}
    </div>
  );
};
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import i18next from "i18next";
// import { useTranslation } from "react-i18next";
// import { NewsActions } from "./actions";
// import { Link } from "react-router-dom";
// import { NewsCard } from "../../components/card/NewsCard";

// export { newsReducer } from "./reducer";

// const News = () => {
//   const {t} = useTranslation()
//   const {news} = useContext(UsersContext)

//   useEffect(() => {
//     newsActions.getNews("news/all")
//   }, []);
//   return (
//     <div className="w-full">
//       <h1 className="container mx-auto w-[90%] my-10 font-semibold text-3xl">
//        {t("Header.actualNews")}
//       </h1>

//       <div className="container mx-auto w-[90%] flex justify-between gap-5 lg:flex-row flex-col">
//         <div className="lg:w-9/12 w-full flex flex-col gap-5">
//           {news
//             .filter((item) => item.category === "b")
//             .map((subItem) => (
//               <NewsCard
//                 key={subItem._id}
//                 id={subItem}
//                 video={false}
//                 inner={true}
//                 endpoint={subItem._id}
//                 category={subItem.category}
//                 dateProps={subItem.date}
//                 img={ imgPrefix+ subItem.photo}
//                 title={t("NewsCard.title", {news_card_title: `${subItem?.[`title_${i18next.language}`]}`})}
//               />
//             ))}
//         </div>
//         <div className="lg:w-3/12 w-full">
//           <RecommendContent inner={true} url={"news/all"} category={"b"} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;
