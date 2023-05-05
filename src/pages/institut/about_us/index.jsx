export { aboutUsReducer } from "./reducer";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AboutUsActions } from "./actions";
const { getData } = new AboutUsActions();

export const AboutUs = () => {
  const getState = (state) => state.aboutUs;
  const { data, loading, error } = useSelector(getState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);
  
  console.log(data, loading);

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <div>
      <h1 className="text-3xl">ABOUT US</h1>
    </div>
  );
};
