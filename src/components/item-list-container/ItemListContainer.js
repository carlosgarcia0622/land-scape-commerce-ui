import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList";
import "./itemListContainer.styles.css"
export const ItemListContainer = () =>{
    const [items, setItems] = useState([]);
    const products =  [
        {
          id: 0,
          title: "Casa finca",
          price: 300000,
          description:
            "Casa finca con jardín, doble garaje y dos pisos en excelente ubicación",
          pictureUrl:
        "https://image.shutterstock.com/image-photo/houses-suburb-summer-north-america-600w-1514333600.jpg"        },
        {
          id: 1,
          title: "Casa",
          price: 500000,
          description:
            "Casa  con jardín y doble garaje de un piso en unidad cerrada",
          pictureUrl:
            "https://image.shutterstock.com/image-photo/front-elevation-facade-new-modern-600w-1018259074.jpg",
        },
        {
          id: 2,
          title: "FINCA",
          price: 1200000,
          description:
            "Finca con piscina, dos pisos, dos balcones, en unidad cerrada",
          pictureUrl:
            "https://image.shutterstock.com/image-illustration/luxurious-villa-swimming-pool-dusk-600w-361283462.jpg",
        },
        {
          id: 3,
          title: "FINCA",
          price: 12000000,
          description:
            "Finca de amplio espacio ideal para una familia numerosa",
          pictureUrl:
            "https://image.shutterstock.com/image-photo/exterior-real-estate-photography-utah-600w-1919931614.jpg",
        },
      ];
    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })

    useEffect(() => {
        getItems.then(result =>{
            setItems(result)
        })
    }, []);

    const styles = {
      margin: '0 auto',
      maxWidth: '1200px',
      
  }
  
    return(
      <div className="row" style={styles}>
             <ItemList className="ItemList" items={items}/>
            </div>
    )
}