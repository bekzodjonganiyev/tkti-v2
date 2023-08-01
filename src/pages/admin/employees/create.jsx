import { EmployeesAddForm } from "../../../components/form_comp2";

export const EmployeesCreate = () => {
  return (
    <EmployeesAddForm
      hasSelect={true}
      url={"kafedra_hodim/add"}
      selectUrl={"Kafedra_data/all"}
      bolim={false}
    />
  )
}
