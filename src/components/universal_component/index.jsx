import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { UniversalComponentActions } from "./action";

export { genericComReducer } from "./reducer";
export const UniversalComponent = () => {
  const dispatch = useDispatch();

  const { getData } = new UniversalComponentActions();
  const genericCom = (state) => state.genericCom;
  const { data, loading } = useSelector(genericCom);

  const path = useParams();

  console.log(path)
  useEffect(() => {
    dispatch(getData(`${path?.page}/${path.id}`));
  }, [path?.page, path?.id]);

  return (
    <div>
      <ul className="flex flex-col">
        {loading ? "LOADING" : <pre>{JSON.stringify(data, null, 2)}</pre>}
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
