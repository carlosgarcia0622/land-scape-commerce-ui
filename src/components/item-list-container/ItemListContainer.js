import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList";
import "./itemListContainer.styles.css"
import { useParams } from "react-router-dom";
import { getProducts } from "../../utils/getProducts";
export const ItemListContainer = () =>{
    const [items, setItems] = useState([]);
    const {categoryId} = useParams()
    useEffect(() => {
        getProducts({categoryId}).then(result =>{
            setItems(result)
        })
    }, [categoryId]);

    const styles = {
      margin: '0 auto',
      maxWidth: '1200px',
      
  }
  
    return(
      <main className="row" style={styles}>
             <ItemList className="ItemList" items={items}/>
            </main>
    )
}