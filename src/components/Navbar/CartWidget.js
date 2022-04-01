import logo from '../../../src/shopping-cart.svg';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

export const CartWidget = () =>{
    const { quantityCart, cart } = useContext(CartContext)

    return (
        <Link to="/cart" className="cart-widget">
            <img src={logo} className="Cart-logo" alt="logo" /> 
            {cart.length > 0 && <span >{quantityCart()}</span>}
        </Link>
    )
}
