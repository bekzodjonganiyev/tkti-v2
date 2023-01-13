import React from 'react'

import "./FormHeader.css"

const FormHeader = ({title = "sahifa nomi", buttonName = "Button name"}) => {
  return (
    <div className='form-header' >
      <h1>{title}</h1> 
      <button>{buttonName}</button>
    </div>
  )
}

export default FormHeader