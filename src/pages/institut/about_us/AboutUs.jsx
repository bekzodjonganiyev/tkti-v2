import { useEffect, useContext, useState } from "react";
import { useSelector, useDispatch,  } from "react-redux";

import "./AboutUs.css"

import { fetchUsers } from "../../../redux/about_us";
import { Context as A } from "../../../context";

const AboutUs = () => {
  const { globalUrl } = useContext(A);

  const getDataFromStore = (store) => store.aboutUs;
  const { loading, users, error } = useSelector(getDataFromStore);

  const dsipatch = useDispatch();
  useEffect(() => {
    dsipatch(fetchUsers());
  }, []);

  const [hoverableData, setHoverableData] = useState(null);
  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;
  return (
    <div className="gridA">
      {users.map((item) => (
        <div
          key={item._id}
          className="item relative bg-cover bg-no-repeat bg-center  rounded-md transition-all"
          onMouseEnter={() => {
            setHoverableData({ ...item });
          }}
          onMouseLeave={() => {
            setHoverableData(null);
          }}
          style={{ backgroundImage: `url("${globalUrl + item.link[0]}")` }}
        >
          {/* {item.link.map((item) => (
            <img
              key={item}
              src={globalUrl + item}
              className="w-full h-full rounded-md bg-cover bg-center bg-no-repeat"
            />
          ))} */}
          {hoverableData && item._id === hoverableData._id && (
            <div className="absolute top-0 w-full h-full bg-blue-800 text-white opacity-75 text-center p-4 rounded-md flex justify-center items-center">
              <h1 className="text-md max-xl:text-xs font-semibold">
                {hoverableData.title_uz}
              </h1>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
