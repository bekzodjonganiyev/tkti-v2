import Banner from "../../components/banner";



import { NewsAll } from "../news/NewsAll";
import { ElonAll } from "../announcement/ElonAll";
import {Announcement} from '../announcement';
import { VideoNews } from "../videoNews";
import {UsefulLinks} from "../usefulLinks";
import {Statistics} from "../statistics";
import { Sillabus } from "../../assets/sillabus";

export const Home = () => {
  return (
    <div>
    
      <Banner />
      <Sillabus />
      <NewsAll myKey={"news"} />
      <ElonAll myKey={"elon"}/>
      <VideoNews />
      <UsefulLinks/>
      <Statistics />

    </div>
  );
};
