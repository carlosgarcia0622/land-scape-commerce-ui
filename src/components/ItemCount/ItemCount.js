import { Link } from 'react-router-dom';
import './ItemCount.style.css'


export const ItemCount = ({stock, amount, setAmount, handleAdd}) =>{
    
    const add =() =>{
        if(amount < stock)setAmount(amount + 1);
    }

    const subtrac =() =>{
        if(amount > 0){
            setAmount(amount - 1);
        }
    }
    return(
        <>
        <div className="qty mt-5">
            <button className="btn btn-outline-secondary" onClick={subtrac} >-</button>
            <input type="number" className="count" name="qty" value={amount}/>
            <button className="btn btn-outline-secondary" onClick={add} >+</button>
        </div>
        <Link to="/cart">
            <button className="btn-add" onClick={handleAdd}>Agregar al carrito</button>
        </Link>
        </>
    )
}