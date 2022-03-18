import React from 'react'
import { Modal, ModalBody, ModalTitle } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import "./ItemDetail.style.css"

const ItemDetail = ({item, show, hideDetails}) => {
  return (
    <Modal show={show}>
      <Modal.Header closeButton onClick={hideDetails}>
        <ModalTitle>Detalle del producto</ModalTitle>
      </Modal.Header>
      <img src={item.pictureUrl} alt={item.title} />
      <ModalBody>
        <h4>{item.title}</h4>
      <p>{`Precio: $${item.price}`}</p>
      <p>{item.description}</p>
      </ModalBody>
    <ItemCount stock={5} initial={1} onAdd={(amount)=>{}}></ItemCount>
  </Modal>
  )
}

export default ItemDetail