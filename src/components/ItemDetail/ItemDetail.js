import React from 'react'
import { useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

const  ItemDetail = ({pictureUrl, title, price, description}) => {
  const [amount, setAmount] = useState(1);
  const handleAdd = ()=>{
    const itemToCart = {
      title,
      price,
      description,
      pictureUrl,
      amount
  }
  console.log(itemToCart)
  }
  return (
    <div className="container">
                    <div className="card-image">
                        <img src={pictureUrl} alt={title} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className="card-right">
                        <h5 className="item-title">{title}</h5>
                        <p className="item-price"><b>${price}.00</b></p>
                        <p className="item-desc">{description}</p>
                        <ItemCount 
                          stock={5} 
                          initial={1} 
                          amount={amount}
                          setAmount={setAmount}
                          handleAdd={handleAdd}
                          ></ItemCount>
                    </div>
                </div>
  )
}

export default ItemDetail