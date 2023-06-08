import Banner from "../../components/banner";

import { News } from "../news";

import { UsefulLinks } from "../usefulLinks";
import { Statistics } from "../statistics";
import { Sillabus } from "../../assets/sillabus";
import { Gallary } from "../../components/gallary/Gallary";

export const Home = () => {
  return (
    <div>
      <Banner />
      <Sillabus />
      <News />
      <UsefulLinks />
      <Statistics />
    </div>
  );
};
