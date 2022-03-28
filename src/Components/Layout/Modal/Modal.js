//libraries
import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'

//Styles
import modalCss from './ModalCss'

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

export default function SimpleModal({ open, handleClose, body }) {
  const classes = modalCss()
  const [modalStyle] = useState(getModalStyle)

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          {body}
        </div>
      </Modal>
    </div>
  )
}
