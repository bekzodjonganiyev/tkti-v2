import { useParams } from "react-router-dom";
import { LidershipEditForm } from "../../../components/form_comp2";

export const LidershipEdit = () => {
  const { id } = useParams();


  
  return (
    <div>
      <LidershipEditForm  hasSelect={false} url={`rektorat/${id}`}/>
    </div>
  );
};
