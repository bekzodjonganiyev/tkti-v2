import React from 'react'

import "./Button.css"

const Button = ({name = "Vazifa nomi", onClick}) => {
  return (
    <button type='submit' className="submit-btn" onClick={onClick}>{name}</button>
  )
}

export default Button