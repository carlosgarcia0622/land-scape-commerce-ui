import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'

const Cart = () => {
  const {cart, totalCart, deleteItem} = useContext(CartContext);
  if(cart.length === 0) {
    return <div className="container my-4">
    <h2>Tu carrito está vacío</h2>
    <Link to="/" ><button className="btn-add">Volver</button></Link>
</div>
  }
  return (
    <>     
    <div className="container my-4">
        <h2>Tu compra</h2>
        <hr/>

        {
            cart.map((item) => (
                <div className="item-container" key={item.id}>
                  <span className="cart-image">
                    <img src={item.pictureUrl} alt={item.title}/>
                  </span>
                  <>
                    <h4>{item.title}</h4>
                    <p>Cantidad: {item.amount}</p>
                    <p>Precio: ${item.amount * item.price}</p>
                    <button className="btn btn-danger" onClick={() => deleteItem(item.id)}>
                        <BsFillTrashFill/>
                    </button>
                  </>
                </div>
            ))
        }

        <hr/>
        <h2>Total: ${totalCart()}</h2>

        <div className="my-2">
            <Link to="/checkout"><button className="btn-add">Terminar mi compra </button></Link>
        </div>
    </div>

</>
  )
}

export default Cart