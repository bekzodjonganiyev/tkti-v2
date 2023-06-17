import { AddForm2 } from "../../../components";

export const DepartmentCreate = () => {
  return (
    <AddForm2
      hasSelect={true}
      url={"bm_data/add"}
      selectUrl={"rektorat/all"}
      bolim={true}
    />
  )
}
