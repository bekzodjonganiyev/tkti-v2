import React from 'react'
import EditNews from '../edit_new/EditNews'

import "./ModalWindow.css"

const ModalWindow = ({id, url, name, closeModal, keys, isNews}) => {
  return (
    <div className='modal-window'>
      <div className='modal-inner'>
        <div className='modal-header'>
          <h1><span style={{color: "red"}}>{name}</span> ni tahrirlang</h1>
          <button onClick={() => closeModal()} >
            <i className="fa fa-x"></i>
          </button>
        </div>
        {
          isNews ? <EditNews id={id} url={url} names={keys}/> : ""
        }
      </div>
    </div>
  )
}

export default ModalWindow