import { ItemCount } from "../ItemCount/ItemCount"
import "./itemListContainer.styles.css"
export const ItemListContainer = ({greeting}) =>{
    return(
        <>
            <h1 className="greeting">{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={(amount)=>{console.log(`Productos agregados: ${amount}`)}}></ItemCount>
        </>
    )
}