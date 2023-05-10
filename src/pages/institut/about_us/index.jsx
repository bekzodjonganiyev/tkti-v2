import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AboutUsActions } from "./actions";
import { AboutUsCreate } from "./create";
import { AboutUsUpdate } from "./update";

export { aboutUsReducer } from "./reducer";
export const AboutUs = () => {
  const { getData, getDataById, deleteData } = new AboutUsActions();

  const getAboutUs = (state) => state.aboutUs;
  const { data, dataById, loading, error } = useSelector(getAboutUs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (error) return <h1>{error}</h1>;
  return (
    <div>
      <h1 className="text-3xl">ABOUT US</h1>
      <AboutUsCreate />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data?.map((item) => (
          <button
            className="bg-indigo-400 p-2 rounded mx-2"
            onClick={() => dispatch(getDataById(item._id))}  
            onDoubleClick={() => dispatch(deleteData(item._id))}
            draggable={true}
          >
            {item.title_uz}
          </button>
        ))
      )}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <AboutUsCreate defaultValues={dataById} />
      )}
    </div>
  );
};
