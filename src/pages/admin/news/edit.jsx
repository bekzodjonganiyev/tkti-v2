import { useParams } from "react-router-dom";
import { NewsEditForm } from "../../../components/form_comp2";

export const NewsEdit = () => {
  const { id } = useParams();


  
  return (
    <div>
      <NewsEditForm  hasSelect={false} url={`news/all?category=yangilik`} id={id}/>
    </div>
  );
};
