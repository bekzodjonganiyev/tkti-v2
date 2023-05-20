import Banner from "../../components/banner";



import { News } from "../news";
import {Announcement} from '../announcement';
import { VideoNews } from "../videoNews";
import {UsefulLinks} from "../usefulLinks";
import {Statistics} from "../statistics";

export const Home = () => {
  return (
    <div>
    
      <Banner />
      <News />
      <Announcement />
      <VideoNews />
      <UsefulLinks/>
      <Statistics />

    </div>
  );
};
