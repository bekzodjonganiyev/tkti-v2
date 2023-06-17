import {Banner} from "../../components/banner";

import { News } from "../news";

import { UsefulLinks } from "../usefulLinks";
import { Statistics } from "../statistics";
import { Sillabus } from "../../assets/sillabus";

export const Home = () => {
  return (
    <div>
      <Banner />
      <Sillabus />
      <News home={true}/>
      <UsefulLinks />
      <Statistics />
    </div>
  );
};
