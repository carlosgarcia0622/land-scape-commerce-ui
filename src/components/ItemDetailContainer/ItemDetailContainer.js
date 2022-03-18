import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.style.css"

const ItemDetailContainer = ({show, hideDetails}) => {
    const [item, setItem] = useState({});
    const product =         {
        id: 0,
        title: "Finca",
        price: 300000,
        description:
          "Casa con jardín, doble garaje y dos pisos en excelente ubicación",
        pictureUrl:
      "https://image.shutterstock.com/image-photo/houses-suburb-summer-north-america-600w-1514333600.jpg"        
    }
    const getItem = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(product)
        }, 2000)
    })

    useEffect(() => {
        getItem.then(result => {
            setItem(result);
        })
    }, [])
  return (
    <ItemDetail item={item} show={show} hideDetails={hideDetails}>Detail</ItemDetail>
  )
}

export default ItemDetailContainer