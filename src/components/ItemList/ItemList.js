import { Item } from "../Item/Item"

export const ItemList = ({items= []})=>{
    return(
        <div className="image-carousel style2 flexslider" data-animation="slide" data-item-width="270" data-item-margin="30">
        <ul class="slides image-box hotel listing-style1 list">
            {items.map(item => <li className="listItem" key={item.id}>
                <Item 
                    id={item.id} 
                    title={item.title} 
                    description={item.description} 
                    price={item.price} 
                    pictureUrl={item.pictureUrl}>
                </Item>
            </li>)}
        </ul>
        </div>
    )
}