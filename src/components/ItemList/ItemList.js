import { Item } from "../Item/Item"
import "./ItemList.style.css"


export const ItemList = ({items= []})=>{
    return(
        
        <ul className ="itemList">
            {items.map(item => <li className="listItem" key={item.id}>
                <Item 
                    id={item.id} 
                    title={item.title} 
                    price={item.price} 
                    pictureUrl={item.pictureUrl}>
                </Item>
            </li>)}
        </ul>
       
    )
}