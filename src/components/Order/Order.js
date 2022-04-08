import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { createOrder } from '../../firebase/order/createOrder'
import { Navigate } from "react-router-dom"
import Button from '@restart/ui/esm/Button'


const Order = () => {

    const {cart, clear, totalCart} = useContext(CartContext)
    
    const [orderId, setOrderId] = useState(null)

    const [user, setValues] = useState({
        name: '',
        phone: '',
        email: '',
    })

    const handleUpdateUserInfo = (e) => {
        setValues({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(validateUserInfo(user)) createOrder(user, cart, totalCart,setOrderId, clear);
    }

    const validateUserInfo = ({name, phone, email}) =>{
        if (name.length < 5) {
            alert("Ingrese un nombre real");
            return false;
        }
        if (!emailVlidation(email)) {
            alert("El email no cumple el formato");
            return false;
        }
        if (phone.length < 8) {
            alert("El teléfono es inválido")
            return false
        }
    
        return true
    }

    const emailVlidation = (email) => {
        return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    }

    const ThankYou = ({order}) => {

        return <div className="container my-5">
                    <h1>Gracias por tu compra!</h1>
                    <hr/>
                    <h2>Guarda el id de tu compra para preguntas o reclamos: {order}</h2>
                    <Link to="/"><Button className="btn-add">Volver</Button></Link>
                </div>
    }

    if (orderId) {
        return <ThankYou order={orderId}/>
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

  return (
    <div className="container my-5">
    <h2>Crear Orden</h2>
    <hr/>

    <form onSubmit={handleSubmit}>
        <input
            className="form-control my-2"
            type='text'
            placeholder="Nombre"
            value={user.name}
            onChange={handleUpdateUserInfo}
            name='name'
        />
        <input
            className="form-control my-2"
            type='email'
            placeholder="Email"
            value={user.email}
            onChange={handleUpdateUserInfo}
            name='email'
        />
        <input
            className="form-control my-2"
            type='tel'
            placeholder="Celular"
            value={user.phone}
            onChange={handleUpdateUserInfo}
            name='phone'
        />

        <button type="submit" className="btn-add">
            Enviar
        </button>
    </form>
</div>
  )
}

export default Order