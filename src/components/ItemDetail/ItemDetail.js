import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount'

const  ItemDetail = ({id, pictureUrl, title, price, description, stock}) => {
  const [amount, setAmount] = useState(1);
  const { addItem, isInCart } = useContext(CartContext);

  const handleAdd = ()=>{
    const itemToCart = {
      id,
      title,
      price,
      description,
      pictureUrl,
      amount
  }
  addItem(itemToCart);
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
                          stock={stock} 
                          initial={1} 
                          amount={amount}
                          setAmount={setAmount}
                          handleAdd={handleAdd}
                          ></ItemCount>
                          {
                            isInCart(id) && <Link to="/cart">
                                <button style={{marginLeft: '10px'}} className="btn-add" >Terminar mi compra</button> 
                              </Link>
                          }


                        
                    </div>
                </div>
  )
}

export default ItemDetail