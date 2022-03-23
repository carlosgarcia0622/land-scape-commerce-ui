import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

function ItemDetail({item}) {
  return (
    <div className="container">
                    <div className="card-image">
                        <img src={item.pictureUrl} alt={item.title} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className="card-right">
                        <h5 className="item-title">{item.title}</h5>
                        <p className="item-price"><b>${item.price}.00</b></p>
                        <p className="item-desc">{item.description}</p>
                        <ItemCount stock={5} initial={1} onAdd={(amount)=>{}}></ItemCount>
                    </div>
                </div>
  )
}

export default ItemDetail