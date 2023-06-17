import { useParams } from "react-router-dom";

import { EditForm2 } from "../../../components/form_comp2";
export const DepartmentEdit = () => {
  const { id } = useParams();
  return (
    <EditForm2
      hasSelect={true}
      url={`bm_data/${id}`}
      selectUrl={"rektorat/all"}
      selectId={"rektorat"}
      bolim={true}
    />
  );
};
