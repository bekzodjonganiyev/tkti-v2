import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Education = () => {
  const navigate = useNavigate()
  return (
    <div>Education
      <button onClick={()=>navigate('/adminPanel/education/add')}>add</button>
    </div>
  )
}
