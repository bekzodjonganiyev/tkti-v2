import React from 'react'
import "./Dashboard.css"
import FormHeader from '../../../components/admin/form_header/FormHeader'
import dashboardImg from "../../../files/dashboard.png"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <FormHeader title='Dashboard' buttonName='Barcha yuklangan fayllar' />
      <img src={dashboardImg} alt="" width={"100%"} />
    </div>
  )
}

export default Dashboard