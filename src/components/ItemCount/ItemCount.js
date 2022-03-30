import './ItemCount.style.css'


export const ItemCount = ({stock=0, amount, setAmount, handleAdd}) =>{
    
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
        <button className="btn-add" onClick={handleAdd}>Agregar al carrito</button>
        </>
    )
}