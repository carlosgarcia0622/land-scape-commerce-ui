import { useState } from 'react'
import './ItemCount.style.css'


export const ItemCount = ({stock, initial, onAdd}) =>{
    const [amount, setAmount] = useState(initial);
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
            <span onClick={subtrac} className="minus bg-dark">-</span>
            <input type="number" className="count" name="qty" value={amount}/>
            <span onClick={add} className="plus bg-dark">+</span>
        </div>
        <button className="btn-add" onClick={stock? onAdd(amount): null}>Agregar al carrito</button>
        </>
    )
}