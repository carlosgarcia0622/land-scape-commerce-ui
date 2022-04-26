import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList";
import "./itemListContainer.styles.css"
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config"
import { collection, getDocs, query, where, } from "firebase/firestore"
export const ItemListContainer = () =>{
    const [items, setItems] = useState([]);
    const {categoryId} = useParams()

    useEffect( ()=>{
        
          const itemsRef = collection(db, 'items');
          const q = categoryId ? 
            query(itemsRef, where("categoryId", "==", categoryId)) 
            : itemsRef;
          getDocs(q)
            .then((response) => {
                setItems( response.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
          

  
  
      },[categoryId])

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