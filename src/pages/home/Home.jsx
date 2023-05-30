import Banner from "../../components/banner";

import { NewsAll } from "../news/NewsAll";
import { ElonAll } from "../announcement/ElonAll";

import { UsefulLinks } from "../usefulLinks";
import { Statistics } from "../statistics";
import { Sillabus } from "../../assets/sillabus";

export const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      <Sillabus />
      <NewsAll />
      <ElonAll />
      <UsefulLinks />
      <Statistics />
    </div>
  );
};
