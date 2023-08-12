import { useParams } from "react-router-dom"

import { EditForm2 } from "../../../components/form_comp2"

export const KafedraEdit = () => {
  const { id } = useParams()
  return (
    <EditForm2  hasSelect={true} url={`Kafedra_data/${id}`} selectUrl={"Fak_data/all"} bolim={false} ifUpdateSuccessToWhere={"kafedra"}/>
  )
}
