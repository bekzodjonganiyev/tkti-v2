import { EmployeesAddForm } from "../../../components/form_comp2";

export const EmployeesCreate = () => {
  return (
    <EmployeesAddForm
      hasSelect={false}
      url={"kafedra_hodim/add"}
    />
  )
}
