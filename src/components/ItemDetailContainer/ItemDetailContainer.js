import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.style.css"
import { db } from '../../firebase/config';
import { doc, getDoc} from "firebase/firestore"

const ItemDetailContainer = ({show}) => {
    const [item, setItem] = useState({});
    const {id} = useParams()
    useEffect(()=>{
      
      const docRef = doc(db, 'items', id);
      getDoc(docRef)
      .then((doc) => {
          setItem({id: doc.id, ...doc.data()})
      })
    


    },[])
  return (
    <ItemDetail {...item} show={show}>Detail</ItemDetail>
  )
}

export default ItemDetailContainer