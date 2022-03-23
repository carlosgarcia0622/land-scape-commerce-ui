import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getProducts } from '../../utils/getProducts';
import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.style.css"

const ItemDetailContainer = ({show}) => {
    const [item, setItem] = useState({});
    const {id} = useParams()
    useEffect(() => {
        getProducts({id}).then(result => {
          console.log(result)
            setItem(result[0]);
        })
    }, [])
  return (
    <ItemDetail item={item} show={show}>Detail</ItemDetail>
  )
}

export default ItemDetailContainer