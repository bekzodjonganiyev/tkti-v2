import { useEffect, useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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
    <div className="flex flex-wrap gap-10">
      {users.map((item) => (
        <div
          key={item._id}
          className="w-[400px] h-96 relative bg-cover bg-no-repeat bg-center"
          onMouseEnter={() => {
            setHoverableData({ ...item });
          }}
          onMouseLeave={() => {
            setHoverableData(null);
          }}
          style={{backgroundImage: `url("${globalUrl + item.link[0]}")`}}
        >
          {/* {item.link.map((item) => (
            <img key={item} src={globalUrl + item} />
          ))} */}
          {hoverableData && item._id === hoverableData._id && (
            <div className="absolute top-0 w-full h-full bg-red-800 text-white opacity-75 text-center p-4">
              <h1 className="text-lg font-bold">{hoverableData.title_uz}</h1>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
