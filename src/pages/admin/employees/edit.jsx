import { useParams } from "react-router-dom"
import { EmployeesEditForm } from "../../../components/form_comp2";

export const EmployeesEdit = () => {
  const { id } = useParams()

  return (
    <EmployeesEditForm  hasSelect={false} url={`kafedra_hodim/${id}`}/>
  )
}

