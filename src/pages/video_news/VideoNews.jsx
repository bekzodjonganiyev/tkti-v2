// import { useContext, useEffect } from "react";
// import i18next from "i18next";
// import { useTranslation } from "react-i18next";
// import { useSelector, useDispatch } from "react-redux";
// import { NewsCard } from "../../components/card/NewsCard";

// import {RecommendContent} from '../../components/recommend_content/RecommendContent'
// import { imgPrefix } from "./actions";
// import { newsReducer } from "./reducer";


// const VideoNews = () => {
//   // const generateArray = (items) => [...Array.from(Array(items).keys())];
//   const {t} = useTranslation()
//   const { getData, getDataById } = new NewsActions();
//   const getNews = (state) => state.news;
//   const { data, dataById, loading, error } = useSelector(getNews);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getData()); 
//   }, []);

//   if (error) return <h1>{error}</h1>;
 
//   return (
//     <div className="w-full">
//       <h1 className="container mx-auto w-[90%] my-10 font-semibold text-3xl">
//       {t("Header.videoNews")}
//       </h1>

//       <div className="container mx-auto w-[90%] flex justify-between gap-5 lg:flex-row flex-col">
//         <div className="lg:w-9/12 w-full flex flex-col gap-5">
//           {news
//             .filter((item) => item.category === "d")
//             .map((subItem) => (
//               <NewsCard
//                 key={subItem._id}
//                 id={subItem}
//                 video={true}
//                 inner={true}
//                 endpoint={subItem._id}
//                 category={subItem.category}
//                 dateProps={subItem.date}
//                 img={imgPrefix + subItem.photo}
//                 title={t("NewsCard.title", {news_card_title: `${subItem?.[`title_${i18next.language}`]}`})}
//               />
//             ))}
//         </div>
//         <div className="lg:w-3/12 w-full">
//           <RecommendContent inner={true} url={"news/all"} category={"d"} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoNews;
