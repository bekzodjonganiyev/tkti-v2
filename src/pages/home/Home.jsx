import Banner from "../../components/banner";



import { NewsAll } from "../news/NewsAll";
import {Announcement} from '../announcement';
import { VideoNews } from "../videoNews";
import {UsefulLinks} from "../usefulLinks";
import {Statistics} from "../statistics";

export const Home = () => {
  return (
    <div>
    
      <Banner />
      <NewsAll myKey={"news"} />
      <Announcement />
      <VideoNews />
      <UsefulLinks/>
      <Statistics />

    </div>
  );
};
